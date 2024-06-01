import { Header } from "@/components/Header/Header";
import { MainBlock } from "@/components/HomePage/MainBlock/MainBlock";
import { Carusel } from "@/components/HomePage/caruselBlock/Carusel";
import Footer from "@/components/footer/Footer";
import { HistoryBlock } from "@/components/HomePage/historyBlock/HistoryBlock";
import { SignUp } from "@/components/HomePage/signUp/SignUp";

export const HomePage = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="mt-20">
        <MainBlock />
      </main>
      <section className="mt-32">
        <Carusel />
      </section>
      <section className="mt-20">
        <SignUp />
      </section>
      <section>
         <HistoryBlock/>
      </section>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};
