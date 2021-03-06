import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

const pkg = require('./package.json');

export default [
    {
        input: './index.ts',
        output: [
            {
                file: pkg.main,
                format: 'cjs',  
                sourceMap: true,
                name: 'react-lib'
            },
            {
                file: pkg.module,
                format: 'esm',
                sourceMap: true,
            }
        ],
        plugins: [
            external(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json'}),
            terser(),
            postcss(),
        ]
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [
            {
                file: pkg.types,
                format: 'esm',
            }
        ],
        external: [/\.css$/],
        plugins: [dts()]
    }
]
