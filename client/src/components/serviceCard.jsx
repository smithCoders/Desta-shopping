function ServiceCard({ src, icon, text }) {
  return (
    <div className='max-w-[332px] h-[175px] relative shadow-md'>
      <img className='w-full h-[120px]' src={src} />
      <div className='absolute  opacity-50'></div>

      {/* Icons */}
      <div className='w-6 h-6 absolute bottom-[70.5px] right-[37.5px]'>
        <div className="w-[55px] h-[55px] rounded-full bg-blue-200 flex justify-center items-center">
          <img src={icon} className="w-6 h-6" alt="Icon" />
        </div>
      </div>

      {/* Text */}
      <div className="text-base ml-4 mt-3">
        <p className="truncate" style={{ lineHeight: '1' }}>{text.split(' ').slice(0, 2).join(' ')}</p>
        <p className="truncate" style={{ lineHeight: '1' }}>{text.split(' ').slice(2).join(' ')}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
