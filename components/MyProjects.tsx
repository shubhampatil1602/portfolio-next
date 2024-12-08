import Image from 'next/image';
import Container from './Container';
import { Github, Globe } from 'lucide-react';
import { data } from '@/utils/data';
import More from './More';

const MyProjects = () => {
  return (
    <Container>
      <div className='my-10' id='projects'>
        <More
          title='My Projects'
          subTitle='Check out my latest work'
          description="I've worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites."
        />

        {/* Project Cards */}
        <div className='my-12 flex flex-wrap gap-3 justify-center'>
          {data.projects.map(({ title, code, desc, img, tech, website }) => (
            <div
              key={title}
              className='border border-[#262626] rounded-md w-full sm:w-[305px] shadow-lg hover:shadow-xl transition-shadow flex flex-col'
            >
              {/* Project Image */}
              <div className='h-40 w-full rounded-t-md overflow-hidden'>
                <Image
                  src={img}
                  alt={title}
                  width={320}
                  height={160}
                  quality={100}
                  className='object-cover h-full w-full'
                />
              </div>

              {/* Project Details */}
              <div className='flex flex-col justify-between p-2 flex-grow'>
                <h4 className='font-semibold tracking-tight text-base'>
                  {title}
                </h4>
                <p className='text-xs text-[#A3A3A3] my-1 flex-grow'>{desc}</p>

                <div className='mt-auto'>
                  {/* Technologies */}
                  <div className='my-2 flex flex-wrap gap-2'>
                    {tech.map((t) => (
                      <span
                        key={t}
                        className='px-1.5 py-1 rounded text-[10px] font-semibold bg-[#262626] text-white'
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className='flex gap-x-2'>
                    {website && (
                      <a href={website} target='_blank'>
                        <button className='bg-white flex gap-1 justify-center items-center text-[#08090A] text-[11px] h-7 w-20 rounded-md border border-[#262626] transition-all hover:opacity-80'>
                          <Globe size={14} /> Website
                        </button>
                      </a>
                    )}
                    {code && (
                      <a href={code} target='_blank'>
                        <button className='bg-white flex gap-1 justify-center items-center text-[#08090A] text-[11px] h-7 w-16 rounded-md border border-[#262626] transition-all hover:opacity-80'>
                          <Github size={14} /> Code
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* TODO: New route */}
          {/* <div className='border border-[#262626] rounded-md w-full sm:w-[305px] shadow-lg hover:shadow-xl transition-shadow flex flex-col'>
            view more
          </div> */}
        </div>
      </div>
    </Container>
  );
};

export default MyProjects;
