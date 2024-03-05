/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FAA61A', //Золотой цвет
        mustard: '#FFBC4B', //Горчичный цвет
        bodily: '#FFD999', //Телесный цвет
        dark: '#231F20', // Черный
        sand: '#F5F5F5', //Песочный цвет
        coal: '#EDEDED', //Угольный цвет
        silver: '#D9D9D9', //Серебряный цвет
        ash: '#BABABA', //Пепельный цвет
        smoke: '#919191', //Дымчатый цвет
        alert: '#FF0000' //Цвет для предупреждений или ошибок
      }
    }
  },
  plugins: []
}

