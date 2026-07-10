import { useState, useEffect, useRef } from 'react';
import {
  Mail, Phone, MapPin, ExternalLink, Award, BookOpen,
  Briefcase, GraduationCap, FlaskConical, Users, FileText,
  Star, ChevronDown, Menu, X, Globe, Cpu, Wifi, Radio,
  BookMarked, Microscope, Zap, CheckCircle, Loader2, Send, Trophy
} from 'lucide-react';

/* ═══════════════════════════ BRAND ICONS ═══════════════════════════ */
/* Lucide does not include brand logos by policy. We use inline SVGs. */

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function YouTubeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}
import { supabase } from './lib/supabase';

/* ════════════════════════════════════ DATA ══════════════════════════════════ */

const NAV_LINKS = [
  { href: '#about',        label: 'About' },
  { href: '#education',    label: 'Education' },
  { href: '#experience',   label: 'Experience' },
  { href: '#research',     label: 'Research' },
  { href: '#publications', label: 'Publications' },
  { href: '#patents',      label: 'Patents' },
  { href: '#books',        label: 'Books' },
  { href: '#awards',       label: 'Awards' },
  { href: '#contact',      label: 'Contact' },
];

const STATS = [
  { label: 'Years Teaching', value: '14+',  from: '#b45309', to: '#d97706' },
  { label: 'Journal Papers', value: '24',   from: '#d97706', to: '#f59e0b' },
  { label: 'Conferences',    value: '19',   from: '#0f766e', to: '#0d9488' },
  { label: 'Patents',        value: '2',    from: '#9f1239', to: '#be123c' },
  { label: 'Books/Chapters', value: '7',    from: '#1d4ed8', to: '#2563eb' },
  { label: 'PG Students',    value: '18',   from: '#15803d', to: '#16a34a' },
];

const EDUCATION = [
  {
    degree: 'Ph.D — Microwave Engineering',
    institution: 'Anna University, Chennai', year: '2023',
    thesis: 'Efficient Wideband Low Noise Amplifier based Industrial Microstrip Antenna Design using Optimization Techniques',
  },
  {
    degree: 'M.E — Communication Systems',
    institution: 'Dhanalakshmi Srinivasan Engineering College, Perambalur', year: '2011',
    affil: 'Affiliated to Anna University, Tiruchirapalli',
    thesis: 'Design of an Image Accessibility Model for Color Blinded Viewer',
  },
  {
    degree: 'B.E — Electronics and Communication Engineering',
    institution: 'M.A.M College of Engineering, Siruganur', year: '2008',
    affil: 'Affiliated to Anna University, Chennai',
    thesis: 'Monitoring of Security and Attendance using Fingerprint',
  },
];

const EXPERIENCE = [
  {
    role: 'Associate Professor', current: true,
    institution: 'Dhanalakshmi Srinivasan Engineering College (Autonomous), Perambalur',
    from: 'Sep 2025', to: 'Present',
  },
  {
    role: 'Assistant Professor', current: false,
    institution: 'Dhanalakshmi Srinivasan Engineering College (Autonomous), Perambalur',
    from: 'Jun 2011', to: 'Aug 2025', duration: '14 Years',
  },
];

const RESEARCH_AREAS = [
  { label: 'Wireless Communication', icon: Wifi },
  { label: 'Antenna Design',         icon: Radio },
  { label: 'RF / Microwave',         icon: Cpu },
  { label: 'Image Processing',       icon: Microscope },
  { label: 'Internet of Things',     icon: Globe },
  { label: '5G / 6G Networks',       icon: Zap },
];

const MEMBERSHIPS = [
  { abbr: 'ISTE',  name: 'Indian Society for Technical Education' },
  { abbr: 'IAENG', name: 'International Association of Engineers' },
  { abbr: 'ISSE',  name: 'Indian Society of Systems for Science and Engineering' },
  { abbr: 'MSDIW', name: 'Society of Digital Information and Wireless Communications' },
];

