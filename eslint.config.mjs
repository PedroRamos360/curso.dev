import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ['.next'],
  },
  ...compat.config({
    extends: ['next', 'prettier', 'plugin:jest/recommended'],
    plugins: ['react', 'react-hooks', 'jsx-a11y', 'import'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'no-unused-vars': 'error',
      'no-undef': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  }),
];

export default eslintConfig;
