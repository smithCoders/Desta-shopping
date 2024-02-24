import img1 from "/cloth1.jpg"
function YouMayLike({img,title,price,discount}) {
    return (
        <div >
         
            <div className="flex gap-2 items-center">
                 <img src={img} className="w-[80px]  h-[80px] object-cover"/>
                  <div>
                <p className="text-base ">{title}</p>
                <p className="flex gap-4 items-center">
                    <span className="text-base text-gray-500 ">{price}</span>
                <span className="text-base text-gray-500  line-through">{discount}</span>
                </p>
                
            </div>

            </div>
           
           

            
        </div>
    )
}

function YouMayLikeBox({img,title,price,discount}) {
    return (
        <div className="w-[280px] h-auto shadow-lg border border-gray-300 rounded-md">
            <h3 className="text-2xl mb-6">You may like</h3>
            <div className="flex flex-col  gap-2">
                 <YouMayLike 
            img={img1} 
            title={'Men Blazers Sets Elegant Formal'}
             price={"$350.78"}
             discount={"$100"}
             />
                 <YouMayLike 
            img={img1} 
            title={'Men Blazers Sets Elegant Formal'}
             price={"$350.78"}
             discount={"$100"}
             />
                 <YouMayLike 
            img={img1} 
            title={'Men Blazers Sets Elegant Formal'}
             price={"$350.78"}
             discount={"$100"}
             />
                 <YouMayLike 
            img={img1} 
            title={'Men Blazers Sets Elegant Formal'}
             price={"$350.78"}
             discount={"$100"}
             />
            
               
            </div>
           

            
        </div>
    )
}

export  {YouMayLikeBox}