const JOURNALS = [
  { tag:'SCI',    authors:'M. Baritha Begum, Yogeshwaran A, et al.',  journal:'Knowledge-Based Systems', year:'2025',
    title:'Dynamic network security leveraging efficient CoviNet with granger causality-inspired GNN for data compression in cloud IoT', doi:'https://doi.org/10.1016/j.knosys.2024.112859' },
  { tag:'Scopus', authors:'P. Prakash, P. Divya, A. Yogeshwaran, et al.', journal:'Int. J. Computational and Experimental Science and Engineering', year:'2024',
    title:'Chronic Lower Respiratory Diseases detection based on Deep Recursive Convolutional Neural Network', doi:'https://doi.org/10.22399/ijcesen.513' },
  { tag:'SCI',    authors:'Yogeshwaran A.', journal:'Analog Integrated Circuits and Signal Processing', year:'2024',
    title:'A multiple resonant microstrip patch heart shape antenna for satellite and Wi-Fi communication', doi:'https://doi.org/10.1007/s10470-024-02281-0' },
  { tag:'Scholar',authors:'Yogeshwaran A, Akash Menon N, et al.', journal:'Int. Journal of Scientific Research and Engineering Development', year:'2024',
    title:'Design a Circularly Polarized Micro Strip Patch Antenna' },
  { tag:'Scholar',authors:'Yogeshwaran A, Parasakthi B, et al.', journal:'Int. Journal of New Innovations in Engineering and Technology', year:'2024',
    title:'Optimizing High Gain in UWB Bi-Planar Yagi Antenna for Enhanced Performance' },
  { tag:'Scopus', authors:'K. Saranya, A. Yogeshwaran, et al.', journal:'Journal of Electrical Systems', year:'2024',
    title:'IOT Based Health Preventive Management System for Patient information discovery Using Ontology' },
  { tag:'Scopus', authors:'Dr. A. Vijay, A. Yogeshwaran, et al.', journal:'Journal of Propulsion Technology', year:'2023',
    title:'Enhancing Predictive Analytics with AI and ML: A Comprehensive Review' },
  { tag:'SCI',    authors:'A. Yogeshwaran, K. Umadevi', journal:'Intelligent Automation & Soft Computing', year:'2023',
    title:'Optimized neural network-based micro strip patch antenna design for radar application' },
  { tag:'SCI',    authors:'A. Yogeshwaran, K. Umadevi', journal:'Microprocessors and Microsystems', year:'2020',
    title:'An efficient wideband low noise amplifier (WLNA) using ADS based industrial microstrip antenna', doi:'https://www.sciencedirect.com/science/article/pii/S0141933120304610' },
  { tag:'Scopus', authors:'R. Balamurugan, A. Yogeshwaran, et al.', journal:'Annals of the Romanian Society for Cell Biology', year:'2021',
    title:'IoT Based Farm Housing Using NPK Sensors' },
];

const CONFERENCES = [
  { tag:'IEEE', year:'2026', event:'ICDCS 2026', authors:'Lavanya R., Rajeswari P., A. Yogeshwaran',
    title:'Hybrid CNN–Transformer Enabled Channel Estimation and Adaptive Power Controlled RIS-MIMO for 6G', doi:'10.1109/ICDCS68853.2026.11510804' },
  { tag:'IEEE', year:'2026', event:'I3CTCON 2026', authors:'A. Yogeshwaran, M.P. Harinisri, et al.',
    title:'A Compact L-Shaped Wearable Antenna on FR-4 Substrate for Medical Applications', doi:'10.1109/I3CTCON68242.2026.11507143' },
  { tag:'IEEE', year:'2026', event:'WiSPNET 2026', authors:'A. Yogeshwaran, P. Prakash, et al.',
    title:'Radiation Efficiency Enhancements of a Circular SIW Patch Antenna for 5G Mobile Communications' },
  { tag:'IEEE', year:'2025', event:'ICACRS 2025', authors:'Yogeshwaran A, SuriyaPrakash T, et al.',
    title:'IoT Cloud based Smart Agriculture Monitoring System with Mobile Application', doi:'10.1109/ICACRS67045.2025.11324261' },
  { tag:'WOS',  year:'2025', event:'ICCSCE 2025', authors:'A. Yogeshwaran, M. Noorjahan, D. Denceli, S. Pricilla Mary',
    title:'Design and Parametric Analysis of Microstrip S-Slot Antenna for Satellite Applications' },
  { tag:'Scopus',year:'2025', event:'WCONF 2025', authors:'B. Karthiga, A. Yogeshwaran, et al.',
    title:'Revolutionizing USB Switching Systems with DeskHop Jr and Reconfigurable Computing' },
];

