import { data } from '@/utils/data';
import Container from './Container';

const Skills = () => {
  return (
    <Container>
      <h2 className='text-xl font-bold mb-2.5'>Skills</h2>
      <div className='flex flex-wrap gap-x-1 gap-y-1.5'>
        {data.skills.map((skill) => (
          <span
            key={skill}
            className='bg-white text-[#171717] text-xs py-0.5 px-2.5 font-semibold rounded-md border transition-all hover:opacity-80'
          >
            {skill}
          </span>
        ))}
      </div>
    </Container>
  );
};

export default Skills;
