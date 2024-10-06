import Container from './Container';

const Contact = () => {
  return (
    <Container>
      <div className='flex flex-col text-center justify-center items-center mt-10 mb-24'>
        <h3 className='bg-white text-[#08090A] text-sm py-1 px-3 rounded-lg border border-[#E5E7EB] transition-all hover:opacity-80'>
          Contact
        </h3>
        <h4 className='text-3xl font-bold tracking-tighter sm:text-5xl mt-2'>
          Get in Touch
        </h4>
        <p className='mt-2 px-2 text-[#A3A3A3] md:text-xl text-base text-muted-foreground tracking-normal sm:tracking-wide sm:leading-relaxed'>
          Want to chat? Feel free to drop me a DM on{' '}
          <a
            href='https://x.com/shubhamsp1602'
            target='_blank'
            className='text-blue-600'
          >
            Twitter
          </a>{' '}
          or reach me via{' '}
          <a
            href='mailto:shubhamspatilnbr@gmail.com'
            target='_blank'
            className='text-blue-600'
          >
            Gmail
          </a>{' '}
          , and I&apos;ll do my best to respond when I can. I&apos;m all about
          connecting and sharing thoughts, so don&apos;t hesitate to reach out!
        </p>
      </div>
    </Container>
  );
};

export default Contact;
