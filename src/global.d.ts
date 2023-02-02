declare module '*.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }

  //глобальная деклорация стилей нужна, чтобы можно было импортировать классы из файла css