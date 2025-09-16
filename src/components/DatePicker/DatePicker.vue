<template>
  <div class="datepicker-root">
    <label v-if="label" :for="id" class="datepicker-label">{{ label }}</label>
    <div class="datepicker-input-wrapper" ref="inputWrapperRef">
      <input
        :id="id"
        type="text"
        :value="displayValue"
        :placeholder="placeholder || 'YYYY-MM-DD'"
        :disabled="disabled"
        class="datepicker-input"
        @focus="showCalendar = true"
        @click="showCalendar = true"
        @keydown.enter.prevent="showCalendar = !showCalendar"
        @input="onInputText"
        :aria-label="label"
        autocomplete="off"
      />
      <teleport to="body">
  <div v-if="showCalendar && !disabled" class="datepicker-popup" ref="popupRef" @mousedown.prevent :style="popupPositionStyle">
          <div class="datepicker-calendar">
            <div class="datepicker-header">
              <div class="datepicker-header-arrow left">
                <button 
                  class="datepicker-nav" 
                  @click="prevMonth" 
                  type="button" 
                  v-if="!showYearSelect"
                  :disabled="showYearSelect"
                  aria-label="Previous Month"
                >‹</button>
              </div>
              <div class="datepicker-header-center">
                <span class="datepicker-month">
                  <span class="datepicker-month-label">{{ monthLabel }}</span>
                  <button 
                    class="datepicker-year-btn" 
                    @click="toggleYearSelect" 
                    type="button"
                    :aria-pressed="showYearSelect"
                    :disabled="showYearSelect"
                    :class="{ 'is-active': showYearSelect }"
                  >{{ yearLabel }}</button>
                </span>
              </div>
              <div class="datepicker-header-arrow right">
                <button 
                  class="datepicker-nav" 
                  @click="nextMonth" 
                  type="button" 
                  v-if="!showYearSelect"
                  :disabled="showYearSelect"
                  aria-label="Next Month"
                >›</button>
              </div>
            </div>
                <Scrollbar width="sm" style="height: 100%; width: 210px; max-width: 100vw;">
              <div class="datepicker-popup-content-fixed">
                <div v-if="showYearSelect" class="datepicker-year-select">
                  <div class="datepicker-year-grid">
                    <button
                      v-for="year in yearGrid"
                      :key="year"
                      class="datepicker-year-cell"
                      :class="{ 'is-selected': year === calendarYear }"
                      @click="selectYear(year)"
                      type="button"
                    >{{ year }}</button>
                  </div>
                </div>
                <!-- Month selection removed -->
                <div v-else class="datepicker-grid">
                  <div class="datepicker-day" v-for="d in weekDays" :key="d">{{ d }}</div>
                  <button
                    v-for="day in daysInMonth"
                    :key="day.key"
                    class="datepicker-cell"
                    :class="{ 'is-today': day.isToday, 'is-selected': day.isSelected, 'is-disabled': day.isDisabled }"
                    :disabled="day.isDisabled"
                    @click="day.date && selectDate(day.date)"
                    type="button"
                  >{{ day.label }}</button>
                </div>
              </div>
            </Scrollbar>
          </div>
        </div>
      </teleport>
    </div>
  </div>
</template>

<script setup lang="ts">



import Scrollbar from '../Scrollbar/Scrollbar.vue'
import { ref, watch, computed, onMounted, onUnmounted, nextTick } from 'vue'

const showCalendar = ref(false)
const popupPositionStyle = ref({});
const inputWrapperRef = ref<HTMLElement | null>(null);
const popupRef = ref<HTMLElement | null>(null);

function updatePopupPosition() {
  if (!showCalendar.value || !inputWrapperRef.value) return;
  const rect = inputWrapperRef.value.getBoundingClientRect();
  popupPositionStyle.value = {
    position: 'absolute',
    top: `${rect.bottom + window.scrollY + 4}px`,
    left: `${rect.left + window.scrollX}px`,
    zIndex: 1000,
    width: '230px',
  };
}

watch(showCalendar, (v) => {
  if (v) nextTick(updatePopupPosition);
});
onMounted(() => {
  window.addEventListener('scroll', updatePopupPosition, true);
  window.addEventListener('resize', updatePopupPosition);
});
onUnmounted(() => {
  window.removeEventListener('scroll', updatePopupPosition, true);
  window.removeEventListener('resize', updatePopupPosition);
});

/**
 * Props for DatePicker component
 * @property {string} modelValue - The current date value (format: YYYY-MM-DD)
 * @property {string} min - Minimum allowed date value
 * @property {string} max - Maximum allowed date value
 * @property {string} label - Label for the input field
 * @property {boolean} disabled - Whether the input is disabled
 * @property {string} id - Unique id for the input field
 * @property {string} placeholder - Placeholder text for the input
 * @property {number} yearSpan - How many years to show in the year selector
 * @property {number|null} yearStart - First year to show (overrides span if set)
 * @property {number|null} yearEnd - Last year to show (overrides span if set)
 */
