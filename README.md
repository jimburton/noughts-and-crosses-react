* Setup

$ npm create vite@latest nac -- --template react-ts
$ cd nac
$ npm install
$ npm run dev
$ npm install -D tailwindcss postcss autoprefixer
# edit tailwind.config.js to be:
/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [

    "./index.html",

    "./src/**/*.tsx",

  ],

  theme: {

    extend: {},

  },

  plugins: [],

}

# IN THE VCE edit vite.config.ts replacing USERID
# (to find USERID open VSCode in a new tab):
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({

  plugins: [react()],

  base: '/user/USERID/proxy/absolute/5173',

})

# LOCALLY edit vite.config.ts
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({

  plugins: [react()],

  base: '/proxy/absolute/5173',

})

$ npm run dev
# open browser, Relative path/5173

+ Edit App.tsx to:

// App.tsx

import './App.css'

function App() {
  
    return (
      <>
      <button className="square">X</button>
      </>
    )
}

export default App

// End of App.tsx

+ upload styles.css into root of app
