import type { Meta, StoryObj } from '@storybook/vue3';
import Alert from './Alert.vue';

const meta: Meta<typeof Alert> = {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'Alert component for displaying important messages with different severity levels.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['success', 'warning', 'error', 'info'],
            description: 'The type of alert message',
        },
        title: {
            control: { type: 'text' },
            description: 'Optional title for the alert',
        },
        dismissible: {
            control: { type: 'boolean' },
            description: 'Whether the alert can be dismissed',
        },
        showIcon: {
            control: { type: 'boolean' },
            description: 'Whether to show the alert icon',
        },
        filled: {
            control: { type: 'boolean' },
            description: 'Whether to use filled style with semantic colored backgrounds',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
    args: {
        variant: 'success',
        title: 'Success!',
        dismissible: false,
        showIcon: true,
    },
    render: (args) => ({
        components: { Alert },
        setup() {
            return { args };
        },
        template: '<Alert v-bind="args">Your changes have been saved successfully.</Alert>',
    }),
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        title: 'Warning',
        dismissible: false,
        showIcon: true,
    },
    render: (args) => ({
        components: { Alert },
        setup() {
            return { args };
        },
        template: '<Alert v-bind="args">Please review your input before proceeding.</Alert>',
    }),
};

export const Error: Story = {
    args: {
        variant: 'error',
        title: 'Error',
        dismissible: false,
        showIcon: true,
    },
    render: (args) => ({
        components: { Alert },
        setup() {
            return { args };
        },
        template: '<Alert v-bind="args">There was an error processing your request.</Alert>',
    }),
};

export const Info: Story = {
    args: {
        variant: 'info',
        title: 'Information',
        dismissible: false,
        showIcon: true,
    },
    render: (args) => ({
        components: { Alert },
        setup() {
            return { args };
        },
        template: '<Alert v-bind="args">This is some helpful information.</Alert>',
    }),
};

export const Dismissible: Story = {
    args: {
        variant: 'info',
        title: 'Dismissible Alert',
        dismissible: true,
        showIcon: true,
    },
    render: (args) => ({
        components: { Alert },
        setup() {
            return { args };
        },
        template: '<Alert v-bind="args">Click the X to dismiss this alert.</Alert>',
    }),
};

export const WithoutIcon: Story = {
    args: {
        variant: 'info',
        showIcon: false,
    },
    render: (args) => ({
        components: { Alert },
        setup() {
            return { args };
        },
        template: '<Alert v-bind="args">This alert has no icon.</Alert>',
    }),
};

export const WithoutTitle: Story = {
    args: {
        variant: 'success',
        showIcon: true,
    },
    render: (args) => ({
        components: { Alert },
        setup() {
            return { args };
        },
        template: '<Alert v-bind="args">This is an alert without a title.</Alert>',
    }),
};

export const AllVariants: Story = {
    render: () => ({
        components: { Alert },
        template: `
      <div class="space-y-4">
        <Alert variant="success" title="Success">Operation completed successfully!</Alert>
        <Alert variant="warning" title="Warning">Please double-check your input.</Alert>
        <Alert variant="error" title="Error">Something went wrong.</Alert>
        <Alert variant="info" title="Info">Here's some useful information.</Alert>
      </div>
    `,
    }),
};

export const FilledSemantic: Story = {
    args: {
        variant: 'error',
        title: 'Filled Alert',
        filled: true,
        dismissible: false,
        showIcon: true,
    },
    render: (args) => ({
        components: { Alert },
        setup() {
            return { args };
        },
        template: '<Alert v-bind="args">This is a filled alert with semantic colored background.</Alert>',
    }),
};

export const FilledVariants: Story = {
    render: () => ({
        components: { Alert },
        template: `
      <div class="space-y-4">
        <Alert variant="success" title="Success" filled>Filled success alert with slightly green background!</Alert>
        <Alert variant="warning" title="Warning" filled>Filled warning alert with slightly amber background.</Alert>
        <Alert variant="error" title="Error" filled>Filled error alert with slightly red background.</Alert>
        <Alert variant="info" title="Info" filled>Filled info alert with slightly blue background.</Alert>
      </div>
    `,
    }),
};

