import { Pagination,Select  } from 'flowbite-react';
import { useState } from "react";
function ListPagination() {
       const [currentPage, setCurrentPage] = useState(1);
     const onPageChange = (page) => setCurrentPage(page);
    return (
        <div className='flex items-center justify-center gap-5'>
              {/* pagination */}
                <div className="flex  sm:justify-center">
      <Pagination currentPage={currentPage} totalPages={10} onPageChange={onPageChange} showIcons />
    </div>
    {/* options */}
    <div className='mt-2 rounded-none'>
         <Select id="results" >
        <option>show 10</option>
        <option>show 15</option>
        <option>show 20</option>
        <option>show  50</option>
      </Select>
    </div>
        </div>
    )
}

export default ListPagination
