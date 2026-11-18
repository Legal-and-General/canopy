---
name: canopy-page
description: Best practices for the Canopy Page component and Basic, Child, Product, and Form Journey page templates. Trigger when building a full-page layout with Canopy in Angular.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/page/docs/guide.mdx
---

# Canopy Page and Page Templates — Best Practices

This skill covers the Canopy `lg-page` component and common page templates from `@legal-and-general/canopy`.

Apply it whenever you use `LgPageComponent` or compose a Basic, Child, Product, or Form Journey page.

---

## Import

```ts
import {
  LgPageComponent,
  LgGridContainerDirective,
  LgGridRowDirective,
  LgGridColDirective,
} from '@legal-and-general/canopy';
```

---

## Page Shell

```html
<lg-page variant="default">
  <header lg-header><!-- Header content --></header>
  <div lgContainer>
    <div lgRow>
      <div lgCol="12"><h1>Your account</h1></div>
    </div>
  </div>
  <footer lg-footer><!-- Footer content --></footer>
</lg-page>
```

`variant` accepts `default` or `branded`. The default is `default`; branded applies the regal page background. The page does not automatically change the colour mode or theme of projected content.

---

## Content Projection Slots

| Slot | Description |
|------|-------------|
| `lg-header` | Projects into the header area at the top of the page. |
| `lg-footer` | Projects into the footer area at the bottom of the page. |
| `<default>` | Any other content is projected into the central column. |

---

## Wrapping Header and Footer

Use `ngProjectAs` to use wrapper components while still targeting the correct slots:

```html
<lg-page>
  <app-header ngProjectAs="[lg-header]"></app-header>
  <router-outlet></router-outlet>
  <app-footer ngProjectAs="[lg-footer]"></app-footer>
</lg-page>
```

Use `ngProjectAs` when an application component must project into a named page slot. For example, project a custom header using `ngProjectAs="[lg-header]"`.

## Page Variants

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `variant` | `'default' \| 'branded'` | `'default'` | Selects the standard or regal page background. |

Set breadcrumb styling separately. The page templates use blue mode with a neutral theme on default pages and a bold theme on branded pages:

```html
<lg-breadcrumb lgColour="blue" lgColourTheme="neutral">
  <!-- Breadcrumb items -->
</lg-breadcrumb>

<lg-breadcrumb lgColour="blue" lgColourTheme="bold">
  <!-- Breadcrumb items on a branded page -->
</lg-breadcrumb>
```

## Page Templates

Use Canopy's grid directives for responsive layouts. Keep the page's primary heading in the hero when the pattern includes one; otherwise provide it in the main content.

### Basic Page

Use a centred content column with optional banner and hero regions when a page has one main task and no related-content column. Omit regions that are not needed.

```html
<lg-page>
  <header lg-header><!-- Header --></header>
  <lg-banner>Important page-wide message</lg-banner>
  <lg-hero [overlap]="2"><!-- Hero and page heading --></lg-hero>
  <div lgContainer>
    <div lgRow>
      <div lgCol="12" lgColSm="10" lgColSmOffset="1"
        lgColMd="8" lgColMdOffset="2" lgColLg="6" lgColLgOffset="3">
        <!-- Main page content -->
      </div>
    </div>
  </div>
  <footer lg-footer><!-- Footer --></footer>
</lg-page>
```

If you omit the hero, put the page's main heading in the content column. Do not add a banner without a page-wide message.

### Child Page

Use an 8/4 content split from the `md` breakpoint when supporting information belongs beside the main task. Keep primary content first; the columns stack on smaller screens.

```html
<div lgContainer>
  <div lgRow>
    <div lgCol="12" lgColMd="8"><!-- Primary content --></div>
    <div lgCol="12" lgColMd="4"><!-- Related content --></div>
  </div>
</div>
```

Use the narrower column only for relevant secondary information, not the main task.

### Product Page

Use a hero to identify the product and show its summary before the details. Below it, use the same responsive 8/4 split for product content and related information.

```html
<lg-hero [overlap]="2">
  <lg-hero-content>
    <lg-hero-card>
      <lg-hero-card-header>
        <lg-hero-card-title headingLevel="1">Pension annuity</lg-hero-card-title>
      </lg-hero-card-header>
    </lg-hero-card>
  </lg-hero-content>
</lg-hero>
<div lgContainer>
  <div lgRow>
    <div lgCol="12" lgColMd="8"><!-- Product details and actions --></div>
    <div lgCol="12" lgColMd="4"><!-- Related information --></div>
  </div>
</div>
```

Keep essential product information in the hero or primary column, not only in related content.

### Form Journey

Use a centred form-journey content area for a focused task. Project full-page breadcrumbs into the page header slot with `ngProjectAs`; otherwise they appear in the main region. The form and actions need application-provided state, validation, and navigation.

```html
<lg-page variant="default">
  <div ngProjectAs="[lg-header]">
    <div lgContainer>
      <div lgRow><div lgCol="12">
        <lg-breadcrumb variant="page" lgColour="blue" lgColourTheme="neutral">
          <!-- Breadcrumb items -->
        </lg-breadcrumb>
      </div></div>
    </div>
  </div>
  <div lgContainer>
    <div lgRow>
      <div lgCol="12" lgColMd="8" lgColMdOffset="2"
        lgColLg="6" lgColLgOffset="3">
        <form>
          <lg-content-area variant="form-journey">
            <lg-content-area-content>
              <lg-content-area-title [headingLevel]="1">Update your product</lg-content-area-title>
              <lg-input-field [block]="true">
                Product number
                <input lgInput name="productNumber" type="text" />
              </lg-input-field>
              <lg-input-field [block]="true">
                Postcode
                <lg-hint>For example, SW1A 1AA</lg-hint>
                <input lgInput name="postcode" type="text" autocomplete="postal-code" />
              </lg-input-field>
            </lg-content-area-content>
            <!-- Add the form-journey header and footer actions as needed. -->
          </lg-content-area>
        </form>
      </div>
    </div>
  </div>
</lg-page>
```

For the branded form journey, set `variant="branded"` on `lg-page` and `lgColourTheme="bold"` on the breadcrumb. These settings are independent. Do not treat the example's Continue and Cancel buttons as a completed workflow.

---

## Design Constraints

- Combine `lg-page` with the grid directives (`lgContainer`, `lgRow`, `lgCol`) to create a responsive layout for the main content area.
- Use the `lg-header` and `lg-footer` slots for page-level header and footer content.
- Keep content in the page's main region; `lg-page` supplies the main landmark and skip-to-main link.
- Do not add another `<main>` inside `lg-page`.
