export type Mods = Record<string, boolean | string | undefined>
 
export function classNames(
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ');
}



//функция возвращает строку классов
//cls - главный класс, 
//mods - объект с модами, где ключ это класс, а значение булевое 
//additional - дополнительный массив с классами, который не зависят от условий, просто идут как допольнительные
