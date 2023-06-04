/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#329a9a',
        'border-gray': 'rgb(221, 221, 221)',
        'border-mid-gray': 'rgb(235, 235, 235)',
        'border-light-gray': 'rgba(0, 0, 0, 0.08)',
        'text-gray': 'rgb(34, 34, 34)',
        'btn-hover': 'rgb(247, 247, 247)',
        'mid-gray': 'rgb(113, 113, 113)',
      },
      fontSize: {
        xxs: ['10px', '12px'],
        base: ['16px', '20px'],
        'section-title': ['22px', '26px'],
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
}
