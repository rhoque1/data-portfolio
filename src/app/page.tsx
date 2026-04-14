import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ProjectsGrid from '../components/ProjectsGrid';

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
          Data Analytics & <span style={{ color: 'var(--accent)' }}>Engineering</span>
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
        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <p className="text-xs mb-2" style={{ color: 'var(--text-faint)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Scroll for work
          </p>
          <span style={{ color: 'var(--text-faint)', fontSize: 20 }}>&#8595;</span>
        </div>
      </header>

      {/* Divider */}
      <div className="px-10">
        <div className="h-px" style={{ background: 'linear-gradient(90deg, var(--accent-muted) 0%, var(--border) 100%)' }} />
      </div>

      {/* Projects */}
      <ProjectsGrid projects={allProjectsData} />

      {/* Footer */}
      <footer className="text-center py-12" style={{ borderTop: '1px solid var(--border)' }}>
        <p className="text-sm" style={{ color: 'var(--text-faint)' }}>
          Built with Next.js & Tailwind
        </p>
      </footer>

    </main>
  );
}