export const notes = `
# Kebab case pipe

## Purpose
This pipe allows for a string to be transformed into kebab case.

## Usage
Import the pipe in your module:

~~~
@NgModule({
  ...
  imports: [ ..., LgKebabCasePipeModule ],
})
~~~

and in your HTML:

~~~
<p>{{stringToTransform | kebabCase}}</p>
~~~
`;
