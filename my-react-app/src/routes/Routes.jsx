import Catalog_Page from "../components/Pages/Catalog_Page/Catalog_Page";
import Unit_Page from "../components/Pages/Unit_Page/Unit_Page";
import Cart_Page from "../components/Pages/Basket_Page/Cart_Page";

export const routes = [
    {
        path: '/',
        element: <Catalog_Page/>
    },
    {
        path: '/cart',
        element: <Cart_Page/>
    },
    {
        path: '/:id',
        element: <Unit_Page/>
    },
]