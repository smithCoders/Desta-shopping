import { Breadcrumb,BreadcrumbItem} from 'flowbite-react';
function BreadCrump() {
    return (
        <div className='px-[96px] py-0 h-[64px] w-[1440px]'>
              <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800 ">
      <BreadcrumbItem href="#"  className='text-gray-500'> Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Clothing</BreadcrumbItem>
      <BreadcrumbItem href='#'>Men's wearing</BreadcrumbItem>
      <BreadcrumbItem href='#'>summer clothes</BreadcrumbItem>
    </Breadcrumb>
        </div>
    )
}

export default BreadCrump
