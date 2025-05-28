import { Link } from "react-router";


export function Error (){
    return (
     <div className="flex flex-col justify-center items-center w-full h-screen ">
        <h1 className="text-7xl font-medium mb-3"> 404 </h1>
        <p className="text-2xl italic mb-3"> Ops! This page doesn't exist! </p>
        <Link to="/" className="bg-neutral-600 text-white px-4 py-2 rounded font-medium cursor-pointer"> Go to home page </Link>
     </div>
    )
}