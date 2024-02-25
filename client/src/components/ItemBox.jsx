function Item({ title, price, image }) {
    return (
        <>
        <div className="flex w-[223px] h-[127px] relative">
            <div className="flex flex-col ml-6 gap-3 mt-4">
                <p className="text-[#1C1C1C]">{title}</p>
                <p className="text-sm text-gray-500"><span className="block">From</span> {price}USD</p>
            </div>
            <img src={image} className="w-[82px] h-[82px] absolute bottom-0 right-0" />
        </div>
        <div className="border-l border-gray-300 h-full"></div>
        </>
    )
}
export default Item