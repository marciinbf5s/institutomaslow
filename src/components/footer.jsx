"use client";

import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const social = [
    {
      name: 'Facebook',
      href: '#',
      icon: FaFacebook,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: FaInstagram,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: FaLinkedin,
    },
  ];

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      text: 'R. Coluna, 986 - São Geraldo, Itamarandiba - MG, 39670-000',
    },
    {
      icon: FaPhoneAlt,
      text: '(38) 99750-3511',
    },
    {
      icon: FaEnvelope,
      text: 'contato@institutomaslow.com.br',
    },
    {
      icon: FaClock,
      text: 'Segunda a Sexta: 8h às 18h',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-shrink-0">
                <Image
                  className="h-auto w-48"
                  src="/logo1.png"
                  alt="Instituto Maslow"
                  width={200}
                  height={80}
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-300 text-base">
                  Promovendo o equilíbrio emocional e a realização pessoal e profissional através de atendimento psicológico especializado.
                </p>
                <div className="flex space-x-6 mt-4">
                  {social.map((item) => (
                    <a 
                      key={item.name} 
                      href={item.href} 
                      className="text-gray-400 hover:text-[#d2ad5f] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:pl-8 md:border-l md:border-gray-800">
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Contato</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <item.icon className="flex-shrink-0 h-5 w-5 text-[#d2ad5f] mt-1" aria-hidden="true" />
                  <span className="ml-3 text-sm text-gray-400">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Instituto Maslow. Todos os direitos reservados.
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">
            Desenvolvido por{' '}
            <a 
              href="https://olympodigital.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: '#d2ad5f' }}
            >
              Olympo Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}