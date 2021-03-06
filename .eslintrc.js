module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
    rules: {
        'no-console': 'warn',
        'react/prop-types': 'off',
        'prettier/prettier': [
            'error',
            {
                printWidth: 100,
                trailingComma: 'all',
                tabWidth: 4,
                semi: true,
                singleQuote: true,
                bracketSpacing: true,
                arrowParens: 'always',
                endOfLine: 'auto',
            },
        ],
        'no-unused-vars': [
            'warn',
            {
                args: 'after-used',
                ignoreRestSiblings: false,
                argsIgnorePattern: '^_.*?$',
            },
        ],
        'import/order': [
            'warn',
            {
                'newlines-between': 'always',
            },
        ],
        'react/self-closing-comp': 'warn',
        'react/jsx-sort-props': [
            'warn',
            {
                callbacksLast: true,
                shorthandFirst: true,
                noSortAlphabetically: false,
                reservedFirst: true,
            },
        ],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },
        ],
    },
};
