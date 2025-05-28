import { useContext } from "react"
import { CartContext, } from "../../contexts/CartContext"
import { Link } from "react-router";
import { IoIosArrowRoundBack } from "react-icons/io";



export function CartShop (){
   const { cart, deleteProduct, addProductCart, total, buyProduct } = useContext(CartContext);


   function buyProductOfPet(){
    cart.filter((product) => buyProduct(product))
   }

    return (
        <div>
            <main className="w-full max-w-7xl mx-auto">
                <h1 className="text-3xl text-center mt-40 mb-20 font-medium italic"> My Cart 🦴 </h1>
                
                {cart.length === 0 && (
                    <div className="flex flex-col items-center ">
                        <p className="italic mb-2 text-xl">Ops! your Cart is empty... </p>
                        <Link className="bg-green-600 px-5 p-2 rounded text-center text-white font-medium " to="/products">
                        Access products
                    </Link>
                </div>
                )}

                {cart.length > 0 && (
                <Link 
                    className="flex items-center gap-3 sm:mb-4 px-3"
                    to="/products"> <IoIosArrowRoundBack size={18} color="#3018b6"/>
                    <p className="text-blue-600">
                    Back page of product 
                    </p>
                </Link>
                )}

             {cart.map((product) => (
                <section
                key={product.id}
                className=" flex items-center justify-between border-b-2 border-gray-300 relative top-32 sm:top-0">
                    <img 
                    className="w-28 rounded"
                    src={product.cover}
                    />

                <strong> 
               Price:  { product.price.toLocaleString("pt-BR", {style: "currency", currency:"BRL"}) } 
                </strong>
                
                <div className="flex gap-3 items-center justify-center ">
                    <button 
                    onClick={() =>  deleteProduct(product)}
                    className="bg-slate-600 text-white px-2 rounded font-medium flex items-center cursor-pointer">
                        -
                    </button >

                        {product.amount}

                    <button
                    onClick={() => addProductCart(product)}
                    className="bg-slate-600 text-white px-2 rounded font-medium flex items-center cursor-pointer">
                        +
                    </button>
                </div>

                <strong className="pr-2">    
                    { product.total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) } 
                </strong>

            </section>
             ))}

             
            {cart.length !== 0 && (
            <div className="flex justify-between relative top-96 sm:top-0 px-3 mt-8 sm:mt-4">
                <p className="font-bold my-3 pl-2 italic"> Full: { total }</p>

                <button 
                onClick={buyProductOfPet}
                className="bg-green-600 px-5 h-9 rounded text-white font-medium cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"> 
                Buy product 
                </button>
            </div>
            )}
            </main>
        </div>
    )
}