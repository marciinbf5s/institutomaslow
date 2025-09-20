"use client";

import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';

export default function LocalizacaoContato() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    dataNascimento: '',
    areaInteresse: '',
    mensagem: ''
  });

  const areasAtendimento = [
    'Psicologia',
    'Nutrição',
    'Farmácia Estética',
    'Neuropsicopedagogia',
    'Música',
    'Nutricionismo',
    'Massoterapia',
    'Outro'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      nome: '',
      telefone: '',
      dataNascimento: '',
      areaInteresse: '',
      mensagem: ''
    });
  };

  return (
    <section className="pt-0 pb-16 bg-blue-100 relative" id="contato">
      {/* Gradiente de transição */}
      <div className="w-full h-32 bg-gradient-to-b from-[#f4f4f4] to-blue-100"></div>
      <div className="container mx-auto px-4 relative -mt-16 md:-mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 inline-block relative pb-2">
            Localização e Contato
            <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Mapa */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-xl text-gray-700 font-semibold">
              <FaMapMarkerAlt className="text-yellow-500" />
              <span>Onde estamos</span>
            </div>
            <div className="h-80 md:h-96 w-full rounded-lg border-2 border-yellow-500 overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.400647867138!2d-43.17768238451795!3d-22.91185364355208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU0JzQyLjciUyA0M8KwMTAnNDkuNyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Localização da Clínica"
              ></iframe>
            </div>
          </div>

          <div>
            {/* Formulário */}
            <div className="bg-white p-4 sm:p-6 border-2 border-blue-500 rounded-lg shadow-md md:h-full">
              <h3 className="text-lg sm:text-xl font-semibold text-[#00385e] mb-3 sm:mb-4">Envie-nos uma mensagem</h3>

              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c92ed] focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="dataNascimento" className="block text-sm font-medium text-gray-700 mb-1">
                      Data de Nascimento *
                    </label>
                    <input
                      type="date"
                      id="dataNascimento"
                      name="dataNascimento"
                      value={formData.dataNascimento}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c92ed] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c92ed] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="areaInteresse" className="block text-sm font-medium text-gray-700 mb-1">
                    Área de Interesse *
                  </label>
                  <select
                    id="areaInteresse"
                    name="areaInteresse"
                    value={formData.areaInteresse}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c92ed] focus:border-transparent"
                  >
                    <option value="">Selecione uma área</option>
                    {areasAtendimento.map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                    Descreva brevemente o motivo do seu agendamento *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows="3"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    placeholder="Descreva o motivo da sua consulta..."
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0c92ed] focus:border-transparent"
                  ></textarea>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  * Campos obrigatórios
                </p>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#00385e] text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:bg-[#002640] hover:scale-105 transform"
                    style={{ backgroundColor: '#00385e' }}
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
