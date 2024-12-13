import { colors } from '@/lib/constants/colors';

export function WaveBackground() {
  return (
    <svg
      width="100%"
      height="100"
      viewBox="0 0 1440 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0 w-full"
    >
      <path
        d="M0 50L48 45.7C96 41.3 192 32.7 288 35.3C384 38 480 52 576 55.3C672 58.7 768 51.3 864 43.3C960 35.3 1056 26.7 1152 25C1248 23.3 1344 28.7 1392 31.3L1440 34V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
        fill={colors.skyBlue}
        opacity="0.1"
      />
      <path
        d="M0 70L48 65.7C96 61.3 192 52.7 288 55.3C384 58 480 72 576 75.3C672 78.7 768 71.3 864 63.3C960 55.3 1056 46.7 1152 45C1248 43.3 1344 48.7 1392 51.3L1440 54V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V70Z"
        fill={colors.darkSkyBlue}
        opacity="0.1"
      />
    </svg>
  );
}