const props = defineProps({
  /** The current date value (format: YYYY-MM-DD) */
  modelValue: { type: String, required: true },
  /** Minimum allowed date value */
  min: { type: String, default: '' },
  /** Maximum allowed date value */
  max: { type: String, default: '' },
  /** Label for the input field */
  label: { type: String, default: '' },
  /** Whether the input is disabled */
  disabled: { type: Boolean, default: false },
  /** Unique id for the input field */
  id: { type: String, default: () => `datepicker-${Math.random().toString(36).slice(2, 10)}` },
  /** Placeholder text for the input */
  placeholder: { type: String, default: '' },
  /** How many years to show in the year selector */
  yearSpan: { type: Number, default: 120 },
  /** First year to show (overrides span if set) */
  yearStart: { type: Number, default: null },
  /** Last year to show (overrides span if set) */
  yearEnd: { type: Number, default: null },
})

const showYearSelect = ref(false)

function toggleYearSelect() {
  showYearSelect.value = !showYearSelect.value
  // (no-op, month select removed)
}

const calendarYear = computed(() => calendarDate.value.getFullYear())
const calendarMonth = computed(() => calendarDate.value.getMonth())
const monthLabel = computed(() => calendarDate.value.toLocaleString('default', { month: 'long' }))
const yearLabel = computed(() => calendarDate.value.getFullYear())

function selectYear(year: number) {
  calendarDate.value = new Date(year, calendarMonth.value, 1)
  showYearSelect.value = false
}

// Generate a grid of years: always within min and max
const yearGrid = computed(() => {
  let minYear = props.min ? new Date(props.min).getFullYear() : (props.max ? new Date(props.max).getFullYear() - props.yearSpan + 1 : new Date().getFullYear() - props.yearSpan + 1);
  let maxYear = props.max ? new Date(props.max).getFullYear() : new Date().getFullYear();
  if (minYear > maxYear) [minYear, maxYear] = [maxYear, minYear];
  const years = [];
  for (let y = maxYear; y >= minYear; y--) years.push(y);
  return years;
})

const emit = defineEmits(['update:modelValue', 'change'])
const internalValue = ref(props.modelValue)
const today = new Date()
const calendarDate = ref(props.modelValue ? new Date(props.modelValue) : new Date(today.getFullYear(), today.getMonth(), 1))

watch(() => props.modelValue, v => {
  internalValue.value = v
  if (v) {
    const d = new Date(v)
    if (!isNaN(d.getTime())) calendarDate.value = new Date(d.getFullYear(), d.getMonth(), 1)
  }
})

function onInputText(e: Event) {
  const val = (e.target as HTMLInputElement).value;
  internalValue.value = val;
  // Accept YYYY-MM-DD only
  if (/^\d{4}-\d{2}-\d{2}$/.test(val)) {
    const d = new Date(val);
    if (!isNaN(d.getTime())) {
      calendarDate.value = new Date(d.getFullYear(), d.getMonth(), 1);
      emit('update:modelValue', val);
      emit('change', val);
    }
  }
}

function selectDate(date: Date) {
  const iso = date.toISOString().slice(0, 10)
  internalValue.value = iso
  emit('update:modelValue', iso)
  emit('change', iso)
  showCalendar.value = false
}

function prevMonth() {
  const d = new Date(calendarDate.value)
  d.setMonth(d.getMonth() - 1)
  calendarDate.value = d
}
function nextMonth() {
  const d = new Date(calendarDate.value)
  d.setMonth(d.getMonth() + 1)
  calendarDate.value = d
}

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const daysInMonth = computed(() => {
  const d = new Date(calendarDate.value)
  const year = d.getFullYear()
  const month = d.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const numDays = new Date(year, month + 1, 0).getDate()
  const days = []
  // Fill leading blanks
  for (let i = 0; i < firstDay; i++) {
    days.push({ key: 'b' + i, label: '', isToday: false, isSelected: false, isDisabled: true })
  }
  for (let day = 1; day <= numDays; day++) {
    const date = new Date(year, month, day)
    const iso = date.toISOString().slice(0, 10)
    const isToday = date.toDateString() === today.toDateString()
    const isSelected = internalValue.value === iso
    let isDisabled = false
    if (props.min && iso < props.min) isDisabled = true
    if (props.max && iso > props.max) isDisabled = true
    days.push({
      key: iso,
      label: day,
      date,
      isToday,
      isSelected,
      isDisabled,
    })
  }
  return days
})


const displayValue = computed(() => internalValue.value)

