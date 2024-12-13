import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { NavLinks } from './NavLinks';
import { useState } from 'react';

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetTitle className="text-left">Menu</SheetTitle>
        <nav className="flex flex-col gap-4 mt-6">
          <NavLinks 
            className="flex-col items-start gap-2" 
            onClick={() => setOpen(false)}
          />
        </nav>
      </SheetContent>
    </Sheet>
  );
}