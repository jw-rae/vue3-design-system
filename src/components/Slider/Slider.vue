<template>
  <div class="slider-root">
    <label v-if="label" :for="id" class="slider-label">{{ label }}</label>
    <div class="slider-track-wrapper">
      <input
        :id="id"
        type="range"
        :min="min"
        :max="max"
        :step="step"
        v-model="internalValue"
        :disabled="disabled"
        class="slider-track"
        @input="onInput"
        @change="$emit('change', internalValue)"
        :aria-valuenow="internalValue"
        :aria-valuemin="min"
        :aria-valuemax="max"
        :aria-label="label"
      />
      <span class="slider-value" v-if="showValue">{{ internalValue }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

/**
 * Props for Slider component
 * @property {number} modelValue - The current slider value
 * @property {number} min - Minimum allowed value
 * @property {number} max - Maximum allowed value
 * @property {number} step - Step size for the slider
 * @property {string} label - Label for the slider input
 * @property {boolean} disabled - Whether the slider is disabled
 * @property {boolean} showValue - Show the current value next to the slider
 * @property {string} id - Unique id for the slider input
 */
const props = defineProps({
  /** The current slider value */
  modelValue: { type: Number, required: true },
  /** Minimum allowed value */
  min: { type: Number, default: 0 },
  /** Maximum allowed value */
  max: { type: Number, default: 100 },
  /** Step size for the slider */
  step: { type: Number, default: 1 },
  /** Label for the slider input */
  label: { type: String, default: '' },
  /** Whether the slider is disabled */
  disabled: { type: Boolean, default: false },
  /** Show the current value next to the slider */
  showValue: { type: Boolean, default: true },
  /** Unique id for the slider input */
  id: { type: String, default: () => `slider-${Math.random().toString(36).slice(2, 10)}` },
})

const emit = defineEmits(['update:modelValue', 'change'])
const internalValue = ref(props.modelValue)

watch(() => props.modelValue, v => { internalValue.value = v })

function onInput(e: Event) {
  const val = Number((e.target as HTMLInputElement).value)
  internalValue.value = val
  emit('update:modelValue', val)
}
</script>

<style scoped>
.slider-root {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.slider-label {
  font-size: 0.95rem;
  color: var(--color-text-primary, #222);
  margin-bottom: 0.25rem;
}
.slider-track-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
/* Light, subtle track by default */
.slider-track {
  width: 100%;
  accent-color: var(--color-primary-500, #3b82f6);
  height: 10px;
  border-radius: 5px;
  background: var(--color-primary-100, #e0e7ff);
  box-shadow: none;
  transition: background 0.2s cubic-bezier(.4,1,.7,1);
}

.slider-track:hover {
  background: var(--color-primary-200, #c7d2fe);
}

.slider-track:focus {
  outline: none;
}

/* Custom thumb for a modern look */
.slider-track::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--color-primary-500, #3b82f6);
  border: 2px solid #fff;
  box-shadow: 0 1px 4px rgba(60,60,60,0.08);
  transition: background 0.2s;
}
.slider-track:focus::-webkit-slider-thumb,
.slider-track:hover::-webkit-slider-thumb,
.slider-track:active::-webkit-slider-thumb {
  background: var(--color-primary-600, #2563eb);
  box-shadow: 0 2px 6px rgba(60,60,60,0.12);
}
.slider-track::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--color-primary-500, #3b82f6);
  border: 2px solid #fff;
  box-shadow: 0 1px 4px rgba(60,60,60,0.08);
  transition: background 0.2s;
}
.slider-track:focus::-moz-range-thumb,
.slider-track:hover::-moz-range-thumb,
.slider-track:active::-moz-range-thumb {
  background: var(--color-primary-600, #2563eb);
  box-shadow: 0 2px 6px rgba(60,60,60,0.12);
}
.slider-track::-ms-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--color-primary-500, #3b82f6);
  border: 2px solid #fff;
  box-shadow: 0 1px 4px rgba(60,60,60,0.08);
  transition: background 0.2s;
}
.slider-track:focus::-ms-thumb,
.slider-track:hover::-ms-thumb,
.slider-track:active::-ms-thumb {
  background: var(--color-primary-600, #2563eb);
  box-shadow: 0 2px 6px rgba(60,60,60,0.12);
}
/* Remove default track styles for cross-browser consistency */
.slider-track::-webkit-slider-runnable-track {
  background: transparent;
}
.slider-track::-ms-fill-lower,
.slider-track::-ms-fill-upper {
  background: transparent;
}
.slider-track::-moz-range-track {
  background: transparent;
}
.slider-value {
  min-width: 2.5rem;
  text-align: right;
  font-size: 0.95rem;
  color: var(--color-text-secondary, #666);
}
</style>
