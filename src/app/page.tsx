import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const projectsDirectory = path.join(process.cwd(), 'src/content/projects');
  const fileNames = fs.readdirSync(projectsDirectory);

  const allProjectsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as {
        title: string;
        description: string;
        tools: string[];
        image: string;
        liveLink?: string;
        githubLink?: string;
        date?: string;
      }),
    };
  });

  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>

        {/* Hero */}
      <header className="px-10 pt-40 pb-24 text-center">
        <p className="mb-6 font-medium" style={{ color: 'var(--accent)', fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Radwan Hoque
        </p>
        <h1 className="text-6xl font-extrabold tracking-tight mb-8 leading-tight mx-auto" style={{ color: 'var(--text)', maxWidth: 900 }}>
          Data Analyst & <span style={{ color: 'var(--accent)' }}>Engineer</span>
        </h1>
        <p className="text-lg leading-relaxed mx-auto mb-10" style={{ color: 'var(--text-muted)', maxWidth: 600 }}>
          IT & Informatics student at Rutgers University. I build dashboards, write data pipelines, and find the story in the numbers.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-3">
          {['Python', 'SQL', 'Tableau', 'Power BI', 'Excel', 'ETL/ELT'].map((skill) => (
            <span
              key={skill}
              className="px-4 py-1.5 rounded-full text-sm font-medium"
              style={{
                background: 'rgba(200,149,108,0.08)',
                color: 'rgba(200,149,108,0.7)',
                border: '1px solid rgba(200,149,108,0.1)',
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </header>

      {/* Divider */}
      <div className="px-10">
        <div className="h-px" style={{ background: 'linear-gradient(90deg, var(--accent-muted) 0%, var(--border) 100%)' }} />
      </div>

      {/* Projects */}
      <section className="px-10 py-20 pb-32">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-2xl" style={{ color: 'var(--text)' }}>Selected work</h2>
          <span className="text-sm" style={{ color: 'var(--text-faint)' }}>
            {allProjectsData.length} {allProjectsData.length === 1 ? 'project' : 'projects'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {allProjectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12" style={{ borderTop: '1px solid var(--border)' }}>
        <p className="text-sm" style={{ color: 'var(--text-faint)' }}>
          Built with Next.js & Tailwind
        </p>
      </footer>

    </main>
  );
}