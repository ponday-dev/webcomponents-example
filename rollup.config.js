import typescript from 'rollup-plugin-typescript2';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import tsConfigPaths from 'rollup-plugin-ts-paths';
import litSass from '@ponday/rollup-plugin-lit-sass';
import pkg from './package.json';

const fs = require('fs');

const filelist = fs.readdirSync('./src/umd-entries')
    .filter(file => fs.statSync(`./src/umd-entries/${file}`).isFile() && /.*\.ts$/.test(file))
    .map(file => ({
        input: `src/umd-entries/${file}`,
        output: {
            file: `lib/umd/${file.replace(/\.ts$/, '.umd.js')}`,
            format: 'umd',
            name: pkg.name
        }
    }));

const base = {
    external: [
        ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
        typescript({
            typescript: require('typescript')
        }),
        tsConfigPaths(),
        litSass({
            includePaths: [
                'src/styles'
            ]
        }),
        nodeResolve(),
        commonjs(),
        terser(),
        filesize()
    ]
};

const entries = [
    {
        input: 'src/index.ts',
        output: [
            { file: 'lib/index.js', format: 'es' }
        ]
    },
    ...filelist
]

export default entries.map(entry => Object.assign({}, base, entry));
