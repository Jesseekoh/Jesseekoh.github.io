import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Jesse's approach to backend architecture is exceptional. He doesn't just write code—he designs systems that are genuinely maintainable. Our API response times improved by 60% after his refactoring work.",
    author: 'Sarah Chen',
    role: 'Engineering Manager',
    company: 'Solve Station',
  },
  {
    quote:
      'Working with Jesse was a game-changer for our project. His understanding of NestJS and clean architecture helped us ship a complex feature in half the expected time. Highly recommend.',
    author: 'Michael Adebayo',
    role: 'Lead Developer',
    company: 'TechFlow',
  },
  {
    quote:
      "What sets Jesse apart is his ability to communicate technical concepts clearly. He's not just a skilled engineer—he's someone who elevates the entire team's understanding.",
    author: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'StartupXYZ',
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="card relative"
    >
      {/* Quote icon */}
      <div className="absolute -top-3 -left-1 text-[var(--color-accent-violet)] opacity-20">
        <Quote size={48} />
      </div>

      {/* Quote text */}
      <blockquote className="relative z-10 mb-6">
        <p className="text-[var(--color-text-secondary)] italic leading-relaxed">
          "{testimonial.quote}"
        </p>
      </blockquote>

      {/* Author info */}
      <div className="border-t border-[var(--color-border)] pt-4">
        <p className="font-semibold text-[var(--color-text-primary)]">
          {testimonial.author}
        </p>
        <p className="text-sm text-[var(--color-text-muted)]">
          {testimonial.role} at {testimonial.company}
        </p>
      </div>
    </motion.article>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-[var(--color-surface)]">
      <div className="section-container">
        <SectionHeader
          title="Testimonials"
          subtitle="What colleagues and clients say about working with me."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
