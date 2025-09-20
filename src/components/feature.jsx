function Destaque() {
  return (
    <section id="feature" className="py-24 sm:py-32 scroll-mt-24"
      style={{ backgroundColor: '#f4f4f4' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
          {/* Imagem/Ilustração à esquerda */}
          <div className="relative order-first lg:order-first overflow-hidden rounded-2xl shadow-2xl w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0c92ed]/20 to-[#d2ad5f]/20 rounded-2xl z-10"></div>
            <div className="w-full h-full max-h-[600px] bg-gradient-to-br from-[#0c92ed] to-[#d2ad5f] rounded-2xl overflow-hidden">
              <img
                src="/equipe.jpg"
                alt="Equipe do Instituto Maslow"
                className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Conteúdo à direita */}
          <div className="mt-12 lg:mt-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-600 mb-6" style={{ lineHeight: '1.4' }}>
              Transformação Humana
              que gera <span style={{ color: '#eed787' }}>Resultados</span>
            </h2>

            <p className="text-lg font-semibold text-gray-800 mb-8 leading-relaxed">
              O instituto Maslow é uma empresa especializada em desenvolvimento humano, promovendo o equilíbrio emocional e a realização pessoal e profissional, a fim de transformar vidas em diversos contextos.
            </p>

            <div className="space-y-2 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Nossos Serviços Especializados:</h3>
              {[
                "Acompanhamento Psicológico Individual e em Grupo",
                "Avaliação e Intervenção Neuropsicopedagógica",
                "Tratamentos em Farmácia Estética",
                "Orientação Nutricional Personalizada",
                "Terapias Integrativas e Massoterapia",
                "Musicalização e Musicoterapia"
              ].map((item, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-[#0c92ed]/10">
                      <svg className="h-3 w-3 text-[#0c92ed]" fill="currentColor" viewBox="0 0 12 12">
                        <path d="M10.28 2.28L3.99 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                    {item}
                  </p>
                </div>
              ))}

              <p className="mt-6 text-gray-700 leading-relaxed">
                Na Clínica Maslow, acreditamos que o equilíbrio entre corpo e mente é essencial para uma vida plena.
                Nossa equipe multidisciplinar está comprometida em oferecer um atendimento humanizado e personalizado,
                utilizando técnicas baseadas em evidências científicas.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-amber-50 p-6 rounded-xl border border-gray-100 mb-8">
              <div className="flex bg-blue-100 rounded-xl">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-[#d2ad5f]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm9-4H4v16h16V3zm-2 14H6V5h12v12z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-900 italic font-medium">
                    "Para alcançar a autorrealização, é preciso primeiro satisfazer as necessidades básicas da vida"
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    - Abraham Maslow
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-4 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center hover:opacity-90"
                style={{
                  backgroundColor: '#00385e'
                }}
              >
                <span>Conheça nossos serviços</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Destaque;
