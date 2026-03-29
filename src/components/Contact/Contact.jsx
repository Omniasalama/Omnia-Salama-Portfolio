import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import toast from 'react-hot-toast'
import emailjs from '@emailjs/browser'
import { Mail, Github, Linkedin, MapPin, Send, Phone, ArrowRight, Copy, Check } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const EMAIL = 'omniamsalama25@gmail.com'
const PHONE = '+20 1122598484'

export default function Contact() {
  useScrollAnimation()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    toast.success('Email copied to clipboard!', {
      style: { background: '#0E1510', color: '#E8F0EA', border: '1px solid #1C2B1E' },
      iconTheme: { primary: '#00FF88', secondary: '#080C0A' },
    })
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields.', {
        style: { background: '#0E1510', color: '#E8F0EA', border: '1px solid #1C2B1E' },
        iconTheme: { primary: '#FF6B6B', secondary: '#080C0A' },
      })
      return
    }

    setLoading(true)

    emailjs.send(
      'service_73llsfc',    
      'template_d54m18i',   
      {
        from_name:  form.name,
        from_email: form.email,
        subject:    form.subject || 'No subject',
        message:    form.message,
      },
      'qs1i8o0ZRgdO_yC0i'     
    )
    .then(() => {
      setLoading(false)
      setForm({ name: '', email: '', subject: '', message: '' })
      toast.success("Message sent! I'll get back to you soon.", {
        duration: 5000,
        style: { background: '#0E1510', color: '#E8F0EA', border: '1px solid rgba(6,128,136,0.3)' },
        iconTheme: { primary: '#06b6d4 ', secondary: '#080C0A' },
      })
    })
    .catch(() => {
      setLoading(false)
      toast.error('Something went wrong. Please try again.', {
        style: { background: '#0E1510', color: '#E8F0EA', border: '1px solid #1C2B1E' },
        iconTheme: { primary: '#FF6B6B', secondary: '#080C0A' },
      })
    })
  }

  return (
    <>
      <Helmet>
        <title>Contact — Omnia Salama</title>
        <meta name="description" content="Get in touch with Omnia Salama for project collaborations, job opportunities, or just to say hello." />
      </Helmet>

      {/* HEADER */}
      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6">
        <div className="animate-on-scroll">
          <span className="section-label">Contact</span>
          <h1 className="font-display font-800 text-5xl md:text-7xl text-text mt-2 leading-[0.9]">
            Let's build<br />
            <span className="cyan-500 -gradient">something great.</span>
          </h1>
          <p className="text-muted mt-6 max-w-xl text-lg leading-relaxed">
            Have a project, opportunity, or just want to chat about front-end development? My inbox is always open.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12">

          {/* LEFT — Info */}
          <div className="space-y-6">
            <div className="animate-on-scroll">
              <h2 className="font-display font-700 text-sm text-muted tracking-widest uppercase mb-6">Get in touch</h2>
              <div className="space-y-3">

                {/* Email */}
                <div className="glass-card p-5 group">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-cyan-500 /50 transition-all">
                      <Mail size={15} className="text-muted group-hover:text-cyan-500 " />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-muted text-[10px] uppercase tracking-widest mb-1">Email</p>
                      <p className="text-text text-sm truncate">{EMAIL}</p>
                    </div>
                    <button onClick={handleCopyEmail}
                      className="w-8 h-8 border border-border flex items-center justify-center text-muted hover:text-cyan-500  hover:border-cyan-500  transition-all flex-shrink-0">
                      {copied ? <Check size={13} className="text-cyan-500 " /> : <Copy size={13} />}
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div className="glass-card p-5 group">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-cyan-500 /50 transition-all">
                      <Phone size={15} className="text-muted" />
                    </div>
                    <div className="flex-1">
                      <p className="text-muted text-[10px] uppercase tracking-widest mb-1">Phone</p>
                      <p className="text-text text-sm">{PHONE}</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="glass-card p-5 group">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 border border-border flex items-center justify-center flex-shrink-0">
                      <MapPin size={15} className="text-muted" />
                    </div>
                    <div>
                      <p className="text-muted text-[10px] uppercase tracking-widest mb-1">Location</p>
                      <p className="text-text text-sm">Alexandria, Egypt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <h3 className="font-display font-700 text-sm text-muted tracking-widest uppercase mb-4">Social</h3>
              <div className="space-y-2">
                {[
                  { href: 'https://github.com/Omniasalama', Icon: Github, label: 'GitHub', sub: 'github.com/Omniasalama' },
                  { href: 'https://linkedin.com/in/omniasalama', Icon: Linkedin, label: 'LinkedIn', sub: 'linkedin.com/in/omniasalama' },
                ].map(({ href, Icon, label, sub }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer"
                    className="glass-card p-4 flex items-center gap-4 group hover:border-cyan-500 /40 transition-all duration-200">
                    <div className="w-9 h-9 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-cyan-500  transition-all">
                      <Icon size={15} className="text-muted group-hover:text-cyan-500 " />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-text text-sm font-display font-600">{label}</p>
                      <p className="text-muted text-xs truncate">{sub}</p>
                    </div>
                    <ArrowRight size={14} className="text-muted group-hover:text-cyan-500  transition-colors flex-shrink-0 -rotate-45" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="glass-card p-5 border-cyan-500 /20">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500  rounded-full animate-pulse" />
                  <span className="text-cyan-500  font-display font-600 text-sm">Available for Work</span>
                </div>
                <p className="text-muted text-xs mt-2 leading-relaxed">
                  Currently open to front-end developer roles, internships, and freelance projects.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="animate-on-scroll" style={{ transitionDelay: '150ms' }}>
            <div className="glass-card p-8">
              <h2 className="font-display font-700 text-xl text-text mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-muted text-xs font-display uppercase tracking-wider mb-2">
                      Name <span className="text-cyan-500 ">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-bg border border-border px-4 py-3 text-text text-sm placeholder:text-muted/40 focus:border-cyan-500  focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-muted text-xs font-display uppercase tracking-wider mb-2">
                      Email <span className="text-cyan-500 ">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-bg border border-border px-4 py-3 text-text text-sm placeholder:text-muted/40 focus:border-cyan-500  focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-muted text-xs font-display uppercase tracking-wider mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full bg-bg border border-border px-4 py-3 text-text text-sm placeholder:text-muted/40 focus:border-cyan-500  focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-muted text-xs font-display uppercase tracking-wider mb-2">
                    Message <span className="text-cyan-500 ">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-bg border border-border px-4 py-3 text-text text-sm placeholder:text-muted/40 focus:border-cyan-500  focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-7 py-4 bg-cyan-500  text-bg font-display font-700 text-sm tracking-wider uppercase hover:bg-cyan-500 -dim disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-bg border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={15} />
                    </>
                  )}
                </button>

                <p className="text-muted text-xs text-center">
                  Alternatively, email me directly at{' '}
                  <a href={`mailto:${EMAIL}`} className="text-cyan-500 hover:underline">{EMAIL}</a>
                </p>
              </form>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}