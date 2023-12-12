const NewFeatures = ({title, subTitle, imgUrl}) => (
  <div className="flex flex-col gap-2 mt-[20px] sm:max-w-[240px] min-w-[210px]">
    <div className="w-[70px] h-[70px] flex items-center
     bg-[#323f5d] justify-center rounded-[24px]">
      <img 
        src={imgUrl}
        className="w-[24px] h-[24px]"
      />
    </div>
    <p className="font-bold text-[24px] text-white">{title}</p>
    <p className="text-[15px] text-[#B0B0B0]">{subTitle}</p>
  </div>
);

export default NewFeatures;
