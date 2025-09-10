<template>
  <div class="flex items-center gap-4">
    <!-- Dark/Light Mode Toggle -->
    <button
      @click="toggleTheme"
      class="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border-primary bg-surface-primary text-primary-700 hover:bg-primary-50 dark:border-border-primary dark:bg-surface-primary dark:text-primary-300 dark:hover:bg-primary-900/20 transition-colors"
      :title="`Switch to ${isDark ? 'light' : 'dark'} mode`"
    >
      <!-- Sun icon for light mode -->
      <svg
        v-if="isDark"
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      
      <!-- Moon icon for dark mode -->
      <svg
        v-else
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>

    <!-- Color Theme Selector -->
    <div class="relative">
      <select
        v-model="currentTheme"
        @change="setColorTheme(currentTheme as ThemeName)"
        class="appearance-none bg-surface-primary dark:bg-surface-primary border border-border-primary dark:border-border-primary rounded-lg px-3 py-2 pr-8 text-sm text-text-primary dark:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      >
        <option value="default">🔵 Default Blue</option>
        <option value="pink">🌸 Elegant Pink</option>
        <option value="green">🌿 Nature Green</option>
        <option value="blue">🌌 Corporate Blue</option>
      </select>
      
      <!-- Dropdown Arrow -->
      <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg class="w-4 h-4 text-primary-400 dark:text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>

    <!-- Theme Info Display -->
    <div class="text-xs text-primary-500 dark:text-primary-400 min-w-0">
      {{ themeInfo.displayName }} • {{ isDark ? 'Dark' : 'Light' }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '../../composables/useTheme'
import type { ThemeName } from '../../theme/themes'

const { isDark, currentTheme, themeInfo, toggleTheme, setColorTheme } = useTheme()
</script>
