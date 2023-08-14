import { PluginItem } from "@babel/core";

export default function(): PluginItem {
    return {
      visitor: {
        //чтобы прокидывать пропсы(атрибуты которые мы хотим выпилить из сборки) в плагин
        Program(path, state){
            const forbidden = state.opts.props || [];

            path.traverse({
                JSXIdentifier(current){
                    const nodeName = current.node.name;

                    if(forbidden.includes(nodeName)) {
                        current.parentPath.remove();
                    }
                }
            })
        }
      },
    };
  }

