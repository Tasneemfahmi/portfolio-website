/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				ivory: '#FFFEF9',
        'soft-bg': '#F9F9F7',
        slate: {
          DEFAULT: '#4A4A4A',
          light: '#7A7A7A',
          dark: '#333333'
        },
        terracotta: {
          light: '#E99A87',
          DEFAULT: '#E27D60',
          dark: '#C9684C'
        },
        sage: {
          light: '#A2B9A5',
          DEFAULT: '#85A389',
          dark: '#6C8870'
        },
        gold: {
          light: '#D1A7B5',
          DEFAULT: '#C38D9E',
          dark: '#AD7689'
        },
		charcoal: {
        light: '#7c747d',   // lighter than #615962
        DEFAULT: '#615962',
        dark: '#4a434c',    // darker than #615962
      },
      rose: {
        light: '#c55266',   // lighter than #a03448
        DEFAULT: '#a03448',
        dark: '#7e2837',    // darker than #a03448
      },
      lavender: {
        light: '#d8cad2',   // lighter than #c2b2bc
        DEFAULT: '#c2b2bc',
        dark: '#a998a4',    // darker than #c2b2bc
      },
      pale_blue: {
        light: '#c3ccd9',   // lighter than #a1adbf
        DEFAULT: '#a1adbf',
        dark: '#7e8ca0',    // darker than #a1adbf
      },
      olive: {
        light: '#b7c062',   // lighter than #9ca444
        DEFAULT: '#9ca444',
        dark: '#7d8435',    // darker than #9ca444
      }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};