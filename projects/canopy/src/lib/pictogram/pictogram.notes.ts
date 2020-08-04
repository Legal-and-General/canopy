export const notes = `
# Pictogram Component

## Purpose
Provides a way of adding common pictograms.

## Usage
Import the component in your application:

~~~js
@NgModule({
  ...
  imports: [LgPictogramModule],
})
~~~

Import the \`LgPictogramRegistry\` and register your pictograms:

~~~js
export class AppModule {
  constructor(private pictogramRegistry: LgPictogramRegistry) {
    this.pictogramRegistry.registerPictogram([
      lgPictogramSun
    ]);
  }
}
~~~

and in your HTML:

~~~html
<lg-pictogram name="sun"></lg-pictogram>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`name\`\` | the name of the pictogram | string | undefined | yes |
| \`\`size\`\` | the size of the pictogram | PictogramSize | 'sm' | no |

All pictograms have height and width equal to 1em. This means the pictograms will be as big as the font-size specified by the parent.

*By default the pictograms have the \`\`fill\`\` css property set to \`\`currentColor\`\`.*

> \`\`currentColor\`\` acts like a variable for the current value of the \`\`color\`\` property on the element. And the Cascading part of CSS is still effective, so if there’s no defined \`\`color\`\` property on an element, the cascade will determine the value of \`\`currentColor\`\`.
>
> *Understanding the currentColor Keyword in CSS - https://alligator.io/css/currentcolor/*

## Using only the SCSS files

Generate the markup as show in the example below, no current modifiers.

| Class | Description |
|------|-------------|
| \`\`lg-pictogram\`\` | Adds the default styles to the pictogram |

Make sure you remove the styles on the svg itself.

### Examples:
~~~html
<div class="lg-pictogram">
  <svg xmlns="http://www.w3.org/2000/svg" width="152" height="152" viewBox="0 0 152 152">
    <g fill="none" fill-rule="evenodd">
        <path fill="#FFD500" fill-rule="nonzero" d="M76 36c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40c0-10.609-4.214-20.783-11.716-28.284C96.783 40.214 86.61 36 76 36z"/>
        <circle cx="76" cy="76" r="36"/>
        <circle cx="76" cy="76" r="36"/>
        <path fill="#000" fill-rule="nonzero" d="M76 26.615c1.105 0 2-.895 2-2V2c0-1.105-.895-2-2-2s-2 .895-2 2v22.615c0 1.105.895 2 2 2zM76 36c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40c0-10.609-4.214-20.783-11.716-28.284C96.783 40.214 86.61 36 76 36zm0 76c-19.882 0-36-16.118-36-36s16.118-36 36-36 36 16.118 36 36c-.022 19.873-16.127 35.978-36 36zM76 125.32c-1.105 0-2 .895-2 2v22.615c0 1.105.895 2 2 2s2-.895 2-2V127.32c0-1.105-.895-2-2-2zM149.97 74h-22.615c-1.105 0-2 .895-2 2s.895 2 2 2h22.615c1.105 0 2-.895 2-2s-.895-2-2-2zM26.645 76c0-1.105-.895-2-2-2H2.03c-1.105 0-2 .895-2 2s.895 2 2 2h22.615c1.105 0 2-.895 2-2zM112.605 41.95c.524-.005 1.025-.215 1.395-.585l16-16c.746-.787.73-2.025-.038-2.792-.768-.766-2.006-.78-2.792-.033l-16 16c-.573.572-.744 1.433-.434 2.18.31.748 1.04 1.236 1.849 1.235l.02-.005zM38.565 111.16l-16 16c-.784.784-.784 2.056 0 2.84.784.784 2.056.784 2.84 0l16-16c.526-.501.74-1.248.557-1.952-.183-.703-.733-1.252-1.436-1.433-.704-.182-1.45.033-1.951.56l-.01-.015zM113.435 111.16c-.5-.527-1.247-.742-1.95-.56-.704.181-1.254.73-1.437 1.433-.183.704.03 1.451.557 1.952l16 16c.781.781 2.049.781 2.83 0 .781-.781.781-2.049 0-2.83l-16-15.995zM38 41.365c.506.506 1.242.703 1.933.518.69-.185 1.23-.725 1.415-1.415.185-.69-.012-1.427-.518-1.933l-16-16c-.506-.506-1.244-.702-1.935-.517-.691.186-1.23.726-1.415 1.418-.185.691.014 1.428.52 1.934l16 15.995z"/>
        <circle cx="90" cy="62" r="2" fill="#000" fill-rule="nonzero"/>
        <circle cx="82" cy="54" r="2" fill="#000" fill-rule="nonzero"/>
        <circle cx="98" cy="70" r="2" fill="#000" fill-rule="nonzero"/>
    </g>
  </svg>
</div>
~~~
`;
