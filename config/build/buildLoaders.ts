import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const { isDev } = options;

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const codeBabelLoader = buildBabelLoader({...options, isTsx: false}); //обрабатывает только ts файлы
    const tsxCodeBabelLoader = buildBabelLoader({...options, isTsx: true}); //обрабатывает только tsx файлы

    const cssLoader = buildCssLoader(isDev);

    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // }

    const fileLoader = {
        //woff - формат шрифтов
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    return [
            fileLoader,
            svgLoader,
            codeBabelLoader,
            tsxCodeBabelLoader,
            // babelLoader,
            // typescriptLoader,
            cssLoader,
        ]
    }