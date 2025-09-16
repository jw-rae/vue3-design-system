<template>
  <div class="timepicker-root">
  <label v-if="props.label" :for="props.id" class="timepicker-label">{{ props.label }}</label>
  <div class="timepicker-input-wrapper" ref="inputWrapperRef">
      <div class="timepicker-input-row">
        <input
          :id="props.id"
          :value="displayValue"
          :placeholder="props.mode === 'chronometer' ? 'HH:mm:ss' : (ampmMode ? 'hh:mm AM' : 'HH:mm')"
          :disabled="props.disabled"
          class="timepicker-input"
          @focus="showPopup = true"
          @click="showPopup = true"
          @input="onInputText"
          :aria-label="props.label"
          autocomplete="off"
        />
      </div>
      <teleport to="body">
  <div v-if="showPopup && !props.disabled" class="timepicker-popup" ref="popupRef" @mousedown.prevent :style="popupPositionStyle">
          <div class="timepicker-popup-content-fixed">
            <div class="timepicker-fields">
              <div class="timepicker-selector">
                <button type="button" class="timepicker-arrow" @click="inc('hour')">▲</button>
                <div class="timepicker-value">{{ displayHour }}</div>
                <button type="button" class="timepicker-arrow" @click="dec('hour')">▼</button>
              </div>
              <span>:</span>
              <div class="timepicker-selector">
                <button type="button" class="timepicker-arrow" @click="inc('minute')">▲</button>
                <div class="timepicker-value">{{ String(minute).padStart(2, '0') }}</div>
                <button type="button" class="timepicker-arrow" @click="dec('minute')">▼</button>
              </div>
              <span v-if="props.mode === 'chronometer'">:</span>
              <div v-if="props.mode === 'chronometer'" class="timepicker-selector">
                <button type="button" class="timepicker-arrow" @click="inc('second')">▲</button>
                <div class="timepicker-value">{{ String(second).padStart(2, '0') }}</div>
                <button type="button" class="timepicker-arrow" @click="dec('second')">▼</button>
              </div>
              <button v-if="ampmMode" class="ampm-toggle-popup" type="button" @click="toggleAmPm">
                {{ ampmDisplay }}
              </button>
            </div>
            <div v-if="props.mode === 'chronometer'" class="timepicker-chrono-controls">
              <button @click="startChrono" type="button">Start</button>
              <button @click="stopChrono" type="button">Stop</button>
              <button @click="resetChrono" type="button">Reset</button>
            </div>
          </div>
        </div>
      </teleport>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  modelValue: { type: String, required: true },
  min: { type: String, default: '' },
  max: { type: String, default: '' },
  label: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  id: { type: String, default: () => `timepicker-${Math.random().toString(36).slice(2, 10)}` },
  mode: { type: String, default: 'time' }, // 'time' or 'chronometer'
  twelveHour: { type: Boolean, default: false }, // 12-hour mode if true
})

const emit = defineEmits(['update:modelValue', 'change'])

// Reactive state
const hour = ref(0)
const minute = ref(0)
const second = ref(0)
const showPopup = ref(false)
const popupPositionStyle = ref<Record<string, string | number>>({})
const inputWrapperRef = ref<HTMLElement | null>(null)
const popupRef = ref<HTMLElement | null>(null)

// Computed properties
const ampmMode = computed(() => props.twelveHour && props.mode === 'time')
const hourMax = computed(() => props.mode === 'chronometer' ? 999 : (ampmMode.value ? 12 : 23))
const ampmDisplay = computed(() => hour.value >= 12 ? 'PM' : 'AM')
const displayHour = computed(() => {
  if (!ampmMode.value) return String(hour.value).padStart(2, '0')
  let h = hour.value % 12
  if (h === 0) h = 12
  return String(h).padStart(2, '0')
})

const displayValue = computed(() => {
  if (props.mode === 'chronometer') {
    return `${String(hour.value).padStart(2, '0')}:${String(minute.value).padStart(2, '0')}:${String(second.value).padStart(2, '0')}`
  } else if (ampmMode.value) {
    let h = hour.value % 12
    if (h === 0) h = 12
    return `${String(h).padStart(2, '0')}:${String(minute.value).padStart(2, '0')} ${ampmDisplay.value}`
  } else {
    return `${String(hour.value).padStart(2, '0')}:${String(minute.value).padStart(2, '0')}`
  }
})

// Methods
function inc(type: 'hour' | 'minute' | 'second') {
  if (type === 'hour') {
    if (hour.value < hourMax.value) hour.value++;
    else hour.value = 0;
  } else if (type === 'minute') {
    if (minute.value < 59) minute.value++;
    else minute.value = 0;
  } else if (type === 'second') {
    if (second.value < 59) second.value++;
    else second.value = 0;
  }
  updateModelValue()
}

