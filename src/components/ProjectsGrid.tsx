'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';

type Project = {
  id: string;
  title: string;
  description: string;
  tools: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  date?: string;
};

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState('');

  const filtered = projects.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase()) ||
    p.tools.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <section className="px-10 py-20 pb-32">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-2xl" style={{ color: 'var(--text)' }}>Selected work</h2>
        <span className="text-sm" style={{ color: 'var(--text-faint)' }}>
          {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
        </span>
      </div>

      <input
        type="text"
        placeholder="Search by title, tool, or keyword..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full mb-10 px-4 py-3 rounded-lg text-sm outline-none"
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--border)',
          color: 'var(--text)',
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}