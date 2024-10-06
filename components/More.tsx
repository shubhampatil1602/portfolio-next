const More = ({
  title,
  subTitle,
  description,
}: {
  title: string;
  subTitle: string;
  description: string;
}) => {
  return (
    <div className='flex flex-col text-center justify-center items-center'>
      <h3 className='bg-white text-[#08090A] text-sm py-1 px-3 rounded-lg border border-[#E5E7EB] transition-all hover:opacity-80'>
        {title}
      </h3>
      <h4 className='text-3xl font-bold tracking-tighter sm:text-5xl mt-2'>
        {subTitle}
      </h4>
      <p className='mt-2 px-2 text-[#A3A3A3] md:text-xl text-base text-muted-foreground tracking-normal sm:leading-relaxed sm:tracking-wide'>
        {description}
      </p>
    </div>
  );
};

export default More;
