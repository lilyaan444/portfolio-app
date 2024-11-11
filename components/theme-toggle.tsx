'use client';

import { useMounted } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa6';

export default function ThemeToggle() {
    const isMounted = useMounted();

    const { theme, setTheme } = useTheme();

    const handleToggle = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

    if (!isMounted) return null;

    return (
        <button
            className='cancel-drag flex h-10 w-20 items-center rounded-full bg-gray-200 transition duration-300 focus:outline-none lg:h-12 lg:w-24'
            onClick={handleToggle}
            aria-label='theme-toggle'>
            <div
                className={cn(
                    `flex size-10 items-center justify-center rounded-full border-2 border-gray-200 text-white transition duration-300 lg:size-12 lg:border-4`,
                    theme === 'dark'
                        ? 'translate-x-full bg-dark-700'
                        : 'bg-yellow-500'
                )}>
                {theme === 'dark' ? <FaMoon /> : <FaSun />}
            </div>
        </button>
    );
}