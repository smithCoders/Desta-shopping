import styles from "../styles/styles"
import Ctegories from "../components/Ctegories"

function CategoriesSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <span className={styles.subHeading}>categories</span>
                <h2 className={styles.headingSecondary}>categories</h2>
                <div  className={styles.container}>
                    <Ctegories/>
                </div>
            </div>
            
        </section>
    )
}

export default CategoriesSection
