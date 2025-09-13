import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, onMounted } from 'vue';
import ThemeToggle from './ThemeToggle.vue';
import Button from '../Button/Button.vue';
import Card from '../Card/Card.vue';
import Alert from '../Alert/Alert.vue';
import { useTheme } from '../../composables/useTheme';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Theme toggle component for switching between light and dark modes with system preference support.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { ThemeToggle },
    setup() {
      const { initializeTheme } = useTheme();

      onMounted(() => {
        initializeTheme();
      });

      return {};
    },
    template: '<ThemeToggle />',
  }),
};

export const ThemeDemo: Story = {
  render: () => ({
    components: { ThemeToggle, Button, Card, Alert },
    setup() {
      const { initializeTheme } = useTheme();

      onMounted(() => {
        initializeTheme();
      });

      return {};
    },
    template: `
      <div class="space-y-6 p-6 bg-white dark:bg-gray-900 rounded-lg transition-colors">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-bold text-text-primary dark:text-white">
            Theme Demo
          </h2>
          <ThemeToggle />
        </div>
        
        <p class="text-text-secondary dark:text-text-disabled">
          Click the theme toggle to see how all components adapt to light and dark modes.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Light/Dark Cards" subtitle="Adaptive styling">
            <p class="text-text-secondary dark:text-text-disabled">
              Cards automatically adapt their background and text colors based on the current theme.
            </p>
          </Card>
          
          <div class="space-y-4">
            <Alert 
              type="success" 
              title="Theme Support" 
              message="All components support both light and dark themes seamlessly."
            />
            
            <div class="flex flex-wrap gap-2">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
          <h3 class="text-lg font-semibold text-text-primary dark:text-white mb-2">
            Theme Features
          </h3>
          <ul class="space-y-1 text-sm text-text-secondary dark:text-text-disabled">
            <li>• Automatic system preference detection</li>
            <li>• Persistent theme selection in localStorage</li>
            <li>• Smooth transitions between themes</li>
            <li>• Accessible color contrast ratios</li>
            <li>• All components theme-aware</li>
          </ul>
        </div>
      </div>
    `,
  }),
};

export const ThemeComparison: Story = {
  render: () => ({
    components: { Button, Card, Alert },
    template: `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Light Theme -->
        <div class="space-y-4 p-6 bg-white rounded-lg border">
          <h3 class="text-xl font-bold text-text-primary">Light Theme</h3>
          
          <Card title="Sample Card" subtitle="Light mode styling">
            <p class="text-text-secondary">
              This shows how components look in light mode with proper contrast and readability.
            </p>
          </Card>
          
          <Alert 
            type="info" 
            title="Light Mode"
            message="Optimized for daytime use with bright backgrounds."
          />
          
          <div class="flex gap-2">
            <Button variant="primary" size="sm">Primary</Button>
            <Button variant="outline" size="sm">Outline</Button>
          </div>
        </div>
        
        <!-- Dark Theme Simulation -->
        <div class="dark">
          <div class="space-y-4 p-6 bg-gray-900 rounded-lg border border-gray-700">
            <h3 class="text-xl font-bold text-white">Dark Theme</h3>
            
            <Card title="Sample Card" subtitle="Dark mode styling">
              <p class="text-text-disabled">
                This shows how components look in dark mode with proper contrast and reduced eye strain.
              </p>
            </Card>
            
            <Alert 
              type="info" 
              title="Dark Mode"
              message="Optimized for low-light environments with dark backgrounds."
            />
            
            <div class="flex gap-2">
              <Button variant="primary" size="sm">Primary</Button>
              <Button variant="outline" size="sm">Outline</Button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
