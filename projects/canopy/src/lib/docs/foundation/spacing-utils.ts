import variablesVariables from '@lib/storybook/css-variables/tokens/variables';

// Get all CSS variables that match the spacing pattern
export const getSpacingVariables = (): Record<string, string> => {
  const spacingVars: Record<string, string> = {};

  Object.entries(variablesVariables).forEach(([ key, value ]) => {
    // Match variables that contain '--space-' and end with '-sm' or '-lg'
    if (
      key.includes('--space-') &&
      (key.endsWith('-sm') || key.endsWith('-lg')) &&
      typeof value === 'string'
    ) {
      // Transform --space-X-sm to --space-X for display
      const displayKey = key.endsWith('-sm')
        ? key.replace(/-sm$/, '')
        : key; // Keep --space-X-lg as is

      spacingVars[displayKey] = value;
    }
  });

  return spacingVars;
};

// Get only the default spacing variables (--space-X) for main display
export const getDefaultSpacingVariables = (): Record<string, string> => {
  const spacingVars: Record<string, string> = {};

  Object.entries(variablesVariables).forEach(([ key, value ]) => {
    // Only match --space-X-sm variables and transform to --space-X
    if (key.includes('--space-') && key.endsWith('-sm') && typeof value === 'string') {
      const displayKey = key.replace(/-sm$/, '');

      spacingVars[displayKey] = value;
    }
  });

  return spacingVars;
};

// Get the lg spacing variables (--space-X-lg) from tokens
export const getLgSpacingVariables = (): Record<string, string> => {
  const lgSpacingVars: Record<string, string> = {};

  Object.entries(variablesVariables).forEach(([ key, value ]) => {
    // Only match --space-X-lg variables
    if (key.includes('--space-') && key.endsWith('-lg') && typeof value === 'string') {
      lgSpacingVars[key] = value;
    }
  });

  return lgSpacingVars;
};

// Convert CSS value to px and rem
export const convertToPxAndRem = (
  cssValue: string,
  allVariables?: Record<string, string>,
): { px: string; rem: string } => {
  // Remove any CSS var() wrapper and get the actual value
  let value = cssValue.replace(/var\(([^)]+)\)/g, (match, varName: string) => {
    const cleanVarName = varName.split(',')[0].trim();

    return allVariables?.[cleanVarName] || match;
  });

  // Handle rem values
  if (value.includes('rem')) {
    const remValue = parseFloat(value.replace('rem', ''));
    const pxValue = remValue * 16; // Assuming 16px = 1rem

    return {
      px: `${pxValue}`,
      rem: `${remValue}`,
    };
  }

  // Handle px values
  if (value.includes('px')) {
    const pxValue = parseFloat(value.replace('px', ''));
    const remValue = pxValue / 16;

    return {
      px: `${pxValue}`,
      rem: `${remValue}`,
    };
  }

  // Handle numeric values (assume px)
  const numericValue = parseFloat(value);

  if (!isNaN(numericValue)) {
    return {
      px: `${numericValue}`,
      rem: `${numericValue / 16}`,
    };
  }

  // Handle zero or other values
  if (value === '0' || value === 'none') {
    return { px: '0px', rem: '0rem' };
  }

  // Fallback for unknown values
  return { px: value, rem: value };
};

// Get sorted spacing variables as array of [name, value] pairs
export const getSpacingVariablesArray = (): Array<[string, string]> => {
  const spacingVars = getDefaultSpacingVariables(); // Use only default spacing variables

  return Object.entries(spacingVars).sort(([ a ], [ b ]) => {
    // Sort by the numeric part of the spacing name
    const aNum = parseInt(a.match(/--space-(\d+)/)?.[1] || '0');
    const bNum = parseInt(b.match(/--space-(\d+)/)?.[1] || '0');

    return aNum - bNum;
  });
};

// Helper function to get a clean spacing name for display
export const getSpacingDisplayName = (varName: string): string => {
  return varName;
};

// Helper to check if a spacing value should be displayed differently for larger screens
export const getResponsiveSpacingValue = (
  cssValue: string,
  breakpoint: 'sm-md' | 'lg-up',
): { px: string; rem: string } => {
  // Get all variables (including lg spacing variables)
  const allVars = getSpacingVariables();

  if (breakpoint === 'lg-up') {
    // If the input is already a CSS variable, extract the variable name
    const varMatch = cssValue.match(/var\(([^,)]+)/);

    if (varMatch && varMatch[1]) {
      // Check if varMatch exists AND has a captured group
      const varName = varMatch[1].trim();

      // Check if varName is valid before calling replace
      if (varName && varName.includes('--space-')) {
        // Convert --space-X to --space-X-lg
        const lgVarName = varName + '-lg';

        // Check if we have the lg version of this variable
        const lgVars = getLgSpacingVariables();

        if (lgVars[lgVarName]) {
          return convertToPxAndRem(lgVars[lgVarName], allVars);
        }
      }
    }

    // If it's a direct value or we couldn't find lg variant, use the original
    return convertToPxAndRem(cssValue, allVars);
  }

  // For sm-md breakpoint, use default spacing values
  const defaultVars = getDefaultSpacingVariables();

  return convertToPxAndRem(cssValue, defaultVars);
};

// Export for use in MDX
export const spaceVars = getSpacingVariablesArray();
export const spacingVariables = getDefaultSpacingVariables();
export const allSpacingVariables = getSpacingVariables();

// Helper function to get the lg equivalent of a spacing variable
export const getLgSpacingVariable = (spacingVarName: string): string | null => {
  const lgVarName = spacingVarName + '-lg';
  const lgVars = getLgSpacingVariables();

  return lgVars[lgVarName] || null;
};

// Helper function to check if an lg spacing variant exists
export const hasLgSpacingVariant = (spacingVarName: string): boolean => {
  const lgVarName = spacingVarName + '-lg';
  const lgVars = getLgSpacingVariables();

  return lgVarName in lgVars;
};
