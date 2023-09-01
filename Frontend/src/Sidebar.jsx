import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
export default function Sidebar() {
  const [color, setColor] = useState(0);

  const on = () => {
    setColor(!color);
    
  };
  return (
    <div className="h-screen w-screen grid grid-cols-5">
      <div className="h-screen w-80 bg-green-400 ">
        <h1 className="text-center text-white text-5xl text">
          Pick something
        </h1>{" "}
        <br />
        <Link to="./schedule">
          <button
            onClick={on}
            className= {color? "bg-red-300 h-24 w-80  hover:bg-blue-400 hover:text-white" : "bg-blue-400 h-24 w-80  "}
          >
            schedule
          </button>{" "}
        </Link>
        <br /> <br />
        <Link to="./schedule">
          <button
            onClick={on}
            className="h-24 w-80 bg-red-300 hover:bg-blue-400 hover:text-white"
          >
            ideas
          </button>{" "}
          <br /> <br />
        </Link>
        <Link to="./schedule">
          {" "}
          <button
            onClick={on}
            className="h-24 w-80 bg-red-300 hover:bg-blue-400 hover:text-white"
          >
            Checkdaily tasks
          </button>
          <br />
          <br />
        </Link>
        <Link to="./schedule">
          {" "}
          <button
            onClick={on}
            className="h-24 w-80 bg-red-300 hover:bg-blue-400 hover:text-white"
          >
            SummerY and note
          </button>
          <br />
          <br />
        </Link>
        <Link to="./schedule">
          <button
            onClick={on}
            className="h-24 w-80 bg-red-300 hover:bg-blue-400 hover:text-white"
          >
            Duedate
          </button>
        </Link>
      </div>
      <div className="col-span-4">
        <Outlet />
      </div>
    </div>
  );
  //  <NavLink
  //                     to={`contacts/${contact.id}`}
  //                     className={({ isActive, isPending }) =>
  //                       isActive
  //                         ? "active"
  //                         : isPending
  //                         ? "pending"
  //                         : ""
  //                     }
  //                   >
  //                     {/* other code */}
  //                   </NavLink>
}
