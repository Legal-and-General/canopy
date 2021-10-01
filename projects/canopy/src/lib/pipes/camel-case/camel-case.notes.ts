export const notes = `
# Camel case pipe

## Purpose
This pipe allows for a string to be transformed into camel case.

## Usage
Import the pipe in your module:

~~~
@NgModule({
  ...
  imports: [ ..., LgCamelCasePipeModule ],
})
~~~

and in your HTML:

~~~
<p>{{stringToTransform | camelCase}}</p>
~~~
`;
