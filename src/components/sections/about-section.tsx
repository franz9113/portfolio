import { Container } from '@/components/layout/container';
import { personalInfo } from '@/data/portfolio-data';

export function AboutSection() {
  return (
    <section id='about' className='py-24 md:py-32'>
      <Container>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2 items-center'>
          <div>
            <img
              src={personalInfo.profileImage || '/placeholder.svg'}
              alt='Developer portrait'
              className='rounded-lg object-cover mx-auto md:mx-0'
              width={400}
              height={400}
            />
          </div>
          <div className='space-y-6'>
            <h2 className='font-arapey text-3xl font-normal tracking-wide'>
              About Me
            </h2>
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className='text-white/80'>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
