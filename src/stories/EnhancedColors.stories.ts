import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '../components/Button/Button.vue'
import Card from '../components/Card/Card.vue'
import Badge from '../components/Badge/Badge.vue'

const meta: Meta = {
    title: 'Design System/Enhanced Colors',
    parameters: {
        docs: {
            description: {
                component: 'Showcasing the enhanced color palette with better semantic colors and expanded brand options.',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof meta>

export const ColorPalette: Story = {
    render: () => ({
        components: { Button, Card, Badge },
        template: `
      <div class="space-y-8 p-6">
        <!-- Primary Colors -->
        <Card class="p-6">
          <h2 class="text-xl font-semibold mb-4">Primary Brand Colors</h2>
          <div class="grid grid-cols-11 gap-2 mb-4">
            <div class="text-xs text-center">50</div>
            <div class="text-xs text-center">100</div>
            <div class="text-xs text-center">200</div>
            <div class="text-xs text-center">300</div>
            <div class="text-xs text-center">400</div>
            <div class="text-xs text-center font-bold">500</div>
            <div class="text-xs text-center">600</div>
            <div class="text-xs text-center">700</div>
            <div class="text-xs text-center">800</div>
            <div class="text-xs text-center">900</div>
            <div class="text-xs text-center">950</div>
          </div>
          <div class="grid grid-cols-11 gap-2">
            <div class="h-12 bg-primary-50 rounded border"></div>
            <div class="h-12 bg-primary-100 rounded"></div>
            <div class="h-12 bg-primary-200 rounded"></div>
            <div class="h-12 bg-primary-300 rounded"></div>
            <div class="h-12 bg-primary-400 rounded"></div>
            <div class="h-12 bg-primary-500 rounded ring-2 ring-gray-800"></div>
            <div class="h-12 bg-primary-600 rounded"></div>
            <div class="h-12 bg-primary-700 rounded"></div>
            <div class="h-12 bg-primary-800 rounded"></div>
            <div class="h-12 bg-primary-900 rounded"></div>
            <div class="h-12 bg-primary-950 rounded border border-gray-200"></div>
          </div>
        </Card>

        <!-- Semantic Colors in Action -->
        <Card class="p-6">
          <h2 class="text-xl font-semibold mb-4">Semantic Colors in Action</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="space-y-3">
              <h3 class="font-medium text-success-700">Success States</h3>
              <Badge variant="success">Active</Badge>
              <Button variant="success" size="sm">Complete</Button>
              <div class="p-3 bg-success-50 border border-success-200 rounded text-success-800 text-sm">
                Operation successful!
              </div>
            </div>
            
            <div class="space-y-3">
              <h3 class="font-medium text-warning-700">Warning States</h3>
              <Badge variant="warning">Pending</Badge>
              <Button variant="warning" size="sm">Review</Button>
              <div class="p-3 bg-warning-50 border border-warning-200 rounded text-warning-800 text-sm">
                Please review changes
              </div>
            </div>
            
            <div class="space-y-3">
              <h3 class="font-medium text-error-700">Error States</h3>
              <Badge variant="error">Failed</Badge>
              <Button variant="error" size="sm">Retry</Button>
              <div class="p-3 bg-error-50 border border-error-200 rounded text-error-800 text-sm">
                Something went wrong
              </div>
            </div>
            
            <div class="space-y-3">
              <h3 class="font-medium text-info-700">Info States</h3>
              <Badge variant="info">New</Badge>
              <Button variant="info" size="sm">Learn More</Button>
              <div class="p-3 bg-info-50 border border-info-200 rounded text-info-800 text-sm">
                Additional information
              </div>
            </div>
          </div>
        </Card>

        <!-- Surface Colors -->
        <Card class="p-6">
          <h2 class="text-xl font-semibold mb-4">Surface & Background Colors</h2>
          <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="p-4 bg-surface-primary border rounded">
                <div class="text-sm font-medium text-text-primary">Primary Surface</div>
                <div class="text-xs text-text-secondary">Main content areas</div>
              </div>
              <div class="p-4 bg-surface-secondary border rounded">
                <div class="text-sm font-medium text-text-primary">Secondary Surface</div>
                <div class="text-xs text-text-secondary">Sidebar, navigation</div>
              </div>
              <div class="p-4 bg-surface-elevated border rounded shadow-md">
                <div class="text-sm font-medium text-text-primary">Elevated Surface</div>
                <div class="text-xs text-text-secondary">Cards, modals</div>
              </div>
            </div>
          </div>
        </Card>

        <!-- Gray Scale -->
        <Card class="p-6">
          <h2 class="text-xl font-semibold mb-4">Enhanced Gray Scale</h2>
          <div class="grid grid-cols-11 gap-2 mb-2">
            <div class="text-xs text-center">50</div>
            <div class="text-xs text-center">100</div>
            <div class="text-xs text-center">200</div>
            <div class="text-xs text-center">300</div>
            <div class="text-xs text-center">400</div>
            <div class="text-xs text-center">500</div>
            <div class="text-xs text-center">600</div>
            <div class="text-xs text-center">700</div>
            <div class="text-xs text-center">800</div>
            <div class="text-xs text-center">900</div>
            <div class="text-xs text-center">950</div>
          </div>
          <div class="grid grid-cols-11 gap-2">
            <div class="h-12 bg-gray-50 rounded border"></div>
            <div class="h-12 bg-gray-100 rounded"></div>
            <div class="h-12 bg-gray-200 rounded"></div>
            <div class="h-12 bg-gray-300 rounded"></div>
            <div class="h-12 bg-gray-400 rounded"></div>
            <div class="h-12 bg-gray-500 rounded"></div>
            <div class="h-12 bg-gray-600 rounded"></div>
            <div class="h-12 bg-gray-700 rounded"></div>
            <div class="h-12 bg-gray-800 rounded"></div>
            <div class="h-12 bg-gray-900 rounded"></div>
            <div class="h-12 bg-gray-950 rounded border border-gray-200"></div>
          </div>
        </Card>

        <!-- Dark Mode Preview -->
        <Card class="p-6 bg-gray-900 text-white">
          <h2 class="text-xl font-semibold mb-4">Dark Mode Colors</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="space-y-3">
              <Badge variant="success">Success Dark</Badge>
              <div class="p-3 bg-success-900/20 border border-success-700/30 rounded text-success-300 text-sm">
                Dark success state
              </div>
            </div>
            <div class="space-y-3">
              <Badge variant="warning">Warning Dark</Badge>
              <div class="p-3 bg-warning-900/20 border border-warning-700/30 rounded text-warning-300 text-sm">
                Dark warning state
              </div>
            </div>
            <div class="space-y-3">
              <Badge variant="error">Error Dark</Badge>
              <div class="p-3 bg-error-900/20 border border-error-700/30 rounded text-error-300 text-sm">
                Dark error state
              </div>
            </div>
            <div class="space-y-3">
              <Badge variant="info">Info Dark</Badge>
              <div class="p-3 bg-info-900/20 border border-info-700/30 rounded text-info-300 text-sm">
                Dark info state
              </div>
            </div>
          </div>
        </Card>
      </div>
    `,
    }),
}
