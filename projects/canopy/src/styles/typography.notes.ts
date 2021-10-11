export const notes = `
# Typography

## Purpose
Provides common typographic styles for native elements with additional utility classes.

Canopy consists of two fonts:

* **Roboto**: Productive font, for general use in self serve apps (default)
* **Lyon**: Expressive font, for headings in promo material (applied by class modifier)

> **IMPORTANT** - Lyon font files are not included in the Canopy package, you have to serve it yourself, see below for details.

## Serving the Lyon font files

Due to commercial licensing agreements the Lyon font is not included in the distributed package. You will need to manually add it to the **assets** directory of your application. Canopy does provide the css to work with the font and no additional code should be required. You will  need to ensure the font is in the directory specified by Canopy.

Canopy's path for Lyon is **/assets/fonts/lyon/**, therefore you need to put the font files in the following location:

~~~bash
my-app/
  src/
    assets/
      fonts/
        lyon/
          lyon-display-regular.woff
          lyon-display-regular.woff2
          lyon-display-bold.woff
          lyon-display-bold.woff2
~~~

> This will result in the font being served in your app like this: <br />http://my-app.landg.com/assets/fonts/lyon/LyonDisplay-Regular-Web.woff2

When you include the canopy.css file in your project, it will try to load the font from that exact path. If your font files are in the wrong location, or have a typo in the filename, the Lyon font won't load correctly.

Please ensure you have the correct licensing agreement in place before using the Lyon font in your application.

## Usage
The typography styles will provide styling for all native text elements e.g. \`\`h1\`\`, \`\`h2\`\`, \`\`p\`\`, \`\`em\`\`, \`\`b\`\`, \`\`strong\`\` etc.

* Alternatively, it is possible to just use the typography classes if more control is required over the styling of the native elements by importing canopy-classes.css instead of canopy.css.

By default the font used is Roboto.

In addition to the native styling, the following utility classes are exposed, allowing you to change the font size and weight where required.

~~~html
.lg-font-size-7
.lg-font-size-7--strong

.lg-font-size-6
.lg-font-size-6--strong

.lg-font-size-5
.lg-font-size-5--strong

.lg-font-size-4
.lg-font-size-4--strong

.lg-font-size-3
.lg-font-size-3--strong

.lg-font-size-2
.lg-font-size-2--strong

.lg-font-size-1
.lg-font-size-1--strong

.lg-font-size-0-8

.lg-font-size-0-6
~~~

\`.lg-font-size-1\` is the base font size that is used to style native elements like p and span, as the numbers increase so
does the font size up to the largest \`.lg-font-size-7.\` Each of the primary font styles also have a \`--strong\` modifier.

There are two additional styles which are smaller \`.lg-font-size-0-8\`
and \`.lg-font-size-0-6\`. The utility classes are particularly useful for when you want to decouple the semantics and styling,
for example making an h1 look like an h3:

~~~html
<h1 class="lg-font-size-3">H1 that looks like a H3</h1>
~~~
<br />

### Using the Lyon font

Lyon can be applied using the modifier class: \`\`lg-font--expressive\`\`. For example:

~~~html
<h1 class="lg-font--expressive">Heading in Lyon</h1>
~~~

It can also be used in addition to the above utility classes:

~~~html
<p class="lg-font-size-5 lg-font--expressive">Paragraph in Lyon and font size 5</p>
~~~
`;
