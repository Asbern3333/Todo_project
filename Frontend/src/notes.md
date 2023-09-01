notes for next times

to use prettier write `Shift + Alt + F`

```css
border-solid border-2 border-r border-b border-black
r for row and b for column
also we can
border-y-black   border-x-black
```

changeign the color button
```jsx
const [buttoncolor,Setbuttoncolor] = useState(false);
  function changecolor() {
    Setbuttoncolor(!buttoncolor);
  }


tailwind
{buttoncolor ?"bg-slate-600":"bg-red-500" }
```

Routes
if you want the childernworks put the ` <Outlet />` in the place of the childern
Errorpagefront end
```jsx
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="text-red">Oops!</h1>
      <p className="text-red" >Sorry,we have error</p>
      <p className="text-red">The error is :</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
```





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