import { Header } from "@/components/Header/Header";
import { useParams } from "react-router-dom";
import { ProductInfo } from "@/components/ProductPage/productInfo/ProductInfo";
import { AlsoLike } from "@/components/ProductPage/alsoLike/AlsoLike";
import { CardInfoBlock } from "@/components/HomePage/MainBlock/CardInfoBlock";
import { SignUp } from "@/components/HomePage/signUp/SignUp";
import Footer from "@/components/footer/Footer";

export const ProductPage = () => {
  const { productId } = useParams();

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <ProductInfo productId={productId} />
      </main>
      <section className="mt-8 md:-mt-40">
        <AlsoLike />
      </section>
      <section className="mt-8">
        <CardInfoBlock />
      </section>
      <section className="-mt-8 md:mt-10">
        <SignUp />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

