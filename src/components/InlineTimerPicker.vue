<template>
  <div class="inline-timer-picker" :class="{ small }">
    <div class="timer-fields">
      <div class="timer-unit">
        <button class="picker-btn" @click="change('hours', 1)">
          <span class="picker-arrow">▲</span>
        </button>
        <span v-if="!editing.hours" class="timer-value" @click="edit('hours')">{{ displayHour }}</span>
        <input
          v-else
          class="timer-input"
          type="number"
          min="0"
          :max="maxHours"
          v-model="editValue.hours"
          @blur="commitEdit('hours')"
          @keyup.enter="commitEdit('hours')"
          @keyup.esc="cancelEdit('hours')"
          ref="hoursInput"
        />
        <button class="picker-btn" @click="change('hours', -1)">
          <span class="picker-arrow">▼</span>
        </button>
      </div>
      <span class="timer-separator">:</span>
      <div class="timer-unit">
        <button class="picker-btn" @click="change('minutes', 1)">
          <span class="picker-arrow">▲</span>
        </button>
        <span v-if="!editing.minutes" class="timer-value" @click="edit('minutes')">{{ pad(minutes) }}</span>
        <input
          v-else
          class="timer-input"
          type="number"
          min="0"
          max="59"
          v-model="editValue.minutes"
          @blur="commitEdit('minutes')"
          @keyup.enter="commitEdit('minutes')"
          @keyup.esc="cancelEdit('minutes')"
          ref="minutesInput"
        />
        <button class="picker-btn" @click="change('minutes', -1)">
          <span class="picker-arrow">▼</span>
        </button>
      </div>
  <span v-if="showSeconds && !isAmPm" class="timer-separator">:</span>
  <div v-if="showSeconds && !isAmPm" class="timer-unit">
        <button class="picker-btn" @click="change('seconds', 1)">
          <span class="picker-arrow">▲</span>
        </button>
        <span v-if="!editing.seconds" class="timer-value" @click="edit('seconds')">{{ pad(seconds) }}</span>
        <input
          v-else
          class="timer-input"
          type="number"
          min="0"
          max="59"
          v-model="editValue.seconds"
          @blur="commitEdit('seconds')"
          @keyup.enter="commitEdit('seconds')"
          @keyup.esc="cancelEdit('seconds')"
          ref="secondsInput"
        />
          <button class="picker-btn" @click="change('seconds', -1)">
            <span class="picker-arrow">▼</span>
          </button>
        </div>
        <button v-if="isAmPm" class="ampm-toggle-minimal" type="button" @click="toggleAmPm">{{ ampmLabel }}</button>
      </div>
    </div>
  </template><script lang="ts" setup>
import { computed, defineProps, defineEmits, ref, nextTick } from 'vue';

/**
 * Props for InlineTimerPicker component
 * @property {number} modelValue - Timer value in seconds
 * @property {boolean} showSeconds - Show seconds field
 * @property {boolean} small - Compact style
 * @property {number} maxHours - Maximum hours selectable
 * @property {boolean} ampm - Enable 12-hour AM/PM mode
 */
const props = defineProps({
  /** Timer value in seconds */
  modelValue: { type: Number, required: true },
  /** Show seconds field */
  showSeconds: { type: Boolean, default: true },
  /** Compact style */
  small: { type: Boolean, default: false },
  /** Maximum hours selectable */
  maxHours: { type: Number, default: 23 },
  /** Enable 12-hour AM/PM mode */
  ampm: { type: Boolean, default: false },
});
const emit = defineEmits(['update:modelValue']);


const hours = computed(() => Math.floor(props.modelValue / 3600));
const minutes = computed(() => Math.floor((props.modelValue % 3600) / 60));
const seconds = computed(() => props.modelValue % 60);

// AM/PM logic
const isAmPm = computed(() => props.ampm && props.maxHours === 12);
const isPm = ref(false);
const displayHour = computed(() => {
  if (!isAmPm.value) return pad(hours.value);
  let h = hours.value % 12;
  if (h === 0) h = 12;
  return pad(h);
});
const ampmLabel = computed(() => isPm.value ? 'PM' : 'AM');
function toggleAmPm() {
  isPm.value = !isPm.value;
  let h = hours.value;
  if (isPm.value && h < 12) h += 12;
  if (!isPm.value && h >= 12) h -= 12;
  emit('update:modelValue', h * 3600 + minutes.value * 60 + seconds.value);
}

