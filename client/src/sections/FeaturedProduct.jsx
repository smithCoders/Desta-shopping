import Card from "../components/Card"
import products from "../static/products"
import styles from "../styles/styles"

function FeaturedProduct() {
    return (
        <div className={`${styles.container}`}>
            <span className={`${styles.subHeading} `}>featured products</span>
           <h2 className={`${styles.headingSecondary}`}>Featured Products</h2>
           <div className="grid grid-cols-1 gap-5  md:grid-cols-3  lg:grid-cols-5  lg:gap-8 mb-12"> 
           {products && products.map((product,i)=>(
            <Card data={product} key={i}/>
           ))}
           </div>
        </div>
    )
}

export default FeaturedProduct
