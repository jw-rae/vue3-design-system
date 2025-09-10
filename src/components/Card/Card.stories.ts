import type { Meta, StoryObj } from '@storybook/vue3';
import Card from './Card.vue';
import Button from '../Button/Button.vue';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card component for displaying content in a contained layout.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'elevated', 'filled'],
      description: 'The visual style variant of the card',
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'The padding size inside the card',
    },
    rounded: {
      control: { type: 'boolean' },
      description: 'Whether the card has rounded corners',
    },
    hoverable: {
      control: { type: 'boolean' },
      description: 'Whether the card has hover effects',
    },
    filledHeader: {
      control: { type: 'boolean' },
      description: 'Whether the header has a prominent filled background',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    padding: 'md',
    rounded: true,
    hoverable: false,
    filledHeader: false,
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args" style="width: 300px;">
        <template #header>
          <h3 class="text-lg font-semibold">Card Title</h3>
        </template>
        <p class="text-gray-600">
          This is the card content. It can contain any type of content including text, images, and other components.
        </p>
        <template #footer>
          <div class="flex justify-end space-x-2">
            <button class="px-3 py-1 text-sm border rounded">Cancel</button>
            <button class="px-3 py-1 text-sm bg-blue-500 text-white rounded">Save</button>
          </div>
        </template>
      </Card>
    `,
  }),
};

export const WithoutHeaderFooter: Story = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card style="width: 300px;">
        <p class="text-gray-600">
          This is a simple card with just content, no header or footer.
        </p>
      </Card>
    `,
  }),
};

export const FilledHeader: Story = {
  args: {
    variant: 'default',
    padding: 'md',
    rounded: true,
    hoverable: false,
    filledHeader: true,
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args" style="width: 300px;">
        <template #header>
          <h3 class="text-lg font-semibold">Filled Header Card</h3>
        </template>
        <p class="text-gray-600">
          This card has a prominent filled header with white text on a colored background.
        </p>
        <template #footer>
          <div class="flex justify-end space-x-2">
            <button class="px-3 py-1 text-sm border rounded">Cancel</button>
            <button class="px-3 py-1 text-sm bg-blue-500 text-white rounded">Save</button>
          </div>
        </template>
      </Card>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    components: { Card },
    template: `
      <div class="grid grid-cols-2 gap-4" style="width: 800px;">
        <Card variant="default">
          <template #header>Default Card</template>
          <p class="text-sm text-gray-600">Default variant with border</p>
        </Card>
        <Card variant="outlined">
          <template #header>Outlined Card</template>
          <p class="text-sm text-gray-600">Outlined variant with thicker border</p>
        </Card>
        <Card variant="elevated">
          <template #header>Elevated Card</template>
          <p class="text-sm text-gray-600">Elevated variant with shadow</p>
        </Card>
        <Card variant="filled">
          <template #header>Filled Card</template>
          <p class="text-sm text-gray-600">Filled variant with background</p>
        </Card>
        <Card variant="default" :filled-header="true">
          <template #header>Filled Header</template>
          <p class="text-sm text-gray-600">Default variant with filled header</p>
        </Card>
        <Card variant="elevated" :filled-header="true">
          <template #header>Elevated + Filled Header</template>
          <p class="text-sm text-gray-600">Combination of variants</p>
        </Card>
      </div>
    `,
  }),
};

export const Interactive: Story = {
  render: () => ({
    components: { Card, Button },
    template: `
      <div class="space-y-4" style="width: 400px;">
        <Card hoverable>
          <template #header>
            <h3 class="text-lg font-semibold">Interactive Card</h3>
          </template>
          <p class="text-gray-600 mb-4">
            This card has hover effects. Try hovering over it!
          </p>
          <Button variant="primary" size="sm">Learn More</Button>
        </Card>
      </div>
    `,
  }),
};

export const DarkModeShowcase: Story = {
  render: () => ({
    components: { Card, Button },
    template: `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Light Mode -->
        <div class="p-6 bg-white rounded-lg border">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Light Mode</h3>
          <div class="space-y-4">
            <Card variant="default">
              <template #header>
                <h4 class="font-semibold">Product Card</h4>
              </template>
              <p class="text-gray-600 text-sm">
                Beautiful cards with proper spacing and typography for light backgrounds.
              </p>
              <template #footer>
                <Button variant="primary" size="sm">View Details</Button>
              </template>
            </Card>
            
            <Card variant="elevated">
              <template #header>
                <h4 class="font-semibold">Elevated Card</h4>
              </template>
              <p class="text-gray-600 text-sm">
                Elevated cards with shadows work great in light mode.
              </p>
            </Card>
          </div>
        </div>

        <!-- Dark Mode -->
        <div class="dark">
          <div class="p-6 bg-gray-900 rounded-lg border border-gray-700">
            <h3 class="text-lg font-semibold text-white mb-4">Dark Mode</h3>
            <div class="space-y-4">
              <Card variant="default">
                <template #header>
                  <h4 class="font-semibold">Product Card</h4>
                </template>
                <p class="text-gray-300 text-sm">
                  Cards automatically adapt with dark backgrounds and proper contrast ratios.
                </p>
                <template #footer>
                  <Button variant="primary" size="sm">View Details</Button>
                </template>
              </Card>
              
              <Card variant="elevated">
                <template #header>
                  <h4 class="font-semibold">Elevated Card</h4>
                </template>
                <p class="text-gray-300 text-sm">
                  Dark mode enhances shadows and maintains visual hierarchy.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
