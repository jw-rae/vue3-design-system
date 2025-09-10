import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '../components/Button/Button.vue'
import Card from '../components/Card/Card.vue'
import Badge from '../components/Badge/Badge.vue'
import Input from '../components/Input/Input.vue'
import Alert from '../components/Alert/Alert.vue'
import ThemeToggle from '../components/ThemeToggle/ThemeToggle.vue'

const meta: Meta = {
    title: 'Design System/Multi-Theme Showcase',
    parameters: {
        docs: {
            description: {
                component: 'Experience our beautiful multi-theme system with elegant Pink, soothing Green, and corporate Blue variations, each supporting light and dark modes.',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof meta>

export const AllThemes: Story = {
    render: () => ({
        components: { Button, Card, Badge, Input, Alert, ThemeToggle },
        template: `
      <div class="space-y-8 p-6">
        <!-- Theme Controls -->
        <Card class="p-6 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20">
          <div class="flex items-center justify-between mb-4">
            <h1 class="text-2xl font-bold text-primary-900 dark:text-primary-100">
              🎨 Multi-Theme Design System
            </h1>
            <ThemeToggle />
          </div>
          <p class="text-primary-700 dark:text-primary-300">
            Switch between our beautiful theme variations and light/dark modes to see the design system adapt.
          </p>
        </Card>

        <!-- Theme Previews Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Pink Theme Preview -->
          <Card class="p-6 border-2 border-pink-200 dark:border-pink-800">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600"></div>
              <h2 class="text-xl font-semibold text-pink-900 dark:text-pink-100">🌸 Elegant Pink</h2>
            </div>
            <p class="text-pink-700 dark:text-pink-300 text-sm mb-4">
              Soft baby pinks to rich berry tones - perfect for beauty, wellness, and creative brands.
            </p>
            <div class="space-y-3">
              <div class="flex gap-2">
                <div class="w-6 h-6 rounded bg-pink-100 border border-pink-200"></div>
                <div class="w-6 h-6 rounded bg-pink-300"></div>
                <div class="w-6 h-6 rounded bg-pink-500"></div>
                <div class="w-6 h-6 rounded bg-pink-700"></div>
                <div class="w-6 h-6 rounded bg-pink-900"></div>
              </div>
              <div class="text-xs text-pink-600 dark:text-pink-400">
                Light blush • Soft rose • Main pink • Deep berry • Dark berry
              </div>
            </div>
          </Card>

          <!-- Green Theme Preview -->
          <Card class="p-6 border-2 border-green-200 dark:border-green-800">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600"></div>
              <h2 class="text-xl font-semibold text-green-900 dark:text-green-100">🌿 Nature Green</h2>
            </div>
            <p class="text-green-700 dark:text-green-300 text-sm mb-4">
              Soothing muted greens inspired by nature - ideal for health, sustainability, and outdoor brands.
            </p>
            <div class="space-y-3">
              <div class="flex gap-2">
                <div class="w-6 h-6 rounded bg-green-100 border border-green-200"></div>
                <div class="w-6 h-6 rounded bg-green-300"></div>
                <div class="w-6 h-6 rounded bg-green-500"></div>
                <div class="w-6 h-6 rounded bg-green-700"></div>
                <div class="w-6 h-6 rounded bg-green-900"></div>
              </div>
              <div class="text-xs text-green-600 dark:text-green-400">
                Soft mint • Light sage • Nature green • Rich forest • Deep forest
              </div>
            </div>
          </Card>

          <!-- Blue Theme Preview -->
          <Card class="p-6 border-2 border-blue-200 dark:border-blue-800">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <h2 class="text-xl font-semibold text-blue-900 dark:text-blue-100">🌌 Corporate Blue</h2>
            </div>
            <p class="text-blue-700 dark:text-blue-300 text-sm mb-4">
              From light sky to night sky blues - professional and trustworthy for corporate and tech brands.
            </p>
            <div class="space-y-3">
              <div class="flex gap-2">
                <div class="w-6 h-6 rounded bg-blue-100 border border-blue-200"></div>
                <div class="w-6 h-6 rounded bg-blue-300"></div>
                <div class="w-6 h-6 rounded bg-blue-500"></div>
                <div class="w-6 h-6 rounded bg-blue-700"></div>
                <div class="w-6 h-6 rounded bg-blue-900"></div>
              </div>
              <div class="text-xs text-blue-600 dark:text-blue-400">
                Light sky • Soft blue • Corporate blue • Rich navy • Night sky
              </div>
            </div>
          </Card>

          <!-- Default Theme Preview -->
          <Card class="p-6 border-2 border-indigo-200 dark:border-indigo-800">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600"></div>
              <h2 class="text-xl font-semibold text-indigo-900 dark:text-indigo-100">🔵 Default Blue</h2>
            </div>
            <p class="text-indigo-700 dark:text-indigo-300 text-sm mb-4">
              Our classic blue theme - versatile and modern for general applications and SaaS products.
            </p>
            <div class="space-y-3">
              <div class="flex gap-2">
                <div class="w-6 h-6 rounded bg-indigo-100 border border-indigo-200"></div>
                <div class="w-6 h-6 rounded bg-indigo-300"></div>
                <div class="w-6 h-6 rounded bg-indigo-500"></div>
                <div class="w-6 h-6 rounded bg-indigo-700"></div>
                <div class="w-6 h-6 rounded bg-indigo-900"></div>
              </div>
              <div class="text-xs text-indigo-600 dark:text-indigo-400">
                Light blue • Soft blue • Default blue • Deep blue • Dark blue
              </div>
            </div>
          </Card>
        </div>

        <!-- Interactive Components Demo -->
        <Card class="p-6">
          <h2 class="text-xl font-semibold mb-6 text-text-primary">🎛️ Interactive Components</h2>
          
          <div class="space-y-6">
            <!-- Buttons -->
            <div>
              <h3 class="text-lg font-medium mb-3 text-text-primary">Buttons</h3>
              <div class="flex flex-wrap gap-3">
                <Button variant="primary">Primary Action</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="error">Error</Button>
                <Button variant="info">Info</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>

            <!-- Badges -->
            <div>
              <h3 class="text-lg font-medium mb-3 text-text-primary">Badges</h3>
              <div class="flex flex-wrap gap-3">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="info">Info</Badge>
              </div>
            </div>

            <!-- Form Elements -->
            <div>
              <h3 class="text-lg font-medium mb-3 text-text-primary">Form Elements</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                <Input placeholder="Enter your name" label="Full Name" />
                <Input placeholder="Enter your email" label="Email Address" type="email" />
              </div>
            </div>

            <!-- Alerts -->
            <div>
              <h3 class="text-lg font-medium mb-3 text-text-primary">Alerts</h3>
              <div class="space-y-3 max-w-2xl">
                <Alert variant="success" title="Success!" dismissible>
                  Your changes have been saved successfully.
                </Alert>
                <Alert variant="warning" title="Warning" dismissible>
                  Please review your settings before continuing.
                </Alert>
                <Alert variant="error" title="Error" dismissible>
                  There was a problem processing your request.
                </Alert>
                <Alert variant="info" title="Info" dismissible>
                  New features are now available in your dashboard.
                </Alert>
              </div>
            </div>
          </div>
        </Card>

        <!-- Technical Implementation -->
        <Card class="p-6 bg-gray-50 dark:bg-gray-800/50">
          <h2 class="text-xl font-semibold mb-4 text-text-primary">🛠️ Implementation</h2>
          <div class="space-y-4 text-sm">
            <div>
              <h3 class="font-medium text-text-primary mb-2">Theme Switching</h3>
              <p class="text-text-secondary">
                Themes are applied via CSS custom properties and data attributes, ensuring smooth transitions and consistent styling across all components.
              </p>
            </div>
            <div>
              <h3 class="font-medium text-text-primary mb-2">Color Architecture</h3>
              <p class="text-text-secondary">
                Each theme maintains the same semantic structure (50-950 scales) while providing unique color personalities suited for different brand types.
              </p>
            </div>
            <div>
              <h3 class="font-medium text-text-primary mb-2">Dark Mode Support</h3>
              <p class="text-text-secondary">
                All themes include carefully crafted dark mode variants with proper contrast ratios and accessibility considerations.
              </p>
            </div>
          </div>
        </Card>
      </div>
    `,
    }),
}

export const ThemeComparison: Story = {
    render: () => ({
        components: { Button, Card, Badge },
        template: `
      <div class="space-y-8 p-6">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold mb-4">Theme Comparison</h1>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See how the same components look across different themes. Each theme maintains consistency while expressing its unique personality.
          </p>
        </div>

        <!-- Component Showcase -->
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          <!-- Simulated Pink Theme -->
          <Card class="p-6 border-pink-200 bg-gradient-to-br from-pink-50 to-pink-100">
            <div class="space-y-4">
              <div class="flex items-center gap-2 mb-4">
                <div class="w-3 h-3 rounded-full bg-pink-500"></div>
                <span class="text-sm font-medium text-pink-900">Pink Theme</span>
              </div>
              <div style="--primary-500: #ec4899; --primary-600: #db2777; --primary-100: #fce7f3; --primary-200: #fbcfe8;">
                <button class="w-full px-4 py-2 rounded-md text-white font-medium" style="background-color: var(--primary-500);">
                  Primary Button
                </button>
              </div>
              <div class="flex gap-2">
                <span class="px-2 py-1 text-xs rounded" style="background-color: #fce7f3; color: #9d174d;">Success</span>
                <span class="px-2 py-1 text-xs rounded" style="background-color: #fef3c7; color: #92400e;">Warning</span>
              </div>
            </div>
          </Card>

          <!-- Simulated Green Theme -->
          <Card class="p-6 border-green-200 bg-gradient-to-br from-green-50 to-green-100">
            <div class="space-y-4">
              <div class="flex items-center gap-2 mb-4">
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <span class="text-sm font-medium text-green-900">Green Theme</span>
              </div>
              <div>
                <button class="w-full px-4 py-2 rounded-md text-white font-medium bg-green-500 hover:bg-green-600">
                  Primary Button
                </button>
              </div>
              <div class="flex gap-2">
                <span class="px-2 py-1 text-xs rounded bg-green-100 text-green-800">Success</span>
                <span class="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-800">Warning</span>
              </div>
            </div>
          </Card>

          <!-- Simulated Blue Theme -->
          <Card class="p-6 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
            <div class="space-y-4">
              <div class="flex items-center gap-2 mb-4">
                <div class="w-3 h-3 rounded-full bg-blue-500"></div>
                <span class="text-sm font-medium text-blue-900">Blue Theme</span>
              </div>
              <div>
                <button class="w-full px-4 py-2 rounded-md text-white font-medium bg-blue-500 hover:bg-blue-600">
                  Primary Button
                </button>
              </div>
              <div class="flex gap-2">
                <span class="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800">Success</span>
                <span class="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-800">Warning</span>
              </div>
            </div>
          </Card>

          <!-- Current Theme (Live) -->
          <Card class="p-6 border-primary-200 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20">
            <div class="space-y-4">
              <div class="flex items-center gap-2 mb-4">
                <div class="w-3 h-3 rounded-full bg-primary-500"></div>
                <span class="text-sm font-medium text-primary-900 dark:text-primary-100">Current Theme</span>
              </div>
              <Button variant="primary" class="w-full">Primary Button</Button>
              <div class="flex gap-2">
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    `,
    }),
}
