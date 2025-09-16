import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Tabs from './Tabs.vue'
import {
    HomeIcon,
    UserIcon,
    Cog6ToothIcon,
    DocumentTextIcon,
    ShoppingCartIcon,
    ChartBarIcon
} from '@heroicons/vue/24/outline'

const meta: Meta<typeof Tabs> = {
    title: 'Components/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A tabs component for organizing content with theme support and optional sci-fi diagonal corners.',
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'pills', 'underline', 'bordered'],
            description: 'Visual style of the tabs',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Size of the tabs',
        },
        orientation: {
            control: { type: 'select' },
            options: ['horizontal', 'vertical'],
            description: 'Layout orientation of the tabs',
        },
        fullWidth: {
            control: { type: 'boolean' },
            description: 'Whether tabs should take full width',
        },
        diagonal: {
            control: { type: 'boolean' },
            description: 'Enable sci-fi diagonal corners styling',
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const basicTabs = [
    { value: 'home', label: 'Home', content: '<p>Welcome to the home page! This is where you\'ll find the latest updates and overview.</p>' },
    { value: 'profile', label: 'Profile', content: '<p>Manage your profile information, settings, and preferences here.</p>' },
    { value: 'settings', label: 'Settings', content: '<p>Configure your account settings, privacy options, and notifications.</p>' },
    { value: 'help', label: 'Help', content: '<p>Find answers to frequently asked questions and get support.</p>' },
]

// Default story
export const Default: Story = {
    args: {
        tabs: basicTabs,
        modelValue: 'home',
        variant: 'default',
        size: 'md',
        orientation: 'horizontal',
        fullWidth: false,
        diagonal: false,
    },
    render: (args) => ({
        components: { Tabs },
        setup() {
            const activeTab = ref(args.modelValue)
            return { args, activeTab }
        },
        template: `
      <div class="w-96">
        <Tabs 
          v-model="activeTab"
          v-bind="args"
        />
      </div>
    `,
    }),
}

// Variants
export const Variants: Story = {
    render: () => ({
        components: { Tabs },
        setup() {
            const defaultTab = ref('home')
            const pillsTab = ref('profile')
            const underlineTab = ref('settings')
            const borderedTab = ref('help')

            return { defaultTab, pillsTab, underlineTab, borderedTab, basicTabs }
        },
        template: `
      <div class="space-y-8 w-full max-w-2xl">
        <div>
          <h3 class="text-lg font-medium mb-4">Default Tabs</h3>
          <Tabs v-model="defaultTab" :tabs="basicTabs" variant="default" />
        </div>
        
        <div>
          <h3 class="text-lg font-medium mb-4">Pills Tabs</h3>
          <Tabs v-model="pillsTab" :tabs="basicTabs" variant="pills" />
        </div>
        
        <div>
          <h3 class="text-lg font-medium mb-4">Underline Tabs</h3>
          <Tabs v-model="underlineTab" :tabs="basicTabs" variant="underline" />
        </div>
        
        <div>
          <h3 class="text-lg font-medium mb-4">Bordered Tabs</h3>
          <Tabs v-model="borderedTab" :tabs="basicTabs" variant="bordered" />
        </div>
      </div>
    `,
    }),
}

// With Icons and Badges
export const WithIconsAndBadges: Story = {
    render: () => ({
        components: { Tabs },
        setup() {
            const activeTab = ref('dashboard')

            const tabsWithExtras = [
                {
                    value: 'dashboard',
                    label: 'Dashboard',
                    icon: HomeIcon,
                    content: '<div class="p-4"><h3 class="font-semibold mb-2">Dashboard Overview</h3><p>Key metrics and recent activity summary.</p></div>'
                },
                {
                    value: 'users',
                    label: 'Users',
                    icon: UserIcon,
                    badge: '12',
                    content: '<div class="p-4"><h3 class="font-semibold mb-2">User Management</h3><p>Manage user accounts and permissions. 12 pending approvals.</p></div>'
                },
                {
                    value: 'orders',
                    label: 'Orders',
                    icon: ShoppingCartIcon,
                    badge: '5',
                    content: '<div class="p-4"><h3 class="font-semibold mb-2">Order Management</h3><p>View and process customer orders. 5 new orders today.</p></div>'
                },
                {
                    value: 'analytics',
                    label: 'Analytics',
                    icon: ChartBarIcon,
                    content: '<div class="p-4"><h3 class="font-semibold mb-2">Analytics Dashboard</h3><p>Detailed insights and performance metrics.</p></div>'
                },
                {
                    value: 'settings',
                    label: 'Settings',
                    icon: Cog6ToothIcon,
                    disabled: true,
                    content: '<div class="p-4"><h3 class="font-semibold mb-2">System Settings</h3><p>Configure system preferences and options.</p></div>'
                },
            ]

            return { activeTab, tabsWithExtras }
        },
        template: `
      <div class="w-full max-w-3xl">
        <Tabs v-model="activeTab" :tabs="tabsWithExtras" variant="default" />
      </div>
    `,
    }),
}

// Sizes
export const Sizes: Story = {
    render: () => ({
        components: { Tabs },
        setup() {
            const smallTab = ref('home')
            const mediumTab = ref('profile')
            const largeTab = ref('settings')

            return { smallTab, mediumTab, largeTab, basicTabs }
        },
        template: `
      <div class="space-y-8 w-full max-w-2xl">
        <div>
          <h3 class="text-lg font-medium mb-4">Small Tabs</h3>
          <Tabs v-model="smallTab" :tabs="basicTabs" size="sm" />
        </div>
        
        <div>
          <h3 class="text-lg font-medium mb-4">Medium Tabs</h3>
          <Tabs v-model="mediumTab" :tabs="basicTabs" size="md" />
        </div>
        
        <div>
          <h3 class="text-lg font-medium mb-4">Large Tabs</h3>
          <Tabs v-model="largeTab" :tabs="basicTabs" size="lg" />
        </div>
      </div>
    `,
    }),
}

// Vertical Orientation
export const VerticalOrientation: Story = {
    render: () => ({
        components: { Tabs },
        setup() {
            const activeTab = ref('profile')

            const verticalTabs = [
                {
                    value: 'profile',
                    label: 'Profile',
                    icon: UserIcon,
                    content: '<div class="p-6"><h3 class="font-semibold text-lg mb-3">Profile Settings</h3><p class="text-text-secondary">Update your personal information and preferences.</p><div class="mt-4 space-y-2"><p><strong>Name:</strong> John Doe</p><p><strong>Email:</strong> john@example.com</p><p><strong>Role:</strong> Administrator</p></div></div>'
                },
                {
                    value: 'account',
                    label: 'Account',
                    icon: Cog6ToothIcon,
                    content: '<div class="p-6"><h3 class="font-semibold text-lg mb-3">Account Settings</h3><p class="text-text-secondary">Manage your account security and privacy settings.</p><div class="mt-4 space-y-2"><p>• Two-factor authentication</p><p>• Password management</p><p>• Privacy preferences</p></div></div>'
                },
                {
                    value: 'billing',
                    label: 'Billing',
                    icon: DocumentTextIcon,
                    badge: '2',
                    content: '<div class="p-6"><h3 class="font-semibold text-lg mb-3">Billing Information</h3><p class="text-text-secondary">View your billing history and manage payment methods.</p><div class="mt-4 space-y-2"><p>• Current plan: Pro</p><p>• Next billing: Jan 15, 2024</p><p>• Payment method: •••• 4567</p></div></div>'
                },
            ]

            return { activeTab, verticalTabs }
        },
        template: `
      <div class="flex w-full max-w-4xl h-80">
        <Tabs v-model="activeTab" :tabs="verticalTabs" orientation="vertical" class="w-full" />
      </div>
    `,
    }),
}

// Diagonal/Sci-Fi Style
export const DiagonalStyle: Story = {
    render: () => ({
        components: { Tabs },
        setup() {
            const activeTab = ref('systems')

            const sciFiTabs = [
                {
                    value: 'systems',
                    label: 'Systems',
                    icon: Cog6ToothIcon,
                    content: '<div class="p-6 space-y-4"><h3 class="font-semibold text-lg text-primary-600">System Status</h3><div class="grid grid-cols-2 gap-4"><div class="p-3 bg-surface-elevated rounded border border-accent-success-light"><p class="text-sm font-medium">Core Systems</p><p class="text-accent-success-main">Online</p></div><div class="p-3 bg-surface-elevated rounded border border-accent-warning-light"><p class="text-sm font-medium">Backup Systems</p><p class="text-accent-warning-main">Standby</p></div></div></div>'
                },
                {
                    value: 'diagnostics',
                    label: 'Diagnostics',
                    icon: ChartBarIcon,
                    badge: '3',
                    content: '<div class="p-6"><h3 class="font-semibold text-lg text-primary-600">System Diagnostics</h3><p class="text-text-secondary mb-4">Real-time system monitoring and performance metrics.</p><div class="space-y-3"><div class="flex justify-between"><span>CPU Usage:</span><span class="text-accent-success-main">23%</span></div><div class="flex justify-between"><span>Memory:</span><span class="text-accent-warning-main">67%</span></div><div class="flex justify-between"><span>Network:</span><span class="text-accent-info-main">Active</span></div></div></div>'
                },
                {
                    value: 'security',
                    label: 'Security',
                    icon: UserIcon,
                    content: '<div class="p-6"><h3 class="font-semibold text-lg text-primary-600">Security Protocols</h3><p class="text-text-secondary mb-4">Access control and security monitoring systems.</p><div class="space-y-2"><p class="text-accent-success-main">✓ Encryption Active</p><p class="text-accent-success-main">✓ Firewall Enabled</p><p class="text-accent-warning-main">⚠ Pending Updates</p></div></div>'
                },
            ]

            return { activeTab, sciFiTabs }
        },
        template: `
      <div class="w-full max-w-3xl">
        <div class="p-6 bg-gradient-to-br from-surface-secondary to-surface-elevated rounded-lg border border-border-primary">
          <h2 class="text-xl font-semibold text-text-primary mb-4">🚀 Starship Control Panel</h2>
          <Tabs v-model="activeTab" :tabs="sciFiTabs" diagonal variant="default" />
        </div>
      </div>
    `,
    }),
}

// Full Width
export const FullWidth: Story = {
    render: () => ({
        components: { Tabs },
        setup() {
            const activeTab = ref('overview')

            const fullWidthTabs = [
                { value: 'overview', label: 'Overview', content: '<div class="p-6"><h3 class="font-semibold text-lg mb-3">Project Overview</h3><p>Get a high-level view of your project status and key metrics.</p></div>' },
                { value: 'tasks', label: 'Tasks', badge: '8', content: '<div class="p-6"><h3 class="font-semibold text-lg mb-3">Task Management</h3><p>View and manage your project tasks. 8 tasks pending completion.</p></div>' },
                { value: 'team', label: 'Team', content: '<div class="p-6"><h3 class="font-semibold text-lg mb-3">Team Members</h3><p>Collaborate with your team and manage member permissions.</p></div>' },
                { value: 'reports', label: 'Reports', content: '<div class="p-6"><h3 class="font-semibold text-lg mb-3">Project Reports</h3><p>Generate and view detailed project reports and analytics.</p></div>' },
            ]

            return { activeTab, fullWidthTabs }
        },
        template: `
      <div class="w-full max-w-4xl">
        <Tabs v-model="activeTab" :tabs="fullWidthTabs" full-width variant="pills" />
      </div>
    `,
    }),
}
