import React from 'react';
import Container from './Container';
import More from './More';

const Creative = () => {
  return (
    <Container>
      <div className='my-10'>
        <More
          title='Creative Coder'
          subTitle='I like building things'
          description='I’m all about building cool things! Whether it’s creating sleek web apps, designing smooth user interfaces, or diving into exciting new tech, I’ve enjoyed tackling challenging projects that push my skills further. I thrive on delivering innovative solutions that are both functional and fun. Let’s build something awesome together and make the process just as enjoyable as the result!'
        />
      </div>
    </Container>
  );
};

export default Creative;
