<template>
  <div class="bg-surface-secondary dark:bg-surface-secondary rounded-xl p-4 border border-border-primary dark:border-border-primary">
    <h4 class="text-sm font-semibold text-text-primary mb-3">{{ title }}</h4>
    <div class="space-y-2">
      <div class="flex items-center gap-3">
        <div 
          class="w-8 h-8 rounded-lg border border-border-secondary shadow-sm"
          :style="{ backgroundColor: colors.light }"
        ></div>
        <div class="text-xs">
          <div class="font-medium text-text-primary">Light</div>
          <div class="text-text-tertiary font-mono">{{ colors.light }}</div>
        </div>
      </div>
      
      <div class="flex items-center gap-3">
        <div 
          class="w-8 h-8 rounded-lg border border-border-secondary shadow-sm"
          :style="{ backgroundColor: colors.main }"
        ></div>
        <div class="text-xs">
          <div class="font-medium text-text-primary">Main</div>
          <div class="text-text-tertiary font-mono">{{ colors.main }}</div>
        </div>
      </div>
      
      <div class="flex items-center gap-3">
        <div 
          class="w-8 h-8 rounded-lg border border-border-secondary shadow-sm"
          :style="{ backgroundColor: colors.dark }"
        ></div>
        <div class="text-xs">
          <div class="font-medium text-text-primary">Dark</div>
          <div class="text-text-tertiary font-mono">{{ colors.dark }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface AccentColorCardProps {
  title: string
  colors: {
    light: string
    main: string
    dark: string
  }
}

defineProps<AccentColorCardProps>()
</script>
