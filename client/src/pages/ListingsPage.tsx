import { Header } from "@/components/Header/Header"
import { ProductList } from "@/components/ListingsPage/productList/ProductList"
import { Widget } from "@/components/ListingsPage/widget/Widget"


export const ListingsPage = () => {
    return (
        <>
        <header>
            <Header/>
        </header>
        <section className="pt-5">
           <Widget/>
        </section>
        <section className="pt-10">
            <ProductList/>
        </section>
        </>
    )
}