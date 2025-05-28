import { Link } from "react-router";


export function Home (){
    return (
       <main className=" w-full max-w-7xl lg:flex lg:items-center lg:justify-center lg:flex-row flex flex-col-reverse items-center mx-auto lg:my-0.5  ">
        <div className="lg:my-40">
          <h1 className="lg:text-7xl text-6xl mt-4 font-extralight text-gray-500 text-center mb-2 tracking-wide ">
             A dog will love 
             <br/>
              <span className=" text-5xl font-bold text-pink-500"> You </span>
              <span className="text-orange-500 text-5xl font-bold ">
                Forever!
              </span>
            </h1>

           <p className="p-5 text-xl italic mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore id enim blanditiis modi ab adipisci ipsum labore deleniti. Eveniet placeat explicabo, corrupti accusamus repellendus veritatis minima vero culpa rerum porro?</p>

           <Link className="flex flex-col" to="/products">
            <button 
            className="  bg-yellow-300 py-3 text-xl text-emerald-950 font-medium rounded-xl cursor-pointer"> 
            Acessar produto
            </button>
         </Link>
        </div>
        
        <img 
        className=" mt-10 lg:w-1/2 rounded-full lg:ml-20 lg:flex "
        src="https://www.zooplus.pt/magazine/wp-content/uploads/2017/03/chihuahua-welpen.jpg"/>
       </main>
    )
}