// Hide calendar on outside click
function onClickOutside(e: MouseEvent) {
  const inputWrapper = inputWrapperRef.value;
  const popup = popupRef.value;
  if (
    inputWrapper &&
    popup &&
    !inputWrapper.contains(e.target as Node) &&
    !popup.contains(e.target as Node)
  ) {
    showCalendar.value = false;
  }
}
onMounted(() => {
  window.addEventListener('mousedown', onClickOutside)
})
// Clean up
onUnmounted(() => {
  window.removeEventListener('mousedown', onClickOutside)
})
</script>

<style scoped>
.datepicker-month-label {
  color: var(--color-text-primary, #222);
  font-weight: 600;
  font-size: 1em;
  margin-right: 0.25em;
}
.datepicker-popup-content-fixed {
  min-width: 170px;
  min-height: 250px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}
.datepicker-month-select {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.datepicker-month-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 0.14em;
}
.datepicker-month-cell {
  background: none;
  border: none;
  border-radius: 4px;
  font-size: 0.95em;
  color: var(--color-text-primary, #222);
  cursor: pointer;
  padding: 0.18em 0.12em;
  transition: background 0.15s, color 0.15s;
}
.datepicker-month-cell.is-selected {
  background: var(--color-primary-500, #3b82f6);
  color: #fff;
}
.datepicker-year-btn {
  background: none;
  border: none;
  color: var(--color-primary-500, #3b82f6);
  font-weight: 500;
  font-size: 1em;
  margin-left: 0.25em;
  cursor: pointer;
  padding: 0 0.25em;
  border-radius: 4px;
  transition: background 0.15s;
}
.datepicker-year-btn:hover {
  background: var(--color-primary-100, #e0e7ff);
}
.datepicker-year-select {
  max-height: 250px;
  overflow-y: auto;
  margin-bottom: 0.5em;
}
.datepicker-year-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.25em;
}
.datepicker-year-cell {
  background: none;
  border: none;
  border-radius: 4px;
  font-size: 0.95em;
  color: var(--color-text-primary, #222);
  cursor: pointer;
  padding: 0.25em 0;
  transition: background 0.15s, color 0.15s;
}
.datepicker-year-cell.is-selected {
  background: var(--color-primary-500, #3b82f6);
  color: #fff;
}
.datepicker-root {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.datepicker-label {
  font-size: 0.95rem;
  color: var(--color-text-primary, #222);
  margin-bottom: 0.25rem;
}
.datepicker-input-wrapper {
  position: relative;
  width: 100%;
}
.datepicker-input {
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  border: 1px solid var(--color-primary-200, #a5b4fc);
  background: var(--color-background-primary, #fff);
  color: var(--color-text-primary, #222);
  font-size: 1rem;
  outline: none;
  transition: border 0.18s;
  width: 230px;
  cursor: pointer;
}
.datepicker-input:focus {
  border-color: var(--color-primary-500, #3b82f6);
}
.datepicker-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.datepicker-popup {
  position: absolute;
  top: 110%;
  left: 0;
  z-index: 1000;
  background: var(--color-background-primary, #fff);
  border: 1px solid var(--color-primary-200, #a5b4fc);
  border-radius: 8px;
  box-shadow: 0 4px 24px 0 rgba(60,60,60,0.10);
  padding: 0.5rem;
  margin-top: 0.25rem;
}
.datepicker-calendar {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.datepicker-header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  margin-bottom: 0.25rem;
  position: relative;
}
.datepicker-header-arrow {
  width: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  height: 100%;
}
.datepicker-header-arrow.left {
  left: 0;
}
.datepicker-header-arrow.right {
  right: 0;
}
.datepicker-header-center {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.datepicker-nav {
  background: none;
  border: none;
  font-size: 1.25rem;
  color: var(--color-primary-500, #3b82f6);
  cursor: pointer;
  padding: 0 0.5rem;
  border-radius: 4px;
  transition: background 0.15s;
}
.datepicker-nav:hover {
  background: var(--color-primary-100, #e0e7ff);
}
.datepicker-month {
  font-size: 1rem;
}
.datepicker-grid {
  display: grid;
  grid-template-columns: repeat(7, 1.7em);
  gap: 0.18em;
}
.datepicker-day {
  text-align: center;
  font-size: 0.92em;
  color: var(--color-text-secondary, #888);
  font-weight: 500;
  padding-bottom: 0.12em;
}
.datepicker-cell {
  background: none;
  border: none;
  border-radius: 4px;
  font-size: 0.98em;
  color: var(--color-text-primary, #222);
  cursor: pointer;
  padding: 0.22em 0;
  transition: background 0.15s, color 0.15s;
}
.datepicker-cell.is-today {
  border: 1.5px solid var(--color-primary-300, #a5b4fc);
}
.datepicker-cell.is-selected {
  background: var(--color-primary-500, #3b82f6);
  color: #fff;
}
.datepicker-cell.is-disabled {
  color: #bbb;
  background: none;
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
