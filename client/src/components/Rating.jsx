import { Rating } from 'flowbite-react';
function RatingComp() {
    return (
        <div>
             <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
    </Rating>
        </div>
    )
}

export default RatingComp
