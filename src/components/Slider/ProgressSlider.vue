<template>
  <div class="progress-slider-root">
    <label v-if="label" :for="id" class="progress-slider-label">{{ label }}</label>
    <div class="progress-slider-bar-wrapper">
      <div class="progress-slider-bar-bg">
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

watch(() => props.modelValue, v => { internalValue.value = v })

function onInput(e: Event) {
  const val = Number((e.target as HTMLInputElement).value)
  internalValue.value = val
  emit('update:modelValue', val)
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
}
.progress-slider-bar-fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary-500, #3b82f6) 0%, var(--color-primary-400, #60a5fa) 100%);
  border-radius: 5px;
  transition: width 0.2s cubic-bezier(.4,1,.7,1);
}
.progress-slider-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 10px;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
}
.progress-slider-value {
  min-width: 2.5rem;
  text-align: right;
  font-size: 0.95rem;
  color: var(--color-text-secondary, #666);
}
/* Custom thumb for a minimal look */
.progress-slider-input::-webkit-slider-thumb {
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
.progress-slider-input:focus::-webkit-slider-thumb {
  outline: 2px solid var(--color-primary-600, #2563eb);
}
.progress-slider-input::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--color-primary-500, #3b82f6);
  border: 2px solid #fff;
  box-shadow: 0 1px 4px rgba(60,60,60,0.08);
  transition: background 0.2s;
}
.progress-slider-input:focus::-moz-range-thumb {
  outline: 2px solid var(--color-primary-600, #2563eb);
}
.progress-slider-input::-ms-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--color-primary-500, #3b82f6);
  border: 2px solid #fff;
  box-shadow: 0 1px 4px rgba(60,60,60,0.08);
  transition: background 0.2s;
}
.progress-slider-input:focus::-ms-thumb {
  outline: 2px solid var(--color-primary-600, #2563eb);
}
/* Remove default track styles */
.progress-slider-input::-webkit-slider-runnable-track {
  background: transparent;
}
.progress-slider-input::-ms-fill-lower,
.progress-slider-input::-ms-fill-upper {
  background: transparent;
}
.progress-slider-input::-moz-range-track {
  background: transparent;
}
</style>
