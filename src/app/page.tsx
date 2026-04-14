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

        <header className="px-10 pt-40 pb-24 text-center">
        <p className="mb-6 font-medium" style={{ color: 'var(--accent)', fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Data analyst & storyteller
        </p>
        <h1 className="text-7xl font-extrabold tracking-tight mb-8 leading-tight mx-auto" style={{ color: 'var(--text)', maxWidth: 900 }}>
          Turning complex data into <span style={{ color: 'var(--accent)' }}>clarity</span>
        </h1>
        <p className="text-xl leading-relaxed mx-auto" style={{ color: 'var(--text-muted)', maxWidth: 580 }}>
          I build interactive dashboards and predictive models that help businesses make smarter decisions. Here's a look at my recent work.
        </p>
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