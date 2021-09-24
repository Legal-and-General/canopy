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
`;
