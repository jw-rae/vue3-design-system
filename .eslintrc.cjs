module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
        browser: true,
    },
    extends: [
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        'plugin:vue/vue3-essential',
        'plugin:storybook/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-reserved-component-names': 'off',
    },
    overrides: [
        {
            files: ['**/*.stories.*'],
            rules: {
                'storybook/hierarchy-separator': 'error',
                'storybook/default-exports': 'error',
            },
        },
    ],
}
