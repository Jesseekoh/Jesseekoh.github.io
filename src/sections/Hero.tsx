import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

export default function Hero() {
  const handleScrollToAbout = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ padding: 'var(--section-padding-x)' }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(167, 139, 250, 0.15) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Subtitle - appears first */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[var(--color-text-secondary)] text-base md:text-lg mb-6"
          style={{ letterSpacing: '0.05em' }}
        >
          Fullstack Software Engineer
        </motion.p>

        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}
        >
          <MagneticButton
            as="button"
            className="bg-transparent border-none cursor-default p-0"
            strength={0.15}
          >
            <span className="block">Jesse</span>
            <span className="block">
              Ekoh-Ordan
              <span className="text-[var(--color-accent-violet)]">.</span>
            </span>
          </MagneticButton>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10"
        >
          Building modern web experiences with{' '}
          <span className="text-[var(--color-text-primary)] font-medium">
            React
          </span>
          ,{' '}
          <span className="text-[var(--color-text-primary)] font-medium">
            Next.js
          </span>
          , and scalable backends powered by{' '}
          <span className="text-[var(--color-text-primary)] font-medium">
            Node.js
          </span>{' '}
          &{' '}
          <span className="text-[var(--color-text-primary)] font-medium">
            NestJS
          </span>
          .
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            as="button"
            className="btn btn-primary"
            onClick={handleScrollToContact}
            strength={0.25}
          >
            Get in Touch
          </MagneticButton>
          <MagneticButton
            as="button"
            className="btn btn-secondary"
            onClick={handleScrollToAbout}
            strength={0.25}
          >
            View My Work
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={handleScrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors bg-transparent border-none cursor-pointer"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}
