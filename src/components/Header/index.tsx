import { Link } from "react-router";
import { RiShoppingCartLine } from "react-icons/ri";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

export function Header(){
    const { cartAmount } = useContext(CartContext)

    return (
        <div>
            <header className="bg-linear-to-r from-gray-100  to-orange-200 w-full px-4 fixed top-0 z-[99]">
                <nav className=" w-full h-25 max-w-7xl flex items-center justify-between mx-auto">
                    <Link to="/">
                    <img 
                    className="max-w-22  rounded-2xl cursor-pointer animate-bounce"
                    src="https://img.freepik.com/vetores-premium/design-do-logotipo-da-pet-shop_755078-271.jpg"
                    />
                    </Link>
 
                        <Link className="text-xl font-medium italic transition-transform hover:scale-109" to="/">
                            Home
                        </Link>
                        <Link className="text-xl font-medium italic transition-transform hover:scale-109" to="/products">
                            Product
                        </Link>

                    <Link  className="relative transition-transform hover:scale-105" to="/cart">
                        <RiShoppingCartLine size={30}  color="#000000"/>
                        { cartAmount > 0 && (
                            <span className="bg-red-600 w-6 h-6 flex items-center justify-center rounded-full text-white font-medium px-3 absolute -right-3 -top-3 ">
                                {cartAmount}
                        </span>
                        )}
                    </Link>
                
                </nav>
            </header>
        </div>
    )
}