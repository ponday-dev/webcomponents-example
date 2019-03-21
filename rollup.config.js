import typescript from 'rollup-plugin-typescript2';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import tsConfigPaths from 'rollup-plugin-ts-paths';
import litSass from '@ponday/rollup-plugin-lit-sass';
import pkg from './package.json';

const fs = require('fs');

function doBuild(type) {
    return () => process.env.BUILD_TYPE === type; 
}
const doBuildUmd = doBuild('umd');
const doBuildEs = doBuild('es');
const doBuildAll = doBuild('all');

function getEsEntries() {
    return [
        {
            input: 'src/index.ts',
            output: [
                { file: 'lib/index.js', format: 'es' }
            ]
        }
    ];
}

function getUmdEntries(dir) {
    return fs.readdirSync(dir)
        .filter(file => fs.statSync(`${dir}/${file}`).isFile() && /.*\.ts$/.test(file))
        .map(file => ({
            input: `${dir}/${file}`,
            output: {
                file: `lib/umd/${file.replace(/\.ts$/, '.umd.js')}`,
                format: 'umd',
                name: pkg.name
            }
        }));
}

function getEntries() {
    let entries = [];

    if (doBuildAll() || doBuildEs()) {
        entries = [ ...entries, ...getEsEntries()];
    }
    if (doBuildAll() || doBuildUmd()) {
        entries = [ ...entries, ...getUmdEntries('src/umd-entries')];   
    }

    return entries;
}

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

export default getEntries().map(entry => Object.assign({}, base, entry));
