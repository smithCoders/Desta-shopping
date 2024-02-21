import pop from "../assets/product/card9.jpg"
import styles from "../styles/styles"
import CountDown from "./CountDown"
function EventCard() {
    return (
        <div className={` w-full bg-white rounded-md lg:flex p-2`}>
            <div className="md:grid grid-cols-2 gap-3 ">
                <img src={pop} className="w-full md:w-[60%] rounded-sm object-cover"/>
                <div >
                    <h3 className={`${styles.productTitle}`}>Full Complete Amazing wear</h3>
                    <p>Only works if there is nothing absolutely positioned in relation to bodyOnly works if there is nothing absolutely positioned in relation to bodyOnly works if there is nothing absolutely positioned in relation to bodyOnly works if there is nothing absolutely positioned in relation to bodyOnly works if there is nothing absolutely positioned in relation to bodyOnly works if there is nothing absolutely positioned in relation to body</p>
                    <div className="flex items-center  justify-between">
                          <div className="flex items-center  gap-6 mb-4">
                         <p className={`${styles.productDidcountPrice}`}>100 $</p>
                         <p className={`${styles.price}`}>300 $</p>
                    </div>
                    <p className="font-normal  text-[15px]  text-green-500">120 sold</p>
                    </div>

                  <CountDown/>
                   
                </div>

            </div>
        </div>
    )
}

export default EventCard
