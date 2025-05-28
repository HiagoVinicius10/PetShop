
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { CartShop } from "./pages/Carrinho";
import { Error } from "./pages/Error";
import { DetailProduct } from "./pages/detailProduct";

 const router = createBrowserRouter([
    
    {
       element: <Layout/>,
       children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/products",
            element: <Product/>
        },
        {
            path: "/cart",
            element: <CartShop/>
        },
        {
            path: "/products/:id",
            element: <DetailProduct/>
        }
       ]
       
       
    },
    {
            path: "*",
            element: <Error/>
  }
])

export { router } ;