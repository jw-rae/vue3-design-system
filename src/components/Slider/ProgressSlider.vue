<template>
  <div class="progress-slider-root">
    <label v-if="label" :for="id" class="progress-slider-label">{{ label }}</label>
    <div class="progress-slider-bar-wrapper">
      <div 
        class="progress-slider-bar-bg" 
        ref="progressBarRef"
        @click="handleBarClick"
        @mousedown="handleMouseDown"
        @keydown="handleKeyDown"
        tabindex="0"
        role="slider"
        :aria-valuenow="internalValue"
        :aria-valuemin="min"
        :aria-valuemax="max"
        :aria-label="label"
      >
        <div class="progress-slider-bar-fill" :style="fillStyle"></div>
      </div>
      <input
        :id="id"
        type="range"
        :min="min"
        :max="max"
        :step="step"
        v-model="internalValue"
        :disabled="disabled"
        class="progress-slider-input"
        @input="onInput"
        @change="$emit('change', internalValue)"
        :aria-valuenow="internalValue"
        :aria-valuemin="min"
        :aria-valuemax="max"
        :aria-label="label"
      />
      <span class="progress-slider-value" v-if="showValue">{{ internalValue }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'

const props = defineProps({
  modelValue: { type: Number, required: true },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  step: { type: Number, default: 1 },
  label: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  showValue: { type: Boolean, default: true },
  id: { type: String, default: () => `progress-slider-${Math.random().toString(36).slice(2, 10)}` },
})

const emit = defineEmits(['update:modelValue', 'change'])
const internalValue = ref(props.modelValue)
const progressBarRef = ref<HTMLElement | null>(null)

watch(() => props.modelValue, v => { internalValue.value = v })

function onInput(e: Event) {
  const val = Number((e.target as HTMLInputElement).value)
  internalValue.value = val
  emit('update:modelValue', val)
}

function updateValue(newValue: number) {
  const clampedValue = Math.max(props.min, Math.min(props.max, newValue))
  const steppedValue = Math.round(clampedValue / props.step) * props.step
  internalValue.value = steppedValue
  emit('update:modelValue', steppedValue)
}

function handleBarClick(e: MouseEvent) {
  if (props.disabled || !progressBarRef.value) return
  
  const rect = progressBarRef.value.getBoundingClientRect()
  const clickX = e.clientX - rect.left
  const percentage = clickX / rect.width
  const newValue = props.min + (percentage * (props.max - props.min))
  
  updateValue(newValue)
}

function handleMouseDown(e: MouseEvent) {
  if (props.disabled || !progressBarRef.value) return
  
  e.preventDefault()
  
  const rect = progressBarRef.value.getBoundingClientRect()
  
  function handleMouseMove(e: MouseEvent) {
    const clickX = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(1, clickX / rect.width))
    const newValue = props.min + (percentage * (props.max - props.min))
    updateValue(newValue)
  }
  
  function handleMouseUp() {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }
  
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
  
  // Set initial value
  handleBarClick(e)
}

function handleKeyDown(e: KeyboardEvent) {
  if (props.disabled) return
  
  let newValue = internalValue.value
  const largeStep = (props.max - props.min) / 10
  
  switch (e.key) {
    case 'ArrowRight':
    case 'ArrowUp':
      e.preventDefault()
      newValue = Math.min(props.max, internalValue.value + props.step)
      break
    case 'ArrowLeft':
    case 'ArrowDown':
      e.preventDefault()
      newValue = Math.max(props.min, internalValue.value - props.step)
      break
    case 'PageUp':
      e.preventDefault()
      newValue = Math.min(props.max, internalValue.value + largeStep)
      break
    case 'PageDown':
      e.preventDefault()
      newValue = Math.max(props.min, internalValue.value - largeStep)
      break
    case 'Home':
      e.preventDefault()
      newValue = props.min
      break
    case 'End':
      e.preventDefault()
      newValue = props.max
      break
    default:
      return
  }
  
  updateValue(newValue)
}

const fillPercent = computed(() => {
  return ((internalValue.value - props.min) / (props.max - props.min)) * 100
})

const fillStyle = computed(() => ({
  width: fillPercent.value + '%',
}))
</script>

<style scoped>
.progress-slider-root {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.progress-slider-label {
  font-size: 0.95rem;
  color: var(--color-text-primary, #222);
  margin-bottom: 0.25rem;
}
.progress-slider-bar-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
}
.progress-slider-bar-bg {
  position: relative;
  width: 100%;
  height: 10px;
  background: var(--color-primary-100, #e0e7ff);
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
}
.progress-slider-bar-fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary-500, #3b82f6) 0%, var(--color-primary-400, #60a5fa) 100%);
  border-radius: 5px;
  transition: width 0.2s cubic-bezier(.4,1,.7,1);
  pointer-events: none;
}
.progress-slider-input {
  position: absolute;
  left: -9999px;
  opacity: 0;
  width: 1px;
  height: 1px;
  pointer-events: none;
}
.progress-slider-value {
  min-width: 2.5rem;
  text-align: right;
  font-size: 0.95rem;
  color: var(--color-text-secondary, #666);
}
/* Improve visual feedback on hover and focus */
.progress-slider-bar-bg:hover {
  background: var(--color-primary-200, #c7d2fe);
}

.progress-slider-bar-bg:focus-within {
  outline: 2px solid var(--color-primary-500, #3b82f6);
  outline-offset: 2px;
}

.progress-slider-input:focus + .progress-slider-bar-bg {
  outline: 2px solid var(--color-primary-500, #3b82f6);
  outline-offset: 2px;
}
</style>
