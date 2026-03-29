import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Helmet><title>404 — Omnia Salama</title></Helmet>
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <div className="font-display font-800 text-[12rem] leading-none text-border select-none">
            404
          </div>
          <p className="font-display font-700 text-2xl text-text mt-4 mb-2">Page Not Found</p>
          <p className="text-muted mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-cyan-400 text-bg font-display font-700 text-sm tracking-wider uppercase hover:bg-cyan-400-dim transition-all duration-200">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    </>
  )
}
