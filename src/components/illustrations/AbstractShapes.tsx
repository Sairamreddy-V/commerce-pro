import { colors } from '@/lib/constants/colors';

export function AbstractShapes() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 right-0 z-0 opacity-10"
    >
      <circle cx="700" cy="100" r="80" fill={colors.skyBlue} />
      <path
        d="M600 200L700 300L600 400L500 300Z"
        fill={colors.darkSkyBlue}
        opacity="0.6"
      />
      <rect
        x="100"
        y="100"
        width="150"
        height="150"
        rx="20"
        fill={colors.skyBlue}
        opacity="0.4"
      />
    </svg>
  );
}