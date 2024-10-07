import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconHome,
  IconTerminal2,
} from '@tabler/icons-react';

export function Dock() {
  const links = [
    {
      title: 'Home',
      icon: <IconHome className='h-full w-full text-neutral-300' />,
      href: '#',
    },

    {
      title: 'Projects',
      icon: <IconTerminal2 className='h-full w-full text-neutral-300' />,
      href: '#projects',
    },

    {
      title: 'X',
      icon: <IconBrandX className='h-full w-full text-neutral-300' />,
      href: 'https://x.com/shubhamsp1602',
    },
    {
      title: 'GitHub',
      icon: <IconBrandGithub className='h-full w-full text-neutral-300' />,
      href: 'https://github.com/shubhampatil1602',
    },
    {
      title: 'Linkedin',
      icon: <IconBrandLinkedin className='h-full w-full text-neutral-300' />,
      href: 'https://www.linkedin.com/in/shubhmpatil/',
    },
  ];
  return (
    <div className='flex items-center justify-center w-full fixed bottom-3 left-0'>
      <div className='absolute -bottom-4 w-full h-20 bg-gradient-to-t from-black/60 to-black/5'></div>
      <FloatingDock items={links} />
    </div>
  );
}
