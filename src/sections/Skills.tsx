import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Backend',
    skills: [
      'Node.js',
      'NestJS',
      'Express',
      'TypeScript',
      'REST APIs',
      'GraphQL',
      'Microservices',
      'WebSockets',
    ],
  },
  {
    name: 'Databases',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'MySQL',
      'Prisma',
      'TypeORM',
      'Mongoose',
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      'Docker',
      'Git',
      'GitHub Actions',
      'Linux',
      'Nginx',
      'PM2',
      'Jest',
      'Vitest',
    ],
  },
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'],
  },
];

function SkillCategoryCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card"
    >
      <h3 className="text-lg font-semibold mb-5 text-[var(--color-accent-violet)]">
        {category.name}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span key={skill} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-container">
        <SectionHeader
          title="Skills"
          subtitle="Technologies and tools I work with regularly."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.name}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
