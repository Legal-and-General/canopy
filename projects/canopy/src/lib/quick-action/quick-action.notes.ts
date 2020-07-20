export const notes = `
# Quick Action Component

## Purpose
Quick Actions are small clickable elements that can be used to provide functionality in context, such as editing a form or actions on a card.

## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgQuickActionModule ],
})
~~~

and in your HTML:

~~~html
<button lg-quick-action>
  <lg-icon name="repeat"></lg-icon>
  Load more
</button>
~~~

or:

~~~html
<a lg-quick-action
  href="/mailbox">
  <lg-icon name="secure-message"></lg-icon>
  Send us a message
</a>
~~~

## Using only the SCSS files

The \`\`lg-quick-action\`\` class is required to be able to apply the main style to the button or link.

Place the SVG icon in a container with the class \`\`lg-quick-action__icon\`\`;

~~~html
<button class="lg-quick-action">
  <span class="lg-quick-action__icon">
    <svg>...</svg>
  </span>
  Load more
</button>
~~~

or:

~~~html
<a class="lg-quick-action"
  href="/mailbox">
  <span class="lg-quick-action__icon">
    <svg>...</svg>
  </span>
  Send us a message
</a>
~~~
`;
