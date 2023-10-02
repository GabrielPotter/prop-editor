// vite.config.js
//import { resolve } from 'path';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import dts from "vite-plugin-dts"

export default defineConfig({
    plugins: [react(), dts()],
    build: {
        lib: {
            entry: 'src/index.ts', // Entry point for your component library
            name: 'prop-editor', // Library name
            fileName: 'prop-editor'
        },
    },
});