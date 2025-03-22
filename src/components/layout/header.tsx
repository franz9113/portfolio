'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { navLinks } from '@/data/portfolio-data';

export function Header() {
  return (
    <header className='sticky top-0 z-40 w-full border-b border-white/10 bg-[#121210]/95 backdrop-blur supports-[backdrop-filter]:bg-[#121210]/60'>
      <Container className='flex h-16 items-center justify-between'>
        <div className='font-arapey font-normal text-xl tracking-wide'>
          <Link href='/'>Franz Siblos</Link>
        </div>
        <nav className='hidden md:flex gap-6'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-white/70 hover:text-white transition-colors'
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <MobileNav />
      </Container>
    </header>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='md:hidden'>
      <Button
        variant='ghost'
        size='icon'
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Toggle menu'
      >
        {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
      </Button>

      {isOpen && (
        <div className='fixed inset-0 top-16 z-50 bg-[#121210] p-6 animate-in fade-in slide-in-from-top-5'>
          <nav className='flex flex-col gap-6 text-lg'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='text-white/70 hover:text-white transition-colors'
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
