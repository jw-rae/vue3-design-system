import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, onMounted } from 'vue';
import Button from '../components/Button/Button.vue';
import Card from '../components/Card/Card.vue';
import Alert from '../components/Alert/Alert.vue';
import Badge from '../components/Badge/Badge.vue';
import Input from '../components/Input/Input.vue';
import Select from '../components/Select/Select.vue';
import Modal from '../components/Modal/Modal.vue';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle.vue';
import { useTheme } from '../composables/useTheme';

const meta: Meta = {
    title: 'Overview/Dark Mode Showcase',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'A comprehensive showcase of all components in both light and dark modes.',
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllComponentsShowcase: Story = {
    render: () => ({
        components: {
            Button,
            Card,
            Alert,
            Badge,
            Input,
            Select,
            Modal,
            ThemeToggle
        },
        setup() {
            const { initializeTheme } = useTheme();
            const showModal = ref(false);
            const sampleText = ref('Sample input text');
            const selectedCountry = ref(null);

            const countries = [
                { value: 'us', label: 'United States' },
                { value: 'uk', label: 'United Kingdom' },
                { value: 'ca', label: 'Canada' },
            ];

            onMounted(() => {
                initializeTheme();
            });

            return {
                showModal,
                sampleText,
                selectedCountry,
                countries
            };
        },
        template: `
      <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <div class="container mx-auto px-6 py-8">
          <!-- Header with Theme Toggle -->
          <div class="flex items-center justify-between mb-12">
            <div>
              <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                🌓 Dark Mode Showcase
              </h1>
              <p class="text-xl text-gray-600 dark:text-gray-300">
                Click the theme toggle to see all components adapt instantly
              </p>
            </div>
            <ThemeToggle />
          </div>

          <!-- Components Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            
            <!-- Buttons Card -->
            <Card>
              <template #header>
                <h3 class="text-lg font-semibold flex items-center gap-2">
                  🔘 Buttons
                  <Badge variant="primary" size="sm">5 variants</Badge>
                </h3>
              </template>
              <div class="space-y-3">
                <div class="flex flex-wrap gap-2">
                  <Button variant="primary" size="sm">Primary</Button>
                  <Button variant="secondary" size="sm">Secondary</Button>
                  <Button variant="outline" size="sm">Outline</Button>
                </div>
                <div class="flex flex-wrap gap-2">
                  <Button variant="ghost" size="sm">Ghost</Button>
                  <Button variant="danger" size="sm">Danger</Button>
                </div>
              </div>
            </Card>

            <!-- Alerts Card -->
            <Card>
              <template #header>
                <h3 class="text-lg font-semibold flex items-center gap-2">
                  🚨 Alerts
                  <Badge variant="success" size="sm">4 types</Badge>
                </h3>
              </template>
              <div class="space-y-3">
                <Alert variant="success" title="Success">Operation completed!</Alert>
                <Alert variant="warning" title="Warning">Check your input.</Alert>
                <Alert variant="error" title="Error">Something went wrong.</Alert>
                <Alert variant="info">Information message.</Alert>
              </div>
            </Card>

            <!-- Badges Card -->
            <Card>
              <template #header>
                <h3 class="text-lg font-semibold flex items-center gap-2">
                  🏷️ Badges
                  <Badge variant="warning" size="sm">All variants</Badge>
                </h3>
              </template>
              <div class="space-y-3">
                <div class="flex flex-wrap gap-2">
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="error">Error</Badge>
                </div>
                <div class="flex flex-wrap gap-2">
                  <Badge variant="primary" outline>Outline</Badge>
                  <Badge variant="success" rounded>Rounded</Badge>
                  <Badge variant="error" rounded outline>Both</Badge>
                </div>
              </div>
            </Card>

            <!-- Form Inputs Card -->
            <Card>
              <template #header>
                <h3 class="text-lg font-semibold flex items-center gap-2">
                  📝 Form Inputs
                  <Badge variant="info" size="sm">Interactive</Badge>
                </h3>
              </template>
              <div class="space-y-4">
                <Input 
                  v-model="sampleText"
                  label="Text Input"
                  placeholder="Type something..."
                  hint="This adapts to your theme"
                />
                <Input 
                  type="email"
                  label="Email Input"
                  placeholder="your@email.com"
                />
                <Input 
                  label="Error State"
                  placeholder="Invalid input"
                  error="This field is required"
                />
              </div>
            </Card>

            <!-- Select Dropdown Card -->
            <Card>
              <template #header>
                <h3 class="text-lg font-semibold flex items-center gap-2">
                  📋 Select Dropdown
                  <Badge variant="secondary" size="sm">Searchable</Badge>
                </h3>
              </template>
              <div class="space-y-4">
                <Select 
                  v-model="selectedCountry"
                  :options="countries"
                  label="Country"
                  placeholder="Choose a country..."
                />
                <p v-if="selectedCountry" class="text-sm text-gray-600 dark:text-gray-400">
                  Selected: {{ selectedCountry.label }}
                </p>
              </div>
            </Card>

            <!-- Modal Demo Card -->
            <Card>
              <template #header>
                <h3 class="text-lg font-semibold flex items-center gap-2">
                  🪟 Modal Dialog
                  <Badge variant="primary" size="sm">Accessible</Badge>
                </h3>
              </template>
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Modals automatically adapt their background and content styling.
                </p>
                <Button @click="showModal = true" variant="outline">
                  Open Modal Example
                </Button>
              </div>
            </Card>

          </div>

          <!-- Feature Highlights -->
          <div class="mt-12">
            <Card variant="elevated">
              <template #header>
                <h3 class="text-xl font-semibold flex items-center gap-2">
                  ✨ Dark Mode Features
                  <Badge variant="success" rounded>Complete</Badge>
                </h3>
              </template>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="text-center">
                  <div class="text-3xl mb-2">🎨</div>
                  <h4 class="font-semibold mb-1">Automatic Theming</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    All components adapt instantly
                  </p>
                </div>
                <div class="text-center">
                  <div class="text-3xl mb-2">💾</div>
                  <h4 class="font-semibold mb-1">Persistent Choice</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Theme saved in localStorage
                  </p>
                </div>
                <div class="text-center">
                  <div class="text-3xl mb-2">🖥️</div>
                  <h4 class="font-semibold mb-1">System Detection</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Respects OS preferences
                  </p>
                </div>
                <div class="text-center">
                  <div class="text-3xl mb-2">♿</div>
                  <h4 class="font-semibold mb-1">Accessible</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    WCAG contrast compliant
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <!-- Modal -->
        <Modal :open="showModal" @close="showModal = false">
          <template #header>
            Dark Mode Modal Example
          </template>
          <div class="space-y-4">
            <p class="text-gray-600 dark:text-gray-300">
              This modal demonstrates how dialogs adapt to your selected theme.
              Notice how the background, text, and shadows all adjust automatically.
            </p>
            <Input 
              v-model="sampleText"
              label="Try typing"
              placeholder="Input adapts too..."
            />
            <Alert variant="info" title="Pro Tip">
              Toggle the theme while this modal is open to see the live transition!
            </Alert>
          </div>
          <template #footer>
            <Button variant="secondary" @click="showModal = false">
              Close
            </Button>
            <Button @click="showModal = false">
              Awesome!
            </Button>
          </template>
        </Modal>
      </div>
    `,
    }),
};
