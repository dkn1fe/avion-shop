import { Header } from "@/components/Header/Header"
import { MainBlock } from "@/components/MainBlock/MainBlock"
import { Ceramic } from "@/components/ceramic/Ceramic"
import { useEffect } from "react"
import { fetchCeramicsInfo } from "@/shared/api/ceramic"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/app/store/store"

export const HomePage = () => {
    const dispatch  = useDispatch<AppDispatch>()

    useEffect(() => {
       dispatch(fetchCeramicsInfo())
    },[])
    return (
        <>
         <header>
            <Header/>
         </header>
         <main className="mt-20">
            <MainBlock/>
         </main>
         <section className="mt-32">
             <Ceramic/>
         </section>
        </>
    )
}