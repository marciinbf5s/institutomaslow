"use client";

import { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

import {
    AcademicCapIcon,
    HeartIcon,
    BeakerIcon,
    ScaleIcon,
    MusicalNoteIcon,
    SparklesIcon,
} from "@heroicons/react/24/outline";

const services = [
    { title: "Psicologia", icon: HeartIcon },
    { title: "Neuropsicopedagogia", icon: AcademicCapIcon },
    { title: "Farmácia Estética", icon: BeakerIcon },
    { title: "Nutricionismo", icon: ScaleIcon },
    { title: "Massoterapia", icon: SparklesIcon },
    { title: "Música", icon: MusicalNoteIcon },
];

function Serviços() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const sliderRef = useRef(null);
    const isPausedRef = useRef(false);

    // Função para pausar o carrossel
    const pauseSlider = () => {
        if (sliderRef.current && !isPausedRef.current) {
            isPausedRef.current = true;
            sliderRef.current.slickPause();
            // Força a atualização do slide atual
            const currentSlide = sliderRef.current.innerSlider.state.currentSlide;
            sliderRef.current.slickGoTo(currentSlide, false);
        }
    };

    // Função para retomar o carrossel
    const resumeSlider = () => {
        if (sliderRef.current && isPausedRef.current) {
            isPausedRef.current = false;
            sliderRef.current.slickPlay();
        }
    };

    // Inicialização do slider
    useEffect(() => {
        const initSlider = () => {
            if (sliderRef.current) {
                // Inicia pausado
                sliderRef.current.slickPause();
                // Depois de um curto atraso, inicia a animação
                const timer = setTimeout(() => {
                    if (sliderRef.current) {
                        sliderRef.current.slickPlay();
                    }
                }, 500);
                return () => clearTimeout(timer);
            }
        };

        // Aguarda um pouco para garantir que o slider foi montado
        const timer = setTimeout(initSlider, 100);
        return () => clearTimeout(timer);
    }, []);

    // Configurações do carrossel
    const settings = {
        dots: false,
        infinite: true,
        speed: 3500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false, // Desativa o pause automático do slick
        speed: 8000, // Velocidade mais lenta para melhor visualização
        initialSlide: 0, // Começa do primeiro slide
        arrows: false,
        variableWidth: false,
        swipeToSlide: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="w-full bg-gradient-to-t from-slate-900/90 to-transparent pt-8 pb-12 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-white text-lg sm:text-xl font-medium text-center mb-8">Nossos Serviços</h3>

                <div className="relative">
                    <Slider {...settings} ref={sliderRef} className="px-2">
                        {services.map((service, index) => (
                            <div key={index} className="px-2 outline-none">
                                <div
                                    className={`relative rounded-xl transition-all duration-500 border border-white/10 h-32 transform cursor-pointer overflow-hidden
                                        ${hoveredIndex === index
                                            ? 'bg-amber-400/20 backdrop-blur-sm shadow-lg border-amber-400/30 scale-105 -translate-y-1 shadow-amber-400/20'
                                            : 'bg-white/5 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/5'
                                        }`}
                                    onMouseEnter={() => {
                                        setHoveredIndex(index);
                                        pauseSlider();
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredIndex(null);
                                        resumeSlider();
                                    }}
                                    style={{
                                        transform: hoveredIndex === index
                                            ? 'perspective(1000px) rotateX(5deg) rotateY(0deg) scale3d(1.05, 1.05, 1.05)'
                                            : 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
                                        transformStyle: 'preserve-3d',
                                        willChange: 'transform',
                                        transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                    }}
                                >
                                    {/* Imagem de fundo */}
                                    <div className="absolute inset-0 z-0 opacity-10">
                                        <Image
                                            src={`/${(index % 4) + 1}.svg`}
                                            alt=""
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="relative z-10 flex items-center gap-4 p-6 w-full h-full">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                            hoveredIndex === index
                                                ? 'bg-amber-400 text-white scale-110'
                                                : 'bg-white/10 text-amber-400'
                                            } transition-all duration-300`}>
                                            <service.icon className="h-6 w-6" />
                                        </div>
                                        <span className="text-white text-lg sm:text-xl font-bold">
                                            {service.title}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    {/* Controles de navegação personalizados */}
                    <button
                        onClick={() => sliderRef.current?.slickPrev()}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 sm:-ml-6 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-amber-400/50 transition-all z-10"
                        aria-label="Anterior"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => sliderRef.current?.slickNext()}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 sm:-mr-6 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-amber-400/50 transition-all z-10"
                        aria-label="Próximo"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Estilos personalizados para os dots */}
                <style jsx global>{`
                    .slick-dots {
                        bottom: -40px !important;
                    }
                    .slick-dots li {
                        margin: 0 4px;
                    }
                    .slick-dots li button:before {
                        color: rgba(255, 255, 255, 0.3) !important;
                        font-size: 10px !important;
                        opacity: 1 !important;
                    }
                    .slick-dots li.slick-active button:before {
                        color: #f59e0b !important;
                        opacity: 1 !important;
                    }
                `}</style>
            </div>
        </div>
    );
}

export default Serviços;
