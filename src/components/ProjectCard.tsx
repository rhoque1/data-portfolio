import Link from 'next/link';

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--border)',
      }}
    >
      <Link href={`/projects/${project.id}`} className="block group">
        {/* Image */}
        <div className="w-full h-52 overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'rgba(12,12,11,0.5)', backdropFilter: 'blur(4px)' }}
          >
            <span
              className="text-sm font-medium px-6 py-2.5 rounded-lg"
              style={{ color: 'var(--accent)', border: '1px solid var(--accent-muted)', letterSpacing: '0.04em' }}
            >
              View case study
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pb-4">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl" style={{ color: 'var(--text)' }}>
              {project.title}
            </h3>
            {project.date && (
              <span className="text-sm ml-4 shrink-0" style={{ color: 'var(--text-faint)' }}>
                {project.date}
              </span>
            )}
          </div>
          <p className="text-sm leading-relaxed mb-5 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
            {project.description}
          </p>

          {/* Tool badges */}
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool: string) => (
              <span
                key={tool}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: 'rgba(200,149,108,0.08)',
                  color: 'rgba(200,149,108,0.7)',
                  border: '1px solid rgba(200,149,108,0.1)',
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* GitHub Link — outside the Link to avoid nested <a> tags */}
      {project.githubLink && (
        <div className="px-6 pb-5">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors" style={{ color: 'var(--text-faint)' }}>
            ↗ View on GitHub
          </a>
        </div>
      )}

    </div>
  );
}