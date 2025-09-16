<template>
  <div class="space-y-8 p-6">
    <div class="text-center">
      <h2 class="text-2xl font-bold text-text-primary mb-2">Theme-Aware Accent Colors</h2>
      <p class="text-text-secondary mb-4">
        Semantic colors that adapt to each theme while maintaining their meaning
      </p>
      <div class="text-sm text-text-tertiary">
        Switch themes to see how accent colors adapt to each theme's personality
      </div>
    </div>

    <!-- Alerts Section -->
    <section class="space-y-4">
      <h3 class="text-lg font-semibold text-text-primary border-b border-border-primary pb-2">
        Alert Components
      </h3>
      <div class="grid gap-4">
        <Alert variant="success" title="Success Alert">
          This success alert uses the current theme's success accent colors
        </Alert>
        <Alert variant="warning" title="Warning Alert">
          This warning alert adapts to the theme's warning accent colors
        </Alert>
        <Alert variant="error" title="Error Alert">
          This error alert uses theme-specific error accent colors
        </Alert>
        <Alert variant="info" title="Info Alert">
          This info alert reflects the theme's info accent colors
        </Alert>
      </div>
    </section>

    <!-- Buttons Section -->
    <section class="space-y-4">
      <h3 class="text-lg font-semibold text-text-primary border-b border-border-primary pb-2">
        Button Components
      </h3>
      <div class="flex flex-wrap gap-3">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="error">Error</Button>
        <Button variant="info">Info</Button>
      </div>
    </section>

    <!-- Badges Section -->
    <section class="space-y-4">
      <h3 class="text-lg font-semibold text-text-primary border-b border-border-primary pb-2">
        Badge Components
      </h3>
      
      <div class="space-y-3">
        <div>
          <h4 class="text-sm font-medium text-text-secondary mb-2">Filled Badges</h4>
          <div class="flex flex-wrap gap-2">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </div>
        
        <div>
          <h4 class="text-sm font-medium text-text-secondary mb-2">Outline Badges</h4>
          <div class="flex flex-wrap gap-2">
            <Badge variant="primary" outline>Primary</Badge>
            <Badge variant="secondary" outline>Secondary</Badge>
            <Badge variant="success" outline>Success</Badge>
            <Badge variant="warning" outline>Warning</Badge>
            <Badge variant="error" outline>Error</Badge>
            <Badge variant="info" outline>Info</Badge>
          </div>
        </div>
      </div>
    </section>

    <!-- Color Palette Preview -->
    <section class="space-y-4">
      <h3 class="text-lg font-semibold text-text-primary border-b border-border-primary pb-2">
        Current Theme Accent Colors
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AccentColorCard 
          title="Success"
          :colors="{
            light: 'var(--color-accent-success-light)',
            main: 'var(--color-accent-success-main)',
            dark: 'var(--color-accent-success-dark)'
          }"
        />
        <AccentColorCard 
          title="Warning"
          :colors="{
            light: 'var(--color-accent-warning-light)',
            main: 'var(--color-accent-warning-main)',
            dark: 'var(--color-accent-warning-dark)'
          }"
        />
        <AccentColorCard 
          title="Error"
          :colors="{
            light: 'var(--color-accent-error-light)',
            main: 'var(--color-accent-error-main)',
            dark: 'var(--color-accent-error-dark)'
          }"
        />
        <AccentColorCard 
          title="Info"
          :colors="{
            light: 'var(--color-accent-info-light)',
            main: 'var(--color-accent-info-main)',
            dark: 'var(--color-accent-info-dark)'
          }"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Alert from '../Alert/Alert.vue'
import Button from '../Button/Button.vue'
import Badge from '../Badge/Badge.vue'
import AccentColorCard from './AccentColorCard.vue'
</script>
