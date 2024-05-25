import { Header } from "@/components/Header/Header"
import { MainBlock } from "@/components/MainBlock/MainBlock"

export const HomePage = () => {
    return (
        <>
         <header>
            <Header/>
         </header>
         <main className="mt-20">
            <MainBlock/>
         </main>
        </>
    )
}