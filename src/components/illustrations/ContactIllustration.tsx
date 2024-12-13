import { colors } from '@/lib/constants/colors';

export function ContactIllustration() {
  return (
    <svg
      width="300"
      height="200"
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <rect x="50" y="50" width="200" height="100" rx="10" fill={colors.white} stroke={colors.skyBlue} strokeWidth="2"/>
      <path
        d="M50 60L150 120L250 60"
        stroke={colors.darkSkyBlue}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}