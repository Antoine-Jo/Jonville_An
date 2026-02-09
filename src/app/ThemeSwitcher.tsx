"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
    const mounted = useSyncExternalStore(
        () => () => {},
        () => true,
        () => false
    );
    const { theme, setTheme } = useTheme();

    if (!mounted) {
        return null;
    }

    return (
        <div className="bg-background-light dark:bg-background-dark">
            The current theme is: {theme}
            <br />
            <button className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-700" onClick={() => setTheme("light")}>
                Light Mode
            </button>
            <br />
            <button className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-700" onClick={() => setTheme("dark")}>
                Dark Mode
            </button>
            <br />
            <button className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-700" onClick={() => setTheme("system")}>
                System Mode
            </button>
        </div>
    );
};

export default ThemeSwitcher;
