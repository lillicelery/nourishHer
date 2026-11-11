export const colors = {
  brand: '#6B4C9A',
  white: '#FFFFFF',
  gray: '#6B7280',
  phase: {
    menstrual: '#C97B8B',
    follicular: '#7BA98F',
    ovulation: '#E0956C',
    luteal: '#C4A24E',
  },
} as const;

export const fontSizes = {
  heading: 32,
  subheading: 18,
  body: 16,
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

export const theme = { colors, fontSizes, spacing } as const;

export type CyclePhase = keyof typeof colors.phase;
