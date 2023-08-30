import { Outlet ,Link } from "react-router-dom"

export default function Sidebar() {

return(
    <div className="h-screen w-screen grid grid-cols-4 bg-blue-500">
     
       <div className="h-screen w-96 bg-green-400 ">
        <h1 className=" text-center text-white text-5xl text">Pick something</h1> <br />
        <Link to="./schedule" >
        <button className="h-24 w-96 bg-red-300 hover:bg-blue-400 hover:text-white">schedule</button> </Link>
        <br />   <br />
        <button className="h-24 w-96 bg-red-300 hover:bg-blue-400 hover:text-white">ideas</button> <br /> <br />
        <button className="h-24 w-96 bg-red-300 hover:bg-blue-400 hover:text-white">Checkdaily tasks</button><br /><br />
        <button className="h-24 w-96 bg-red-300 hover:bg-blue-400 hover:text-white">SummerY and note</button><br /><br />
        <button className="h-24 w-96 bg-red-300 hover:bg-blue-400 hover:text-white">Duedate</button> 
        
        </div>
        <div className="col-span-3">
        <Outlet  className="flex mb-96 px-96   "/>
        </div>
        

    </div>
)
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
