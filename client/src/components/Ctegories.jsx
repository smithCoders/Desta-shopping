
import dummyData from "../static/category"
import products from "../static/products"
import {useNavigate} from "react-router-dom"
function Ctegories() {
    const navigate=useNavigate();
    return (
        <>
        
        {/* <div>
            <div className={`  my-12 flex justify-between w-full shadow-md bg-white p-5 rounded-md`}> 
            {dummyData && dummyData.map((data,index)=>(
                <div className='flex  items-center' key={index}>
                    {data.icon}
                    <div className="px-3">
                        <h3 className="font-bold text-sm md:text-base">{data.title}</h3>
                        <p className="text-xs  md:text-sm">{data.description}</p>

                    </div>
                </div>
            ))}
            </div>
            
        </div> */}
        <div>
            <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5  xl:gap-[30px]">
                {products && products.map((data,index)=>{
                    const handleSubmit=(data)=>{
                        navigate(`/products?category=${data.name}`);
                        window.location.reload();
                    }
                    return (
                        <div className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden" key={index} onClick={(data)=>handleSubmit(data)}>
                            <h5 className="text-xl leading-3">{data.name}</h5>
                            <img src={data.img} className="w-[120px] object-cover"/>
                        </div>
                    )
                })}

            </div>

        </div>
        </>
        
    )
}

export default Ctegories
