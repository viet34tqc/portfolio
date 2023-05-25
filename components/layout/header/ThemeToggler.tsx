'use client';

import { useEffect, useState } from 'react';

const ThemeToggler = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const systemTheme =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    const initialTheme = localStorage.getItem('theme') ?? systemTheme;
    saveTheme(initialTheme);
  }, [theme]);

  const toggleDarkMode = function () {
    saveTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const saveTheme = function (theme: string) {
    setTheme(theme);
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  };

  return (
    <button className="bg-none border-0 text-text" onClick={toggleDarkMode}>
      <svg
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
      >
        <path
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
      </svg>
    </button>
  );
};

export default ThemeToggler;
