'use client';
import { useState } from 'react';
import { HamburgerButton, NavMobileMenu } from '@/ui/reve';

export const NavMobile = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div className="relative">
      <HamburgerButton
        onClick={handleClick}
        color="default"
        isOpened={isOpened}
      />
      <NavMobileMenu isOpened={isOpened} onClick={handleClick} />
    </div>
  );
};
