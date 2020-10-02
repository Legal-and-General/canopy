export const notes = `
# Typography

## Purpose
Provides common typographic styles for native elements with additional utility classes

## Usage
The typography styles will provide styling for all native text elements e.g. h1, h2, p, em, b, strong etc.

In addition to the native styling the following utility classes are exposed.

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
for example making an h1 look like an h3.

`;
