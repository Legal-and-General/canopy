/**
 * Typography utility functions for processing CSS variables
 */

import designTokenVariables from '@lib/storybook/css-variables/tokens/variables';
import typographyTokenVariables from '@lib/storybook/css-variables/tokens/typography';

// Merge both token sources
const allTypographyVariables = { ...designTokenVariables, ...typographyTokenVariables };

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
 * @param name - The CSS variable name (e.g., '--typeface-productive' or '--typeface-expressive')
 * @returns Description string (e.g., 'Productive font family' or 'Expressive font family')
 */
export function getFontFamilyDescription(name: string): string {
  // Extract type from variable name (e.g., '--typeface-productive' -> 'productive')
  const match = name.match(/^--typeface-(.+)$/);

  if (match) {
    const type = match[1];

    // Build description from the suffix (e.g., 'productive' -> 'Productive font family')
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
    .filter(([ key ]) => key.startsWith('--typeface-'))
    .map(([ name, value ]) => {
      // Transform display name from --typeface-* to --font-family-* for backwards compatibility
      const displayName =
        name === '--typeface-productive'
          ? '--font-family'
          : name.replace('--typeface-', '--font-family-');

      return {
        name: displayName,
        value,
        description: getFontFamilyDescription(name),
      };
    });
}

/**
 * Filters and maps font weight variables
 * Returns only base font weight names without -productive or -expressive suffixes
 * @param variables - Object containing all CSS variables
 * @returns Array of font weight variable objects with name, value, and description
 */
export function prepareFontWeightVars(variables: Record<string, string>) {
  const uniqueWeights = new Set<string>();
  const weightVars: Array<{ name: string; value: string; description: string }> = [];

  Object.entries(variables)
    .filter(([ key ]) => key.startsWith('--font-weight-'))
    .forEach(([ name, value ]) => {
      // Extract base weight name (e.g., '--font-weight-300-productive' -> '--font-weight-300')
      const baseWeight = name.replace(/-(productive|expressive)$/, '');

      // Only add if we haven't seen this base weight yet
      if (!uniqueWeights.has(baseWeight)) {
        uniqueWeights.add(baseWeight);

        weightVars.push({
          name: baseWeight,
          value,
          description: getFontWeightDescription(baseWeight),
        });
      }
    });

  return weightVars;
}

/**
 * Filters and sorts font size variables (ascending order)
 * Returns only base font size names without breakpoint suffixes
 * @param variables - Object containing all CSS variables
 * @returns Array of [name, value] tuples for base font sizes
 */
export function prepareFontSizeVars(variables: Record<string, string>) {
  const uniqueSizes = new Set<string>();

  // Extract unique font sizes (from --font-size-small-* and --font-size-large-* patterns)
  Object.keys(variables)
    .filter(
      key =>
        key.startsWith('--font-size-small-') || key.startsWith('--font-size-large-'),
    )
    .forEach(key => {
      // Extract size part (e.g., '1' from '--font-size-small-1')
      const match = key.match(/--font-size-(?:small|large)-([\d-]+)$/);

      if (match) {
        uniqueSizes.add(`--font-size-${match[1]}`);
      }
    });

  // Convert to array and sort in ascending order
  return Array.from(uniqueSizes)
    .sort()
    .map(name => {
      // Get small value as the default display value
      const sizeKey = name.replace('--font-size-', '');
      const smallKey = `--font-size-small-${sizeKey}`;
      const value = variables[smallKey] || 'N/A';

      return [ name, value ] as [string, string];
    });
}

/**
 * Filters and sorts line height variables (ascending order)
 * Returns only base line height names without breakpoint suffixes
 * @param variables - Object containing all CSS variables
 * @returns Array of [name, value] tuples for base line heights
 */
export function prepareLineHeightVars(variables: Record<string, string>) {
  const uniqueLineHeights = new Set<string>();

  // Extract unique line heights (from --line-height-small-* and --line-height-large-* patterns)
  Object.keys(variables)
    .filter(
      key =>
        key.startsWith('--line-height-small-') || key.startsWith('--line-height-large-'),
    )
    .forEach(key => {
      // Extract size part (e.g., '1' from '--line-height-small-1')
      const match = key.match(/--line-height-(?:small|large)-([\d-]+)$/);

      if (match) {
        uniqueLineHeights.add(`--line-height-${match[1]}`);
      }
    });

  // Convert to array and sort in ascending order
  return Array.from(uniqueLineHeights)
    .sort()
    .map(name => {
      // Get small value as the default display value
      const sizeKey = name.replace('--line-height-', '');
      const smallKey = `--line-height-small-${sizeKey}`;
      const value = variables[smallKey] || 'N/A';

      return [ name, value ] as [string, string];
    });
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
 * Gets font size values for SM-MD and LG-XXL breakpoints from design tokens
 * @param sizeKey - The size identifier (e.g., '1', '0-6', '7')
 * @param variables - Object containing all CSS variables
 * @returns Object with SM-MD and LG-XXL values in px and rem
 */
function getFontSizeBreakpointValues(
  sizeKey: string,
  variables: Record<string, string>,
): { sm: string; lg: string; smRem: string; lgRem: string } {
  // Get small value (SM and MD use the same value)
  const smallKey = `--font-size-small-${sizeKey}`;
  const smallValue = variables[smallKey];

  // Get large value (LG, XL, XXL typically use the same value)
  const largeKey = `--font-size-large-${sizeKey}`;
  const largeValue = variables[largeKey];

  if (!smallValue || !largeValue) {
    console.warn(
      `Font size variables not found for size ${sizeKey}. smallKey: ${smallKey}, largeKey: ${largeKey}`,
    );

    return { sm: '0', lg: '0', smRem: '0', lgRem: '0' };
  }

  // Convert rem to px
  const smRem = parseFloat(smallValue);
  const lgRem = parseFloat(largeValue);
  const smPx = Math.round(smRem * 16);
  const lgPx = Math.round(lgRem * 16);

  return {
    sm: String(smPx),
    lg: String(lgPx),
    smRem: String(smRem),
    lgRem: String(lgRem),
  };
}

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
  // Get breakpoint values from design tokens
  const {
    sm: pxSm,
    lg: pxLg,
    smRem,
    lgRem,
  } = getFontSizeBreakpointValues(sizeKey, variables);

  // Get weights based on font type
  const weights = isExpressive
    ? getExpressiveWeights()
    : getProductiveWeights(sizeKey);

  return {
    size: sizeKey,
    weights,
    px: { sm: pxSm, lg: pxLg },
    rem: { sm: smRem, lg: lgRem },
  };
}

/**
 * Gets productive font sizes (0.6 through 7)
 * @param variables - Object containing all CSS variables
 * @returns Array of font size data objects for productive fonts
 */
export function getProductiveFontSizes(variables: Record<string, string>) {
  const productiveSizes = [ '0-6', '0-8', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];

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

/**
 * Gets breakpoint-specific font size values for MDX tables
 * @param name - The font size variable name (e.g., '--font-size-1', '--font-size-4')
 * @param variables - Object containing all CSS variables
 * @returns Object with sm and lg values in both px and rem
 */
export function getFontSizeBreakpointValuesForTable(
  name: string,
  variables: Record<string, string>,
): { sm: { px: string; rem: string }; lg: { px: string; rem: string } } {
  // Extract size key from variable name (e.g., '--font-size-1' -> '1', '--font-size-0-6' -> '0-6')
  const sizeKey = name.replace('--font-size-', '');

  const { sm, lg, smRem, lgRem } = getFontSizeBreakpointValues(sizeKey, variables);

  return {
    sm: { px: sm, rem: smRem },
    lg: { px: lg, rem: lgRem },
  };
}

/**
 * Gets breakpoint-specific line height values for MDX tables
 * @param name - The line height variable name (e.g., '--line-height-1', '--line-height-4')
 * @param variables - Object containing all CSS variables
 * @returns Object with sm and lg values in both px and rem
 */
export function getLineHeightBreakpointValuesForTable(
  name: string,
  variables: Record<string, string>,
): { sm: { px: string; rem: string }; lg: { px: string; rem: string } } {
  // Extract size key from variable name (e.g., '--line-height-1' -> '1', '--line-height-0-6' -> '0-6')
  const sizeKey = name.replace('--line-height-', '');

  // Get small value (SM and MD use the same value)
  const smallKey = `--line-height-small-${sizeKey}`;
  const smallValue = variables[smallKey];

  // Get large value (LG, XL, XXL typically use the same value)
  const largeKey = `--line-height-large-${sizeKey}`;
  const largeValue = variables[largeKey];

  if (!smallValue || !largeValue) {
    return {
      sm: { px: '0', rem: '0' },
      lg: { px: '0', rem: '0' },
    };
  }

  // Convert rem to px
  const smRem = Number.parseFloat(smallValue);
  const lgRem = Number.parseFloat(largeValue);
  const smPx = Math.round(smRem * 16);
  const lgPx = Math.round(lgRem * 16);

  return {
    sm: { px: String(smPx), rem: String(smRem) },
    lg: { px: String(lgPx), rem: String(lgRem) },
  };
}

// Prepare all data upfront for cleaner usage in MDX
export const fontFamilyVars = prepareFontFamilyVars(allTypographyVariables);
export const fontWeightVars = prepareFontWeightVars(allTypographyVariables);
export const fontSizeVars = prepareFontSizeVars(allTypographyVariables);
export const lineHeightVars = prepareLineHeightVars(allTypographyVariables);
export const productiveFontSizes = getProductiveFontSizes(allTypographyVariables);
export const expressiveFontSizes = getExpressiveFontSizes(allTypographyVariables);

// Export allTypographyVariables for use in MDX tables
export { allTypographyVariables as typographyVariables };
