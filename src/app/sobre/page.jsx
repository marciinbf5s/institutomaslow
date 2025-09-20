import Image from 'next/image';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nós</h1>
          <p className="text-xl max-w-3xl mx-auto">Conheça a Clínica Maslow e nossa missão de promover saúde integral</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Nossa História */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa História</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fundada com o propósito de transformar vidas, a Clínica Maslow nasceu da união de profissionais apaixonados por saúde e bem-estar. Nosso nome é uma homenagem a Abraham Maslow, psicólogo humanista que acreditava no potencial máximo de cada indivíduo.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ao longo dos anos, construímos uma trajetória de excelência no atendimento, sempre priorizando o acolhimento e os resultados efetivos para nossos pacientes.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/clinica-externa.jpg"
                alt="Clínica Maslow"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* Nossa Missão */}
        <section className="mb-20 bg-gradient-to-r from-blue-50 to-amber-50 p-8 rounded-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa Missão</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Na Clínica Maslow, acreditamos que o equilíbrio entre corpo e mente é essencial para uma vida plena. Nossa equipe multidisciplinar está comprometida em oferecer um atendimento humanizado e personalizado, utilizando técnicas baseadas em evidências científicas.
            </p>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excelência",
                description: "Buscamos a excelência em todos os nossos serviços, mantendo-nos atualizados com as melhores práticas e inovações em saúde.",
                icon: "🎯"
              },
              {
                title: "Humanização",
                description: "Valorizamos o atendimento humanizado, acolhendo cada pessoa em sua singularidade e necessidades específicas.",
                icon: "🤝"
              },
              {
                title: "Ética",
                description: "Agimos com transparência, respeito e compromisso com os princípios éticos que regem nossa profissão.",
                icon: "⚖️"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Equipe */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Conheça Nossa Equipe</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Nossa equipe é formada por profissionais altamente qualificados e comprometidos com o seu bem-estar. Cada membro traz consigo experiência e dedicação para oferecer o melhor atendimento.
          </p>
          <div className="text-center">
            <a 
              href="/profissionais" 
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Ver Equipe Completa
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
