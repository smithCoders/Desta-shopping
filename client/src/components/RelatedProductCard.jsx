import { Card } from 'flowbite-react';

function RelatedProductCard({img,name,price,discount}) {
    return (
        <div className='w-[172px] h-[254px]'>
            <div className='bg-[#DADADA] w-full  h-[172px] relative '>
                <img className='w-[155px] h-[155px] absolute  top-[8%]  left-[3%]' src={img}/>

            </div>
            
              <p className="text-sm text-gray-600 ">{name}</p>
                <p className="flex gap-4 items-center">
                    <span className="text-base text-gray-500 ">{price}</span>
                <span className="text-base text-gray-500  line-through">{discount}</span>
                </p>
            
        </div>
    )
}

export default RelatedProductCard
