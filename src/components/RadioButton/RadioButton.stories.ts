import type { Meta, StoryObj } from '@storybook/vue3';
import RadioButton from './RadioButton.vue';
import { ref } from 'vue';

const meta: Meta<typeof RadioButton> = {
    title: 'Components/RadioButton',
    component: RadioButton,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A radio button group component for single selection from multiple options. Supports both simple arrays and object-based options with labels and values.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        modelValue: {
            control: { type: 'text' },
            description: 'The currently selected value',
        },
        options: {
            control: { type: 'object' },
            description: 'Array of options (strings, numbers, or objects with label/value)',
        },
        name: {
            control: { type: 'text' },
            description: 'The name attribute for the radio group',
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Whether the entire radio group is disabled',
        },
        direction: {
            control: { type: 'select' },
            options: ['horizontal', 'vertical'],
            description: 'Layout direction of the radio options',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Size of the radio buttons',
        },
        diagonal: {
            control: { type: 'boolean' },
            description: 'Whether to use diagonal sci-fi style corners',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        options: ['Option A', 'Option B', 'Option C'],
        name: 'default-radio',
        disabled: false,
        direction: 'vertical',
        size: 'md',
        diagonal: false,
    },
    render: (args) => ({
        components: { RadioButton },
        setup() {
            const selectedValue = ref('Option A');
            return { args, selectedValue };
        },
        template: `
      <div>
        <RadioButton v-bind="args" v-model="selectedValue" />
        <p class="mt-4 text-sm text-gray-600">Selected: {{ selectedValue }}</p>
      </div>
    `,
    }),
};

export const ObjectOptions: Story = {
    render: () => ({
        components: { RadioButton },
        setup() {
            const selectedValue = ref('small');
            const options = [
                { label: 'Small (S)', value: 'small' },
                { label: 'Medium (M)', value: 'medium' },
                { label: 'Large (L)', value: 'large' },
                { label: 'Extra Large (XL)', value: 'xl', disabled: true },
            ];
            return { selectedValue, options };
        },
        template: `
      <div>
        <RadioButton 
          v-model="selectedValue" 
          :options="options"
          name="size-radio"
        />
        <p class="mt-4 text-sm text-gray-600">Selected: {{ selectedValue }}</p>
      </div>
    `,
    }),
};

export const HorizontalLayout: Story = {
    render: () => ({
        components: { RadioButton },
        setup() {
            const selectedValue = ref('blue');
            const options = ['Red', 'Green', 'Blue', 'Yellow'];
            return { selectedValue, options };
        },
        template: `
      <div>
        <RadioButton 
          v-model="selectedValue" 
          :options="options"
          direction="horizontal"
          name="color-radio"
        />
        <p class="mt-4 text-sm text-gray-600">Selected: {{ selectedValue }}</p>
      </div>
    `,
    }),
};

export const AllSizes: Story = {
    render: () => ({
        components: { RadioButton },
        setup() {
            const small = ref('Option 1');
            const medium = ref('Option 2');
            const large = ref('Option 3');
            const options = ['Option 1', 'Option 2', 'Option 3'];
            return { small, medium, large, options };
        },
        template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-medium mb-3">Small</h3>
          <RadioButton 
            v-model="small" 
            :options="options"
            size="sm"
            name="small-radio"
          />
        </div>
        <div>
          <h3 class="text-sm font-medium mb-3">Medium</h3>
          <RadioButton 
            v-model="medium" 
            :options="options"
            size="md"
            name="medium-radio"
          />
        </div>
        <div>
          <h3 class="text-sm font-medium mb-3">Large</h3>
          <RadioButton 
            v-model="large" 
            :options="options"
            size="lg"
            name="large-radio"
          />
        </div>
      </div>
    `,
    }),
};

export const DiagonalStyle: Story = {
    render: () => ({
        components: { RadioButton },
        setup() {
            const selectedValue = ref('feature-a');
            const options = [
                { label: 'Feature Alpha', value: 'feature-a' },
                { label: 'Feature Beta', value: 'feature-b' },
                { label: 'Feature Gamma', value: 'feature-c' },
            ];
            return { selectedValue, options };
        },
        template: `
      <div>
        <RadioButton 
          v-model="selectedValue" 
          :options="options"
          diagonal
          name="diagonal-radio"
        />
        <p class="mt-4 text-sm text-gray-600">Selected: {{ selectedValue }}</p>
      </div>
    `,
    }),
};

export const DisabledStates: Story = {
    render: () => ({
        components: { RadioButton },
        setup() {
            const selectedValue = ref('option2');
            const options = [
                { label: 'Available Option', value: 'option1' },
                { label: 'Selected Option', value: 'option2' },
                { label: 'Disabled Option', value: 'option3', disabled: true },
            ];
            return { selectedValue, options };
        },
        template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-medium mb-3">Individual Disabled Options</h3>
          <RadioButton 
            v-model="selectedValue" 
            :options="options"
            name="disabled-individual"
          />
        </div>
        <div>
          <h3 class="text-sm font-medium mb-3">Entirely Disabled Group</h3>
          <RadioButton 
            v-model="selectedValue" 
            :options="['Option A', 'Option B', 'Option C']"
            disabled
            name="disabled-group"
          />
        </div>
      </div>
    `,
    }),
};

