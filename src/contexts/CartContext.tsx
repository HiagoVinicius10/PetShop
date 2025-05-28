import { createContext, ReactNode} from "react";

import { useState } from "react";
import { ProductProps } from "../pages/Product";
import toast from "react-hot-toast";

interface CartContextData{
    cart: CartProps[];
    cartAmount: number;
    addProductCart: (newItem: ProductProps) => void;
    deleteProduct: (product: CartProps) => void;
    total: string;
    buyProduct: (product: CartProps) => void;
}

export interface CartProps{
 id: string;
 title: string;
 description: string;
 price: number;
 cover: string
 amount: number;
 total: number;
}

interface CartProvideProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextData)

function CartProvide({ children }: CartProvideProps) {
    const [cart, setCart] = useState<CartProps[]>([])
    const [total, setTotal] = useState("");

    function addProductCart (newItem: ProductProps) {
      const indexItem = cart.findIndex((item) => item.id === newItem.id) 
      
      if(indexItem !== -1 ){
       let cartList =  cart;

       cartList[indexItem].amount = cartList[indexItem].amount + 1;
       cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

       setCart(cartList)
       totalResultCart(cartList)
        return;
      }

      let data = {
        ...newItem,
        amount: 1,
        total: newItem.price
      }

        setCart(products => [...products, data])
        totalResultCart([...cart, data])
    }

    function deleteProduct(product: CartProps){
        const indexItem = cart.findIndex((item) => item.id === product.id)

        if(cart[indexItem]?.amount > 1) {
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount - 1;
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;

            setCart(cartList)
            totalResultCart(cartList)
            return;
        }

        const removeItem = cart.filter((item) => item.id !== product.id)
        setCart(removeItem)
        totalResultCart(removeItem)
    }

    function totalResultCart (items: CartProps[]){
        let myCart = items;
        let result = myCart.reduce((acc, obj) => { return acc + obj.total}, 0)
        let formatedResult = result.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
        
        setTotal(formatedResult)
    }

    function buyProduct(product: CartProps){
    toast.success("Purchase successfully completed!",{
         style: {
              borderRadius: 10,
              backgroundColor: "#7ada2d",
              color: "#050505",
              fontFamily: "initial",  
              fontSize: 21
            }  
    })

    const removeAllItem = cart.filter((item) => item.id !== product.id)
    setCart(removeAllItem)
    totalResultCart(removeAllItem)
    }

    return(
       <CartContext.Provider value={{ cart, cartAmount: cart.length, addProductCart, deleteProduct, total, buyProduct }}>
            {children}
       </CartContext.Provider>
    )
}

export default CartProvide;