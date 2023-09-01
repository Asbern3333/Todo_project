import { useState } from "react";



function TableCell(props) {
  const [color, setColor] = useState(0);

  const changeColor = (e) => {
    const text=e.target.value.trim();
    if(text.length > 0) {
    setColor(1);}
    else 
    setColor(0);
  };
  
  const buttonchangecolor = () => {
    setColor(!color);
  }
  return (
    <td className={color ?"border-r  border-black bg-gray-500 text-cyan-500 text-left":"bg-white-600 border-solid border-2 border-r border-b border-black text-left"  }>
      <input  onInput={changeColor}className={color ?"bg-gray-500 text-cyan-500 text-left":"bg-white-600"}/>
      <button onClick={buttonchangecolor}>same here </button>
    </td>
  );
}


export default function Schedule() {
 
return (
  <div>
    <table className="border-solid border-2  border-r border-b border-black mx-3 ">
      <thead >
        <tr >
          <th className="border-solid border-2 border-r border-b border-black">
            Days/Time
          </th>
          <th className="border-solid border-2 border-r border-b border-black px-14">
            monday
          </th>
          <th className="border-solid border-2  border-r border-b border-black px-14">
            Tuseday
          </th>
          <th className="border-solid border-2  border-r border-b border-black px-14">
            Wedensday
          </th>
          <th className="border-solid border-2  border-r border-b border-black px-14">
            Thursday
          </th>
          <th className="border-solid border-2  border-r border-b border-black px-14">
            Friday
          </th>
          <th className="border-solid border-2  border-r border-b border-black px-14">
            Satrday
          </th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td className="border-solid border-2  border-r border-b border-black text-center">
            7
          </td>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          </tr>
          
          <tr >
          <td className="border-solid border-2  border-r border-b border-black text-center">
            8
          </td>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          </tr>
          <tr>
          <td className="border-solid border-2  border-r border-b border-black text-center">
            9
          </td>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          </tr>
          <tr>
          <td className="border-solid border-2  border-r border-b border-black text-center">
            10
          </td>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          </tr>
          <tr>
          <td className="border-solid border-2  border-r border-b border-black text-center">
            11 am
          </td>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          </tr>
          <tr>
          <td className="border-solid border-2  border-r border-b border-black text-center">
            12 pm
          </td>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          </tr>
          <tr>
          <td className="border-solid border-2  border-r border-b border-black text-center">
            1 pm
          </td>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          </tr>
          <tr>
          <td className="border-solid border-2  border-r border-b border-black text-center">
            2 pm
          </td>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          </tr>
          <tr>
          <td className="border-solid border-2  border-r border-b border-black text-center">
            3 pm
          </td>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          </tr>
          <tr>
          <td className="border-solid border-2  border-r border-b border-black text-center">
            4 pm
          </td>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          </tr>
          <tr>
          <td className="border-solid border-2  border-r border-b border-black text-center">
            5 pm
          </td>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          </tr>
          <tr>
          <td className="border-solid border-2  border-r border-b border-black text-center">
            6 pm
          </td>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          </tr>

          <tr>
          <td className="border-solid border-2  border-r border-b border-black text-center">
             7 pm
          </td>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          </tr>
        <td className="border-solid border-2  border-r border-b border-black text-center">
          8 pm
        </td>
        <TableCell />
        <TableCell />
        <TableCell />
        <TableCell />
        <TableCell />
        <TableCell />
        <tr>
          <td className="border-solid border-2  border-r border-b border-black text-center">
            9 pm
          </td>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
        </tr>
      </tbody>
    </table>


    <table className="border- border border-black">
        <thead>
          <tr>
            <th className="border-b border-black p-2">Header 1</th>
            <th className="border-b border-black p-2">Header 2</th>
            <th className="border-b border-black p-2">Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-r border-b border-black p-2">Row 1, Cell 1</td>
            <td className="border-r border-b border-black p-2">Row 1, Cell 2</td>
            <td className="border-r border-b border-black p-2">Row 1, Cell 3</td>
          </tr>
          <tr>
            <td className="border-r border-b border-black p-2">Row 2, Cell 1</td>
            <td className="border-r border-b border-black p-2">Row 2, Cell 2</td>
            <td className="border-r border-b border-black p-2">Row 2, Cell 3</td>
          </tr>
          <tr>
            <td className="border-r border-b border-black p-2">Row 3, Cell 1</td>
            <td className="border-r border-b border-black p-2">Row 3, Cell 2</td>
            <td className="border-b border-black p-2">Row 3, Cell 3</td>
          </tr>
        </tbody>
      </table>
</div>
  );
}
// when he press on the area he can chose the color         
