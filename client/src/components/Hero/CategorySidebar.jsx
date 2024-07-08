import { Link } from "react-router-dom";

function CategorySidebar() {
  return (
    <div className=" flex flex-col gap-4 justify-center w-[250px] h-[360px] pl-4">
      <Link className="text-gray-600 hover:bg-[#E5F1FF]">Automobiles</Link>
      <Link className="text-gray-600 hover:bg-[#E5F1FF]">
        Clothes and Wears
      </Link>
      <Link className="text-gray-600 hover:bg-[#E5F1FF]">Home interiors</Link>
      <Link className="text-gray-600 hover:bg-[#E5F1FF] ">
        computer and techs
      </Link>
      <Link className="text-gray-600 hover:bg-[#E5F1FF]">
        Tools and equipments
      </Link>
      <Link className="text-gray-600 hover:bg-[#E5F1FF]">
        sport and outdoors
      </Link>
      <Link className="text-gray-600 hover:bg-[#E5F1FF]">Animal and pets</Link>
      <Link className="text-gray-600 hover:bg-[#E5F1FF]">
        Machinary and tools
      </Link>
      <Link className="text-gray-600 hover:bg-[#E5F1FF]">More categories</Link>
    </div>
  );
}

export default CategorySidebar;
