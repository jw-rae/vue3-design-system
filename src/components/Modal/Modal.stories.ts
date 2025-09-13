import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Modal from './Modal.vue';
import Button from '../Button/Button.vue';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Modal dialog component with backdrop, focus management, and accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Whether the modal is open',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'The size of the modal',
    },
    title: {
      control: { type: 'text' },
      description: 'The title of the modal',
    },
    showCloseButton: {
      control: { type: 'boolean' },
      description: 'Whether to show the close button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    size: 'md',
    title: 'Default Modal',
    showCloseButton: true,
  },
  render: (args) => ({
    components: { Modal, Button },
    setup() {
      const isOpen = ref(args.open || false);

      const openModal = () => {
        isOpen.value = true;
      };

      const closeModal = () => {
        isOpen.value = false;
      };

      return { args, isOpen, openModal, closeModal };
    },
    template: `
      <div>
        <Button @click="openModal">Open Modal</Button>
        <Modal 
          v-bind="args" 
          :open="isOpen" 
          @close="closeModal"
        >
          <p class="text-text-secondary">
            This is the default modal content. You can put any content here including forms, 
            images, or other components.
          </p>
        </Modal>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    components: { Modal, Button },
    setup() {
      const openModals = ref({
        sm: false,
        md: false,
        lg: false,
        xl: false,
      });

      const openModal = (size) => {
        openModals.value[size] = true;
      };

      const closeModal = (size) => {
        openModals.value[size] = false;
      };

      return { openModals, openModal, closeModal };
    },
    template: `
      <div class="space-x-4">
        <Button @click="openModal('sm')" size="sm">Small Modal</Button>
        <Button @click="openModal('md')">Medium Modal</Button>
        <Button @click="openModal('lg')" size="lg">Large Modal</Button>
        <Button @click="openModal('xl')" variant="secondary">Extra Large Modal</Button>
        
        <Modal 
          :open="openModals.sm" 
          size="sm" 
          title="Small Modal"
          @close="closeModal('sm')"
        >
          <p class="text-sm text-text-secondary">This is a small modal with limited content.</p>
        </Modal>
        
        <Modal 
          :open="openModals.md" 
          size="md" 
          title="Medium Modal"
          @close="closeModal('md')"
        >
          <p class="text-text-secondary">
            This is a medium-sized modal with moderate content. Perfect for most use cases
            where you need to display information or simple forms.
          </p>
        </Modal>
        
        <Modal 
          :open="openModals.lg" 
          size="lg" 
          title="Large Modal"
          @close="closeModal('lg')"
        >
          <p class="text-text-secondary">
            This is a large modal that can accommodate more content. Great for detailed forms,
            image galleries, or comprehensive information displays. The content can be quite
            extensive while maintaining good readability and user experience.
          </p>
        </Modal>
        
        <Modal 
          :open="openModals.xl" 
          size="xl" 
          title="Extra Large Modal"
          @close="closeModal('xl')"
        >
          <div class="space-y-4">
            <p class="text-text-secondary">
              This is an extra large modal designed for maximum content display. Perfect for
              complex forms, data tables, or any scenario requiring significant screen real estate.
            </p>
            <p class="text-text-secondary">
              The extra large size ensures that even complex interfaces remain usable and
              accessible across different screen sizes.
            </p>
          </div>
        </Modal>
      </div>
    `,
  }),
};

export const ConfirmationDialog: Story = {
  render: () => ({
    components: { Modal, Button },
    setup() {
      const isOpen = ref(false);

      const openModal = () => {
        isOpen.value = true;
      };

      const closeModal = () => {
        isOpen.value = false;
      };

      const confirmAction = () => {
        alert('Action confirmed!');
        closeModal();
      };

      return { isOpen, openModal, closeModal, confirmAction };
    },
    template: `
      <div>
        <Button @click="openModal" variant="danger">Delete Item</Button>
        <Modal 
          :open="isOpen" 
          size="sm"
          title="Confirm Deletion"
          @close="closeModal"
        >
          <div class="space-y-4">
            <p class="text-text-secondary">
              Are you sure you want to delete this item? This action cannot be undone.
            </p>
            <div class="flex justify-end space-x-2">
              <Button @click="closeModal" variant="secondary" size="sm">
                Cancel
              </Button>
              <Button @click="confirmAction" variant="danger" size="sm">
                Delete
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    `,
  }),
};

export const FormModal: Story = {
  render: () => ({
    components: { Modal, Button },
    setup() {
      const isOpen = ref(false);
      const formData = ref({
        name: '',
        email: '',
        message: ''
      });

      const openModal = () => {
        isOpen.value = true;
      };

      const closeModal = () => {
        isOpen.value = false;
        // Reset form
        formData.value = { name: '', email: '', message: '' };
      };

      const submitForm = () => {
        alert('Form submitted!');
        closeModal();
      };

      return { isOpen, formData, openModal, closeModal, submitForm };
    },
    template: `
      <div>
        <Button @click="openModal">Contact Us</Button>
        <Modal 
          :open="isOpen" 
          size="md"
          title="Contact Form"
          @close="closeModal"
        >
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input 
                v-model="formData.name"
                type="text" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                v-model="formData.email"
                type="email" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                v-model="formData.message"
                rows="4"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div class="flex justify-end space-x-2 pt-4">
              <Button @click="closeModal" variant="secondary" type="button">
                Cancel
              </Button>
              <Button type="submit">
                Send Message
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    `,
  }),
};

export const WithoutCloseButton: Story = {
  render: () => ({
    components: { Modal, Button },
    setup() {
      const isOpen = ref(false);

      const openModal = () => {
        isOpen.value = true;
      };

      const closeModal = () => {
        isOpen.value = false;
      };

      return { isOpen, openModal, closeModal };
    },
    template: `
      <div>
        <Button @click="openModal">Open Modal (No Close Button)</Button>
        <Modal 
          :open="isOpen" 
          title="Modal Without Close Button"
          :show-close-button="false"
          @close="closeModal"
        >
          <div class="space-y-4">
            <p class="text-text-secondary">
              This modal doesn't have a close button in the header. Users must use the
              action buttons or click outside to close.
            </p>
            <div class="flex justify-end">
              <Button @click="closeModal">
                Close Modal
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    `,
  }),
};

export const WithCustomContent: Story = {
  render: () => ({
    components: { Modal, Button },
    setup() {
      const isOpen = ref(false);

      const openModal = () => {
        isOpen.value = true;
      };

      const closeModal = () => {
        isOpen.value = false;
      };

      return { isOpen, openModal, closeModal };
    },
    template: `
      <div>
        <Button @click="openModal">View Gallery</Button>
        <Modal 
          :open="isOpen" 
          size="lg"
          title="Image Gallery"
          @close="closeModal"
        >
          <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span class="text-text-tertiary">Image 1</span>
              </div>
              <div class="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span class="text-text-tertiary">Image 2</span>
              </div>
              <div class="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span class="text-text-tertiary">Image 3</span>
              </div>
              <div class="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span class="text-text-tertiary">Image 4</span>
              </div>
            </div>
            <p class="text-sm text-text-secondary text-center">
              Click on any image to view in full size
            </p>
          </div>
        </Modal>
      </div>
    `,
  }),
};
