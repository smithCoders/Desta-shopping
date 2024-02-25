import ServiceCard from "../components/serviceCard"
import card1  from "/card1.png"
import card2  from "/card2.png"
import card3  from "/card3.png"
import card4  from "/card4.png"
import  search  from "/search.png";
import inventory  from "/inventory_2.png";
import send from "/send.png";
import  security  from "/security.png";

function Service_Section({src, icon, text}) {
    return (
        <section className="w-[1180px] h-[256px] mb-6 overflow-hidden ">
              <h3 className="text-[24px]  my-6 text-center">Our extra services</h3>
              <div className="flex items-center gap-4">
                <ServiceCard src={card1} icon={search} text={"Source from Industry Hubs"} />
                <ServiceCard src={card2} icon={inventory} text={"Customize Your Products"} />
                <ServiceCard src={card3} icon={send} text={"Fast, reliable shipping by ocean or air"} />
                <ServiceCard src={card4} icon={security} text={"Product monitoring and inspection"} />
              

              </div>


        </section>
    )
}

export default Service_Section
