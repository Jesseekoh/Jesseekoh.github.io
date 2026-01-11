import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

interface Project {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Eventrea',
    description:
      'Full-stack event management platform with microservices architecture. Features real-time ticketing, payment processing, and organizer dashboards. Built for scale with event-driven communication.',
    stack: ['NestJS', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Next.js'],
    liveUrl: '#',
    githubUrl: 'https://github.com/jesseekoh/eventrea',
    featured: true,
  },
  {
    title: 'API Gateway',
    description:
      'Centralized gateway service handling authentication, rate limiting, request validation, and service routing. Implements JWT-based auth with refresh token rotation.',
    stack: ['Node.js', 'NestJS', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/jesseekoh/api-gateway',
    featured: true,
  },
  {
    title: 'Real-time Chat Service',
    description:
      'WebSocket-based messaging service supporting private chats, group rooms, and presence indicators. Handles 10k+ concurrent connections with horizontal scaling.',
    stack: ['NestJS', 'Socket.io', 'MongoDB', 'Redis Pub/Sub'],
    githubUrl: 'https://github.com/jesseekoh/chat-service',
    featured: true,
  },
  {
    title: 'Task Queue System',
    description:
      'Distributed job processing system with priority queues, retry logic, and dead letter handling. Powers background jobs across multiple services.',
    stack: ['Node.js', 'BullMQ', 'Redis', 'PostgreSQL'],
    githubUrl: 'https://github.com/jesseekoh/task-queue',
  },
  {
    title: 'Auth Microservice',
    description:
      'Standalone authentication service with OAuth2, MFA support, and session management. Designed as a reusable service for multi-tenant applications.',
    stack: ['NestJS', 'PostgreSQL', 'Passport.js', 'bcrypt'],
    githubUrl: 'https://github.com/jesseekoh/auth-service',
  },
  {
    title: 'Log Aggregation Pipeline',
    description:
      'Centralized logging infrastructure collecting logs from distributed services. Features structured logging, search capabilities, and alerting.',
    stack: ['Node.js', 'Elasticsearch', 'Fluentd', 'Grafana'],
    githubUrl: 'https://github.com/jesseekoh/log-pipeline',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`card card-glow group ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold group-hover:text-[var(--color-accent-violet)] transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                aria-label={`View ${project.title} live`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-[var(--color-text-secondary)] mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="skill-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section bg-[var(--color-surface)]">
      <div className="section-container">
        <SectionHeader
          title="Projects"
          subtitle="A selection of engineering work I'm proud of."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
