declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}


declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
  //глобальная деклорация стилей нужна, чтобы можно было импортировать классы из файла css
  // глобальная деклорация нужна, чтобы научить ts работать с файлами определенных расширений


declare const __IS_DEV__: boolean