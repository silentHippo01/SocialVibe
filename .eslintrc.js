module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:18next/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    "custom-plugin-eslint-for-project",
    "unused-imports",
  ],
  rules: {
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    // indent: [2, 4],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', 'tsx'] }
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'i18next/no-literal-string': ['error',
      {
        markupOnly: true,
        ignoreAttribute: [
          'as',
          'role',
          'data-testid', 
          'to', 
          'target',
          'justify',
          'align',
          'border',
          'direction',
          'gap',
        ]
      }
    ],
    'max-len': [
      'error', { ignoreComments: true, code: 125, }
    ],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'react/no-array-index-key': 'off',
    'arrow-body-style': 'off',
    'custom-plugin-eslint-for-project/path-checker': ['error', {alias: '@'}],
    'custom-plugin-eslint-for-project/path-checker': [
      'error', 
      {
        alias: '@',
        ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      }
    ],
    'custom-plugin-eslint-for-project/public-api-imports': [
      'error', 
      {
        alias: '@',
        testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx'],
      },
    ],

    "unused-imports/no-unused-imports": "error",
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test, stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': "off",
        'max-len': 'off',
      }
    }
  ]
};
