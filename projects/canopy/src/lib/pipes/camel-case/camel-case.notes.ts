export const notes = `
# Camel case pipe

## Purpose
This pipe allows for a string to be transformed into camel case.

## Usage
Import the pipe in your module:

~~~
@NgModule({
  ...
  declarations: [ ..., LgCamelCasePipe ],
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
<p>{{stringToTransform | camelCase}}</p>
~~~
`;