const PATENTS = [
  { title:'An Artificial Intelligence-Based Mobile-Controlled Inoculating System for Rapid Inoculation',
    appNo:'202341050840', filed:'27 Jul 2023', published:'01 Sep 2023' },
  { title:'IOT Enabled Distance Measurement Device for Industrial Applications',
    appNo:'Design No. 429774-001', filed:'09 Sep 2024', published:'2024' },
];

const BOOKS = [
  { title:'Electromagnetic Fields',               authors:'N. Khadar Basha, A. Yogeshwaran',     publisher:'Book Doula Publication',   isbn:'978-81-937245-2-1', type:'Book' },
  { title:'Basics of Biomedical Instruments',      authors:'Dr. S.N. Kumar, A. Yogeshwaran',      publisher:'Charulatha Publications',  isbn:'978-93-89051-39-1', type:'Book' },
  { title:'Transmission Lines and RF Systems',     authors:'B. Anandhi Meena, A. Yogeshwaran, et al.', publisher:'Charulatha Publications', isbn:'978-93-89736-52-6', type:'Book' },
  { title:'Advanced Wireless Communication',       authors:'K. Jaikumar, A. Yogeshwaran, et al.', publisher:'Charulatha Publications',  isbn:'978-93-95211-02-4', type:'Book' },
  { title:'Electromagnetic Fields (2nd Ed.)',       authors:'Dr. P. Rajeswari, A. Yogeshwaran, et al.', publisher:'Charulatha Publications', isbn:'978-93-95211-16-1', type:'Book' },
  { title:'Emerging Innovative Research in S&T — Ch. 24', authors:'T. Boopathy, N.K. Basha, A. Yogeshwaran, S. Nithya', publisher:'Collective Publication', isbn:'978-93-91977-32-0', type:'Chapter' },
  { title:'Adversarial ML & AI Security: Safeguarding Industry 4.0 — Ch. 2', authors:'V. Vakula, A. Yogeshwaran, et al.', publisher:'De Gruyter (Scopus)', isbn:'DOI: 10.1515/9783112213049-002', type:'Chapter' },
  { title:'Innovations in VLSI Architecture and Digital Signal Processing', authors:'Dr. M. Kamarajan, Mrs. Dimple Juneja, Dr. A. Yogeshwaran, Dr. S. Muthurajan', publisher:'Book Chapter', isbn:'978-81-686017-8-9', type:'Chapter' },
];

const AWARDS = [
  { title: 'Research Excellence Award', description: 'Received the Research Award twice for publishing research papers indexed in Scopus and SCI journals.', icon: 'trophy' },
];

const ACTIVITIES = [
  { t:'Session Chair',        d:'National-level conference at Roever Engineering College, 2019' },
  { t:'Guest Lecturer',       d:'Topics: Multistage Amplifier, Feedback Amplifier, 5G Technology, ABCD Parameters' },
  { t:'Journal Reviewer',     d:'IJRES, QEIOS, IJEECS, Alexandria Engineering Journal, American Journal of Electromagnetics' },
  { t:'Organizing Secretary', d:'NCETC 2018 & National Symposium 2K18 at DSEC, Perambalur' },
  { t:'Student Mentor',       d:'EDII-TN SIDP 4.0 Bootcamp — government school students, Perambalur' },
  { t:'NBA & NAAC',           d:'Active contributor — NBA accreditation 2018, 2021; NAAC 2014' },
];

const SUBJECTS = [
  'Antennas & Wave Propagation','Wireless Communication','RF & Microwave Engineering',
  'Satellite Communication','4G/5G Communication','Broadband Wireless Communication',
  'Communication Theory','Network Security','Circuit Theory','Control System',
  'Electromagnetic Fields','Medical Electronics','Electronics Circuits',
];

const badgeClass: Record<string,string> = {
  SCI:'badge-sci', Scopus:'badge-scopus', Scholar:'badge-scholar', WOS:'badge-wos', IEEE:'badge-ieee',
};

