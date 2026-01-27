import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';

/*export const config = tseslint.config(
    js.configs.recommended, // Base JS rules
    ...tseslint.configs.recommended, // Base TS rules
    {
*/
export default defineConfig(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    {
        rules: {
            'semi': ['error', 'always'],
            '@typescript-eslint/no-explicit-any': 'error'
        }
    } 
);