function dec(type: 'hour' | 'minute' | 'second') {
  if (type === 'hour') {
    if (hour.value > 0) hour.value--;
    else hour.value = hourMax.value;
  } else if (type === 'minute') {
    if (minute.value > 0) minute.value--;
    else minute.value = 59;
  } else if (type === 'second') {
    if (second.value > 0) second.value--;
    else second.value = 59;
  }
  updateModelValue()
}

function toggleAmPm() {
  if (hour.value >= 12) hour.value -= 12
  else hour.value += 12
  updateModelValue()
}

function updatePopupPosition() {
  if (!showPopup.value || !inputWrapperRef.value) return;
  const rect = inputWrapperRef.value.getBoundingClientRect();
  popupPositionStyle.value = {
    position: 'absolute',
    top: `${rect.bottom + window.scrollY + 4}px`,
    left: `${rect.left + window.scrollX}px`,
    zIndex: 1000,
    width: '230px',
  };
}

function onClickOutside(e: MouseEvent) {
  const inputWrapper = inputWrapperRef.value;
  const popup = popupRef.value;
  if (
    inputWrapper &&
    popup &&
    !inputWrapper.contains(e.target as Node) &&
    !popup.contains(e.target as Node)
  ) {
    showPopup.value = false;
  }
}

function onInputText(e: Event) {
  const val = (e.target as HTMLInputElement).value.trim();
  // Accept HH:mm, HH:mm AM/PM, or HH:mm:ss
  let h = hour.value, m = minute.value, s = second.value, isPm = false;
  if (props.mode === 'chronometer') {
    const timeParts = val.split(':');
    if (timeParts.length === 3) {
      h = Math.max(0, Math.min(hourMax.value, parseInt(timeParts[0]) || 0));
      m = Math.max(0, Math.min(59, parseInt(timeParts[1]) || 0));
      s = Math.max(0, Math.min(59, parseInt(timeParts[2]) || 0));
    }
  } else if (ampmMode.value) {
    // Accept hh:mm AM/PM
    const match = val.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i);
    if (match) {
      h = parseInt(match[1]);
      m = parseInt(match[2]);
      isPm = (match[3] || '').toUpperCase() === 'PM';
      if (h === 12) h = isPm ? 12 : 0;
      else if (isPm) h += 12;
      h = Math.max(0, Math.min(23, h));
      m = Math.max(0, Math.min(59, m));
    }
  } else {
    const timeParts = val.split(':');
    if (timeParts.length === 2) {
      h = Math.max(0, Math.min(hourMax.value, parseInt(timeParts[0]) || 0));
      m = Math.max(0, Math.min(59, parseInt(timeParts[1]) || 0));
    }
  }
  // Only update if valid
  if (
    h >= 0 && h <= 23 &&
    m >= 0 && m <= 59 &&
    (props.mode !== 'chronometer' || (s >= 0 && s <= 59))
  ) {
    hour.value = h;
    minute.value = m;
    if (props.mode === 'chronometer') second.value = s;
    updateModelValue();
  }
}

function updateModelValue() {
  let newVal = '';
  if (props.mode === 'chronometer') {
    newVal = `${String(hour.value).padStart(2, '0')}:${String(minute.value).padStart(2, '0')}:${String(second.value).padStart(2, '0')}`;
  } else if (ampmMode.value) {
    let h = hour.value % 12;
    if (h === 0) h = 12;
    newVal = `${String(h).padStart(2, '0')}:${String(minute.value).padStart(2, '0')} ${ampmDisplay.value}`;
  } else {
    newVal = `${String(hour.value).padStart(2, '0')}:${String(minute.value).padStart(2, '0')}`;
  }
  emit('update:modelValue', newVal);
}

function startChrono() {
  // Placeholder for chronometer start functionality
}

function stopChrono() {
  // Placeholder for chronometer stop functionality
}

function resetChrono() {
  // Placeholder for chronometer reset functionality
}

// Watchers and lifecycle
watch(showPopup, (v) => {
  if (v) nextTick(updatePopupPosition);
});

onMounted(() => {
  window.addEventListener('scroll', updatePopupPosition, true);
  window.addEventListener('resize', updatePopupPosition);
  window.addEventListener('mousedown', onClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updatePopupPosition, true);
  window.removeEventListener('resize', updatePopupPosition);
  window.removeEventListener('mousedown', onClickOutside);
});
</script>

