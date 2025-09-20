"use client";

import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

// Dados dos profissionais
export const professionals = [
  {
    id: 1,
    name: 'Dra. Nilma Silva',
    role: 'CEO e Psicóloga',
    image: '/profissionais/profissional2.jpeg',
    atendimento: ['Crianças - Depressão, Ansiedade, TDAH, TOD', 'Adolescentes e Adultos - Depressão, Fobias, Traumas, Luto', 'Casais - Comunicação, Resolução de conflitos e fortalecimento da relação']
  },
  {
    id: 2,
    name: 'Fernanda Oliveira',
    role: 'Farmacêutica Esteta',
    image: '/profissionais/profissional1.jpeg',
    atendimento: ['Voltado para clientes que buscam resultados naturais e personalizados.Priorizando qualidade e segurança']
  },
  {
    id: 3,
    name: 'Dani Lopes',
    role: 'Neuropsicopedagoga',
    image: '/profissionais/profissional3.jpeg',
    atendimento: ['Crianças- Dificuldades de aprendizagem, TDAH, dislexia, deficiências intelectuais, estimulação cognitiva e de linguagem', 'Adolescentes- Estratégias para melhorar foco, organização e desempenho escolar', 'Adultos- Aprimoramento de habilidades cognitivas para estudo, trabalho e vida diária', 'Familias e escolas- Orientação e adaptação curricular para inclusão']
  },
  {
    id: 4,
    name: 'Dra. Carolina Costa',
    role: 'Professora de música',
    image: '/profissionais/profissional4.jpeg',
    atendimento: ['Professora de música', 'Especialista em aulas de teclado para todas as idades', 'Metodologia leve e motivadora']
  },
  {
    id: 5,
    name: 'Priciellen Rocha',
    role: 'Nutricionista',
    image: '/profissionais/profissional5.jpeg',
    atendimento: ['Promoção da saúde e prevenção e tratamento de doenças crônicas', 'Emagrecimento saudável e acompanhamento em casos de colesterol,glicose,diabetes e hipertensão']
  },
  {
    id: 6,
    name: 'Vania Keller',
    role: 'Massoterapeuta',
    image: '/profissionais/profissional6.jpeg',
    atendimento: ['Gestantes- Drenagem linfática,massagem relaxante e aplicação de taping', 'Pós-operatório- Drenagem, curativos, orientação da malha cirúrgica e posicionamento corporal', 'Tratamento da dor e relaxamento: Liberação miofascial,Ventosaterapia,tração cíclica, relaxamento com pedras quentes, termoterapia e aromaterapia']
  },
  {
    id: 7,
    name: 'Isabella Vaz',
    role: 'Nutricionista',
    image: '/profissionais/profissional7.jpeg',
    atendimento: ['Tratamento e prevenção de patologias', 'Emagrecimento saudável', 'Hipertrofia muscular']
  }
];

const FlipCard = styled.div`
  .flip-card {
    background-color: transparent;
    width: 100%;
    max-width: 350px;
    height: 400px; /* Reduzido de 500px para 480px */
    perspective: 1000px;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin: 0 auto;
  }
  
  /* Estilo específico para o card da Nilma no mobile */
  @media (max-width: 767px) {
    &.nilma-card {
      grid-column: 1 / -1;
      max-width: 100%;
      width: 100%;
      margin: 0 auto;
      
      .flip-card {
        max-width: 100%;
        width: 100%;
      }
    }
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: left;
    transition: transform 1s ease-in-out;
    transform-style: preserve-3d;
  }

  /* Hover para desktop */
  @media (min-width: 768px) {
    &:hover .flip-card-inner {
      transform: rotateY(180deg);
    }
  }
  
  /* Classe para rotacionar o card no mobile */
  &.mobile-flipped .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background: white;
    box-shadow: 0 4px 20px -5px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .flip-card-front {
    background: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    overflow: hidden;
  }
  
  .flip-card-front img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .flip-card-back {
    background: #00385e;
    color: white;
    transform: rotateY(180deg);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 2px solid #d2ad5f;
    border-radius: 0.5rem;
  }
`;

