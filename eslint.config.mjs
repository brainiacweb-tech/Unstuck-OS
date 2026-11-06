import js from '@eslint/js';
import tseslint from 'typescript-eslint';
export default tseslint.config({ignores:['node_modules/**','dist/**','release/**','scripts/**']},js.configs.recommended,...tseslint.configs.recommended,{files:['src/**/*.ts','src/**/*.tsx','tests/**/*.ts','vite.config.ts'],rules:{'no-empty':['error',{allowEmptyCatch:true}],'@typescript-eslint/no-unused-vars':['error',{argsIgnorePattern:'^_',caughtErrorsIgnorePattern:'^_'}]}});
