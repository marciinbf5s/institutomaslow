'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Configura o Intersection Observer para a seção hero
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Atualiza o estado baseado na visibilidade da seção hero
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Dispara quando 10% da seção hero estiver visível
      }
    );

    // Encontra a seção hero e começa a observar
    const heroSection = document.querySelector('.min-h-screen');
    if (heroSection) {
      observer.observe(heroSection);
    }

    // Lógica de mostrar/esconder a navbar ao rolar
    let lastScroll = 0;
    
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll <= 0) {
        setIsVisible(true);
        lastScroll = currentScroll;
        return;
      }
      
      if (currentScroll > lastScroll) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScroll = currentScroll;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  // Estilos da navbar
  const navStyle = {
    position: 'fixed',
    width: '100%',
    left: 0,
    top: 0,
    zIndex: 1000, // Aumentado para garantir que fique acima de outros elementos
    backgroundColor: isHeroVisible ? 'transparent' : '#00385e',
    boxShadow: isHeroVisible ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'all 0.3s ease-in-out',
  };

  // Links da navbar
  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/profissionais", label: "Profissionais" },
    { href: "/contato", label: "Contato" },
    { href: "/sobre", label: "Sobre" }
  ];

  return (
    <nav style={navStyle}>
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="py-2 overflow-visible">
          <Link href="/">
            <img 
              src="/logo1.png" 
              alt="Logo" 
              className="h-14 w-auto transform origin-left md:h-16" 
              style={{ transform: 'scale(1.6) translateY(0.2rem)' }}
            />
          </Link>
        </div>
        
        {/* Botão Menu Mobile */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Menu"
          >
            <div className="w-8 space-y-2">
              <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'translate-y-2.5 rotate-45' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? '-translate-y-2.5 -rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>
        
        {/* Menu Desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center gap-8 lg:gap-12 text-base lg:text-lg xl:text-xl font-semibold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative inline-block text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Botão de Agendamento Desktop */}
        <div className="hidden md:block">
          <a 
            href="#agendamento" 
            className="bg-[#d2ad5f] hover:bg-[#c09a4d] border-2 border-white text-white font-semibold px-6 py-2 lg:px-8 lg:py-3 rounded-lg transition-colors duration-300"
          >
            Agendar Consulta
          </a>
        </div>
        
        {/* Menu Mobile */}
        <div 
          className={`fixed top-16 left-0 w-full shadow-xl md:hidden z-[999] transition-all duration-300 transform ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
          }`}
          style={{
            backgroundColor: '#00385e',
            maxHeight: isMenuOpen ? 'calc(100vh - 4rem)' : '0',
            overflow: 'hidden',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
          }}
        >
            <ul className="flex flex-col items-center py-2">
              {navLinks.map((link, index) => (
                <li key={`mobile-${link.href}`} className="w-full border-b border-opacity-10 border-white">
                  <Link
                    href={link.href}
                    className={`block py-5 px-6 text-white text-lg font-medium hover:bg-[#004974] transition-all duration-300 transform hover:translate-x-1 ${
                      index === 0 ? 'pt-6' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.label}
                    </div>
                  </Link>
                </li>
              ))}
              <li className="w-full px-6 py-4 mt-2">
                <a 
                  href="#agendamento" 
                  className="block w-full bg-gradient-to-r from-[#d2ad5f] to-[#e8c87e] hover:from-[#c09a4d] hover:to-[#d2ad5f] text-white font-semibold text-center py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Agendar Consulta
                </a>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
