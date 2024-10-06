import About from '@/components/About';
import Contact from '@/components/Contact';
import Creative from '@/components/Creative';
import { Dock } from '@/components/Dock';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import MyProjects from '@/components/MyProjects';
import Myself from '@/components/Myself';
import Skills from '@/components/Skills';

const Home = () => {
  return (
    <main className='max-w-2xl min-h-screen mx-auto px-6 py-12 sm:py-24 flex flex-col gap-y-8'>
      <Myself />
      <About />
      <Experience />
      <Education />
      <Skills />
      <MyProjects />
      <Creative />
      <Contact />
      <Dock />
    </main>
  );
};

export default Home;
