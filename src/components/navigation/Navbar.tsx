import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center bg-[#87CEEB]/5 rounded-xl p-1">
            <NavLinks className="flex items-center justify-between" />
          </div>
          
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}