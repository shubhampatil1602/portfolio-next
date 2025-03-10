import Image from "next/image";
import Container from "./Container";
import { data } from "@/utils/data";

const Experience = () => {
  return (
    <Container>
      <h2 className='text-xl font-bold mb-2.5'>Work Experience</h2>
      <div className='flex flex-col gap-3'>
        {data.experiences.map(({ company, desc, duration, id, img, role }) => (
          <div key={id} className='flex gap-4 items-center'>
            <div className='w-[46px] h-[46px] flex-shrink-0'>
              <Image
                src={img}
                alt={company}
                width={46}
                height={46}
                quality={100}
                className='rounded-full w-full h-full object-cover'
              />
            </div>
            <div className='flex flex-col w-full'>
              <div className='flex justify-between'>
                <h3 className='font-semibold text-xs sm:text-sm'>{company}</h3>
                <p className='sm:text-sm text-xs text-[#A3A3A3] font-semibold'>
                  {duration}
                </p>
              </div>
              <h4 className='sm:text-sm text-xs text-[#FAFAFA]'>{role}</h4>
              <p className='sm:text-sm text-xs text-[#A3A3A3]'>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Experience;
