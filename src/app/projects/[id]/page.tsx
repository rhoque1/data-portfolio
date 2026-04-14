import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const filePath = path.join(process.cwd(), 'src/content/projects', `${id}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return (
    <main className="min-h-screen px-10 py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 mb-12 text-sm font-medium transition-colors" style={{ color: 'var(--accent)' }}>
          &larr; Back to portfolio
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {data.tools?.map((tool: string) => (
              <span key={tool} className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ background: 'rgba(200,149,108,0.08)', color: 'rgba(200,149,108,0.7)', border: '1px solid rgba(200,149,108,0.1)' }}>
                {tool}
              </span>
            ))}
          </div>
          <h1 className="text-5xl font-extrabold mb-5 leading-tight" style={{ color: 'var(--text)' }}>
            {data.title}
          </h1>
          <p className="text-xl leading-relaxed pl-6 italic" style={{ color: 'var(--text-muted)', borderLeft: '3px solid var(--accent-muted)' }}>
            {data.description}
          </p>
        </header>

        {/* Dashboard image with hover overlay */}
        <div className="rounded-2xl overflow-hidden mb-16 relative group" style={{ border: '1px solid var(--border)' }}>
          <img src={data.image} alt={data.title} className="w-full h-auto object-cover" />
          {data.liveLink && (
            <a href={data.liveLink} target="_blank" rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(12,12,11,0.5)', backdropFilter: 'blur(4px)' }}>
              <span className="px-6 py-3 rounded-xl text-lg font-bold" style={{ background: 'rgba(200,149,108,0.15)', border: '1px solid var(--accent-muted)', color: 'var(--text)' }}>
                Open interactive dashboard
              </span>
            </a>
          )}
        </div>

        {/* Markdown content */}
        <article className="prose prose-lg max-w-none mb-24" style={{ color: 'var(--text-muted)' }}>
          <ReactMarkdown
            components={{
              h2: ({ children }) => <h2 className="text-2xl mb-4 mt-12" style={{ color: 'var(--text)' }}>{children}</h2>,
              p: ({ children }) => <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>{children}</p>,
              ul: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: 'var(--text-muted)' }}>{children}</ul>,
              strong: ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>,
            }}
          >{content}</ReactMarkdown>
        </article>

        {/* Footer CTA */}
        <div className="text-center py-12" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-sm mb-6" style={{ color: 'var(--text-faint)' }}>Interested in this analysis?</p>
          <a href="mailto:your.email@example.com" className="inline-block px-8 py-4 rounded-lg text-sm font-medium transition-colors"
            style={{ border: '1px solid var(--accent-muted)', color: 'var(--accent)', letterSpacing: '0.04em' }}>
            Get in touch
          </a>
        </div>
      </div>
    </main>
  );
}