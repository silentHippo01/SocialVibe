import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'; //переимновали чтобы не было конфликта с configuration из webpack

export function buildDevServer(options: BuildOptions): DevServerConfiguration{
    return {
        port: options.port,
        open: true,
        historyApiFallback: true, //чтобы не вылетала ошибка при обновлении страницы, находясь не наглавной странице
    }
}