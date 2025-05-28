
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";


export interface ProductProps {
 id: string;
 title: string;
 description: string;
 price: number;
 cover: string   
}

export function Product (){
    const [product, setProduct] = useState<ProductProps[]>([])
    const { addProductCart } = useContext(CartContext) 

    useEffect(() => {
        async function getProducts (){
            const response =  await api.get("/products")
                
            setProduct(response.data)
        } 
        getProducts()
        
    },[])

    function handleaddProduct(product: ProductProps){
        toast.success("Product added to cart", {
           style: {
              borderRadius: 10,
              backgroundColor: "#000000",
              color: "#fff", 
            fontSize: 21
            }  
        })
        addProductCart(product);
    }


    return (
        <div>
            <main className="w-full max-w-7xl  mx-auto">
                <h1 className=" text-3xl text-center font-medium italic my-32 "> Know our products  </h1>

               <div className="grid grid-cols-1 gap-36 md:grid-cols-2 lg:grid-cols-3 mt-20">
                 {product.map((product) => (
                    <section 
                    key={product.id}
                    className="  flex items-center justify-between flex-col gap-8 border-b-2 rounded border-gray-300 mx-2 sm:m-0 sm:border-b-7 sm:rounded sm:border-gray-300 ">

                    <Link to={`/products/${product.id}`}>
                    <img
                    className="w-auto max-h-70  lg:w-full rounded-lg mb-2 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-120 "
                     src={product.cover}
                     />
                    </Link>

                     <p className=" italic text-center text-xl sm:text-2xl mb-3 "> {product.title} </p>

                     <div className="w-full flex items-center justify-evenly md:justify-between gap-12 ">

                        <strong className="font-bold text-xl "> 
                        {product.price.toLocaleString("pt-br",{ style: "currency", currency: "BRL"} )} 
                        </strong>

                        <button 
                        onClick={() => handleaddProduct(product)}
                        className="bg-blue-600 px-5 h-9 rounded text-white font-medium cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"> 
                        Add cart
                        </button>
                     </div>
                 </section>      
                 ))}
                 
               </div>

            </main>
        </div>

    )
}