function commitEdit(unit: 'hours' | 'minutes' | 'seconds') {
  let h = hours.value, m = minutes.value, s = seconds.value;
  if (unit === 'hours') {
    h = Math.max(0, Math.min(props.maxHours, parseInt(editValue.value.hours) || 0));
  } else if (unit === 'minutes') {
    m = Math.max(0, Math.min(59, parseInt(editValue.value.minutes) || 0));
  } else if (unit === 'seconds') {
    s = Math.max(0, Math.min(59, parseInt(editValue.value.seconds) || 0));
  }
  emit('update:modelValue', h * 3600 + m * 60 + s);
  editing.value[unit] = false;
}

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

function change(unit: 'hours' | 'minutes' | 'seconds', delta: number) {
  let total = props.modelValue;
  let h = hours.value, m = minutes.value, s = seconds.value;
  if (unit === 'hours') {
    if (isAmPm.value) {
      h = (h % 12) + delta;
      if (h < 1) h = 12;
      if (h > 12) h = 1;
      h = isPm.value ? (h === 12 ? 12 : h + 12) : (h === 12 ? 0 : h);
    } else {
      h = Math.max(0, Math.min(props.maxHours, h + delta));
    }
  } else if (unit === 'minutes') {
    m = (m + delta + 60) % 60;
    if (delta > 0 && m === 0) h = Math.min(props.maxHours, h + 1);
    if (delta < 0 && m === 59) h = Math.max(0, h - 1);
  } else if (unit === 'seconds') {
    s = (s + delta + 60) % 60;
    if (delta > 0 && s === 0) m = (m + 1) % 60;
    if (delta < 0 && s === 59) m = (m - 1 + 60) % 60;
    if (m === 0 && delta > 0 && s === 0) h = Math.min(props.maxHours, h + 1);
    if (m === 59 && delta < 0 && s === 59) h = Math.max(0, h - 1);
  }
  total = h * 3600 + m * 60 + s;
  emit('update:modelValue', total);
}

// Typed input logic
const editing = ref({ hours: false, minutes: false, seconds: false });
const editValue = ref({ hours: '', minutes: '', seconds: '' });
const hoursInput = ref();
const minutesInput = ref();
const secondsInput = ref();

function edit(unit: 'hours' | 'minutes' | 'seconds') {
  editing.value[unit] = true;
  if (unit === 'hours') editValue.value.hours = hours.value.toString();
  if (unit === 'minutes') editValue.value.minutes = minutes.value.toString();
  if (unit === 'seconds') editValue.value.seconds = seconds.value.toString();
  nextTick(() => {
    if (unit === 'hours' && hoursInput.value) hoursInput.value.focus();
    if (unit === 'minutes' && minutesInput.value) minutesInput.value.focus();
    if (unit === 'seconds' && secondsInput.value) secondsInput.value.focus();
  });
}

function cancelEdit(unit: 'hours' | 'minutes' | 'seconds') {
  editing.value[unit] = false;
}
</script>

<style scoped>
.inline-timer-picker {
  display: inline-flex;
  align-items: center;
  font-family: system-ui, -apple-system, sans-serif;
}

.inline-timer-picker.small {
  font-size: 0.9em;
}

.timer-fields {
  display: flex;
  align-items: center;
  gap: 0.1em;
}

.timer-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1em;
}

.timer-value {
  font-size: 1.2em;
  font-weight: 600;
  min-width: 2.2em;
  text-align: center;
  padding: 0.1em 0.4em;
  border-radius: 0.3em;
  cursor: pointer;
  transition: background 0.15s;
}

