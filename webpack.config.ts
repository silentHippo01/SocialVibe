import { BuildPaths, BuildEnv } from './config/build/types/config';
import path from 'path';
import webpack, { DefinePlugin } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }
    
    const mode = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDev = mode === 'development';
    const apiUrl = env.apiUrl || 'http://localhost:8000';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        project: 'frontend',
    });
    
    config.plugins?.push(new DefinePlugin({
        __IS_DEV__: true,
    }));

    return config
};

//здесь находится вся конфигурация сборки
//path - склеивает путь 