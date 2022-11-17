/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["{pages,src}/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	important: true, // important in prod is must be
	theme: ["winterlight"],
	plugins: [require("daisyui"),require("@tailwindcss/forms")],
	daisyui: {
		themes: [{
			winterlight: {
				"primary": "#2b59d6",
				"secondary": "#66418d",
				"accent": "#b3b9ff",
				"neutral": "#021431",
				"base-100": "#f2f3f5",
				"info": "#93E6FB",
				"success": "#80CED1",
				"warning": "#EFD8BD",
				"error": "#E58B8B",
			},
			winterdark: {
				"primary": "#2d4ca3",
				"secondary": "#66418d",
				"accent": "#8188db",
				"neutral": "#2e384d",
				"base-100": "#021431",
				"info": "#155e75",
				"success": "#065f46",
				"warning": "#a8a29e",
				"error": "#831843",
			},
		}],
	},
  };