export const RegularVsFilled: Story = {
    render: () => ({
        components: { Alert },
        template: `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Regular Alerts -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-text-primary mb-4">Regular Alerts</h3>
          <Alert variant="success" title="Success">
            Regular success alert with theme colors.
          </Alert>
          <Alert variant="warning" title="Warning">
            Regular warning alert with theme colors.
          </Alert>
          <Alert variant="error" title="Error">
            Regular error alert with theme colors.
          </Alert>
          <Alert variant="info" title="Info">
            Regular info alert with theme colors.
          </Alert>
        </div>

        <!-- Filled Alerts -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-text-primary mb-4">Filled Alerts</h3>
          <Alert variant="success" title="Success" filled>
            Filled alert with green background.
          </Alert>
          <Alert variant="warning" title="Warning" filled>
            Filled alert with amber background.
          </Alert>
          <Alert variant="error" title="Error" filled>
            Filled alert with red background.
          </Alert>
          <Alert variant="info" title="Info" filled>
            Filled alert with blue background.
          </Alert>
        </div>
      </div>
    `,
    }),
};

export const DarkModeShowcase: Story = {
    render: () => ({
        components: { Alert },
        template: `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Light Mode -->
        <div class="p-6 bg-white rounded-lg border">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Light Mode</h3>
          <div class="space-y-3 mb-6">
            <h4 class="text-sm font-medium text-gray-700">Regular Alerts</h4>
            <Alert variant="success" title="Success">
              Data saved successfully in light mode.
            </Alert>
            <Alert variant="warning" title="Warning">
              Check your input before continuing.
            </Alert>
            <Alert variant="error" title="Error">
              An error occurred while processing.
            </Alert>
            <Alert variant="info" title="Info">
              Helpful information for users.
            </Alert>
          </div>
          <div class="space-y-3">
            <h4 class="text-sm font-medium text-gray-700">Filled Alerts</h4>
            <Alert variant="success" title="Success" filled>
              Filled success with green background.
            </Alert>
            <Alert variant="warning" title="Warning" filled>
              Filled warning with amber background.
            </Alert>
            <Alert variant="error" title="Error" filled>
              Filled error with red background.
            </Alert>
            <Alert variant="info" title="Info" filled>
              Filled info with blue background.
            </Alert>
          </div>
        </div>

        <!-- Dark Mode -->
        <div class="dark">
          <div class="p-6 bg-gray-900 rounded-lg border border-gray-700">
            <h3 class="text-lg font-semibold text-white mb-4">Dark Mode</h3>
            <div class="space-y-3 mb-6">
              <h4 class="text-sm font-medium text-gray-300">Regular Alerts</h4>
              <Alert variant="success" title="Success">
                Data saved successfully in dark mode.
              </Alert>
              <Alert variant="warning" title="Warning">
                Check your input before continuing.
              </Alert>
              <Alert variant="error" title="Error">
                An error occurred while processing.
              </Alert>
              <Alert variant="info" title="Info">
                Helpful information for users.
              </Alert>
            </div>
            <div class="space-y-3">
              <h4 class="text-sm font-medium text-gray-300">Filled Alerts</h4>
              <Alert variant="success" title="Success" filled>
                Filled success with green background.
              </Alert>
              <Alert variant="warning" title="Warning" filled>
                Filled warning with amber background.
              </Alert>
              <Alert variant="error" title="Error" filled>
                Filled error with red background.
              </Alert>
              <Alert variant="info" title="Info" filled>
                Filled info with blue background.
              </Alert>
            </div>
            <p class="text-xs text-gray-400 mt-3">
              Alerts use semantic colors and adapt to dark mode.
            </p>
          </div>
        </div>
      </div>
    `,
    }),
};
