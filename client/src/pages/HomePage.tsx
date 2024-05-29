import { Header } from "@/components/Header/Header"
import { MainBlock } from "@/components/MainBlock/MainBlock"
import { Carusel } from "@/components/caruselBlock/Carusel"

export const HomePage = () => {
 
    return (
        <>
         <header>
            <Header/>
         </header>
         <main className="mt-20">
            <MainBlock/>
         </main>
         <section className="mt-32">
             <Carusel/>
         </section>
        </>
    )
}