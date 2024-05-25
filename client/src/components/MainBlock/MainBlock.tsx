import { GalleryBlock } from "./GalleryBlock"
import { CardInfoBlock } from "./CardInfoBlock"

export const MainBlock = () => {
    return (
         <>
           <section>
             <GalleryBlock/>
           </section>
           <section className="pt-10">
             <CardInfoBlock/>
           </section>
         </>
    )
}