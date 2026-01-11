import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <SectionHeader
          title="About Me"
          subtitle="Building complete web experiences, from frontend to backend."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="space-y-6 text-lg text-[var(--color-text-secondary)]">
              <p>
                I'm a fullstack software engineer who loves building{' '}
                <span className="text-[var(--color-text-primary)] font-medium">
                  complete web applications
                </span>
                —from polished, responsive interfaces to{' '}
                <span className="text-[var(--color-text-primary)] font-medium">
                  robust backend systems
                </span>
                . I believe great products come from engineers who understand
                the full picture.
              </p>
              <p>
                On the frontend, I work with{' '}
                <span className="text-[var(--color-text-primary)] font-medium">
                  React
                </span>
                ,{' '}
                <span className="text-[var(--color-text-primary)] font-medium">
                  Next.js
                </span>
                , and{' '}
                <span className="text-[var(--color-text-primary)] font-medium">
                  TypeScript
                </span>{' '}
                to create fast, accessible, and beautiful user experiences. On
                the backend, I design{' '}
                <span className="text-[var(--color-text-primary)] font-medium">
                  scalable APIs
                </span>{' '}
                and{' '}
                <span className="text-[var(--color-text-primary)] font-medium">
                  microservices
                </span>{' '}
                with Node.js and NestJS.
              </p>
              <p>
                I prioritize clean architecture, performance, and writing code
                that teams can actually maintain. Whether it's crafting
                pixel-perfect UIs or architecting event-driven systems, I enjoy
                solving complex problems across the stack.
              </p>
            </div>
          </motion.div>

          {/* Side highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="card h-full">
              <h3 className="text-lg font-semibold mb-6">What I Focus On</h3>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Frontend Development',
                    description:
                      'React, Next.js, and modern CSS for responsive, accessible UIs.',
                  },
                  {
                    title: 'Backend Architecture',
                    description:
                      'Scalable APIs and microservices with Node.js & NestJS.',
                  },
                  {
                    title: 'Fullstack Integration',
                    description:
                      'Connecting frontend and backend seamlessly with type safety.',
                  },
                  {
                    title: 'Performance & UX',
                    description:
                      'Fast load times, smooth animations, and great user experiences.',
                  },
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-[var(--color-accent-violet)] mt-1">
                      →
                    </span>
                    <div>
                      <h4 className="font-medium text-[var(--color-text-primary)]">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
