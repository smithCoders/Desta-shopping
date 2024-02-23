import BreadCrump from "../components/BreadCrump";
import SidebarComp from "../components/Sidebar";
import Newsletter from '../components/Newsletter'
import ListViewComp from "../components/ListViewComp";
import ListPagination from "../components/ListPagination";

function ListView() {
    return (
        <div className="overflow-hidden">
            <BreadCrump /> 
            <div className="flex  gap-6">
                {/* Sidebar container */}
                <div className=" ">
                    <SidebarComp />
                </div>
                {/* Content container */}
              
                    <div className="pl-[280px] w-full  flex  flex-col  gap-2 ">
                        <div>
                            <ListViewComp/>
                        </div>
                        <div>
                            <ListViewComp/>
                        </div>
                        <div>
                            <ListViewComp/>
                        </div>
                        <div>
                            <ListViewComp/>
                        </div>
                      
                    </div>
                </div>
                {/* pagination */}
                <div className="pl-[560px]">
                     <ListPagination/>
                </div>
               
            
           
            
        </div>
    );
}

export default ListView;
