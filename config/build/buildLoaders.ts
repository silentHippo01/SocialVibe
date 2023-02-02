import { BuildOptions } from './types/config';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader, //в режиме разработки отключает генерацию css файлов
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module')),
                        localIdentName: options.isDev 
                            ? '[path][name]__[local]' 
                            : '[hash:base64:8]',
                    },
                    
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }


    return [
        typescriptLoader,
        cssLoader,
    ]
}