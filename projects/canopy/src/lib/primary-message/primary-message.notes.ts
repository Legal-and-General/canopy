export const notes = `
# Primary Message Component


## Purpose
The Primary Message is used to communicate key information to the user.

## Usage
~~~js
@NgModule({
  ...
  imports: [ ..., LgPrimaryMessageModule ],
})
~~~

and in your HTML:

~~~html
  <lg-primary-message>
    <lg-brand-icon name="calendar"></lg-brand-icon>
    <lg-primary-message-title>
      This is a primary message
    </lg-primary-message-title>
    <lg-primary-message-description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      <a href="#">eiusmod tempor</a> incididunt ut labore et dolore magna aliqua.
    </lg-primary-message-description>
    <lg-primary-message-description>
      <button lg-button variant="solid-primary" lgMarginTop="sm" type="button">Call to action</button>
    </lg-primary-message-description>
  </lg-primary-message>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`hasRole\`\` | If false, removes the role \`\`alert\`\` from the component | boolean | true | No |

`;
