import { Badge } from 'flowbite-react';

import React from 'react';
import { deals } from '../data/datas';

function Deals() {
    return (
        <div className="w-[895px] h-[235px]  flex items-center justify-center">
                {deals.map((deal, index) => (
                    <React.Fragment key={index}>
                        <div className={index !== 0 ? "border-l border-gray-300 h-[235px]" : ""}></div>
                        <div className="px-5 py-2">
                            <img src={deal.img} className="w-[150px] h-[140px]" alt={deal.name} />
                            <div className="flex items-center justify-between flex-col">
                                <p>{deal.name}</p>
                                <Badge className="bg-[#FFE3E3] text-sm text-[#EB001B] w-[45px] h-[17px]">-{deal.discount}%</Badge>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
      
    );
}

export default Deals;
