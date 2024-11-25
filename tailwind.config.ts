import type { Config } from 'tailwindcss'
 
const config: Config = {
    content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
	theme: {
		extend: {
			backgroundImage: {
				'footer': 'url("/assets/bg-moises-developer.svg")'
			},
  		colors: {
  			background: '#000000',
  			foreground: '#ffffff',
  			primary: {
  				DEFAULT: '#1040FF',
  				foreground: '#ffffff'
				},
				secondary: '#75A5FF'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
export default config