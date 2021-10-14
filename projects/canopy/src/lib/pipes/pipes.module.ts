import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgCamelCasePipe } from './camel-case/camel-case.pipe';
import { LgKebabCasePipe } from './kebab-case/kebab-case.pipe';

const pipes = [LgCamelCasePipe, LgKebabCasePipe];

@NgModule({
  imports: [CommonModule],
  declarations: [...pipes],
  exports: [...pipes],
})
/**
 * @deprecated LgPipesModule module is deprecated.
 * Please import LgCamelCasePipeModule or LgKebabCasePipeModule module instead.
 */
export class LgPipesModule {
  constructor() {
    console.warn(
      'LgPipesModule module is deprecated. Please import LgCamelCasePipeModule or LgKebabCasePipeModule modules instead',
    );
  }
}
