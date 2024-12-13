import { colors } from '@/lib/constants/colors';

export function CourseIllustration() {
  return (
    <svg
      width="400"
      height="300"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <rect x="50" y="50" width="300" height="200" rx="10" fill={colors.white} stroke={colors.skyBlue} strokeWidth="2"/>
      <circle cx="200" cy="150" r="60" fill={colors.darkSkyBlue} opacity="0.1"/>
      <path
        d="M170 150L190 170L230 130"
        stroke={colors.darkSkyBlue}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}