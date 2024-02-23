import { Rating, RatingStar } from 'flowbite-react';
function ListRating() {
    return (
        <div className="flex items-center gap-2">
            <div>
            <Rating>
      <RatingStar />
      <RatingStar />
      <RatingStar />
      <RatingStar />
      <RatingStar filled={false} />
      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
    </Rating>
            </div>
            {/* orders */}
            <p className='text-base text-gray-500'>154 orders</p>
            <p className='text-[#00B517] text-base '>Free shipping</p>

            
        </div>
    )
}

export default ListRating
