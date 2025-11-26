/**
 * Typography utility functions for processing CSS variables
 */

import typographyVariables from '@lib/storybook/css-variables/variables/typography';

// Standard font weight names based on numeric values
const FONT_WEIGHT_NAMES: Record<number, string> = {
  100: 'Thin',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  700: 'Bold',
};

/**
 * Capitalizes the first letter of a string
 * @param str - The string to capitalize
 * @returns Capitalized string
 */
function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Resolves CSS var() references to their actual values
 * @param value - The CSS value that may contain a var() reference
 * @param variables - Object containing all CSS variables
 * @returns The resolved value
 */
export function resolveVarValue(
  value: string,
  variables: Record<string, string>,
): string {
  const varMatch = value.match(/var\((--[\w-]+)\)/);

  if (varMatch) {
    const varName = varMatch[1];

    return variables[varName] || value;
  }

  return value;
}

/**
 * Converts a CSS value to both px and rem units
 * Handles values in px, rem, or var() references
 * @param value - The CSS value to convert
 * @param variables - Object containing all CSS variables
 * @returns Object with px and rem values
 */
export function convertToPxAndRem(
  value: string,
  variables: Record<string, string>,
): { px: number | string; rem: number | string } {
  const resolved = resolveVarValue(value, variables);

  // Check if it's already in px
  if (resolved.includes('px')) {
    const pxValue = parseFloat(resolved);
    const remValue = pxValue / 16;

    return { px: pxValue, rem: remValue };
  }

  // Check if it's in rem
  if (resolved.includes('rem')) {
    const remValue = parseFloat(resolved);
    const pxValue = Math.round(remValue * 16);

    return { px: pxValue, rem: remValue };
  }

  // If no unit, assume it's a number
  const numericValue = parseFloat(resolved);

  if (isNaN(numericValue)) {
    return { px: 'N/A', rem: 'N/A' };
  }

  return { px: numericValue, rem: numericValue };
}

/**
 * Calculates line height in pixels based on the line height multiplier and font size
 * @param lineHeight - The line height value (can be a number or var() reference)
 * @param fontSize - The font size value (can be in px, rem, or var() reference)
 * @param variables - Object containing all CSS variables
 * @returns Line height in pixels or 'N/A' if calculation fails
 */
export function convertLineHeightToPx(
  lineHeight: string,
  fontSize: string,
  variables: Record<string, string>,
): number | string {
  const resolvedLineHeight = resolveVarValue(lineHeight, variables);
  const resolvedFontSize = resolveVarValue(fontSize, variables);

  const lhValue = parseFloat(resolvedLineHeight);

  // Get the font size in px
  let fontSizePx: number;

  if (resolvedFontSize.includes('px')) {
    fontSizePx = parseFloat(resolvedFontSize);
  } else if (resolvedFontSize.includes('rem')) {
    fontSizePx = parseFloat(resolvedFontSize) * 16;
  } else {
    fontSizePx = parseFloat(resolvedFontSize);
  }

  if (isNaN(lhValue) || isNaN(fontSizePx)) {
    return 'N/A';
  }

  return Math.round(lhValue * fontSizePx);
}

/**
 * Gets the description for a font weight variable
 * Extracts the numeric value from the variable name and looks up the standard name
 * @param name - The CSS variable name (e.g., '--font-weight-300')
 * @returns Description string (e.g., 'Light')
 */
export function getFontWeightDescription(name: string): string {
  // Extract numeric value from variable name (e.g., '--font-weight-300' -> 300)
  const match = name.match(/--font-weight-(\d+)/);

  if (match) {
    const weight = parseInt(match[1], 10);

    return FONT_WEIGHT_NAMES[weight] || '';
  }

  return '';
}

/**
 * Gets the description for a font family variable
 * Dynamically builds the description from the type suffix
 * @param name - The CSS variable name (e.g., '--font-family' or '--font-family-expressive')
 * @returns Description string (e.g., 'Productive font family' or 'Expressive font family')
 */
export function getFontFamilyDescription(name: string): string {
  // Extract type from variable name (e.g., '--font-family-expressive' -> 'expressive')
  const match = name.match(/^--font-family(?:-(.+))?$/);

  if (match) {
    const type = match[1];

    // If no suffix, it's the base productive font family
    if (!type) {
      return 'Productive font family';
    }

    // Otherwise, build description from the suffix (e.g., 'expressive' -> 'Expressive font family')
    return `${capitalizeFirstLetter(type)} font family`;
  }

  return '';
}

/**
 * Filters and maps font family variables
 * @param variables - Object containing all CSS variables
 * @returns Array of font family variable objects with name, value, and description
 */
export function prepareFontFamilyVars(variables: Record<string, string>) {
  return Object.entries(variables)
    .filter(([ key ]) => key.startsWith('--font-family'))
    .map(([ name, value ]) => ({
      name,
      value,
      description: getFontFamilyDescription(name),
    }));
}

/**
 * Filters and maps font weight variables
 * @param variables - Object containing all CSS variables
 * @returns Array of font weight variable objects with name, value, and description
 */
export function prepareFontWeightVars(variables: Record<string, string>) {
  return Object.entries(variables)
    .filter(([ key ]) => key.startsWith('--font-weight-'))
    .map(([ name, value ]) => ({
      name,
      value,
      description: getFontWeightDescription(name),
    }));
}

/**
 * Filters and sorts font size variables (reversed order)
 * @param variables - Object containing all CSS variables
 * @returns Array of [name, value] tuples
 */
