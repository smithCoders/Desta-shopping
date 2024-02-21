import styles from "../styles/styles"
import BestDeals from "../components/BestDeals"

function BestDealSection() {
    return (
        <section className={`${styles.section}`}>
            <div className={`${styles.container}`}>

        <span className={styles.subHeading}>Best Dealing</span>
                <h2 className={styles.headingSecondary}>best dealing</h2>
            </div>
            <div className={styles.container}>
                <BestDeals/>

            </div>
            
        </section>
    )
}

export default BestDealSection
