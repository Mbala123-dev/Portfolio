import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { actualTheme, toggleTheme } = useTheme();

  const isDark = actualTheme === 'dark';
  const title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-smallTextColor dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center"
      title={title}
      aria-label={title}
    >
      <i className={`${isDark ? 'ri-sun-line' : 'ri-moon-line'} text-xl`}></i>
    </button>
  );
};

export default ThemeToggle;
