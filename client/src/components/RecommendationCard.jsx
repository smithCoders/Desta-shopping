import { Card } from 'flowbite-react';
import c1 from "/cloth-1.jpg"
function RecommendationCard() {
    return (
        <Card 
       className="w-[220px] h-[310px]">
        <img src={c1} className='max-w-[150px] max-h-[170px] object-cover'/>
            {/* price */}
            <div>
                 <p className='text-base font-[300] text-[#1C1C1C]'>$100.0</p>
            {/* description */}
            <p className='text-sm text-gray-500 '>T-shirts with multiple colors, for men</p>
            </div>
           
            
            
        </Card>
    )
}

export default RecommendationCard
