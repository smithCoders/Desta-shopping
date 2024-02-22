import RecommendationCard from "../components/RecommendationCard"

function Recommendation_Section() {
    return (
        <section className="-[1180px] h-[640px] mb-6">
            <h3 className="text-[24px]  mb-4">Recommended Items</h3>
            <div className="grid  grid-cols-1 gap-6">

            <div className="flex items-center gap-6">
                  
            <RecommendationCard/>
            <RecommendationCard/>
            <RecommendationCard/>
            <RecommendationCard/>
            <RecommendationCard/>
            </div>
            <div className="flex items-center gap-6">
                  
            <RecommendationCard/>
            <RecommendationCard/>
            <RecommendationCard/>
            <RecommendationCard/>
            <RecommendationCard/>
            </div>

            </div>
            
          
            
        </section>
    )
}

export default Recommendation_Section