export default function Professionals() {
  const [flippedCards, setFlippedCards] = useState({});
  
  const toggleCard = (e, id) => {
    // Verifica se é um dispositivo móvel (largura < 768px)
    if (window.innerWidth < 768) {
      e.stopPropagation();
      setFlippedCards(prev => ({
        ...prev,
        [id]: !prev[id]
      }));
    }
  };

  return (
    <div className="pt-16 pb-0" id="profissionais"
    style={{ backgroundColor: '#f4f4f4' }}
    >
      <div className="w-full">
        <div className="text-center py-12 bg-blue-100 w-full">
          <h2 className="text-5xl font-extrabold text-blue-900 mb-4">Nossa Equipe de <span style={{ color: '#003366' }} className="inline-block"></span><span style={{ color: '#d2ad5f' }} className="inline-block">Profissionais</span></h2>
          <div className="w-24 h-1 bg-[#d2ad5f] mx-auto mb-6"></div>
          <p className="text-lg text-gray-800 font-bold max-w-3xl mx-auto">
            Conheça nossa equipe de profissionais altamente qualificados, prontos para te ajudar na sua jornada de bem-estar emocional.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:gap-6 md:gap-8">
          {/* Card da CEO primeiro */}
          {professionals
            .sort((a, b) => a.role === 'CEO' ? -1 : b.role === 'CEO' ? 1 : 0)
            .map((professional) => {
              const isNilma = professional.name === 'Dra. Nilma Silva';
              return (
            <FlipCard 
              key={professional.id}
              className={`${flippedCards[professional.id] ? 'mobile-flipped' : ''} ${isNilma ? 'nilma-card' : ''}`}
              onClick={(e) => toggleCard(e, professional.id)}
            >
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* Front of Card */}
                  <div className="flip-card-front relative">
                    <Image
                      src={professional.image}
                      alt={professional.name}
                      width={400}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    <div className={`md:hidden absolute ${isNilma ? 'bottom-2 right-2' : 'bottom-4 left-0 right-0 flex justify-center'}`}>
                      <div className={`text-white flex items-center justify-center ${isNilma ? 'w-6 h-6 rounded-sm' : 'py-1 px-4 rounded-md text-xs'} shadow-sm`}
                      style={{ backgroundColor: '#d2ad5f' }}>
                        {!isNilma && <span className="font-bold">Toque para ver mais</span>}
                        {isNilma && <span className="text-[10px] font-bold">+</span>}
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="flip-card-back">
                    <div className="w-24 h-24 rounded-full bg-[#d2ad5f] flex items-center justify-center mb-6 mx-auto overflow-hidden">
                      <Image
                        src={professional.image}
                        alt={professional.name}
                        width={96}
                        height={96}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-yellow-600 mb-1">{professional.name}</h3>
                    <p className="text-[#d2ad5f] text-sm font-medium mb-2">{professional.role}</p>
                    <p className="md:hidden text-xs text-gray-300 mb-2">Toque para voltar</p>

                    <h4 className="text-base font-semibold text-yellow-600 mb-1 mt-2">Atendimento</h4>
                    <div className="w-full overflow-y-auto max-h-32 hide-scrollbar">
                      {professional.atendimento && professional.atendimento.map((item, index) => (
                        <div key={index} className="bg-white/10 text-white text-xs sm:text-sm px-2 py-1.5 rounded-lg mb-1 text-center">
                          {item}
                        </div>
                      ))}
                    </div>
                    <style jsx global>{`
                      .hide-scrollbar::-webkit-scrollbar {
                        width: 4px;
                      }
                      .hide-scrollbar::-webkit-scrollbar-track {
                        background: transparent;
                      }
                      .hide-scrollbar::-webkit-scrollbar-thumb {
                        background-color: rgba(255,255,255,0.2);
                        border-radius: 20px;
                      }
                    `}</style>
                  </div>
                </div>
              </div>
            </FlipCard>
          );
        })}
        </div>
      </div>
      {/* Espaçamento extra */}
      <div className="h-16 md:h-24"></div>
    </div>
  );
}