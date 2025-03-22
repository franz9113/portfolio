import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { personalInfo } from '@/data/portfolio-data';

export function ContactSection() {
  return (
    <section id='contact' className='bg-white/5 py-24 md:py-32'>
      <Container>
        <div className='mx-auto max-w-[600px] text-center'>
          <h2 className='font-arapey text-3xl font-normal tracking-wide mb-6'>
            Get In Touch
          </h2>
          <p className='text-white/80 mb-10'>
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll do my best to get back to you!
          </p>
          <div className='flex justify-center gap-6 mb-10'>
            <Button
              variant='outline'
              size='icon'
              asChild
              className='border-white/20 hover:bg-white/10'
            >
              <Link href={`mailto:${personalInfo.email}`} aria-label='Email'>
                <Mail className='h-5 w-5' />
              </Link>
            </Button>
            <Button
              variant='outline'
              size='icon'
              asChild
              className='border-white/20 hover:bg-white/10'
            >
              <Link
                href={personalInfo.github}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'
              >
                <Github className='h-5 w-5' />
              </Link>
            </Button>
            <Button
              variant='outline'
              size='icon'
              asChild
              className='border-white/20 hover:bg-white/10'
            >
              <Link
                href={personalInfo.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
              >
                <Linkedin className='h-5 w-5' />
              </Link>
            </Button>
          </div>
          <Button asChild className='w-full md:w-auto px-8'>
            <Link href={`mailto:${personalInfo.email}`}>Send me an email</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
