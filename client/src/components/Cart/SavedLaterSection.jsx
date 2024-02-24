import SavedCard from "./SavedCard"
import img from  "/2.jpg"
function SavedLaterSection() {
    return (
        <div className="h-[475px]  w-full   shadow-lg rounded-md">
               <h2 className="text-2xl  my-6 ">Saved for Later</h2>
            <div className="flex  gap-4  items-center ">
         
            <SavedCard img={img}   name={"GoPro HERO6 4K Action Camera - Black"} price={"$705"}/>
            <SavedCard img={img} name={"GoPro HERO6 4K Action Camera - Black"} price={"$705"}/>
            <SavedCard img={img} name={"GoPro HERO6 4K Action Camera - Black"} price={"$705"}/>
            <SavedCard img={img} name={"GoPro HERO6 4K Action Camera - Black"} price={"$705"}/>
            </div>
          
            
        </div>
    )
}

export default SavedLaterSection
