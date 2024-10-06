import Image from 'next/image';
import Container from './Container';

const Myself = () => {
  return (
    <Container>
      <div className='flex gap-3 w-full'>
        <div className='w-[70%] sm:w-[78%]'>
          <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
            Hi, I&apos;m Shubham 👋
          </h1>
          <p className='mt-2 text-base sm:text-lg md:text-xl sm:px-1'>
            Building web apps, coding my way through projects, and enjoying good
            meals—because being a techie and a foodie is the best combo!
          </p>
        </div>
        <div className='w-fit sm:w-[18%]'>
          <Image
            src={'https://avatars.githubusercontent.com/u/118606702?v=4'}
            alt='Shubham'
            width={110}
            height={110}
            className='rounded-full object-cover w-[110px] h-[102.24px] sm:h-[110px]'
          />
        </div>
      </div>
    </Container>
  );
};

export default Myself;
