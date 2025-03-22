import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/layout/container';
import { skills } from '@/data/portfolio-data';

export function SkillsSection() {
  return (
    <section id='skills' className='bg-white/5 py-24 md:py-32'>
      <Container>
        <h2 className='font-arapey text-3xl font-normal tracking-wide mb-16 text-center'>
          My Skills
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {skills.map((skillGroup) => (
            <Card
              key={skillGroup.category}
              className='h-full bg-[#1a1a18] border-white/10'
            >
              <CardHeader className='pb-3'>
                <CardTitle className='font-arapey font-normal tracking-wide'>
                  {skillGroup.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='grid grid-cols-2 gap-3'>
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className='flex items-center gap-2 text-white/90'
                    >
                      <div className='h-1 w-1 rounded-full bg-white' />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
