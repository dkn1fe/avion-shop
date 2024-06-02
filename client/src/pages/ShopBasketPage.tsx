import { CartItems } from "@/components/CartPage/cartItems/CartItems"
import { Header } from "@/components/Header/Header"
import Footer from "@/components/footer/Footer"

export const ShopBasketPage = () => {
    return (
        <>
           <header>
            <Header/>
           </header>
           <main>
             <CartItems/>
           </main>
           <footer>
            <Footer/>
           </footer>
        </>
    )
}