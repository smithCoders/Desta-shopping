import {useNavigate} from "react-router-dom"
import styles from "../styles/styles";

function Dropdown({categoryData,setDropdown}) {
    const navigate=useNavigate();
    const submitHandler=(e)=>{
        navigate(`/prducts?category=${e.title}`);
        setDropdown(false);
        window.location.reload()

    }
    return (
        <div className="pb-4 w-[270px] bg-white absolute z-10 rounded-b-md shadow-sm">
            {categoryData && categoryData.map((data,index)=>(
                <div 
                key={index}
                className={`${styles.normalFlex}`}
                onclick={()=>submitHandler(data)}
            
                >
                    <img 
                    src={data.img}
                    alt="images"
                    className="w-6 h-6 object-contain ml-2 select-none"


                    />
                    <h3 className="m-3 cursor-pointer select-none">{data.title}</h3>

                </div>
            ))}
            
        </div>
    )
}

export default Dropdown