export function prepareFontSizeVars(variables: Record<string, string>) {
  return Object.entries(variables)
    .filter(([ key ]) => key.startsWith('--font-size-'))
    .reverse();
}

/**
 * Filters and sorts line height variables (reversed order)
 * @param variables - Object containing all CSS variables
 * @returns Array of [name, value] tuples
 */
export function prepareLineHeightVars(variables: Record<string, string>) {
  return Object.entries(variables)
    .filter(([ key ]) => key.startsWith('--line-height-'))
    .reverse();
}

/**
 * Extracts the numeric/identifier portion from a font size variable name
 * @param name - The CSS variable name (e.g., '--font-size-1' or '--font-size-0-6')
 * @returns The size identifier (e.g., '1' or '0-6') or null if not a valid font size variable
 */
export function extractFontSizeNumber(name: string): string | null {
  const match = name.match(/^--font-size-(.+)$/);

  return match
    ? match[1]
    : null;
}

/**
 * Gets all available font weights from the variables
 * @param variables - Object containing all CSS variables
 * @returns Array of weight values (e.g., ['100', '300', '400', '500', '700'])
 */
export function getAvailableWeights(variables: Record<string, string>): Array<string> {
  return Object.keys(variables)
    .filter(key => key.startsWith('--font-weight-'))
    .map(key => {
      const match = key.match(/--font-weight-(\d+)/);

      return match
        ? match[1]
        : null;
    })
    .filter((weight): weight is string => weight !== null)
    .sort((a, b) => parseInt(a) - parseInt(b));
}

/**
 * Configuration for font sizes that have different values at LG breakpoint
 * Based on SCSS media query overrides
 */
const LG_BREAKPOINT_OVERRIDES: Record<string, { px: string; rem: string }> = {
  9: { px: '96', rem: '6' },
  8: { px: '76', rem: '4.75' },
  7: { px: '68', rem: '4.25' },
  6: { px: '48', rem: '3' },
  5: { px: '40', rem: '2.5' },
  4: { px: '32', rem: '2' },
};

/**
 * Default weights for productive font sizes
 * Sizes 4+ support weight 300, all sizes support 400, 500, 700
 */
function getProductiveWeights(size: string): Array<string> {
  const sizeNum = parseFloat(size);

  if (sizeNum >= 4) {
    return [ '300', '400', '500', '700' ];
  }

  return [ '400', '500', '700' ];
}

/**
 * Expressive fonts support all weights for sizes 4+
 */
function getExpressiveWeights(): Array<string> {
  return [ '300', '400', '500', '700' ];
}

/**
 * Prepares font size data for a specific size
 * @param sizeKey - The size identifier (e.g., '1', '0-6', '7')
 * @param variables - Object containing all CSS variables
 * @param isExpressive - Whether this is for expressive font
 * @returns Font size data object with size, weights, px, and rem values
 */
export function prepareFontSizeData(
  sizeKey: string,
  variables: Record<string, string>,
  isExpressive = false,
): {
  size: string;
  weights: Array<string>;
  px: { sm: string; lg: string };
  rem: { sm: string; lg: string };
} {
  const variableKey = `--font-size-${sizeKey}`;
  const value = variables[variableKey];

  if (!value) {
    throw new Error(`Font size variable ${variableKey} not found`);
  }

  // Get SM-MD values (default)
  const { px: pxSm, rem: remSm } = convertToPxAndRem(value, variables);

  // Check for LG breakpoint override
  const lgOverride = LG_BREAKPOINT_OVERRIDES[sizeKey];
  const pxLg = lgOverride?.px || pxSm;
  const remLg = lgOverride?.rem || remSm;

  // Get weights based on font type
  const weights = isExpressive
    ? getExpressiveWeights()
    : getProductiveWeights(sizeKey);

  return {
    size: sizeKey,
    weights,
    px: { sm: String(pxSm), lg: String(pxLg) },
    rem: { sm: String(remSm), lg: String(remLg) },
  };
}

/**
 * Gets productive font sizes (0.6 through 7)
 * @param variables - Object containing all CSS variables
 * @returns Array of font size data objects for productive fonts
 */
export function getProductiveFontSizes(variables: Record<string, string>) {
  const productiveSizes = [ '0-6', '0-8', '1', '2', '3', '4', '5', '6', '7' ];

  return productiveSizes.map(size => prepareFontSizeData(size, variables, false));
}

/**
 * Gets expressive font sizes (4 through 9)
 * @param variables - Object containing all CSS variables
 * @returns Array of font size data objects for expressive fonts
 */
export function getExpressiveFontSizes(variables: Record<string, string>) {
  const expressiveSizes = [ '4', '5', '6', '7', '8', '9' ];

  return expressiveSizes.map(size => prepareFontSizeData(size, variables, true));
}

// Prepare all data upfront for cleaner usage in MDX
export const fontFamilyVars = prepareFontFamilyVars(typographyVariables);
export const fontWeightVars = prepareFontWeightVars(typographyVariables);
export const fontSizeVars = prepareFontSizeVars(typographyVariables);
export const lineHeightVars = prepareLineHeightVars(typographyVariables);
export const productiveFontSizes = getProductiveFontSizes(typographyVariables);
export const expressiveFontSizes = getExpressiveFontSizes(typographyVariables);

// Export typographyVariables for use in MDX tables
export { typographyVariables };
