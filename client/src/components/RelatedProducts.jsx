import RelatedProductCard from "./RelatedProductCard"
import img1 from "/cloth1.jpg"

function RelatedProducts() {
    return (
        <div className="max-w-full h-[350px]   shadow-md">
            <h2 className="text-2xl my-8">Related Products</h2>
            <div className="flex items-center  gap-4">
                  <RelatedProductCard     
                   img={img1} 
            name={'Men Blazers Sets Elegant Formal'}
             price={"$350.78"}
             discount={"$100"}/>
                  <RelatedProductCard     
                   img={img1} 
            name={'Men Blazers Sets Elegant Formal'}
             price={"$350.78"}
             discount={"$100"}/>
                  <RelatedProductCard     
                   img={img1} 
            name={'Men Blazers Sets Elegant Formal'}
             price={"$350.78"}
             discount={"$100"}/>
                  <RelatedProductCard     
                   img={img1} 
            name={'Men Blazers Sets Elegant Formal'}
             price={"$350.78"}
             discount={"$100"}/>
                  <RelatedProductCard     
                   img={img1} 
            name={'Men Blazers Sets Elegant Formal'}
             price={"$350.78"}
             discount={"$100"}/>
                  <RelatedProductCard     
                   img={img1} 
            name={'Men Blazers Sets Elegant Formal'}
             price={"$350.78"}
             discount={"$100"}/>
            </div>
          
            
        </div>
    )
}

export default RelatedProducts
