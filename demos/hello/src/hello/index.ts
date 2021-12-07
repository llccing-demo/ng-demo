import { mergeWith, Rule, SchematicContext, Tree, apply, template, url } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Schema } from './schema';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function hello(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    function reName(value: string): string {
      return value + '?.value';
    }

    const sourceTemplates = url('./files');

    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings,
        reName
      })
    ]);

    return mergeWith(sourceParametrizedTemplates)(tree, _context);
  };
}
