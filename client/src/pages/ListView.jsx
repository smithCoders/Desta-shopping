import BreadCrump from "../components/BreadCrump";
import SidebarComp from "../components/Sidebar";
import Newsletter from '../components/Newsletter'

function ListView() {
    return (
        <div className="overflow-x-hidden">
            <BreadCrump /> 
            <div className="flex  items-center gap-4">
                {/* Sidebar container */}
                <div className=" ">
                    <SidebarComp />
                </div>
                {/* Content container */}
                <div>
                    <div className="pl-[280px] w-[920px]  ">
                      <div className=""></div>
                    </div>
                </div>
            </div>
           
            
        </div>
    );
}

export default ListView;