.timer-value:hover {
  background: var(--color-primary-50, #eff6ff);
}

.timer-input {
  font-size: 1.2em;
  font-weight: 600;
  min-width: 2.2em;
  text-align: center;
  padding: 0.1em 0.4em;
  border: 2px solid var(--color-primary-500, #3b82f6);
  border-radius: 0.3em;
  outline: none;
}

.timer-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.timer-input[type=number] {
  appearance: textfield;
  -moz-appearance: textfield;
}

.timer-separator {
  margin: 0 0.1em;
  font-weight: 600;
  color: var(--color-text-tertiary, #64748b);
}

.picker-btn {
  background: linear-gradient(180deg, var(--color-surface-secondary, #f8fafc) 0%, var(--color-surface-primary, #fff) 100%);
  border: 1px solid var(--color-border-secondary, #cbd5e1);
  border-radius: 0.3em;
  padding: 0.1em 0.4em;
  cursor: pointer;
  font-size: 1em;
  color: var(--color-primary-600, #2563eb);
  transition: background 0.15s, color 0.15s, border-color 0.15s;
  outline: none;
  margin: 0.05em 0;
}

.picker-btn:active,
.picker-btn:focus {
  background: var(--color-primary-100, #dbeafe);
  /* Remove color inversion for minimal look */
  color: var(--color-primary-600, #2563eb);
  border-color: var(--color-primary-500, #3b82f6);
}

.picker-arrow {
  font-size: 0.4em;
  font-weight: bold;
  display: block;
  line-height: 1;
  color: #2563eb; /* Strong blue for contrast in light mode */
}
@media (prefers-color-scheme: dark) {
  .picker-arrow {
    color: #93c5fd; /* Lighter blue for contrast in dark mode */
  }
}


/* --- Light mode (default) --- */
.inline-timer-picker {
  /* No background for minimal look */
  color: var(--color-text-primary, #1e293b);
}

.timer-fields {
  /* No background for minimal look */
  background: none;
}
.timer-value {
  background: var(--color-primary-900, #1e293b);
  color: var(--color-primary-50, #f1f5f9);
}
.timer-value:hover {
  background: var(--color-primary-100, #dbeafe);
}
.timer-input {
  background: var(--color-surface-primary, #fff);
  color: var(--color-text-primary, #1e293b);
  border: 2px solid var(--color-primary-500, #3b82f6);
}
.picker-btn {
  background: linear-gradient(180deg, var(--color-surface-secondary, #f8fafc) 0%, var(--color-surface-primary, #fff) 100%);
  color: var(--color-primary-600, #2563eb);
  border: 1px solid var(--color-border-secondary, #cbd5e1);
}
.picker-btn:active,
.picker-btn:focus {
  /* No background or color change on active/focus for minimal look */
  background: inherit;
  color: inherit;
  border-color: var(--color-primary-500, #3b82f6);
}
.ampm-toggle-minimal {
  margin-left: 0.5em;
  background: var(--color-primary-900, #1e293b);
  color: var(--color-primary-50, #f1f5f9);
  border: 1px solid var(--color-primary-800, #334155);
  border-radius: 0.3em;
  font-size: 1em;
  font-weight: 500;
  padding: 0.1em 0.7em;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
  outline: none;
  height: 2.2em;
  display: flex;
  align-items: center;
}
.ampm-toggle-minimal:active,
.ampm-toggle-minimal:focus {
  background: var(--color-primary-800, #334155);
  color: var(--color-primary-50, #f1f5f9);
  border-color: var(--color-primary-500, #3b82f6);
}

/* --- Dark mode overrides --- */
@media (prefers-color-scheme: dark) {
  .inline-timer-picker {
    background: none;
    color: var(--color-text-primary, #f1f5f9);
  }
  .timer-fields {
    background: none;
  }
  .timer-value:hover {
    background: var(--color-primary-800, #334155);
  }
  .timer-input {
    background: var(--color-surface-primary, #0f172a);
    color: var(--color-text-primary, #f1f5f9);
    border: 2px solid var(--color-primary-400, #60a5fa);
  }
  .picker-btn {
    background: linear-gradient(180deg, var(--color-surface-secondary, #1e293b) 0%, var(--color-surface-primary, #0f172a) 100%);
    color: var(--color-primary-200, #a5b4fc);
    border: 1px solid var(--color-border-secondary, #334155);
  }
  .picker-btn:active,
  .picker-btn:focus {
    background: inherit;
    color: inherit;
    border-color: var(--color-primary-400, #60a5fa);
  }
  .ampm-toggle-minimal {
    background: var(--color-primary-50, #f1f5f9);
    color: var(--color-primary-900, #1e293b);
    border: 1px solid var(--color-primary-200, #a5b4fc);
  }
  .ampm-toggle-minimal:active,
  .ampm-toggle-minimal:focus {
    background: var(--color-primary-100, #e0e7ef);
    color: var(--color-primary-900, #1e293b);
    border-color: var(--color-primary-500, #3b82f6);
  }
}

/* Force dark mode timer-value at the very end for max specificity */
@media (prefers-color-scheme: dark) {
  .inline-timer-picker .timer-value {
    background: var(--color-primary-50, #eff6ff) !important;
    color: var(--color-text-primary, #1e293b) !important;
  }
}


</style>