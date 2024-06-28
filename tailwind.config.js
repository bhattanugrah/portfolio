// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";
import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
];
export const darkMode = "class";
export const theme = {
    extend: {
        animation: {
            aurora: "aurora 60s linear infinite",
            spotlight: "spotlight 2s ease .75s 1 forwards",
        },
        keyframes: {
            aurora: {
                from: {
                    backgroundPosition: "50% 50%, 50% 50%",
                },
                to: {
                    backgroundPosition: "350% 50%, 350% 50%",
                }
            },
            spotlight: {
                "0%": {
                    opacity: 0,
                    transform: "translate(-72%, -62%) scale(0.5)"
                },
                "100%": {
                    opacity: 1,
                    transform: "translate(-50%,-40%) scale(1)",
                }
            }
        },
    },
    plugins: [addVariablesForColors]
};
export const plugins = [addVariablesForColors];

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars
    });
}
