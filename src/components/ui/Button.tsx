import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  ...props 
}: ButtonProps) {
  
  const base = `inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 active:scale-95 disabled:opacity-50 disabled:pointer-events-none`;

  const variants = {
    primary: `bg-primary text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20`,
    secondary: `bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600`,
    danger: `bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/20`,
    ghost: `bg-transparent text-primary dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30`,
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button 
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}