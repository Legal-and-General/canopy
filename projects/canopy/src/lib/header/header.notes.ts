export const notes = `
Provides a generic header for display at the top of the page.
The current implementation is brand agnostic but eventually the branding should be encapsulated into the component.
The component uses an attribute selector which allows you to use the html <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header" target="_blank">header</a> element as the host.

The logo height is set internally with different heights for different screen sizes, it can not currently be modified to ensure consistency.

## Usage
Import the component in your application:

~~~js
@NgModule({
  ...
  imports: [ ..., LgHeaderModule ],
})
~~~

and for the HTML structure see the code snippets below.

## Ouputs
### LgHeaderComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`toggleMenu\`\` | An event emitted with a boolean value when the menu toggle button is clicked | EventEmitter<boolean> | n/a | Yes |

## Inputs
### LgHeaderLogoComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`src\`\` | A url src for the logo | string | undefined | Yes |
| \`\`alt\`\` | alt text to display alongside the logo | string | '' | Yes |
| \`\`href\`\` | Url link if the logo is clickable | string | undefined | No |

## Changing the width of the logos
The width of the logos can be changed by overriding the values of the below css variables:

~~~css
--header-logo-width
--header-logo-width-lg
--header-second-logo-width
--header-second-logo-width-lg
~~~

## Navigation
To add the primary navigation and account menu to your header, use the following markup, which makes use of some components and directives to achieve the desired behaviour. A summary of these is outlined below.

~~~js
<header lg-header>
  <lg-header-logo [src]="logo" [alt]="logoAlt" [href]="logoHref"></lg-header-logo>

  <lg-primary-nav>
    <lg-primary-nav-list-item>
      <a href="/" [isActive]="true" lgPrimaryNavItem>Link 1</a>
    </lg-primary-nav-list-item>
    <lg-primary-nav-list-item>
      <a href="/" lgPrimaryNavItem>
        Link 2
        <lg-notification-badge count="3" accessText="You have 3 unread messages"></lg-notification-badge>
      </a>
    </lg-primary-nav-list-item>
    <lg-primary-nav-list-item [alignRight]="true">
      <button type="button" lgPrimaryNavItem>Button</button>
    </lg-primary-nav-list-item>
  </lg-primary-nav>

  <lg-account-menu>
    <lg-account-menu-list-item>
      <button type="button" lgAccountMenuItem>
        <lg-account-menu-item-label>Button</lg-account-menu-item-label>
        <lg-icon name="notification-on"></lg-icon>
        <lg-notification-badge count="3" accessText="You have 3 unread messages"></lg-notification-badge>
      </button>
    </lg-account-menu-list-item>
    <lg-account-menu-list-item>
      <a href="" lgAccountMenuItem>
        <lg-account-menu-item-label>Link</lg-account-menu-item-label>
        <lg-icon name="profile"></lg-icon>
      </a>
    </lg-account-menu-list-item>
    <lg-account-menu-list-item>
      <button type="button" lgAccountMenuItem>
        <lg-account-menu-item-label>Signout</lg-account-menu-item-label>
        <lg-icon name="sign-in"></lg-icon>
      </button>
    </lg-account-menu-list-item>
  </lg-account-menu>
</header>
~~~

### Primary navigation component (\`\`LgPrimaryNavComponent\`\`)
Provides the responsive menu which can be populated with navigation items.

#### Inputs
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`showResponsiveMenu\`\` | Determines whether to show or hide the responsive menu | EventEmitter<boolean> | n/a | Yes |

### Primary navigation list item component (\`\`LgPrimaryNavListItemComponent\`\`)
Used to ensure navigation items are wrapped in an element marked up as a list item. This is where navigation items should be projected.

#### Inputs
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`alignRight\`\` | Aligns an item to the right-hand side on \`\`lg\`\` breakpoints | Boolean | true | No |

#### Outputs
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`tabbedOut\`\` | An event emitted when the tab key bubbles up to the list item | EventEmitter<KeyboardEvent> | n/a | Yes |
| \`\`clicked\`\` | An event emitted when a click event bubbles up to the list item | EventEmitter<Event> | n/a | Yes |

### Primary navigation item directive (\`\`LgPrimaryNavItemDirective\`\`)
Adds styles and common behaviour to navigation items.

#### Inputs
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`isActive\`\` | Sets active state of navigation item | Boolean | false | No |

### Notification badge component (\`\`LgNotificationBadgeComponent\`\`)
Provides a notification badge for a navigation item.

#### Inputs
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`count\`\` | The value to appear in the notification badge | string | undefined | Yes |
| \`\`accessText\`\` | Accessible text used by assistive technologies to give context to the count value that is displayed | string | undefined | Yes |

### Account menu component (\`\`LgAccountMenuComponent\`\`)
Provides an account menu which can be popluated with account menu items.

### Account menu item directive (\`\`LgAccountMenuItemDirective\`\`)
Adds styles and common behaviour to account menu items.

#### Inputs
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`isActive\`\` | Sets active state of menu item | Boolean | false | No |

### Account menu list item component (\`\`LgAccountMenuListItemComponent\`\`)
Used to ensure account menu items are wrapped in an element marked up as a list item. This is where account menu items should be projected.

#### Outputs
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`clicked\`\` | An event emitted when a click event bubbles up to the list item | EventEmitter<Event> | n/a | Yes |

### Account menu item label component (\`\`LgAccountMenuItemLabelComponent\`\`)
Used to ensure correct styling is applied to the menu item label at different breakpoints.
`;
