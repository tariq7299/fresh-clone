
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					100: "hsl(var(--primary-100))",
					200: "hsl(var(--primary-200))",
					300: "hsl(var(--primary-300))",
					400: "hsl(var(--primary-400))",
					500: "hsl(var(--primary-500))",
					600: "hsl(var(--primary-600))",
					700: "hsl(var(--primary-700))",
					800: "hsl(var(--primary-800))",
					900: "hsl(var(--primary-900))",
					950: "hsl(var(--primary-950))",
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					100: "hsl(var(--secondary-100))",
					200: "hsl(var(--secondary-200))",
					300: "hsl(var(--secondary-300))",
					400: "hsl(var(--secondary-400))",
					500: "hsl(var(--secondary-500))",
					600: "hsl(var(--secondary-600))",
					700: "hsl(var(--secondary-700))",
					800: "hsl(var(--secondary-800))",
					900: "hsl(var(--secondary-900))",
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				accent: {
					100: "hsl(var(--accent-100))",
					200: "hsl(var(--accent-200))",
					300: "hsl(var(--accent-300))",
					400: "hsl(var(--accent-400))",
					500: "hsl(var(--accent-500))",
					600: "hsl(var(--accent-600))",
					700: "hsl(var(--accent-700))",
					800: "hsl(var(--accent-800))",
					900: "hsl(var(--accent-900))",
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					100: "hsl(var(--destructive-100))",
					200: "hsl(var(--destructive-200))",
					300: "hsl(var(--destructive-300))",
					400: "hsl(var(--destructive-400))",
					500: "hsl(var(--destructive-500))",
					600: "hsl(var(--destructive-600))",
					700: "hsl(var(--destructive-700))",
					800: "hsl(var(--destructive-800))",
					900: "hsl(var(--destructive-900))",
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				warning: {
					100: "hsl(var(--warning-100))",
					200: "hsl(var(--warning-200))",
					300: "hsl(var(--warning-300))",
					400: "hsl(var(--warning-400))",
					500: "hsl(var(--warning-500))",
					600: "hsl(var(--warning-600))",
					700: "hsl(var(--warning-700))",
					800: "hsl(var(--warning-800))",
					900: "hsl(var(--warning-900))",
					DEFAULT: "hsl(var(--warning))",
					foreground: "hsl(var(--warning-foreground))",
				},
				success: {
					100: "hsl(var(--success-100))",
					200: "hsl(var(--success-200))",
					300: "hsl(var(--success-300))",
					400: "hsl(var(--success-400))",
					500: "hsl(var(--success-500))",
					600: "hsl(var(--success-600))",
					700: "hsl(var(--success-700))",
					800: "hsl(var(--success-800))",
					900: "hsl(var(--success-900))",
					DEFAULT: "hsl(var(--success))",
					foreground: "hsl(var(--success-foreground))",
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},

				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'libre-bodoni': ['"Libre Bodoni"', 'serif'],
				'lora': ['Lora', 'serif'],
				'quicksand': ['"Quicksand"', 'sans-serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
			},
			screens: {
				"3xs": "320px",
				"2xs": "385px",
				'xs': '425px',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
