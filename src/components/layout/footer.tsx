import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { personalInfo } from '@/data/portfolio-data';

export function Footer() {
  return (
    <footer className='border-t border-white/10 py-8 md:py-10'>
      <Container className='flex flex-col items-center justify-center gap-6 text-center md:flex-row md:justify-between'>
        <p className='text-sm text-white/60'>
          © {new Date().getFullYear()} Franz Siblos. All rights reserved.
        </p>
        <div className='flex gap-6'>
          <Link
            href={`mailto:${personalInfo.email}`}
            aria-label='Email'
            className='text-white/60 hover:text-white transition-colors'
          >
            <Mail className='h-5 w-5' />
          </Link>
          <Link
            href={personalInfo.github}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='text-white/60 hover:text-white transition-colors'
          >
            <Github className='h-5 w-5' />
          </Link>
          <Link
            href={personalInfo.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='text-white/60 hover:text-white transition-colors'
          >
            <Linkedin className='h-5 w-5' />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
