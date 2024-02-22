import img from "/inquiry.png"
function Inquiry() {
    return (
        <div className="w-[1189px] h-[420px]  relative overflow-hidden">
            <img src={img} className="w-full h-auto "/>
            <div className="absolute inset-0 bg-gradient-to-b   from-blue-500  to-blue-300 opacity-80"></div>
        </div>
    )
}

export default Inquiry
