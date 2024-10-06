import Image from 'next/image';
import Container from './Container';
import { data } from '@/utils/data';

const Education = () => {
  return (
    <Container>
      <h2 className='text-xl font-bold mb-2.5'>Education</h2>
      <div className='flex flex-col gap-3'>
        {data.education.map(({ batch, clg, course, img }) => (
          <div className='flex gap-4 items-center' key={course}>
            <div className='w-[50px] h-[50px] flex-shrink-0'>
              <Image
                src={img}
                alt={clg}
                width={46}
                height={46}
                quality={100}
                className='rounded-full w-full h-full object-cover'
              />
            </div>
            <div className='flex flex-col w-full'>
              <div className='flex justify-between mb-1'>
                <h3 className='font-semibold text-xs sm:text-sm'>{clg}</h3>
                <p className='sm:text-sm text-xs text-[#A3A3A3]'>{batch}</p>
              </div>
              <p className='sm:text-sm text-xs text-[#A3A3A3]'>{course}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Education;
