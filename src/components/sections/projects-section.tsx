import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Container } from '@/components/layout/container';
import { projects } from '@/data/portfolio-data';

export function ProjectsSection() {
  return (
    <section id='projects' className='py-24 md:py-32'>
      <Container>
        <h2 className='font-arapey text-3xl font-normal tracking-wide mb-16 text-center'>
          My Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {projects.map((project) => (
            <Card
              key={project.title}
              className='overflow-hidden flex flex-col h-full bg-[#1a1a18] border-white/10'
            >
              <div className='aspect-video relative'>
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={`Screenshot of ${project.title}`}
                  className='object-cover'
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </div>
              <CardHeader className='pb-2'>
                <CardTitle className='font-arapey font-normal tracking-wide'>
                  {project.title}
                </CardTitle>
                <CardDescription className='text-white/70'>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className='pb-4 pt-0'>
                <div className='flex flex-wrap gap-2 mt-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='bg-white/10 text-white/80 text-xs px-2 py-1 rounded-md'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className='flex gap-4 mt-auto pt-0'>
                <Button
                  variant='outline'
                  size='sm'
                  asChild
                  className='border-white/20 hover:bg-white/10'
                >
                  <Link
                    href={project.demoLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ExternalLink className='mr-2 h-4 w-4' />
                    Demo
                  </Link>
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  asChild
                  className='border-white/20 hover:bg-white/10'
                >
                  <Link
                    href={project.codeLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Github className='mr-2 h-4 w-4' />
                    Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
