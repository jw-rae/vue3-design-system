import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '../components/Button/Button.vue'
import Card from '../components/Card/Card.vue'
import Badge from '../components/Badge/Badge.vue'
import Input from '../components/Input/Input.vue'
import Alert from '../components/Alert/Alert.vue'
import ThemeToggle from '../components/ThemeToggle/ThemeToggle.vue'

const meta: Meta = {
  title: 'Design System/Monochromatic Aesthetics',
  parameters: {
    docs: {
      description: {
        component: 'Demonstrates perfect monochromatic design where each theme uses variations of its primary color throughout all components.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const MonochromaticShowcase: Story = {
  render: () => ({
    components: { Button, Card, Badge, Input, Alert, ThemeToggle },
    data() {
      return {
        inputValue: '',
      }
    },
    template: `
      <div class="space-y-8 p-6 bg-background-primary text-text-primary min-h-screen">
        <!-- Header with Theme Control -->
        <Card class="p-6 border-2 border-border-secondary">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h1 class="text-3xl font-bold text-text-primary mb-2">
                🎨 Monochromatic Design System
              </h1>
              <p class="text-text-secondary">
                Notice how ALL components use variations of the same primary color - creating perfect harmony
              </p>
            </div>
            <ThemeToggle />
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div class="p-4 bg-primary-100 dark:bg-primary-800/30 rounded-lg border border-border-secondary">
              <div class="text-text-primary font-medium">Current Theme</div>
              <div class="text-sm text-text-secondary">Monochromatic Unity</div>
            </div>
            <div class="p-4 bg-primary-200 dark:bg-primary-700/30 rounded-lg border border-border-secondary">
              <div class="text-text-primary font-medium">Color Harmony</div>
              <div class="text-sm text-text-secondary">50-950 Scale</div>
            </div>
            <div class="p-4 bg-primary-300 dark:bg-primary-600/30 rounded-lg border border-border-secondary">
              <div class="text-text-primary font-medium">Design Cohesion</div>
              <div class="text-sm text-text-secondary">Perfect Aesthetics</div>
            </div>
          </div>
        </Card>

        <!-- Color Scale Demonstration -->
        <Card class="p-6 border border-border-secondary">
          <h2 class="text-xl font-semibold mb-4 text-text-primary">
            🌈 Primary Color Scale Usage
          </h2>
          <div class="space-y-4">
            <div class="grid grid-cols-11 gap-2 mb-2">
              <div class="text-xs text-center text-text-secondary">50</div>
              <div class="text-xs text-center text-text-secondary">100</div>
              <div class="text-xs text-center text-text-secondary">200</div>
              <div class="text-xs text-center text-text-secondary">300</div>
              <div class="text-xs text-center text-text-secondary">400</div>
              <div class="text-xs text-center font-bold text-text-primary">500</div>
              <div class="text-xs text-center text-text-secondary">600</div>
              <div class="text-xs text-center text-text-secondary">700</div>
              <div class="text-xs text-center text-text-secondary">800</div>
              <div class="text-xs text-center text-text-secondary">900</div>
              <div class="text-xs text-center text-text-secondary">950</div>
            </div>
            <div class="grid grid-cols-11 gap-2">
              <div class="h-12 bg-primary-50 rounded border border-border-secondary"></div>
              <div class="h-12 bg-primary-100 rounded border border-border-primary"></div>
              <div class="h-12 bg-primary-200 rounded border border-border-primary"></div>
              <div class="h-12 bg-primary-300 rounded border border-border-primary"></div>
              <div class="h-12 bg-primary-400 rounded border border-border-primary"></div>
              <div class="h-12 bg-primary-500 rounded ring-2 ring-primary-700 dark:ring-primary-300 border border-border-primary"></div>
              <div class="h-12 bg-primary-600 rounded border border-border-primary"></div>
              <div class="h-12 bg-primary-700 rounded border border-border-primary"></div>
              <div class="h-12 bg-primary-800 rounded border border-border-primary"></div>
              <div class="h-12 bg-primary-900 rounded border border-border-primary"></div>
              <div class="h-12 bg-primary-950 rounded border border-border-secondary"></div>
            </div>
            <div class="text-xs text-text-tertiary text-center">
              ← Lighter tones for backgrounds • <strong>Main brand color (500)</strong> • Darker tones for text/emphasis →
            </div>
          </div>
        </Card>

        <!-- Component Harmony Demonstration -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Buttons - All Primary Color Variations -->
          <Card class="p-6">
            <h3 class="text-lg font-semibold mb-4 text-text-primary">
              🔘 Monochromatic Buttons
            </h3>
            <div class="space-y-3">
              <div class="flex gap-2 flex-wrap">
                <Button variant="primary" size="sm">Primary (500)</Button>
                <Button variant="secondary" size="sm">Secondary (100-200)</Button>
                <Button variant="outline" size="sm">Outline (500)</Button>
                <Button variant="ghost" size="sm">Ghost (50-100)</Button>
              </div>
              <div class="flex gap-2 flex-wrap">
                <Button variant="success" size="sm">Success (500)</Button>
                <Button variant="warning" size="sm">Warning (200-300)</Button>
                <Button variant="error" size="sm">Error (700-800)</Button>
                <Button variant="info" size="sm">Info (100-200)</Button>
              </div>
            </div>
            <div class="mt-4 text-xs text-text-secondary">
              Notice: All buttons use different shades of the same primary color!
            </div>
          </Card>

          <!-- Badges - Semantic with Primary Colors -->
          <Card class="p-6">
            <h3 class="text-lg font-semibold mb-4 text-text-primary">
              🏷️ Monochromatic Badges
            </h3>
            <div class="space-y-3">
              <div class="flex gap-2 flex-wrap">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
              </div>
              <div class="flex gap-2 flex-wrap">
                <Badge variant="error">Error</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="primary" outline>Outline</Badge>
                <Badge variant="secondary" outline>Outline 2</Badge>
              </div>
            </div>
            <div class="mt-4 text-xs text-text-secondary">
              Same primary color family, different intensities for meaning
            </div>
          </Card>

          <!-- Form Elements -->
          <Card class="p-6">
            <h3 class="text-lg font-semibold mb-4 text-text-primary">
              📝 Monochromatic Forms
            </h3>
            <div class="space-y-4">
              <Input 
                v-model="inputValue"
                label="Input Field" 
                placeholder="Notice the primary-color theming..."
              />
              <Input 
                v-model="inputValue"
                label="Error State" 
                placeholder="Error styling uses primary-700"
                error="Uses darker primary for errors"
              />
            </div>
            <div class="mt-4 text-xs text-text-secondary">
              Borders, focus states, and labels all use primary color variations
            </div>
          </Card>

          <!-- Alerts -->
          <Card class="p-6">
            <h3 class="text-lg font-semibold mb-4 text-text-primary">
              🚨 Monochromatic Alerts
            </h3>
            <div class="space-y-3">
              <Alert variant="success" title="Success">
                Uses primary-50/100 for subtle success indication
              </Alert>
              <Alert variant="warning" title="Warning">
                Uses primary-100/200 for warning states
              </Alert>
              <Alert variant="error" title="Error">
                Uses primary-700/800 tones for error states
              </Alert>
              <Alert variant="info" title="Info">
                Uses primary-50/100 for informational content
              </Alert>
            </div>
            <div class="mt-4 text-xs text-text-secondary">
              All alerts use the same primary color at different intensities
            </div>
          </Card>
        </div>

        <!-- Monochromatic Principle Explanation -->
        <Card class="p-6 bg-surface-secondary border-border-primary">
          <h2 class="text-xl font-semibold mb-4 text-text-primary">
            🎯 Monochromatic Design Principles
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 class="font-medium text-text-primary mb-2">Color Harmony</h3>
              <p class="text-sm text-text-secondary">
                Every component uses the same primary color at different intensities (50-950), creating perfect visual harmony.
              </p>
            </div>
            <div>
              <h3 class="font-medium text-text-primary mb-2">Semantic Clarity</h3>
              <p class="text-sm text-text-secondary">
                Lighter tones (50-300) for backgrounds, medium tones (400-600) for interactive elements, darker tones (700-950) for text.
              </p>
            </div>
            <div>
              <h3 class="font-medium text-text-primary mb-2">Brand Consistency</h3>
              <p class="text-sm text-text-secondary">
                No random colors - everything derives from your brand's primary color, ensuring complete visual cohesion.
              </p>
            </div>
          </div>
        </Card>

        <!-- Theme Switching Demonstration -->
        <Card class="p-6 border-2 border-border-secondary">
          <h2 class="text-xl font-semibold mb-4 text-text-primary">
            🎨 Switch Themes to See Monochromatic Magic
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-medium text-text-primary mb-3">Try Each Theme:</h3>
              <ul class="space-y-2 text-sm text-text-secondary">
                <li><strong>🌸 Pink Theme:</strong> Berry tones create elegant, soft aesthetics</li>
                <li><strong>🌿 Green Theme:</strong> Forest greens provide natural, calming vibes</li>
                <li><strong>🌌 Blue Theme:</strong> Ocean blues deliver professional, trustworthy feel</li>
                <li><strong>� System Warm:</strong> Sand and sepia tones for sophisticated warmth</li>
                <li><strong>❄️ System Cool:</strong> Blue-grey tones for clean, modern feel</li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium text-text-primary mb-3">What to Notice:</h3>
              <ul class="space-y-2 text-sm text-text-secondary">
                <li>• All components change color simultaneously</li>
                <li>• Same design, completely different personality</li>
                <li>• Perfect color harmony in every theme</li>
                <li>• Dark mode adapts beautifully</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    `,
  }),
}
