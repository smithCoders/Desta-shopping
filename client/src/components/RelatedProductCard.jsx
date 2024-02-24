import { Card } from 'flowbite-react';

function RelatedProductCard({img,name,price,discount}) {
    return (
        <Card className='w-[172px] h-[254px]'>
            <img className='w-[155px] h-[155px] b' src={img}/>
              <p className="text-sm text-gray-600 ">{name}</p>
                <p className="flex gap-4 items-center">
                    <span className="text-base text-gray-500 ">{price}</span>
                <span className="text-base text-gray-500  line-through">{discount}</span>
                </p>
            
        </Card>
    )
}

export default RelatedProductCard
