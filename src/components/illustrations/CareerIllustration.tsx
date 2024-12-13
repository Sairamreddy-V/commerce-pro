import { colors } from '@/lib/constants/colors';

export function CareerIllustration() {
  return (
    <svg
      width="400"
      height="300"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <path
        d="M100 250C100 250 150 150 200 150C250 150 300 250 300 250"
        stroke={colors.darkSkyBlue}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="200" cy="100" r="40" fill={colors.skyBlue} opacity="0.2"/>
      <path
        d="M180 100L200 120L220 100"
        stroke={colors.darkSkyBlue}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}