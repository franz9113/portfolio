import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { personalInfo } from '@/data/portfolio-data';

export function HeroSection() {
  return (
    <section className='py-24 md:py-32 flex flex-col items-center justify-center text-center'>
      <Container>
        <div className='mx-auto flex max-w-[980px] flex-col items-center gap-6'>
          <h1 className='font-arapey text-3xl font-normal leading-tight tracking-wide md:text-5xl lg:text-6xl'>
            Hi, I'm <span className='text-primary'>{personalInfo.name}</span>
            <br />
            {personalInfo.role}
          </h1>
          <p className='max-w-[700px] text-lg text-white/80 md:text-xl'>
            I build responsive, accessible web applications with modern
            technologies
          </p>
          <div className='flex gap-4 mt-4'>
            <Button asChild>
              <Link href='#contact'>Get in touch</Link>
            </Button>
            <Button variant='outline' asChild>
              <Link href='#projects'>View my work</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
