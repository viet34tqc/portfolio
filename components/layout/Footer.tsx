'use client';

import { GithubIcon } from '@/icons/GithubIcon';
import { MailIcon } from '@/icons/MailIcon';

const Footer = () => {
  return (
    <footer className="container">
      <div className="flex justify-between items-center py-8 border-t border-t-border">
        Copyright &copy; {new Date().getFullYear()} Viet Nguyen
        <nav className="flex gap-2">
          <a target="_blank" href="https://github.com/viet34tqc">
            <GithubIcon />
          </a>
          <a target="_blank" href="mailto:viet34tqc@gmail.com">
            <MailIcon />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
