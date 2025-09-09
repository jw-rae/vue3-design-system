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

export const AllVariants: Story = {
    render: () => ({
        components: { Card },
        template: `
      <div class="grid grid-cols-2 gap-4" style="width: 600px;">
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
          <template #header">Filled Card</template>
          <p class="text-sm text-gray-600">Filled variant with background</p>
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
