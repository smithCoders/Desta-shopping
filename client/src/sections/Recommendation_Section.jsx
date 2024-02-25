import RecommendationCard from  "../components/RecommendProducts/RecommendationCard"
import { outdoorItems  as data} from "../data/datas"
function Recommendation_Section() {
      const column1 = data.slice(0, 5);
    const column2 = data.slice(5,10);
    return (
        <section className="w-[1180px] mb-6 overflow-hidden">
            <h3 className="text-[24px]  my-6 text-center ">Recommended Products</h3>
            <div className="grid  grid-cols-1 gap-6">

            <div className="flex items-center gap-6">
                  
            {column1.map((item,index)=>(
                <RecommendationCard
                 key={index}  
                 img={item.img}
                  price={item.price} 
                  title={item.name}
                   />
            ))}
            </div>

            <div className="flex items-center gap-6">
                  
            {column2.map((item,index)=>(
                <RecommendationCard
                 key={index}  
                 img={item.img}
                  price={item.price} 
                  title={item.name}
                   />
            ))}
            </div>

            </div>
            
          
            
        </section>
    )
}

export default Recommendation_Section
