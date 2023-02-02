import { ResolveOptions, webpack } from "webpack";

export function buildResolvers(): ResolveOptions{

    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}