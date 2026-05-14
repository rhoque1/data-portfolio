import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b" style={{ background: 'rgba(12, 12, 11, 0.85)', backdropFilter: 'blur(20px)', borderColor: 'var(--border)' }}>
      <div className="w-full px-10 h-16 flex items-center justify-between">
        
        <Link href="/" className="text-xl tracking-tight" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: 'var(--text)' }}>
          Radwan<span style={{ color: 'var(--accent)' }}>.</span>
        </Link>

        <div className="flex gap-6 items-center text-sm font-medium">
          <a 
            href="mailto:ruh2@scarletmail.rutgers.edu" 
            className="px-4 py-2 rounded-md transition-colors"
            style={{ border: '1px solid var(--accent-muted)', color: 'var(--accent)', fontSize: 13, letterSpacing: '0.06em' }}
          >
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}