import EventCard from "../components/EventCard"
import styles from "../styles/styles"

function Events() {
    return (
      <section className={`${styles.section}`}>
            <div className={`${styles.container}`}>

        <span className={styles.subHeading}>Best Dealing</span>
                <h2 className={styles.headingSecondary}>best dealing</h2>
            </div>
            <div className={styles.container}>
                <EventCard/>

            </div>
            
        </section>
    )
}

export default Events
