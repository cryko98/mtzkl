/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  CheckCircle2, 
  Menu, 
  X, 
  Snowflake, 
  Settings, 
  Navigation, 
  Wrench, 
  Facebook, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Cpu,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Kezdőlap', href: '#' },
    { name: 'Bemutatkozás', href: '#bemutatkozas' },
    { name: 'Szolgáltatások', href: '#szolgaltatasok' },
    { name: 'Robotkormány', href: '#robotkormany' },
    { name: 'Referenciák', href: '#referenciak' },
    { name: 'Kapcsolat', href: '#kapcsolat' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-black/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-2xl font-serif tracking-tight transition-colors duration-500 ${scrolled ? 'text-ink' : 'text-white'}`}>
              MTZ <span className="italic font-light opacity-80">Klíma</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-xs uppercase tracking-widest font-semibold transition-all duration-500 hover:opacity-100 ${scrolled ? 'text-ink opacity-60' : 'text-white opacity-80'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+36309780784" 
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 border ${scrolled ? 'bg-ink text-paper border-ink hover:bg-transparent hover:text-ink' : 'bg-white text-ink border-white hover:bg-transparent hover:text-white'}`}
            >
              Kapcsolat
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`transition-colors duration-500 ${scrolled ? 'text-ink' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-paper border-t border-black/5 overflow-hidden"
          >
            <div className="px-6 pt-4 pb-12 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block text-2xl font-serif italic text-ink/80 hover:text-ink transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8">
                <a 
                  href="tel:+36309780784" 
                  className="w-full bg-ink text-paper px-6 py-4 rounded-xl text-center font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2"
                >
                  <Phone size={14} /> +36 30 978 0784
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ink">
      {/* Background Image with Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/agriculture/1920/1080?grayscale" 
          alt="Agriculture Background" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-white/50 text-xs font-bold tracking-[0.3em] uppercase mb-8">
              Debrecen — Belföldön és Külföldön
            </span>
            <h1 className="text-6xl md:text-9xl font-serif text-white leading-[0.9] mb-12">
              Hűvös fülke, <br />
              <span className="italic font-light text-white/70">precíz munka.</span>
            </h1>
            
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <p className="text-xl text-white/60 leading-relaxed max-w-md font-light">
                MTZ és Belarus traktorok professzionális klímaszerelése és Hi-Target robotkormány rendszerek telepítése RTK pontossággal.
              </p>
              <div className="flex flex-col gap-4">
                <a 
                  href="#kapcsolat" 
                  className="group flex items-center gap-4 text-white text-xs font-bold uppercase tracking-widest"
                >
                  <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-ink transition-all duration-500">
                    <ArrowRight size={16} />
                  </span>
                  Ajánlatkérés
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vertical Rail Text */}
      <div className="absolute right-12 bottom-12 hidden lg:block">
        <p className="writing-mode-vertical text-white/20 text-[10px] uppercase tracking-[0.5em] font-bold rotate-180">
          MTZ KLÍMA — SZAKÉRTELEM ÉS MEGBÍZHATÓSÁG
        </p>
      </div>
    </section>
  );
};

const AboutMe = () => {
  return (
    <section id="bemutatkozas" className="py-32 bg-paper relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
              <img 
                src="https://picsum.photos/seed/expert/800/1000" 
                alt="Szakértőnk munka közben" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-ink p-12 rounded-2xl hidden lg:block">
              <p className="text-paper text-4xl font-serif italic mb-4">"Ki vagyok én?"</p>
              <p className="text-paper/60 text-sm font-light leading-relaxed">
                Szakértőnk több évtizedes tapasztalattal rendelkezik a mezőgazdasági gépek klímatechnikájában.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-ink/40 mb-8">Bemutatkozás</h2>
            <h3 className="text-5xl md:text-7xl font-serif leading-tight mb-12">
              Klímát teszünk <br />
              <span className="italic font-light">traktorába.</span>
            </h3>
            <div className="space-y-8 text-lg text-ink/70 font-light leading-relaxed">
              <p>
                Belföldön és külföldön is egyaránt jelen vagyunk, segítve a gazdákat a kényelmesebb és hatékonyabb munkavégzésben. Szolgáltatásaink a legmagasabb minőségi elvárásoknak is megfelelnek.
              </p>
              <p>
                Nem csupán klímát szerelünk, hanem komplett technológiai megoldásokat kínálunk, legyen szó utólagos beépítésről, javításról vagy a legmodernebb robotkormány rendszerekről.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-12">
              <div>
                <p className="text-4xl font-serif mb-2">15+</p>
                <p className="text-xs uppercase tracking-widest font-bold text-ink/40">Év Tapasztalat</p>
              </div>
              <div>
                <p className="text-4xl font-serif mb-2">500+</p>
                <p className="text-xs uppercase tracking-widest font-bold text-ink/40">Elégedett Ügyfél</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Klíma Beépítés',
      desc: 'MTZ és Belarus traktorokba utólagos klímarendszerek szakszerű beszerelése.',
      icon: Snowflake,
    },
    {
      title: 'Javítás & Szerviz',
      desc: 'Diagnosztika, töltés, alkatrész cseréje és általános javítás.',
      icon: Wrench,
    },
    {
      title: 'Karbantartás',
      desc: 'Szezon előtti átvizsgálás, tisztítás és fertőtlenítés.',
      icon: Settings,
    },
    {
      title: 'Állófűtések',
      desc: 'Korszerű állófűtés rendszerek beépítése a téli kényelemért.',
      icon: ShieldCheck,
    }
  ];

  return (
    <section id="szolgaltatasok" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-ink/40 mb-8">Mivel foglalkozunk?</h2>
            <h3 className="text-5xl md:text-7xl font-serif leading-tight">Szolgáltatásaink</h3>
          </div>
          <p className="text-lg text-ink/50 font-light max-w-xs italic">
            "A minőség nem opció, hanem alapkövetelmény minden munkánk során."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="p-12 bg-white hover:bg-paper transition-colors duration-500 group"
            >
              <div className="w-12 h-12 text-ink/30 group-hover:text-ink transition-colors duration-500 mb-12">
                <service.icon size={48} strokeWidth={1} />
              </div>
              <h4 className="text-2xl font-serif mb-6">{service.title}</h4>
              <p className="text-ink/60 font-light leading-relaxed mb-8">
                {service.desc}
              </p>
              <a href="#kapcsolat" className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Részletek <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RobotSteering = () => {
  return (
    <section id="robotkormany" className="py-32 bg-ink text-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:flex items-center gap-32">
          <div className="lg:w-1/2 mb-20 lg:mb-0">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-paper/40 text-xs font-bold uppercase tracking-[0.3em] mb-12">Hi-Target Technológia</h2>
              <h3 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-12">
                Robotkormány <br />
                <span className="italic font-light text-paper/60">Rendszerek.</span>
              </h3>
              <p className="text-xl text-paper/70 font-light leading-relaxed mb-12 max-w-lg">
                RTK korrekcióval 2–2,5 cm pontosságot biztosítunk, így jelentősen csökkentve az átfedéseket és az inputanyag-felhasználást.
              </p>
              
              <ul className="space-y-6 mb-16">
                {[
                  '10–15% üzemanyag-megtakarítás',
                  'Pontosabb munkavégzés, kevesebb átfedés',
                  'Kisebb gépkezelői fáradtság',
                  'Hatékonyabb precíziós gazdálkodás'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-paper/80 font-light italic">
                    <span className="w-1.5 h-1.5 rounded-full bg-paper/40"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="inline-flex items-center gap-8 p-8 border border-paper/10 rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-paper/5 flex items-center justify-center text-paper">
                  <Zap size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-paper/40 mb-1">Ajánlatunk</p>
                  <p className="text-xl font-serif italic">1 év RTK előfizetés ajándékba</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="relative z-10"
            >
              <div className="aspect-square rounded-full overflow-hidden border border-paper/10 p-4">
                <div className="w-full h-full rounded-full overflow-hidden grayscale">
                  <img 
                    src="https://picsum.photos/seed/precision/1000/1000" 
                    alt="Precision Farming" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-paper/5 rounded-full pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-paper/5 rounded-full pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="kapcsolat" className="py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-ink/40 mb-12">Kapcsolat</h2>
            <h3 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-16">
              Kérjen <br />
              <span className="italic font-light">ajánlatot.</span>
            </h3>
            
            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="text-ink/30"><Phone size={32} strokeWidth={1} /></div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-ink/40 mb-2">Telefon</p>
                  <a href="tel:+36309780784" className="text-3xl font-serif hover:italic transition-all">+36 30 978 0784</a>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="text-ink/30"><Mail size={32} strokeWidth={1} /></div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-ink/40 mb-2">E-mail</p>
                  <a href="mailto:info@mtzklima.hu" className="text-3xl font-serif hover:italic transition-all">info@mtzklima.hu</a>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="text-ink/30"><MapPin size={32} strokeWidth={1} /></div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-ink/40 mb-2">Cím</p>
                  <p className="text-3xl font-serif">4002 Debrecen, Jégvirág utca 21</p>
                </div>
              </div>
            </div>

            <div className="mt-24 p-12 bg-white border border-ink/5 rounded-2xl">
              <h4 className="text-xs uppercase tracking-widest font-bold text-ink/40 mb-8 flex items-center gap-2">
                <Clock size={14} /> Nyitvatartás
              </h4>
              <div className="space-y-4 text-lg font-light">
                <div className="flex justify-between border-b border-ink/5 pb-4">
                  <span>Hétfő - Péntek</span>
                  <span className="font-bold">8:00 - 17:00</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="opacity-40">Szombat - Vasárnap</span>
                  <span className="font-bold opacity-40">Zárva</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-ink p-12 md:p-20 rounded-[3rem] text-paper">
            <form className="space-y-10">
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest font-bold text-paper/40">Teljes Név</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-paper/20 py-4 text-xl font-serif focus:outline-none focus:border-paper transition-colors"
                  placeholder="Az Ön neve"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest font-bold text-paper/40">E-mail Cím</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-paper/20 py-4 text-xl font-serif focus:outline-none focus:border-paper transition-colors"
                  placeholder="pelda@email.hu"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest font-bold text-paper/40">Üzenet</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-paper/20 py-4 text-xl font-serif focus:outline-none focus:border-paper transition-colors resize-none"
                  placeholder="Miben segíthetünk?"
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full bg-paper text-ink py-6 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-transparent hover:text-paper border border-paper transition-all duration-500"
              >
                Üzenet Küldése
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-ink text-paper py-20 border-t border-paper/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div>
            <span className="text-3xl font-serif tracking-tight block mb-4">
              MTZ <span className="italic font-light opacity-60">Klíma</span>
            </span>
            <p className="text-paper/40 text-xs uppercase tracking-widest font-bold">
              Debrecen — Mezőgazdasági Technológia
            </p>
          </div>

          <div className="flex gap-12 text-xs uppercase tracking-widest font-bold text-paper/60">
            <a href="#" className="hover:text-paper transition-colors">Sütik</a>
            <a href="#" className="hover:text-paper transition-colors">Adatvédelem</a>
            <a href="https://facebook.com" className="hover:text-paper transition-colors">Facebook</a>
          </div>

          <p className="text-paper/30 text-[10px] uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} MTZKlima.hu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-ink selection:text-paper">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        
        {/* Subtle Divider */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-px bg-ink/5"></div>
        </div>

        <Services />
        <RobotSteering />
        
        {/* Testimonial / Quote Section */}
        <section className="py-32 bg-paper text-center">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex justify-center mb-12 text-ink/20">
              <Star size={48} strokeWidth={1} fill="currentColor" />
            </div>
            <p className="text-4xl md:text-6xl font-serif italic leading-tight mb-12">
              "A gazdák kényelme és a munka pontossága a mi küldetésünk."
            </p>
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-ink/40">
              MTZ Klíma Csapata
            </p>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
