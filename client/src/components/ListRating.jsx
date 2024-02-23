import RatingComponent from "./RatingComponent"

function ListRating() {
    return (
        <div className="flex items-center gap-2">
           <RatingComponent/>
            {/* orders */}
            <p className='text-base text-gray-500'>154 orders</p>
            <p className='text-[#00B517] text-base '>Free shipping</p>

            
        </div>
    )
}

export default ListRating
