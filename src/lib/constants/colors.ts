export const colors = {
  white: '#FFFFFF',
  skyBlue: '#87CEEB',
  darkSkyBlue: '#00BFFF',
} as const;

export const gradients = {
  primary: `linear-gradient(135deg, ${colors.skyBlue} 0%, ${colors.darkSkyBlue} 100%)`,
  overlay: `linear-gradient(to right, rgba(0, 191, 255, 0.9) 0%, rgba(135, 206, 235, 0.8) 100%)`,
} as const;