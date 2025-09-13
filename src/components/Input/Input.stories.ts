import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Input from './Input.vue';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Input component for forms with validation, hints, and various input types.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'The type of input field',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input field',
    },
    label: {
      control: { type: 'text' },
      description: 'Label text for the input',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    hint: {
      control: { type: 'text' },
      description: 'Helper text below the input',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    readonly: {
      control: { type: 'boolean' },
      description: 'Whether the input is readonly',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the input is required',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    size: 'md',
    label: 'Full Name',
    placeholder: 'Enter your full name',
    disabled: false,
    readonly: false,
    required: false,
  },
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<Input v-bind="args" v-model="value" />',
  }),
};

export const WithLabel: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const value = ref('');
      return { value };
    },
    template: `
      <Input 
        v-model="value"
        label="Email Address" 
        type="email"
        placeholder="Enter your email"
        required
      />
    `,
  }),
};

export const WithHint: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const value = ref('');
      return { value };
    },
    template: `
      <Input 
        v-model="value"
        label="Password" 
        type="password"
        placeholder="Enter your password"
        hint="Password must be at least 8 characters long"
      />
    `,
  }),
};

export const WithError: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const value = ref('invalid-email');
      return { value };
    },
    template: `
      <Input 
        v-model="value"
        label="Email Address" 
        type="email"
        placeholder="Enter your email"
        error="Please enter a valid email address"
      />
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const small = ref('');
      const medium = ref('');
      const large = ref('');
      return { small, medium, large };
    },
    template: `
      <div class="space-y-4">
        <Input v-model="small" size="sm" label="Small Input" placeholder="Small size" />
        <Input v-model="medium" size="md" label="Medium Input" placeholder="Medium size" />
        <Input v-model="large" size="lg" label="Large Input" placeholder="Large size" />
      </div>
    `,
  }),
};

export const InputTypes: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const text = ref('');
      const email = ref('');
      const password = ref('');
      const number = ref('');
      const tel = ref('');
      const url = ref('');
      return { text, email, password, number, tel, url };
    },
    template: `
      <div class="space-y-4">
        <Input v-model="text" type="text" label="Text" placeholder="Enter text" />
        <Input v-model="email" type="email" label="Email" placeholder="Enter email" />
        <Input v-model="password" type="password" label="Password" placeholder="Enter password" />
        <Input v-model="number" type="number" label="Number" placeholder="Enter number" />
        <Input v-model="tel" type="tel" label="Phone" placeholder="Enter phone number" />
        <Input v-model="url" type="url" label="Website" placeholder="Enter URL" />
      </div>
    `,
  }),
};

export const States: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const normal = ref('');
      const disabled = ref('Disabled value');
      const readonly = ref('Readonly value');
      return { normal, disabled, readonly };
    },
    template: `
      <div class="space-y-4">
        <Input v-model="normal" label="Normal" placeholder="Normal input" />
        <Input v-model="disabled" label="Disabled" placeholder="Disabled input" disabled />
        <Input v-model="readonly" label="Readonly" placeholder="Readonly input" readonly />
      </div>
    `,
  }),
};

export const FormExample: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const firstName = ref('');
      const lastName = ref('');
      const email = ref('');
      const password = ref('');
      const confirmPassword = ref('');

      return { firstName, lastName, email, password, confirmPassword };
    },
    template: `
      <form class="space-y-4 max-w-md">
        <div class="grid grid-cols-2 gap-4">
          <Input v-model="firstName" label="First Name" placeholder="John" required />
          <Input v-model="lastName" label="Last Name" placeholder="Doe" required />
        </div>
        <Input 
          v-model="email" 
          type="email" 
          label="Email" 
          placeholder="john@example.com" 
          required 
        />
        <Input 
          v-model="password" 
          type="password" 
          label="Password" 
          placeholder="Enter password"
          hint="Must be at least 8 characters"
          required 
        />
        <Input 
          v-model="confirmPassword" 
          type="password" 
          label="Confirm Password" 
          placeholder="Confirm password"
          required 
        />
      </form>
    `,
  }),
};

export const DarkModeShowcase: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const lightInput = ref('Sample text');
      const darkInput = ref('Sample text');
      const lightEmail = ref('user@example.com');
      const darkEmail = ref('user@example.com');

      return { lightInput, darkInput, lightEmail, darkEmail };
    },
    template: `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Light Mode -->
        <div class="p-6 bg-white rounded-lg border">
          <h3 class="text-lg font-semibold text-text-primary mb-4">Light Mode</h3>
          <div class="space-y-4">
            <Input 
              v-model="lightInput"
              label="Text Input"
              placeholder="Enter text..."
              hint="This is how inputs look in light mode"
            />
            <Input 
              v-model="lightEmail"
              type="email"
              label="Email Input"
              placeholder="your@email.com"
            />
            <Input 
              label="Error State"
              placeholder="Invalid input"
              error="This field is required"
            />
            <p class="text-sm text-text-secondary">
              Clean, accessible inputs with proper contrast.
            </p>
          </div>
        </div>

        <!-- Dark Mode -->
        <div class="dark">
          <div class="p-6 bg-gray-900 rounded-lg border border-gray-700">
            <h3 class="text-lg font-semibold text-white mb-4">Dark Mode</h3>
            <div class="space-y-4">
              <Input 
                v-model="darkInput"
                label="Text Input"
                placeholder="Enter text..."
                hint="This is how inputs look in dark mode"
              />
              <Input 
                v-model="darkEmail"
                type="email"
                label="Email Input"
                placeholder="your@email.com"
              />
              <Input 
                label="Error State"
                placeholder="Invalid input"
                error="This field is required"
              />
              <p class="text-sm text-text-disabled">
                Dark inputs with enhanced readability and reduced eye strain.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