export const FormExample: Story = {
    render: () => ({
        components: { RadioButton },
        setup() {
            const paymentMethod = ref('credit-card');
            const deliverySpeed = ref('standard');
            const notifications = ref('email');

            const paymentOptions = [
                { label: 'Credit Card', value: 'credit-card' },
                { label: 'PayPal', value: 'paypal' },
                { label: 'Bank Transfer', value: 'bank-transfer' },
            ];

            const deliveryOptions = [
                { label: 'Standard (5-7 days)', value: 'standard' },
                { label: 'Express (2-3 days)', value: 'express' },
                { label: 'Overnight', value: 'overnight' },
            ];

            const notificationOptions = [
                { label: 'Email notifications', value: 'email' },
                { label: 'SMS notifications', value: 'sms' },
                { label: 'No notifications', value: 'none' },
            ];

            return {
                paymentMethod,
                deliverySpeed,
                notifications,
                paymentOptions,
                deliveryOptions,
                notificationOptions
            };
        },
        template: `
      <div class="max-w-md space-y-6">
        <div>
          <h3 class="text-lg font-medium mb-3">Payment Method</h3>
          <RadioButton 
            v-model="paymentMethod" 
            :options="paymentOptions"
            name="payment"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-medium mb-3">Delivery Speed</h3>
          <RadioButton 
            v-model="deliverySpeed" 
            :options="deliveryOptions"
            name="delivery"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-medium mb-3">Notifications</h3>
          <RadioButton 
            v-model="notifications" 
            :options="notificationOptions"
            name="notifications"
            direction="horizontal"
            size="sm"
          />
        </div>

        <div class="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h4 class="font-medium mb-2">Selected Values:</h4>
          <ul class="text-sm text-gray-600 dark:text-gray-400">
            <li>Payment: {{ paymentMethod }}</li>
            <li>Delivery: {{ deliverySpeed }}</li>
            <li>Notifications: {{ notifications }}</li>
          </ul>
        </div>
      </div>
    `,
    }),
};

export const DarkModeShowcase: Story = {
    render: () => ({
        components: { RadioButton },
        setup() {
            const lightValue = ref('option-2');
            const darkValue = ref('option-2');
            const options = ['Option 1', 'Option 2', 'Option 3'];
            return { lightValue, darkValue, options };
        },
        template: `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Light Mode -->
        <div class="p-6 bg-white rounded-lg border">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Light Mode</h3>
          <RadioButton 
            v-model="lightValue" 
            :options="options"
            name="light-radio"
          />
          <p class="mt-4 text-sm text-gray-600">Selected: {{ lightValue }}</p>
        </div>

        <!-- Dark Mode -->
        <div class="dark">
          <div class="p-6 bg-gray-900 rounded-lg border border-gray-700">
            <h3 class="text-lg font-semibold text-white mb-4">Dark Mode</h3>
            <RadioButton 
              v-model="darkValue" 
              :options="options"
              name="dark-radio"
            />
            <p class="mt-4 text-sm text-gray-400">Selected: {{ darkValue }}</p>
          </div>
        </div>
      </div>
    `,
    }),
};
