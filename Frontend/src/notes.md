notes for next times









In tailwind
1. For tailwind `w-` There is a spcifice number or you should cpicfy the number
2. for full hight also, spicifce or `h-screen` for the full screen
3. `hover:`change the button color if we put the mouse on it
4. For the installation of the tailwind we should link it in the index.html and add the jsx in the 
`<link href="./src/main.css" rel="stylesheet">` and put this in the `main.css` 
```css
/* ./src/index.css */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```
Lastly add the jsx to the files
` content: ["./index.html", "./src/**/*.{html,js,jsx}"]`in tailwind.config.js