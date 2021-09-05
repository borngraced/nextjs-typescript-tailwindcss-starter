module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      main: "#f8f8f9",
      primary: "#fe6265",
      secondary: "#f06995",
      footer: "#060e3a",
    }),
    borderColor: (theme) => ({
      DEFAULT: theme("colors.gray.300", "currentColor"),
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#fe6265",
      heading: "#304280",
      p: "#9ba8cc",
    }),
    placeholderColor: {
      secondary: "#304280",
      primary: "#9ba8cc",
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(107, 170, 232, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(107, 170, 232, 0.1), 0 1px 2px 0 rgba(107, 170, 232, 0.06)',
      md: '0 4px 6px -1px rgba(107, 170, 232, 0.1), 0 2px 4px -1px rgba(107, 170, 232, 0.06)',
      lg: '0 10px 15px -3px rgba(107, 170, 232, 0.1), 0 4px 6px -2px rgba(107, 170, 232, 0.05)',
      xl: '0 20px 25px -5px rgba(107, 170, 232, 0.1), 0 10px 10px -5px rgba(107, 170, 232, 0.04)',
      '2xl': '0 25px 50px -12px rgba(107, 170, 232, 0.25)',
      '3xl': '0 35px 60px -15px rgba(107, 170, 232, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(107, 170, 232, 0.06)',
      none: 'none',
    },
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      danger: "#e3342f",
    }),
    fontFamily: {
      primary: ["Raleway", "san-serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-image": `url("https://rrviejitddquiyuhattw.supabase.co/storage/v1/object/public/avatars/heroImg.svg")`,
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
};
