<template>
  <div class="tabs-container">
    <!-- Tab List -->
    <div
      :class="tabListClasses"
      role="tablist"
      :aria-orientation="orientation"
    >
      <button
        v-for="(tab, index) in tabs"
        :key="tab.value"
        :class="getTabClasses(tab, index)"
        :style="getTabStyles(tab, index)"
        :aria-selected="activeTab === tab.value"
        :aria-controls="`tabpanel-${tab.value}`"
        :id="`tab-${tab.value}`"
        role="tab"
        type="button"
        @click="setActiveTab(tab.value)"
        @keydown="handleKeydown($event, index)"
      >
        <!-- Tab icon -->
        <component
          v-if="tab.icon"
          :is="tab.icon"
          :class="getTabIconClasses(tab)"
        />
        
        <!-- Tab label -->
        <span>{{ tab.label }}</span>
        
        <!-- Badge/Count -->
        <span
          v-if="tab.badge !== undefined"
          :class="getTabBadgeClasses(tab)"
        >
          {{ tab.badge }}
        </span>
        
        <!-- Disabled indicator -->
        <span
          v-if="tab.disabled"
          class="sr-only"
        >
          (disabled)
        </span>
      </button>
      
      <!-- Active tab indicator -->
      <div
        v-if="!diagonal"
        :class="indicatorClasses"
        :style="indicatorStyles"
      />
    </div>
    
    <!-- Tab Panels -->
    <div class="tab-panels">
      <div
        v-for="tab in tabs"
        :key="`panel-${tab.value}`"
        v-show="activeTab === tab.value"
        :id="`tabpanel-${tab.value}`"
        :aria-labelledby="`tab-${tab.value}`"
        :class="tabPanelClasses"
        role="tabpanel"
        tabindex="0"
      >
        <slot :name="tab.value" :tab="tab">
          <div v-if="tab.content" v-html="tab.content" />
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick, onMounted, type Component } from 'vue'

export interface TabItem {
  value: string
  label: string
  icon?: Component
  badge?: string | number
  disabled?: boolean
  content?: string
}

export interface TabsProps {
  tabs: TabItem[]
  modelValue?: string
  variant?: 'default' | 'pills' | 'underline' | 'bordered'
  size?: 'sm' | 'md' | 'lg'
  orientation?: 'horizontal' | 'vertical'
  fullWidth?: boolean
  diagonal?: boolean
}

const props = withDefaults(defineProps<TabsProps>(), {
  variant: 'default',
  size: 'md',
  orientation: 'horizontal',
  fullWidth: false,
  diagonal: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'tab-change': [value: string, tab: TabItem]
}>()

// Active tab state
const activeTab = computed({
  get: () => props.modelValue || props.tabs.find(tab => !tab.disabled)?.value || '',
  set: (value: string) => {
    emit('update:modelValue', value)
  }
})

// Tab list refs for indicator positioning
const tabListRef = ref<HTMLElement>()
const indicatorPosition = ref({ left: 0, width: 0, top: 0, height: 0 })

const setActiveTab = (value: string) => {
  const tab = props.tabs.find(t => t.value === value)
  if (tab && !tab.disabled) {
    activeTab.value = value
    emit('tab-change', value, tab)
    updateIndicatorPosition()
  }
}

const handleKeydown = (event: KeyboardEvent, currentIndex: number) => {
  const enabledTabs = props.tabs.filter(tab => !tab.disabled)
  const currentTabIndex = enabledTabs.findIndex(tab => tab.value === activeTab.value)
  
  let nextIndex = currentTabIndex
  
  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      event.preventDefault()
      nextIndex = (currentTabIndex + 1) % enabledTabs.length
      break
    case 'ArrowLeft':
    case 'ArrowUp':
      event.preventDefault()
      nextIndex = currentTabIndex === 0 ? enabledTabs.length - 1 : currentTabIndex - 1
      break
    case 'Home':
      event.preventDefault()
      nextIndex = 0
      break
    case 'End':
      event.preventDefault()
      nextIndex = enabledTabs.length - 1
      break
    default:
      return
  }
  
  setActiveTab(enabledTabs[nextIndex].value)
}

const updateIndicatorPosition = async () => {
  if (props.diagonal || props.variant === 'pills') return
  
  await nextTick()
  
  if (tabListRef.value) {
    const activeButton = tabListRef.value.querySelector(`#tab-${activeTab.value}`) as HTMLElement
    if (activeButton) {
      const rect = activeButton.getBoundingClientRect()
      const containerRect = tabListRef.value.getBoundingClientRect()
      
      indicatorPosition.value = {
        left: rect.left - containerRect.left,
        width: rect.width,
        top: rect.top - containerRect.top,
        height: rect.height,
      }
    }
  }
}

onMounted(() => {
  updateIndicatorPosition()
})