<style scoped>
.ampm-toggle, .ampm-toggle-popup {
  margin-left: 8px;
  background: var(--color-primary-900, #1e293b);
  color: var(--color-primary-50, #f1f5f9);
  border: 1px solid var(--color-primary-800, #334155);
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.15s ease;
  outline: none;
  height: auto;
  display: flex;
  align-items: center;
}

.ampm-toggle:hover, .ampm-toggle-popup:hover {
  background: var(--color-primary-800, #334155);
}

.ampm-toggle:active, .ampm-toggle:focus, .ampm-toggle-popup:active, .ampm-toggle-popup:focus {
  background: var(--color-primary-700, #374151);
  border-color: var(--color-primary-500, #3b82f6);
}
.timepicker-selector {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin: 0 2px;
}

.timepicker-arrow {
  background: none;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 12px;
  color: var(--color-primary-600, #2563eb);
  transition: all 0.15s ease;
  outline: none;
  margin: 2px 0;
  font-weight: 600;
}

.timepicker-arrow:hover {
  color: var(--color-primary-700, #1d4ed8);
  background: var(--color-primary-50, #eff6ff);
}

.timepicker-arrow:active,
.timepicker-arrow:focus {
  color: var(--color-primary-800, #1e40af);
  background: var(--color-primary-100, #dbeafe);
}

.timepicker-value {
  font-size: 16px;
  font-weight: 600;
  min-width: 36px;
  text-align: center;
  margin: 4px 0;
  background: var(--color-primary-900, #1e293b);
  color: var(--color-primary-50, #f1f5f9);
  border-radius: 6px;
  padding: 8px 12px;
  border: 1px solid var(--color-primary-800, #334155);
  font-variant-numeric: tabular-nums;
  transition: all 0.15s ease;
  cursor: default;
}

.timepicker-value:hover {
  background: var(--color-primary-800, #334155);
}
.timepicker-input-wrapper {
  position: relative;
  width: 100%;
}

.timepicker-popup {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  background: var(--color-surface-primary, #fff);
  border: 1px solid var(--color-border-primary, #e5e7eb);
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  margin-top: 4px;
  padding: 12px;
  width: 230px;
}
.timepicker-popup-content-fixed {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.timepicker-fields {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 8px;
}
.timepicker-field {
  width: 2.5em;
  padding: 0.2em 0.1em;
  font-size: 1.1em;
  text-align: center;
  border: 1px solid var(--color-primary-200, #a5b4fc);
  border-radius: 4px;
  background: var(--color-background-primary, #fff);
  color: var(--color-text-primary, #222);
  outline: none;
  transition: border 0.18s;
}
.timepicker-field:focus {
  border-color: var(--color-primary-500, #3b82f6);
}
.timepicker-chrono-controls {
  display: flex;
  gap: 0.5em;
  justify-content: center;
}
.timepicker-chrono-controls button {
  background: var(--color-primary-500, #3b82f6);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.3em 0.8em;
  font-size: 0.98em;
  cursor: pointer;
  transition: background 0.15s;
}
.timepicker-chrono-controls button:hover {
  background: var(--color-primary-700, #1d4ed8);
}
.timepicker-root {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.timepicker-label {
  font-size: 0.95rem;
  color: var(--color-text-primary, #222);
  margin-bottom: 0.25rem;
}
.timepicker-input {
  padding: 12px 16px;
  border-radius: 8px;
  border: 2px solid var(--color-primary-300, #a5b4fc);
  background: var(--color-surface-primary, #fff);
  color: var(--color-text-primary, #1e293b);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.02em;
  outline: none;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  text-align: center;
  width: 230px;
  font-variant-numeric: tabular-nums;
}

.timepicker-input:focus {
  border-color: var(--color-primary-500, #3b82f6);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.timepicker-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background: var(--color-gray-50, #f9fafb);
}
@media (prefers-color-scheme: dark) {
  .timepicker-input {
    background: var(--color-surface-primary, #0f172a);
    color: var(--color-text-primary, #f1f5f9);
    border-color: var(--color-primary-600, #2563eb);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .timepicker-input:focus {
    border-color: var(--color-primary-400, #60a5fa);
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);
  }
  
  .timepicker-popup {
    background: var(--color-surface-primary, #0f172a);
    color: var(--color-text-primary, #f1f5f9);
    border-color: var(--color-primary-600, #2563eb);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  }
  
  .timepicker-value {
    background: var(--color-primary-50, #eff6ff);
    color: var(--color-text-primary, #1e293b);
    border-color: var(--color-primary-200, #a5b4fc);
  }
  
  .timepicker-value:hover {
    background: var(--color-primary-100, #dbeafe);
  }
  
  .timepicker-arrow {
    color: var(--color-primary-400, #60a5fa);
  }
  
  .timepicker-arrow:hover {
    color: var(--color-primary-300, #93c5fd);
    background: var(--color-primary-900, #1e293b);
  }
  
  .ampm-toggle, .ampm-toggle-popup {
    background: var(--color-primary-50, #eff6ff);
    color: var(--color-primary-900, #1e293b);
    border-color: var(--color-primary-200, #a5b4fc);
  }
  
  .ampm-toggle:hover, .ampm-toggle-popup:hover {
    background: var(--color-primary-100, #dbeafe);
  }
  
  .timepicker-chrono-controls button {
    background: var(--color-primary-600, #2563eb);
    color: var(--color-primary-50, #eff6ff);
  }
  
  .timepicker-chrono-controls button:hover {
    background: var(--color-primary-500, #3b82f6);
  }
}
</style>
