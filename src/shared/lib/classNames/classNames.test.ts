import { classNames } from "./classNames";
// import { classNames } from "shared/lib/classNames/classNames";

describe('classNames', () => {
    test('with one param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with add class', () => {
        expect(classNames('classTwoTest', {}, ['addClass'])).toBe('classTwoTest addClass');
    });
    test('with bool mods', () => {
        const expected = 'classThreeTest class1 class2 hovered scrollable';
        expect(classNames('classThreeTest', {hovered: true, scrollable: true}, ['class1', 'class2']));
    });
    test('test with false mods', () => {
        const expected = 'classFourTest class1 class2 hovered';
        expect(classNames('classFourTest', {hovered: true, scrollable: false}, ['class1', 'class2']));
    })
})