// Computed classes and styles
const tabListClasses = computed(() => {
  const baseClasses = [
    'relative',
    'flex',
    props.orientation === 'vertical' ? 'flex-col' : 'flex-row',
  ]

  const variantClasses = {
    default: [
      'border-b',
      'border-border-primary',
      props.orientation === 'vertical' ? 'border-r border-b-0' : '',
    ],
    pills: [
      'gap-1',
      'p-1',
      'bg-surface-secondary',
      'rounded-lg',
    ],
    underline: [],
    bordered: [
      'border',
      'border-border-primary',
      'rounded-t-lg',
      'bg-surface-secondary',
    ],
  }

  const fullWidthClasses = props.fullWidth && props.orientation === 'horizontal' ? ['w-full'] : []

  return [
    ...baseClasses,
    ...variantClasses[props.variant],
    ...fullWidthClasses,
  ]
})

const getTabClasses = (tab: TabItem, index: number) => {
  const baseClasses = [
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'font-medium',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-primary-500',
  ]

  // Size classes
  const sizeClasses = {
    sm: ['px-3', 'py-1.5', 'text-sm'],
    md: ['px-4', 'py-2', 'text-base'],
    lg: ['px-6', 'py-3', 'text-lg'],
  }

  // Active state
  const isActive = activeTab.value === tab.value

  // Variant-specific classes
  const variantClasses = {
    default: isActive ? [
      'text-primary-600',
      'dark:text-primary-400',
      'border-b-2',
      'border-primary-500',
      'dark:border-primary-400',
    ] : [
      'text-text-secondary',
      'hover:text-text-primary',
      'border-b-2',
      'border-transparent',
      'hover:border-border-secondary',
    ],
    pills: isActive ? [
      'bg-surface-primary',
      'text-text-primary',
      'shadow-sm',
      'rounded-md',
    ] : [
      'text-text-secondary',
      'hover:text-text-primary',
      'hover:bg-surface-elevated',
      'rounded-md',
    ],
    underline: isActive ? [
      'text-primary-600',
      'dark:text-primary-400',
      'border-b-2',
      'border-primary-500',
      'dark:border-primary-400',
    ] : [
      'text-text-secondary',
      'hover:text-text-primary',
      'border-b-2',
      'border-transparent',
    ],
    bordered: isActive ? [
      'bg-surface-primary',
      'text-text-primary',
      'border-b',
      'border-surface-primary',
      '-mb-px',
    ] : [
      'text-text-secondary',
      'hover:text-text-primary',
      'hover:bg-surface-elevated',
    ],
  }

  // Disabled state
  const disabledClasses = tab.disabled ? [
    'opacity-50',
    'cursor-not-allowed',
    'pointer-events-none',
  ] : ['cursor-pointer']

  // Full width
  const fullWidthClasses = props.fullWidth && props.orientation === 'horizontal' ? ['flex-1'] : []

  // Diagonal corners
  const diagonalClasses = props.diagonal ? ['ui-diagonal-corners-sm'] : []

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    ...(props.diagonal ? [] : variantClasses[props.variant]),
    ...disabledClasses,
    ...fullWidthClasses,
    ...diagonalClasses,
  ]
}

const getTabStyles = (tab: TabItem, index: number) => {
  if (!props.diagonal) return {}

  const isActive = activeTab.value === tab.value
  
  return {
    '--diagonal-border-color': isActive ? 'var(--color-primary-500)' : 'var(--color-border-primary)',
    '--diagonal-bg-color': isActive ? 'var(--color-surface-primary)' : 'transparent',
  }
}

const getTabIconClasses = (tab: TabItem) => {
  const sizeClasses = {
    sm: ['h-4', 'w-4'],
    md: ['h-5', 'w-5'],
    lg: ['h-6', 'w-6'],
  }

  return sizeClasses[props.size]
}

const getTabBadgeClasses = (tab: TabItem) => {
  const isActive = activeTab.value === tab.value
  
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-full',
    'text-xs',
    'font-semibold',
    'min-w-[1.25rem]',
    'h-5',
    'px-1.5',
  ]

  const variantClasses = isActive ? [
    'bg-primary-500',
    'text-white',
  ] : [
    'bg-surface-elevated',
    'text-text-secondary',
  ]

  return [...baseClasses, ...variantClasses]
}

const tabPanelClasses = computed(() => [
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-offset-2',
  'focus:ring-primary-500',
  'rounded-lg',
])

const indicatorClasses = computed(() => {
  if (props.variant === 'pills' || props.diagonal) return []
  
  const baseClasses = [
    'absolute',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'bg-primary-500',
    'dark:bg-primary-400',
  ]

  const orientationClasses = props.orientation === 'vertical' ? [
    'right-0',
    'w-0.5',
  ] : [
    'bottom-0',
    'h-0.5',
  ]

  return [...baseClasses, ...orientationClasses]
})

const indicatorStyles = computed(() => {
  if (props.variant === 'pills' || props.diagonal) return {}
  
  return props.orientation === 'vertical' ? {
    top: `${indicatorPosition.value.top}px`,
    height: `${indicatorPosition.value.height}px`,
  } : {
    left: `${indicatorPosition.value.left}px`,
    width: `${indicatorPosition.value.width}px`,
  }
})
</script>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
