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

const props = defineProps({
  modelValue: { type: Number, required: true },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  step: { type: Number, default: 1 },
  label: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  showValue: { type: Boolean, default: true },
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
