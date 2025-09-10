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
      <div class="space-y-8 p-6 bg-background-primary dark:bg-background-primary min-h-screen">
        <!-- Header with Theme Control -->
        <Card class="p-6 border-2 border-primary-200 dark:border-primary-700">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h1 class="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-2">
                🎨 Monochromatic Design System
              </h1>
              <p class="text-primary-700 dark:text-primary-300">
                Notice how ALL components use variations of the same primary color - creating perfect harmony
              </p>
            </div>
            <ThemeToggle />
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div class="p-4 bg-primary-100 dark:bg-primary-800/30 rounded-lg">
              <div class="text-primary-800 dark:text-primary-200 font-medium">Current Theme</div>
              <div class="text-sm text-primary-600 dark:text-primary-400">Monochromatic Unity</div>
            </div>
            <div class="p-4 bg-primary-200 dark:bg-primary-700/30 rounded-lg">
              <div class="text-primary-800 dark:text-primary-200 font-medium">Color Harmony</div>
              <div class="text-sm text-primary-600 dark:text-primary-400">50-950 Scale</div>
            </div>
            <div class="p-4 bg-primary-300 dark:bg-primary-600/30 rounded-lg">
              <div class="text-primary-800 dark:text-primary-200 font-medium">Design Cohesion</div>
              <div class="text-sm text-primary-600 dark:text-primary-400">Perfect Aesthetics</div>
            </div>
          </div>
        </Card>

        <!-- Color Scale Demonstration -->
        <Card class="p-6">
          <h2 class="text-xl font-semibold mb-4 text-primary-900 dark:text-primary-100">
            🌈 Primary Color Scale Usage
          </h2>
          <div class="space-y-4">
            <div class="grid grid-cols-11 gap-2 mb-2">
              <div class="text-xs text-center text-primary-600 dark:text-primary-400">50</div>
              <div class="text-xs text-center text-primary-600 dark:text-primary-400">100</div>
              <div class="text-xs text-center text-primary-600 dark:text-primary-400">200</div>
              <div class="text-xs text-center text-primary-600 dark:text-primary-400">300</div>
              <div class="text-xs text-center text-primary-600 dark:text-primary-400">400</div>
              <div class="text-xs text-center font-bold text-primary-700 dark:text-primary-300">500</div>
              <div class="text-xs text-center text-primary-600 dark:text-primary-400">600</div>
              <div class="text-xs text-center text-primary-600 dark:text-primary-400">700</div>
              <div class="text-xs text-center text-primary-600 dark:text-primary-400">800</div>
              <div class="text-xs text-center text-primary-600 dark:text-primary-400">900</div>
              <div class="text-xs text-center text-primary-600 dark:text-primary-400">950</div>
            </div>
            <div class="grid grid-cols-11 gap-2">
              <div class="h-12 bg-primary-50 rounded border border-primary-200 dark:border-primary-800"></div>
              <div class="h-12 bg-primary-100 rounded"></div>
              <div class="h-12 bg-primary-200 rounded"></div>
              <div class="h-12 bg-primary-300 rounded"></div>
              <div class="h-12 bg-primary-400 rounded"></div>
              <div class="h-12 bg-primary-500 rounded ring-2 ring-primary-700 dark:ring-primary-300"></div>
              <div class="h-12 bg-primary-600 rounded"></div>
              <div class="h-12 bg-primary-700 rounded"></div>
              <div class="h-12 bg-primary-800 rounded"></div>
              <div class="h-12 bg-primary-900 rounded"></div>
              <div class="h-12 bg-primary-950 rounded border border-primary-200 dark:border-primary-800"></div>
            </div>
            <div class="text-xs text-primary-500 dark:text-primary-400 text-center">
              ← Lighter tones for backgrounds • <strong>Main brand color (500)</strong> • Darker tones for text/emphasis →
            </div>
          </div>
        </Card>

        <!-- Component Harmony Demonstration -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Buttons - All Primary Color Variations -->
          <Card class="p-6">
            <h3 class="text-lg font-semibold mb-4 text-primary-900 dark:text-primary-100">
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
            <div class="mt-4 text-xs text-primary-600 dark:text-primary-400">
              Notice: All buttons use different shades of the same primary color!
            </div>
          </Card>

          <!-- Badges - Semantic with Primary Colors -->
          <Card class="p-6">
            <h3 class="text-lg font-semibold mb-4 text-primary-900 dark:text-primary-100">
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
            <div class="mt-4 text-xs text-primary-600 dark:text-primary-400">
              Same primary color family, different intensities for meaning
            </div>
          </Card>

          <!-- Form Elements -->
          <Card class="p-6">
            <h3 class="text-lg font-semibold mb-4 text-primary-900 dark:text-primary-100">
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
            <div class="mt-4 text-xs text-primary-600 dark:text-primary-400">
              Borders, focus states, and labels all use primary color variations
            </div>
          </Card>

          <!-- Alerts -->
          <Card class="p-6">
            <h3 class="text-lg font-semibold mb-4 text-primary-900 dark:text-primary-100">
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
            <div class="mt-4 text-xs text-primary-600 dark:text-primary-400">
              All alerts use the same primary color at different intensities
            </div>
          </Card>
        </div>

        <!-- Monochromatic Principle Explanation -->
        <Card class="p-6 bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-700">
          <h2 class="text-xl font-semibold mb-4 text-primary-900 dark:text-primary-100">
            🎯 Monochromatic Design Principles
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 class="font-medium text-primary-800 dark:text-primary-200 mb-2">Color Harmony</h3>
              <p class="text-sm text-primary-700 dark:text-primary-300">
                Every component uses the same primary color at different intensities (50-950), creating perfect visual harmony.
              </p>
            </div>
            <div>
              <h3 class="font-medium text-primary-800 dark:text-primary-200 mb-2">Semantic Clarity</h3>
              <p class="text-sm text-primary-700 dark:text-primary-300">
                Lighter tones (50-300) for backgrounds, medium tones (400-600) for interactive elements, darker tones (700-950) for text.
              </p>
            </div>
            <div>
              <h3 class="font-medium text-primary-800 dark:text-primary-200 mb-2">Brand Consistency</h3>
              <p class="text-sm text-primary-700 dark:text-primary-300">
                No random colors - everything derives from your brand's primary color, ensuring complete visual cohesion.
              </p>
            </div>
          </div>
        </Card>

        <!-- Theme Switching Demonstration -->
        <Card class="p-6 border-2 border-primary-300 dark:border-primary-600">
          <h2 class="text-xl font-semibold mb-4 text-primary-900 dark:text-primary-100">
            🎨 Switch Themes to See Monochromatic Magic
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-medium text-primary-800 dark:text-primary-200 mb-3">Try Each Theme:</h3>
              <ul class="space-y-2 text-sm text-primary-700 dark:text-primary-300">
                <li><strong>🌸 Pink Theme:</strong> Berry tones create elegant, soft aesthetics</li>
                <li><strong>🌿 Green Theme:</strong> Forest greens provide natural, calming vibes</li>
                <li><strong>🌌 Blue Theme:</strong> Ocean blues deliver professional, trustworthy feel</li>
                <li><strong>🔵 Default:</strong> Classic blue provides versatile, modern appearance</li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium text-primary-800 dark:text-primary-200 mb-3">What to Notice:</h3>
              <ul class="space-y-2 text-sm text-primary-700 dark:text-primary-300">
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

