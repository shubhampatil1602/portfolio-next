import { data } from '@/utils/data';
import Container from './Container';

const About = () => {
  return (
    <Container>
      <h2 className='text-xl font-bold mb-1.5'>About</h2>
      <p className='text-[#a3a3a3] text-sm leading-relaxed'>{data.about}</p>
    </Container>
  );
};

export default About;
