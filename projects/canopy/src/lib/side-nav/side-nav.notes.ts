export const notes = `
# Side Nav Component

## Purpose

Side Navs are components that allow the user to define a series of navigation items that display content in a predefined area.

### Side Nav Bar

Here is where the navigation menu items are put. The items, once clicked on, will display their routes'
content in the Side Nav Content component.
On mobile devices, the menu is below the content area, instead of to the left.

### Side Nav Bar Footer

The footer is below the navigation items and can hold different kinds of content (e.g. a button).

### Side Nav Content

This is the predefined area where content is shown. It should always contain a router outlet to be able to display
the different nav item routes.

## Usage

Import the component in your module:

~~~js
@NgModule({
  ...
  imports: [ ..., LgSideNavModule ],
})
~~~

and in your HTML:

~~~html
<lg-side-nav>
    <lg-side-nav-bar label="Side Nav Demo">
      <a id="side-nav-0"
         href=""
         [routerLink]="'firstPage'"
        <lg-side-nav-bar-item [isActive]="true">
            <lg-side-nav-bar-item-heading>Overview</lg-side-nav-bar-item-heading>
        </lg-side-nav-bar-item>
      </a>
      <a id="side-nav-1"
         href=""
         [routerLink]="'secondPage'"
        >
        <lg-side-nav-bar-item [isActive]="false">
            <lg-side-nav-bar-item-heading>Personal details</lg-side-nav-bar-item-heading>
            <lg-side-nav-bar-item-content>Your name, date of birth, marital status and National Insurance Number.</lg-side-nav-bar-item-content>
        </lg-side-nav-bar-item>
      </a>
      <lg-side-nav-bar-footer>
        <a lg-button lgMarginTop="xxl" variant="outline-primary" [fullWidth]="false" href="#">Logout</a>
      </lg-side-nav-bar-footer>
    </lg-side-nav-bar>
    <lg-side-nav-content tabindex="0">
      <router-outlet></router-outlet>
    </lg-side-nav-content>
</lg-side-nav>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-------:|:--------:|
| isActive | specifies whether or not the navigation item is in an active state | boolean | false | No
`;