export const ThemePersonalities: Story = {
    render: () => ({
        components: { Card, Button, Badge },
        template: `
      <div class="space-y-8 p-6">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold mb-4">🎭 Theme Personalities</h1>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Each monochromatic theme creates a completely different emotional experience while maintaining design consistency.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          <!-- Pink Theme Personality -->
          <div class="p-6 rounded-xl border-2" style="border-color: #f9a8d4; background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%);">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-full" style="background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);"></div>
              <div>
                <h3 class="font-bold text-lg" style="color: #831843;">🌸 Elegant Pink</h3>
                <p class="text-sm" style="color: #9d174d;">Sophisticated • Gentle</p>
              </div>
            </div>
            <div class="space-y-3">
              <button class="w-full px-4 py-2 rounded-md text-white font-medium" style="background-color: #ec4899;">
                Primary Action
              </button>
              <div class="flex gap-2">
                <span class="px-2 py-1 text-xs rounded" style="background-color: #fce7f3; color: #831843;">Success</span>
                <span class="px-2 py-1 text-xs rounded" style="background-color: #fbcfe8; color: #9d174d;">Info</span>
              </div>
            </div>
            <div class="mt-4 text-xs" style="color: #9d174d;">
              Perfect for beauty, wellness, creative brands
            </div>
          </div>

          <!-- Green Theme Personality -->
          <div class="p-6 rounded-xl border-2" style="border-color: #86efac; background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-full" style="background: linear-gradient(135deg, #22c55e 0%, #15803d 100%);"></div>
              <div>
                <h3 class="font-bold text-lg" style="color: #14532d;">🌿 Nature Green</h3>
                <p class="text-sm" style="color: #166534;">Calming • Natural</p>
              </div>
            </div>
            <div class="space-y-3">
              <button class="w-full px-4 py-2 rounded-md text-white font-medium" style="background-color: #22c55e;">
                Primary Action
              </button>
              <div class="flex gap-2">
                <span class="px-2 py-1 text-xs rounded" style="background-color: #dcfce7; color: #14532d;">Success</span>
                <span class="px-2 py-1 text-xs rounded" style="background-color: #bbf7d0; color: #166534;">Info</span>
              </div>
            </div>
            <div class="mt-4 text-xs" style="color: #166534;">
              Perfect for health, sustainability, eco brands
            </div>
          </div>

          <!-- Blue Theme Personality -->
          <div class="p-6 rounded-xl border-2" style="border-color: #7dd3fc; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-full" style="background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%);"></div>
              <div>
                <h3 class="font-bold text-lg" style="color: #0c4a6e;">🌌 Corporate Blue</h3>
                <p class="text-sm" style="color: #075985;">Professional • Trustworthy</p>
              </div>
            </div>
            <div class="space-y-3">
              <button class="w-full px-4 py-2 rounded-md text-white font-medium" style="background-color: #0ea5e9;">
                Primary Action
              </button>
              <div class="flex gap-2">
                <span class="px-2 py-1 text-xs rounded" style="background-color: #e0f2fe; color: #0c4a6e;">Success</span>
                <span class="px-2 py-1 text-xs rounded" style="background-color: #bae6fd; color: #075985;">Info</span>
              </div>
            </div>
            <div class="mt-4 text-xs" style="color: #075985;">
              Perfect for corporate, finance, tech brands
            </div>
          </div>

          <!-- Default Theme Personality -->
          <div class="p-6 rounded-xl border-2" style="border-color: #93c5fd; background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-full" style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);"></div>
              <div>
                <h3 class="font-bold text-lg" style="color: #1e3a8a;">🔵 Default Blue</h3>
                <p class="text-sm" style="color: #1e40af;">Versatile • Modern</p>
              </div>
            </div>
            <div class="space-y-3">
              <button class="w-full px-4 py-2 rounded-md text-white font-medium" style="background-color: #3b82f6;">
                Primary Action
              </button>
              <div class="flex gap-2">
                <span class="px-2 py-1 text-xs rounded" style="background-color: #dbeafe; color: #1e3a8a;">Success</span>
                <span class="px-2 py-1 text-xs rounded" style="background-color: #bfdbfe; color: #1e40af;">Info</span>
              </div>
            </div>
            <div class="mt-4 text-xs" style="color: #1e40af;">
              Perfect for SaaS, general apps, versatile use
            </div>
          </div>
        </div>

        <div class="text-center">
          <div class="inline-block p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <h3 class="font-bold text-lg mb-2">🎨 The Magic of Monochromatic Design</h3>
            <p class="text-gray-600 dark:text-gray-400 max-w-xl">
              Same components, same structure, completely different emotional impact. 
              Each theme tells a unique brand story through color harmony.
            </p>
          </div>
        </div>
      </div>
    `,
    }),
}
