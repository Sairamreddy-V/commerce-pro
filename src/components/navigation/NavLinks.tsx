import { cn } from '@/lib/utils';
import { navigationLinks } from '@/lib/constants/navigation';
import { colors } from '@/lib/constants/colors';

interface NavLinksProps {
  className?: string;
  onClick?: () => void;
}

export function NavLinks({ className, onClick }: NavLinksProps) {
  return (
    <nav className={cn('flex gap-1', className)}>
      {navigationLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className={cn(
            "px-4 py-2 text-[16px] transition-all duration-300",
            "rounded-lg relative",
            "text-gray-700 hover:text-[#00BFFF]",
            "after:absolute after:bottom-0 after:left-0 after:right-0",
            "after:h-0.5 after:bg-[#00BFFF]",
            "after:scale-x-0 hover:after:scale-x-100",
            "after:transition-transform after:duration-300",
            "hover:bg-[#87CEEB]/10"
          )}
          onClick={onClick}
          style={{ 
            '--hover-color': colors.darkSkyBlue 
          } as React.CSSProperties}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}