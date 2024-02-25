import { Card,Button } from 'flowbite-react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

function RecommendationCard({img,price,title}) {
    return (
        <Card 
       className="w-[220px] h-[310px]">
        <img src={img} className='max-w-[150px] max-h-[170px] object-cover'/>
            {/* price */}
            <div>
                 <p className='text-base font-medium text-[#1C1C1C]'>${price}</p>
            {/* description */}
            <p className='text-sm text-gray-500 '>{title}</p>
             <div className="mt-4">  
               
                <Button color="white"  className="text-blue-600 border border-gray-300">   <MdOutlineShoppingCart color="blue"  size={25}/>  <Link  to={`product/${title}`}> Move to Cart</Link> </Button>
                </div>
                </div>
           
       </Card>
    )
}

export default RecommendationCard
