import { mergeWith, Rule, SchematicContext, Tree, apply, template, url, move } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
// import { buildDefaultPath } from '@schematics/angular/utility/workspace';
import { parseName } from '@schematics/angular/utility/parse-name';
import { Schema } from './schema';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function hello(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    // 已 buffer 形式读取 angular.json 文件
    const workspaceConfigBuffer = tree.read("angular.json");
    if (!workspaceConfigBuffer) {
      throw new Error("Not a Angular CLI workspace");
    }

    const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());
    const projectName = _options.project || workspaceConfig.defaultProject;
    const project = workspaceConfig.projects[projectName];

    // 首先， buildDefaultPath(project) 获取项目的默认路径
    // 例如, src/app 或者 projects/some-app/src/app 基于 workspace
    // 该方法已经不能使用
    // const defaultProjectPath = buildDefaultPath(project);
    const defaultProjectPath = `${project.projectType === "application" ? "" : "/"}${project.root}${project.sourceRoot}/${project.prefix}`;

    // 然后, _options.name 能够包含路径，例如 some-feature/some-sub-feature/some-service
    // parseName 函数能够解析出路径和文件名，路径：some-feature/some-sub-feature 文件名：some-service

    // 默认的项目名称将会追加到前面，最终路径是 src/app/some-feature/some-sub-feature
    // 或者 projects/some-app/src/app/some-feature/some-sub-feature
    const parsedPath = parseName(defaultProjectPath, _options.name);

    console.log('parsedPath', parsedPath);

    const { name, path } = parsedPath;

    function reName(value: string): string {
      return value + '?.value';
    }

    const sourceTemplates = url('./files');
    _options.frameworks = ['angular', 'react', 'vue'];

    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings,
        name,
        reName
      }),
      move(path),
    ]);

    return mergeWith(sourceParametrizedTemplates)(tree, _context);
  };
}
