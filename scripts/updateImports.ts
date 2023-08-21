import { Project } from 'ts-morph';

const project = new Project({}); 

//добавление файлов с исходным кодом, с которыми будем работать
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

//получаем файлы
const files = project.getSourceFiles();

function isAbsolute(value: string){
    const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets'];
    if(layers.some(layer => value.startsWith(layer))){
        return true;
    }
}

files.forEach(sourceFile => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach(importDeclaration => {
        const value = importDeclaration.getModuleSpecifierValue();

        if(isAbsolute(value)){
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }
    })
})

project.save();