'use client';

import { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { galleryItems } from '@/data/portfolio-data';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    title: string;
    category: string;
  }>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All',
    ...Array.from(new Set(galleryItems.map((item) => item.category))),
  ].sort();

  const filteredItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    },
    [selectedImage]
  );

  useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage, handleKeyDown]);

  return (
    <section id='gallery' className='py-24 md:py-32 bg-white/5'>
      <Container>
        <h2 className='font-arapey text-3xl font-normal tracking-wide mb-6 text-center'>
          Gallery
        </h2>
        <p className='text-white/80 max-w-2xl mx-auto text-center mb-12'>
          A collection of certificates, projects, and other visual elements from
          my professional journey.
        </p>

        {/* Category Filter */}
        <div className='flex flex-wrap justify-center gap-3 mb-12'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors border ${
                activeFilter === category
                  ? 'bg-[#00D1B2] text-white border-[#00D1B2]'
                  : 'bg-transparent text-white border-white/30 hover:border-[#00D1B2] hover:text-[#00D1B2]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className='overflow-hidden rounded-lg bg-white/5 border border-white/10 transition-all hover:border-[#00D1B2]/50 cursor-pointer'
              onClick={() =>
                setSelectedImage({
                  src: item.image,
                  title: item.title,
                  category: item.category,
                })
              }
            >
              <div className='aspect-[4/3] overflow-hidden'>
                <img
                  src={item.image || '/placeholder.svg'}
                  alt={item.title}
                  className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                />
              </div>
              <div className='p-4'>
                <h3 className='font-arapey text-lg'>{item.title}</h3>
                <p className='text-white/60 text-sm'>{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredItems.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-white/60'>No items found for this category.</p>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div
            className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in'
            onClick={() => setSelectedImage(null)}
          >
            <div
              className='relative max-w-4xl w-full'
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className='absolute -top-12 right-0 text-white hover:text-white/80 p-2'
                aria-label='Close modal'
              >
                <X className='h-6 w-6' />
              </button>
              <div className='bg-[#1a1a18] rounded-lg overflow-hidden'>
                <div className='relative pb-[56.25%]'>
                  <img
                    src={selectedImage.src || '/placeholder.svg'}
                    alt={selectedImage.title}
                    className='absolute inset-0 w-full h-full object-contain'
                  />
                </div>
                <div className='p-4'>
                  <h3 className='font-arapey text-xl'>{selectedImage.title}</h3>
                  <p className='text-white/60'>{selectedImage.category}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
