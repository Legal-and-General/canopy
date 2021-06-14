export const notes = `
# Kebab case pipe

## Purpose
This pipe allows for a string to be transformed into kebab case.

## Usage
Import the pipe in your module:

~~~
@NgModule({
  ...
  declarations: [ ..., LgKebabCasePipe ],
})
~~~

or all the pipes:

~~~
@NgModule({
  ...
  imports: [ ..., LgPipesModule ],
})
~~~

and in your HTML:

~~~
<p>{{stringToTransform | kebabCase}}</p>
~~~
`;
