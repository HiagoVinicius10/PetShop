
import { useEffect, useState, useContext } from "react"
import { Link, useNavigate, useParams } from "react-router"
import { api } from "../../services/api"
import { IoIosArrowRoundBack } from "react-icons/io"
import { CartContext } from "../../contexts/CartContext"
import toast from "react-hot-toast"

interface ProductProps {
 id: string;
 title: string;
 description: string;
 price: number;
 cover: string   
}

export function DetailProduct (){
     const [detailProduct, setDetailProduct] = useState<ProductProps>()
     const { addProductCart } = useContext(CartContext)
     const navigate = useNavigate()
     const { id } = useParams();


    useEffect(() => {
      async function getDetailProduct(){
            const response = await api.get(`/products/${id}`)
             setDetailProduct(response.data);
        }
        getDetailProduct();
    },[id])

    function AddProduct(product: ProductProps){
        toast.success("Product added to cart", {
           style: {
              borderRadius: 10,
              backgroundColor: "#000000",
              color: "#fff", 
            fontSize: 21
            }  
        })

       addProductCart(product)
        navigate("/cart")
    }
    
    return (
        <div>
            <main className="w-full max-w-7xl mx-auto">
                {detailProduct && (
                    <section className="w-full max-w-7xl">
                     <h1 className="mt-32 mb-10 text-3xl text-center font-bold italic"> Detail product </h1>
                <Link 
                    className="flex items-center text-xs gap-2 px-3"
                    to="/products"> <IoIosArrowRoundBack size={18} color="#3018b6"/>
                    <p className="text-blue-600">
                    Back page of product 
                    </p>
                </Link>
                <h2 className=" text-center my-4 p-3 text-xl relative right-2 font-medium sm:text-2xl sm:relative sm:left-20 lg:left-56 lg:top-28"> 
                    {detailProduct?.title}    
                </h2>
              <section className="flex flex-col justify-center items-center gap-12 sm:flex-row">
                
                 <img
                 className="w-3/5 sm:w-4/12"
                  src={detailProduct?.cover}
                  alt={detailProduct?.title}/>

                 <p className="mb-8 px-12 mr-10 text-center sm:p-14 italic "> {detailProduct?.description} </p>
              </section>

              <div className="flex justify-evenly items-center lg:relative lg: left-52"> 

               <p className="font-medium text-xl">
                    Full: {detailProduct?.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
               </p>

               <button
               onClick={() => AddProduct(detailProduct)} 
               className="bg-blue-600 px-5 h-9 rounded text-white font-medium cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"> Add Cart </button>
              </div>
            </section>
                )}
            </main>
        </div> 
    )
}