type Mods = Record<string, boolean | string>


export function classNames(cls: string, mods:Mods, additional: string[]): string {
    return [
        cls, 
        ...additional,
        ...Object.entries(mods)
            .filter(([classNames, value]) => Boolean(value))
            .map(([classNames]) => classNames)
    ].join(' ');
}



//функция возвращает строку классов
//cls - главный класс, 
//mods - объект с модами, где ключ это класс, а значение булевое 
//additional - дополнительный массив с классами, который не зависят от условий, просто идут как допольнительные
