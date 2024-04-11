'use client';
import { useState } from 'react';
import { HamburgerButton, NavMobileMenu } from '@/ui/reve';

export const NavMobile = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="relative">
      <HamburgerButton
        onClick={() => setIsOpened(!isOpened)}
        color="default"
        isOpened={isOpened}
      />
      <NavMobileMenu isOpened={isOpened} />
    </div>
  );
};