/* ════════════════════════════════════ APP ═══════════════════════════════════ */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled,  setScrolled]  = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor:'#fdf8f0' }}>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-charcoal-950/96 backdrop-blur-md shadow-2xl shadow-black/30' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href}
                className="nav-link text-zinc-300 hover:text-gold-300 text-sm font-medium transition-colors pb-0.5">
                {l.label}
              </a>
            ))}
          </div>
          <button onClick={() => setMenuOpen(v => !v)} className="lg:hidden text-white p-2">
            {menuOpen ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-charcoal-950/98 border-t border-zinc-800">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="block px-6 py-3 text-zinc-300 hover:text-gold-300 hover:bg-zinc-800/50 text-sm font-medium transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero-bg relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-glow pointer-events-none"/>
      
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4">
                Dr. A.<br/>
                <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-amber-300 bg-clip-text text-transparent">
                  Yogeshwaran
                </span>
              </h1>
                <div className="mt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-500/40 bg-gold-500/5 text-gold-400 text-sm font-semibold tracking-wide">
                 <span className="w-1.5 h-1.5 bg-gold-400 rounded-full ..."/>
                  Associate Professor · ECE Department
                   </div>
              </div>
            
              <div className="flex flex-wrap gap-3 mb-4 mt-4">
                <a href="mailto:dryogeshwaran23@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/25 rounded-full text-gold-300 text-sm hover:bg-gold-500/20 transition-colors">
                  <Mail size={13}/> dryogeshwaran23@gmail.com
                </a>
                <a href="tel:9199448 77208"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-zinc-300 text-sm hover:bg-white/10 transition-colors">
                  <Phone size={13}/> +91-99448 77208
                </a>
              </div>

            {/* Research Identifiers */}
            <div className="flex flex-wrap gap-2 mb-8">
              <a href="https://orcid.org/0000-0003-0080-0828" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-mono hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all">
                <Globe size={11}/> ORCID
              </a>
              <a href="https://www.scopus.com/authid/detail.uri?authorId=57164021900" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-mono hover:bg-blue-500/20 hover:border-blue-500/50 transition-all">
                <Globe size={11}/> Scopus
              </a>
              <a href="https://vidwan.inflibnet.ac.in/profile/580848" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono hover:bg-purple-500/20 hover:border-purple-500/50 transition-all">
                <Globe size={11}/> VIDWAN
              </a>
              <a href="https://www.webofscience.com/wos/author/record/NZO-3696-2025" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-mono hover:bg-amber-500/20 hover:border-amber-500/50 transition-all">
                <Globe size={11}/> Researcher
              </a>
            </div>

              <div className="flex gap-3">
                <a href="#publications" className="btn-gold px-6 py-2.5 text-white font-bold rounded-xl text-sm">View Publications</a>
                <a href="#contact" className="px-6 py-2.5 bg-white/8 hover:bg-white/14 text-white font-semibold rounded-xl text-sm transition-all border border-white/15">
                  Send Message
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end fade-up-2">
              <div className="relative">
                <div className="absolute inset-0 scale-110 rounded-3xl"
                  style={{ background:'radial-gradient(circle, rgba(245,158,11,.20) 0%, transparent 70%)' }}/>
                <div className="relative w-72 h-[22rem] lg:w-80 lg:h-[26rem] rounded-3xl overflow-hidden shadow-2xl"
                  style={{ border:'2px solid rgba(245,158,11,.25)' }}>
                  <img src="/images/WhatsApp_Image_2026-07-06_at_6.53.58_PM.jpeg"
                    alt="Dr. A. Yogeshwaran" className="w-full h-full object-cover object-top"/>
                  <div className="absolute bottom-0 inset-x-0 h-20"
                    style={{ background:'linear-gradient(to top, rgba(24,24,27,.65), transparent)' }}/>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-gold-400 transition-colors animate-bounce">
          <ChevronDown size={28}/>
        </a>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <section className="py-12 bg-charcoal-900 border-b border-zinc-800" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-0 divide-x divide-zinc-700/50">
            {STATS.map(s => (
              <div key={s.label} className="text-center px-4 py-2">
                <div className="text-3xl font-display font-bold mb-1"
                  style={{ background:`linear-gradient(135deg,${s.from},${s.to})`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                  {s.value}
                </div>
                <div className="text-xs text-zinc-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor:'#fdf8f0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SH icon={<Users size={16}/>} title="About Me" sub="Academic Profile"/>
          <div className="mt-12 grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3 space-y-4 text-stone-600 leading-relaxed">
              <p>
                Dr. A. Yogeshwaran is an Associate Professor in the Department of Electronics and Communication Engineering
                at <strong className="text-charcoal-800">Dhanalakshmi Srinivasan Engineering College (Autonomous), Perambalur</strong>.
                With over <strong className="text-charcoal-800">14 years of teaching experience</strong> and a Ph.D in Microwave Engineering
                from Anna University Chennai (2023), he is a prolific researcher and dedicated educator.
              </p>
              <p>
                His research spans <strong className="text-charcoal-800">Wireless Communication, RF/Microwave Engineering, Antenna Design,
                Image Processing, and IoT</strong>. His SCI-indexed publications appear in Knowledge-Based Systems,
                Microprocessors and Microsystems, Intelligent Automation &amp; Soft Computing, and Analog Integrated Circuits.
              </p>
              <p>
                He serves as a session chair, guest lecturer, journal reviewer, and mentor for government school students.
                He has organized national conferences and guided <strong className="text-charcoal-800">18 postgraduate students</strong>.
              </p>
            </div>

            <div className="lg:col-span-2 space-y-6">
{/* Personal Card */}
              <div className="bg-gradient-to-br from-charcoal-900 to-charcoal-800 rounded-2xl shadow-xl p-6 text-white">
                <p className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Users size={14}/> Personal Information
                </p>
                <div className="space-y-3">
                  {[
                    ['Date of Birth', '15 November 1985'],
                    ['Languages',     'Tamil, English'],
                    ['Nationality',   'Indian'],
                    ['Location',      'Thottiam, Trichy, Tamil Nadu'],
                  ].map(([l,v]) => (
                    <div key={l} className="flex justify-between items-center p-3 border-b border-zinc-700 last:border-0">
                      <span className="text-zinc-400 text-sm font-medium">{l}</span>
                      <span className="text-zinc-200 text-sm font-semibold">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ─────────────────────────────────────────── */}
      <section className="py-20 bg-white" id="education">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SH icon={<GraduationCap size={16}/>} title="Education" sub="Academic Qualifications"/>
          <div className="mt-12 relative pl-8 tl-line space-y-10">
            {EDUCATION.map((e,i) => (
              <div key={i} className="relative tl-dot ml-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                  <h3 className="font-display font-bold text-charcoal-900 text-xl">{e.degree}</h3>
                  <span className="px-3 py-0.5 bg-gold-50 border border-gold-200 text-gold-700 text-xs font-bold rounded-full">{e.year}</span>
                </div>
                <p className="text-gold-700 font-semibold text-sm mb-0.5">{e.institution}</p>
                {e.affil && <p className="text-stone-400 text-xs mb-2">{e.affil}</p>}
                <p className="text-stone-500 text-sm italic">"{e.thesis}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor:'#fdf8f0' }} id="experience">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SH icon={<Briefcase size={16}/>} title="Professional Experience" sub="Teaching Career"/>
          <div className="mt-12 space-y-0">
            {EXPERIENCE.map((e,i) => (
              <div key={i} className="open-row grid md:grid-cols-3 gap-4 md:gap-8 items-start">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-display font-bold text-charcoal-900 text-2xl">{e.role}</h3>
                    {e.current && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold rounded-full">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"/>Current
                      </span>
                    )}
                  </div>
                  <p className="text-gold-700 font-semibold text-sm">{e.institution}</p>
                </div>
                <div className="text-right">
                  <p className="text-stone-700 font-semibold text-sm">{e.from} — <span className={e.current ? 'text-emerald-600' : ''}>{e.to}</span></p>
                  {e.duration && <p className="text-stone-400 text-xs mt-0.5">{e.duration}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH ──────────────────────────────────────────── */}
      <section className="py-20 bg-white" id="research">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SH icon={<FlaskConical size={16}/>} title="Research Interests" sub="Fields of Expertise"/>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {RESEARCH_AREAS.map(r => (
              <div key={r.label} className="text-center group cursor-default">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-3 shadow-md group-hover:scale-110 transition-transform"
                  style={{ background:'linear-gradient(135deg,#d97706,#f59e0b)' }}>
                  <r.icon size={22} className="text-white"/>
                </div>
                <p className="text-charcoal-700 font-semibold text-xs leading-tight">{r.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-6">Professional Memberships</p>
              {MEMBERSHIPS.map(m => (
                <div key={m.abbr} className="open-row flex items-center gap-4">
                  <span className="font-display font-bold text-gold-600 text-base w-16">{m.abbr}</span>
                  <span className="text-stone-600 text-sm">{m.name}</span>
                  <span className="ml-auto text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-semibold">Life Member</span>
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-6">Subjects Handled</p>
              <div className="flex flex-wrap gap-2">
                {SUBJECTS.map(s => (
                  <span key={s}
                    className="px-3 py-1.5 bg-stone-100 text-stone-700 text-xs font-medium rounded-full hover:bg-gold-100 hover:text-gold-800 transition-colors cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PUBLICATIONS ──────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor:'#fdf8f0' }} id="publications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SH icon={<FileText size={16}/>} title="Journal Publications" sub="24 International Papers"/>
          <div className="mt-12">
            {JOURNALS.map((p,i) => (
              <div key={i} className="open-row flex items-start gap-5">
                <div className="flex-shrink-0 pt-0.5">
                  <span className="text-gold-300 font-mono text-xs font-bold">{String(i+1).padStart(2,'0')}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`pub-badge ${badgeClass[p.tag] ?? 'badge-scholar'}`}>{p.tag}</span>
                    <span className="text-stone-400 text-xs">{p.year}</span>
                  </div>
                  <p className="font-semibold text-charcoal-800 text-sm leading-snug mb-1">"{p.title}"</p>
                  <p className="text-stone-400 text-xs mb-0.5">{p.authors}</p>
                  <p className="text-gold-700 text-xs font-semibold">{p.journal}
                    {p.doi && <a href={p.doi} target="_blank" rel="noopener noreferrer"
                      className="ml-2 inline-flex items-center gap-0.5 text-stone-400 hover:text-gold-600 transition-colors">
                      <ExternalLink size={9}/> DOI
                    </a>}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* conferences */}
          <div className="mt-16" id="conferences">
            <p className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-2">Conference Papers — 19 Total</p>
            <div className="gold-bar mb-8"/>
            {CONFERENCES.map((c,i) => (
              <div key={i} className="open-row flex items-start gap-5">
                <span className="flex-shrink-0 text-gold-300 font-mono text-xs font-bold pt-0.5">{String(i+1).padStart(2,'0')}</span>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`pub-badge ${badgeClass[c.tag] ?? 'badge-ieee'}`}>{c.tag}</span>
                    <span className="text-xs text-stone-400">{c.year} · {c.event}</span>
                  </div>
                  <p className="font-semibold text-charcoal-800 text-sm leading-snug mb-0.5">"{c.title}"</p>
                  <p className="text-stone-400 text-xs">{c.authors}</p>
                  {c.doi && <p className="text-stone-400 text-xs font-mono mt-0.5">doi: {c.doi}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PATENTS ───────────────────────────────────────────── */}
      <section className="py-20 bg-white" id="patents">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SH icon={<Award size={16}/>} title="Patents" sub="Intellectual Property"/>
          <div className="mt-12 space-y-0">
            {PATENTS.map((p,i) => (
              <div key={i} className="open-row grid md:grid-cols-3 gap-4 md:gap-12">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                      style={{ background:'linear-gradient(135deg,#d97706,#f59e0b)' }}>
                      {i+1}
                    </div>
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Patent Filed
                    </span>
                  </div>
                  <p className="font-display font-bold text-charcoal-900 text-lg leading-snug">"{p.title}"</p>
                </div>
                <dl className="space-y-2 text-xs">
                  {[['Application No.', p.appNo],['Date Filed', p.filed],['Published', p.published]].map(([dt,dd]) => (
                    <div key={dt} className="flex gap-3">
                      <dt className="text-stone-400 w-28 font-semibold">{dt}</dt>
                      <dd className="text-charcoal-700 font-mono">{dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKS ─────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor:'#fdf8f0' }} id="books">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SH icon={<BookOpen size={16}/>} title="Books & Book Chapters" sub="7 Published Works"/>
          <div className="mt-12 space-y-0">
            {BOOKS.map((b,i) => (
              <div key={i} className={`open-row grid md:grid-cols-4 gap-4 md:gap-8 items-baseline ${b.title.includes('VLSI') ? 'bg-gold-50/50 -mx-4 px-4 rounded-xl border border-gold-200/50' : ''}`}>
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`pub-badge ${b.type==='Chapter'?'badge-wos':'badge-sci'} ${b.title.includes('VLSI') ? 'ring-2 ring-gold-300 ring-offset-1' : ''}`}>{b.type}</span>
                    {b.title.includes('VLSI') && <span className="text-xs font-bold text-gold-600 bg-gold-100 px-2 py-0.5 rounded-full">NEW</span>}
                  </div>
                  <p className={`font-semibold text-sm leading-snug ${b.title.includes('VLSI') ? 'text-charcoal-900 text-base' : 'text-charcoal-800'}`}>"{b.title}"</p>
                </div>
                <p className="text-stone-400 text-xs">{b.authors}</p>
                <div className="text-right text-xs">
                  <p className="text-gold-700 font-semibold">{b.publisher}</p>
                  <p className={`font-mono mt-0.5 ${b.title.includes('VLSI') ? 'text-gold-700 font-bold bg-gold-100 inline-block px-2 py-0.5 rounded' : 'text-stone-400'}`}>{b.isbn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AWARDS ────────────────────────────────────────────── */}
      <section className="py-20 bg-white" id="awards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SH icon={<Star size={16}/>} title="Awards & Recognition" sub="Academic Excellence"/>
          <div className="mt-12 grid md:grid-cols-2 gap-x-16">
            <div>
              <p className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-6">Awards</p>
              {AWARDS.map((a,i) => (
                <div key={i} className="open-row">
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-charcoal-900 to-charcoal-800 rounded-2xl border border-gold-500/20 shadow-xl">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/30 flex items-center justify-center">
                      <Trophy size={22} className="text-gold-400"/>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display font-bold text-white text-lg mb-1">{a.title}</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{a.description}</p>
                      <div className="flex gap-2 mt-3">
                        <span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold rounded-full">Scopus</span>
                        <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold rounded-full">SCI</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-6">Activities & Outreach</p>
              {ACTIVITIES.map((a,i) => (
                <div key={i} className="open-row">
                  <p className="font-semibold text-charcoal-800 text-sm">{a.t}</p>
                  <p className="text-stone-500 text-xs mt-0.5">{a.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ──────────────────────────────────────── */}
      <ContactSection/>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer className="bg-charcoal-950 border-t border-zinc-800 py-8 text-center">
        <p className="text-zinc-500 text-sm">
          © 2025 <span className="text-gold-400 font-semibold">Dr. A. Yogeshwaran</span> ·
          Department of ECE · Dhanalakshmi Srinivasan Engineering College
        </p>
        <p className="text-zinc-700 text-xs mt-1">Associate Professor · Ph.D (Microwave Engineering) · Anna University</p>
      </footer>
      <FloatingButtons />
    </div>
  );
}


/* ═══════════════════════════ FLOATING CONTACT BUTTONS ═══════════════════════════ */

function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919944877208"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
        }}
      >
        <WhatsAppIcon size={22} />
        {/* Tooltip */}
        <span className="absolute right-14 bg-charcoal-900 text-white text-xs font-medium px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-lg border border-zinc-700">
          WhatsApp
        </span>
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/@YogisLECTURES"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube Channel"
        className="group relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        style={{
          background: 'linear-gradient(135deg, #FF0000, #CC0000)',
          boxShadow: '0 4px 14px rgba(255, 0, 0, 0.4)',
        }}
      >
        <YouTubeIcon size={22} />
        {/* Tooltip */}
        <span className="absolute right-14 bg-charcoal-900 text-white text-xs font-medium px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-lg border border-zinc-700">
          YouTube
        </span>
      </a>
    </div>
  );
}

/* ════════════════════════════════ CONTACT FORM ══════════════════════════════ */

function ContactSection() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');
  const [errMsg, setErrMsg] = useState('');
  const nameRef = useRef<HTMLInputElement>(null);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setErrMsg('Please fill in all fields.'); setStatus('error'); return;
    }
    setStatus('sending'); setErrMsg('');
    const { error } = await supabase.from('contact_messages').insert({
      name:    form.name.trim(),
      email:   form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    });
    if (error) { setErrMsg('Something went wrong. Please try again.'); setStatus('error'); return; }
    setStatus('success');
    setForm({ name:'', email:'', subject:'', message:'' });
  };

  return (
    <section className="contact-wrap py-24" id="contact">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* left — info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-300 text-xs font-bold tracking-widest uppercase mb-6">
              <BookMarked size={14}/> Get In Touch
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Let's <span className="bg-gradient-to-r from-gold-300 to-amber-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-zinc-400 mb-10 max-w-sm leading-relaxed text-sm">
              Open for research collaborations, academic discussions, paper reviews, and professional networking.
              Drop a message — Dr. Yogeshwaran responds personally.
            </p>

            <div className="space-y-4">
              {[
                { icon:Mail,  label:'Email',    val:'dryogeshwaran23@gmail.com',     href:'mailto:dryogeshwaran23@gmail.com' },
                { icon:Mail,  label:'Academic', val:'yogeshwaranaphd@gmail.com', href:'mailto:yogeshwaranaphd@gmail.com' },
                { icon:Phone, label:'Mobile',   val:'+91-99448 77208',            href:'tel:9199448 77208' },
                { icon:MapPin,label:'Address',  val:'DSEC, Perambalur, Tamil Nadu', href:'#' },
              ].map(c => (
                <a key={c.label} href={c.href}
                  className="flex items-center gap-4 group">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                    style={{ background:'rgba(245,158,11,.12)', border:'1px solid rgba(245,158,11,.2)' }}>
                    <c.icon size={15} className="text-gold-400"/>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs">{c.label}</p>
                    <p className="text-zinc-200 text-sm font-medium">{c.val}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* right — form card (login-page style) */}
          <div className="flex justify-center lg:justify-end">
            <div className="contact-card">
              {/* card header */}
              <div className="text-center mb-8">
                <div className="w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-md"
                  style={{ background:'linear-gradient(135deg,#d97706,#f59e0b)' }}>
                  <Send size={22} className="text-white"/>
                </div>
                <h3 className="font-display font-bold text-charcoal-900 text-xl">Send a Message</h3>
                <p className="text-stone-400 text-xs mt-1">to Dr. A. Yogeshwaran</p>
              </div>

              {status === 'success' ? (
                <div className="pop-in text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-300 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-emerald-500"/>
                  </div>
                  <p className="font-bold text-charcoal-800 text-lg mb-1">Message Sent!</p>
                  <p className="text-stone-400 text-sm">Thank you. Dr. Yogeshwaran will get back to you soon.</p>
                  <button onClick={() => setStatus('idle')}
                    className="mt-6 text-gold-600 hover:text-gold-700 text-sm font-semibold underline underline-offset-2 transition-colors">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="cf-label">Full Name</label>
                      <input ref={nameRef} className="cf-input" placeholder="Your name"
                        value={form.name} onChange={set('name')} required/>
                    </div>
                    <div>
                      <label className="cf-label">Email Address</label>
                      <input type="email" className="cf-input" placeholder="you@email.com"
                        value={form.email} onChange={set('email')} required/>
                    </div>
                  </div>
                  <div>
                    <label className="cf-label">Subject</label>
                    <input className="cf-input" placeholder="Collaboration / Research inquiry …"
                      value={form.subject} onChange={set('subject')} required/>
                  </div>
                  <div>
                    <label className="cf-label">Message</label>
                    <textarea className="cf-input" placeholder="Write your message here …"
                      value={form.message} onChange={set('message')} required/>
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-xs font-medium bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                      {errMsg}
                    </p>
                  )}

                  <button type="submit" disabled={status === 'sending'}
                    className="btn-gold w-full py-3 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none">
                    {status === 'sending' ? (
                      <><Loader2 size={16} className="animate-spin"/> Sending…</>
                    ) : (
                      <><Send size={15}/> Send Message</>
                    )}
                  </button>

                  <p className="text-center text-xs text-stone-400 mt-2">
                    Your message is stored securely and only visible to Dr. Yogeshwaran.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════ SECTION HEADER ════════════════════════════ */

function SH({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-200 bg-gold-50 text-gold-700 text-xs font-bold tracking-widest uppercase mb-3">
        {icon} {sub}
      </div>
      <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal-900">{title}</h2>
      <div className="gold-bar"/>
    </div>
  );
}