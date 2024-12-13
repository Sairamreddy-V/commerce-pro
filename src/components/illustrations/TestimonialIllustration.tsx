import { colors } from '@/lib/constants/colors';

export function TestimonialIllustration() {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <path
        d="M40 80L80 80C90 80 100 70 100 60L100 40C100 30 90 20 80 20L40 20C30 20 20 30 20 40L20 60C20 70 30 80 40 80Z"
        fill={colors.skyBlue}
        opacity="0.2"
      />
      <path
        d="M35 45L85 45M35 55L65 55"
        stroke={colors.darkSkyBlue}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}