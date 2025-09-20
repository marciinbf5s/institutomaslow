'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PhoneIcon } from '@heroicons/react/24/outline';
import Serviços from '@/components/serviços';

function Hero() {
  const router = useRouter();

  useEffect(() => {
    const scrollToFeature = () => {
      const featureSection = document.getElementById('feature');
      if (featureSection) {
        window.scrollTo({
          top: featureSection.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    };

    // Adiciona o event listener ao botão
    const button = document.getElementById('saiba-mais-button');
    if (button) {
      button.addEventListener('click', scrollToFeature);
      return () => button.removeEventListener('click', scrollToFeature);
    }
  }, []);
  return (
    <div className="relative w-full min-h-screen pt-16 sm:pt-8 text-white">
      {/* Ajustes específicos para mobile */}
      <style jsx global>{`
        @media (max-width: 767px) {
          .relative.w-full.min-h-screen {
            position: relative;
            overflow: hidden;
          }
          .relative.w-full.min-h-screen::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #00385e;
            background-image: url('/fundomible.svg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-blend-mode: overlay;
            z-index: -10;
          }
          .hero-content {
            padding: 0 1.5rem 5rem 1rem !important;
            margin: 0 !important;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            min-height: 100vh;
            padding-top: 50vh !important;
          }
          .hero-title {
            font-size: 1.875rem !important;
            margin-bottom: 1rem !important;
          }
          .hero-subtitle {
            font-size: 0.875rem !important;
            margin-bottom: 1.5rem !important;
          }
          .hero-button {
            width: 100% !important;
            padding: 0.5rem 1rem !important;
            font-size: 0.875rem !important;
          }
          .hero-button-icon {
            width: 1rem !important;
            height: 1rem !important;
          }
          .hero-secondary-button {
            padding: 0.5rem 1rem !important;
            font-size: 1rem !important;
            text-align: center !important;
          }
        }
      `}</style>

      {/* Imagem de fundo da seção Hero */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        {/* Versão Desktop */}
        <div className="hidden sm:block w-full h-full">
          <Image
            src="/fundo.svg"
            alt="Background Desktop"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            quality={100}
            className="w-full h-full"
          />
        </div>
        {/* Versão Mobile */}
        <div className="sm:hidden w-full h-full">
          <Image
            src="/fundomible.svg"
            alt="Background Mobile"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            quality={100}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="hero-content relative z-50 w-full flex flex-col items-start justify-center sm:justify-center pl-10 pr-6 sm:pl-16 md:pl-24 py-20 text-left max-w-4xl ml-8 sm:ml-16 md:ml-24 lg:ml-32 xl:ml-40 2xl:max-w-5xl 2xl:ml-48 2xl:py-32">
        <div>
          {/* Título principal */}
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-extrabold mb-6 2xl:mb-10" style={{ lineHeight: '1.2' }}>
            <span className="block mb-2">Cuidando de</span>
            <span className="block mb-2" style={{ color: '#d2ad5f' }}>pessoas</span>
            <span className="block">inspirando transformação</span>
          </h1>

          {/* Texto descritivo */}
          <div className="mb-2 md:mb-10 xl:mb-16 max-w-2xl xl:max-w-3xl">
            {/* Texto para desktop (visível apenas em telas md e maiores) */}
            <p className="hidden md:block text-lg md:text-xl xl:text-2xl text-gray-400 leading-relaxed">
              O instituto Maslow é uma empresa especializada em desenvolvimento humano, promovendo o equilíbrio emocional e a realização pessoal e profissional, a fim de transformar vidas em diversos contextos.
            </p>

            {/* Texto para mobile (visível apenas em telas menores que md) */}
            <p className="md:hidden text-base sm:text-lg text-gray-400 leading-relaxed">
              Transformação Humana que gera Resultados
            </p>
          </div>

          {/* Botões */}
          <div className="w-full">
            <div className="flex flex-col sm:flex-row gap-4 mb-8 2xl:mb-12 2xl:gap-6">
              <button
                className="hero-button flex items-center justify-center gap-2 text-white border-2 border-white font-semibold px-8 sm:px-12 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-base sm:text-lg"
                style={{ backgroundColor: '#d2ad5f' }}
              >
                Agendar Consulta
                <PhoneIcon className="hero-button-icon h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </button>
              <button
                id="saiba-mais-button"
                className="hero-secondary-button font-medium px-6 py-3 transition-colors duration-300 text-lg text-xl hover:opacity-80"
                style={{ color: '#d2ad5f' }}
              >
                Saiba mais →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé com serviços */}

    </div>
  );
}

export default Hero;

