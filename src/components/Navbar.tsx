'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [copied, setCopied] = useState(false);

  const handleContact = () => {
    navigator.clipboard.writeText('radwanhoque@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b" style={{ background: 'rgba(12, 12, 11, 0.85)', backdropFilter: 'blur(20px)', borderColor: 'var(--border)' }}>
      <div className="w-full px-10 h-16 flex items-center justify-between">
        
        <Link href="/" className="text-xl tracking-tight" style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: 'var(--text)' }}>
          Radwan<span style={{ color: 'var(--accent)' }}>.</span>
        </Link>

        <div className="flex gap-6 items-center text-sm font-medium relative">
          <button
            onClick={handleContact}
            className="px-4 py-2 rounded-md transition-colors cursor-pointer"
            style={{ border: '1px solid var(--accent-muted)', color: 'var(--accent)', fontSize: 13, letterSpacing: '0.06em', background: 'transparent' }}
          >
            {copied ? 'Copied!' : 'Contact'}
          </button>
          {copied && (
            <div
              className="absolute right-0 top-12 px-4 py-2 rounded-lg text-xs font-medium"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', color: 'var(--text)', whiteSpace: 'nowrap' }}
            >
              radwanhoque@gmail.com
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}