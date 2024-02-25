import  banner from "/Group 969.png"
import { Button} from 'flowbite-react';
import i1 from "/10.jpg"
import Item from "../components/ItemBox";

function OutDoors() {
    const data = [
        { title: 'Soft chairs', price: 15, image: i1 },
        { title: 'Soft chairs', price: 15, image: i1 },
        { title: 'Soft chairs', price: 15, image: i1 },
        { title: 'Soft chairs', price: 15, image: i1 },
        { title: 'Soft chairs', price: 15, image: i1 },
        { title: 'Soft chairs', price: 15, image: i1 },
        { title: 'Soft chairs', price: 15, image: i1 },
        { title: 'Soft chairs', price: 15, image: i1 },
        { title: 'Soft chairs', price: 15, image: i1 },
        { title: 'Soft chairs', price: 15, image: i1 },
        // Add more objects as needed
    ];
    const column1 = data.slice(0, 5);
    const column2 = data.slice(5);

    return (
        <div className="max-w-[1180px]  ml-[32px]  mb-6">
               <h4 className="font-medium text-2xl  mb-6  text-center"> Featured products</h4>
               <div className="flex">
                    {/* Column 1 */}

            <div className="w-[280px] h-[257px] relative">
                <img src={banner} className="w-full h-auto" alt="Banner" />
                <div className="absolute top-8 left-4">
                    <p className="text-xl font-semibold mb-4">
                        <span className="block">Home and</span>
                        <span>Outdoors</span>
                    </p>
                    <Button className="text-black bg-white">Source Now</Button>
                </div>
            </div>
            {/* Column 2 */}
            <div className="w-[900px] h-[257px] grid grid-cols-1">
                {/* First Column */}
                <div className="flex  gap-4 border border-gray-300">
                    {column1.map((item, index) => (
                        <Item key={index} title={item.title} price={item.price} image={item.image} />
                    ))}
                </div>
                {/* Second Column */}
                <div className="flex gap-4 ">
                    {column2.map((item, index) => (
                        <Item key={index} title={item.title} price={item.price} image={item.image} />
                    ))}
                </div>
            </div>
               </div>
        
        </div>
    );
}

export default OutDoors;

