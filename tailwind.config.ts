import type { Config } from "tailwindcss";
const {
	default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");
   
const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },  extend: {
		boxShadow: {
			input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
		  },
	
			"animation": {
				scroll:"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			
			  shimmer: "shimmer 2s linear infinite"
			},
			"keyframes": {
				scroll: {
					to: {
					  transform: "translate(calc(-50% - 0.5rem))",
					}},
			  shimmer: {
				from: {
				  "backgroundPosition": "0 0"
				},
				to: {
				  "backgroundPosition": "-200% 0"
				}
			  }
			}
		  ,
		colors: {
		
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  	
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			
			  border: "hsl(var(--border))",
			  input: "hsl(var(--input))",
			  ring: "hsl(var(--ring))",
			  background: "hsl(var(--background))",
			  foreground: "hsl(var(--foreground))",
			  primary: {
				DEFAULT: "hsl(var(--primary))",
				foreground: "hsl(var(--primary-foreground))",
			  },
			  secondary: {
				DEFAULT: "hsl(var(--secondary))",
				foreground: "hsl(var(--secondary-foreground))",
			  },
			  destructive: {
				DEFAULT: "hsl(var(--destructive))",
				foreground: "hsl(var(--destructive-foreground))",
			  },
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
		 
  	}
  },
 
  plugins: [require("tailwindcss-animate"),addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }
export default config;
