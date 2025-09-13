import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Select from './Select.vue';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Accessible select dropdown component with search, multiple selection, and custom options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: { type: 'object' },
      description: 'Array of option objects with value and label',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text when no option is selected',
    },
    multiple: {
      control: { type: 'boolean' },
      description: 'Allow multiple selection',
    },
    searchable: {
      control: { type: 'boolean' },
      description: 'Enable search functionality',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the select is disabled',
    },
    label: {
      control: { type: 'text' },
      description: 'Label for the select field',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select a fruit...',
    multiple: false,
    searchable: false,
    disabled: false,
  },
  render: (args) => ({
    components: { Select },
    setup() {
      const selected = ref(null);
      return { args, selected };
    },
    template: '<Select v-bind="args" v-model="selected" />',
  }),
};

export const WithLabel: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const selected = ref(null);
      const options = [
        { value: 'us', label: 'United States' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'ca', label: 'Canada' },
        { value: 'au', label: 'Australia' },
        { value: 'de', label: 'Germany' },
      ];
      return { selected, options };
    },
    template: `
      <Select 
        v-model="selected"
        :options="options"
        label="Country"
        placeholder="Select your country..."
      />
    `,
  }),
};

export const Searchable: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const selected = ref(null);
      const options = [
        { value: 'js', label: 'JavaScript' },
        { value: 'ts', label: 'TypeScript' },
        { value: 'py', label: 'Python' },
        { value: 'java', label: 'Java' },
        { value: 'cpp', label: 'C++' },
        { value: 'rust', label: 'Rust' },
        { value: 'go', label: 'Go' },
        { value: 'php', label: 'PHP' },
        { value: 'ruby', label: 'Ruby' },
        { value: 'swift', label: 'Swift' },
      ];
      return { selected, options };
    },
    template: `
      <Select 
        v-model="selected"
        :options="options"
        label="Programming Language"
        placeholder="Search for a language..."
        searchable
      />
    `,
  }),
};

export const Multiple: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const selected = ref([]);
      const options = [
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue.js' },
        { value: 'angular', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'alpine', label: 'Alpine.js' },
        { value: 'lit', label: 'Lit' },
      ];
      return { selected, options };
    },
    template: `
      <Select 
        v-model="selected"
        :options="options"
        label="Frontend Frameworks"
        placeholder="Select frameworks..."
        multiple
      />
    `,
  }),
};

export const MultipleSearchable: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const selected = ref([]);
      const options = [
        { value: 'reading', label: 'Reading' },
        { value: 'writing', label: 'Writing' },
        { value: 'cooking', label: 'Cooking' },
        { value: 'gaming', label: 'Gaming' },
        { value: 'sports', label: 'Sports' },
        { value: 'music', label: 'Music' },
        { value: 'travel', label: 'Travel' },
        { value: 'photography', label: 'Photography' },
        { value: 'gardening', label: 'Gardening' },
        { value: 'hiking', label: 'Hiking' },
        { value: 'cycling', label: 'Cycling' },
        { value: 'swimming', label: 'Swimming' },
      ];
      return { selected, options };
    },
    template: `
      <Select 
        v-model="selected"
        :options="options"
        label="Hobbies & Interests"
        placeholder="Search and select your interests..."
        multiple
        searchable
      />
    `,
  }),
};

export const WithError: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const selected = ref(null);
      const options = [
        { value: 'small', label: 'Small (1-10 employees)' },
        { value: 'medium', label: 'Medium (11-50 employees)' },
        { value: 'large', label: 'Large (51-200 employees)' },
        { value: 'enterprise', label: 'Enterprise (200+ employees)' },
      ];
      return { selected, options };
    },
    template: `
      <Select 
        v-model="selected"
        :options="options"
        label="Company Size"
        placeholder="Select company size..."
        error="Please select your company size to continue"
      />
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const selected = ref({ value: 'disabled', label: 'Pre-selected Option' });
      const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'disabled', label: 'Pre-selected Option' },
      ];
      return { selected, options };
    },
    template: `
      <Select 
        v-model="selected"
        :options="options"
        label="Disabled Select"
        placeholder="This select is disabled"
        disabled
      />
    `,
  }),
};

export const LongOptions: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const selected = ref(null);
      const options = [
        { value: 'option1', label: 'This is a very long option text that might overflow in some designs' },
        { value: 'option2', label: 'Another extremely long option that demonstrates text wrapping' },
        { value: 'option3', label: 'Short option' },
        { value: 'option4', label: 'Medium length option text' },
        { value: 'option5', label: 'Yet another very long option text that could potentially cause layout issues if not handled properly' },
      ];
      return { selected, options };
    },
    template: `
      <Select 
        v-model="selected"
        :options="options"
        label="Long Options"
        placeholder="Select an option with long text..."
        searchable
      />
    `,
  }),
};

export const FormExample: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const formData = ref({
        country: null,
        state: null,
        skills: [],
        experience: null,
      });

      const countries = [
        { value: 'us', label: 'United States' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'ca', label: 'Canada' },
        { value: 'au', label: 'Australia' },
      ];

      const states = [
        { value: 'ca', label: 'California' },
        { value: 'ny', label: 'New York' },
        { value: 'tx', label: 'Texas' },
        { value: 'fl', label: 'Florida' },
      ];

      const skills = [
        { value: 'js', label: 'JavaScript' },
        { value: 'vue', label: 'Vue.js' },
        { value: 'react', label: 'React' },
        { value: 'node', label: 'Node.js' },
        { value: 'python', label: 'Python' },
        { value: 'sql', label: 'SQL' },
      ];

      const experienceLevels = [
        { value: 'junior', label: 'Junior (0-2 years)' },
        { value: 'mid', label: 'Mid-level (2-5 years)' },
        { value: 'senior', label: 'Senior (5-10 years)' },
        { value: 'lead', label: 'Lead (10+ years)' },
      ];

      return { formData, countries, states, skills, experienceLevels };
    },
    template: `
      <form class="space-y-6 max-w-md">
        <h3 class="text-lg font-semibold text-text-primary">Developer Profile</h3>
        
        <div class="grid grid-cols-2 gap-4">
          <Select 
            v-model="formData.country"
            :options="countries"
            label="Country"
            placeholder="Select country..."
          />
          <Select 
            v-model="formData.state"
            :options="states"
            label="State/Province"
            placeholder="Select state..."
            :disabled="!formData.country"
          />
        </div>
        
        <Select 
          v-model="formData.skills"
          :options="skills"
          label="Technical Skills"
          placeholder="Select your skills..."
          multiple
          searchable
        />
        
        <Select 
          v-model="formData.experience"
          :options="experienceLevels"
          label="Experience Level"
          placeholder="Select experience level..."
        />
        
        <div class="pt-4">
          <button 
            type="submit" 
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Save Profile
          </button>
        </div>
      </form>
    `,
  }),
};
