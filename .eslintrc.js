module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 10,
    },
    env: {
        node: true,
        es6: true,
        mocha: true,
    },
    extends: [
        'eslint:recommended',
        'prettier'
    ],
    globals: {
        __static: true
    },
    rules: {
        'no-unused-vars': 'warn',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'semi': ['warn', 'never'],
        'quotes': ['warn', 'single'],
        'indent': ['warn', 4, { 'SwitchCase': 1 }]
    }
}