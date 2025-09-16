import Scrollbar from './Scrollbar.vue';
import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Scrollbar> = {
    title: 'Components/Scrollbar',
    component: Scrollbar,
    argTypes: {
        width: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Scrollbar width variant',
        },
    },
    args: {
        width: 'md',
    },
};

export default meta;

type Story = StoryObj<typeof Scrollbar>;

export const Default: Story = {
    render: (args) => ({
        components: { Scrollbar },
        setup: () => ({ args }),
        template: `
      <Scrollbar v-bind="args" style="height: 180px; max-width: 320px; border: 1px solid #eee;">
        <div style="height: 600px; padding: 1rem;">
          <div v-for="i in 30" :key="i">Row {{ i }}</div>
        </div>
      </Scrollbar>
    `,
    }),
};

export const Small: Story = {
    args: { width: 'sm' },
};

export const Large: Story = {
    args: { width: 'lg' },
};
