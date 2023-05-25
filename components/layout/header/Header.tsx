'use client';

import Link from 'next/link';
import ThemeToggler from './ThemeToggler';

const Header = () => {
  return (
    <header className="flex justify-between align-center p-8">
      <Link className="font-bold text-3xl text-text" href="/">
        VietNguyen
      </Link>

      <nav className="flex items-center [&>a]:p-3">
        <Link href="mailto:viet34tqc@gmail.com">Contact</Link>
        <ThemeToggler />
      </nav>
    </header>
  );
};

export default Header;
