import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import "../app/layout";

const LandingPage = () => {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen overflow-y-auto">
      <Header />
      <main className="max-w-4xl mx-auto p-6 mb-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Bem-vindo ao OCR API
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Uma solução eficiente para reconhecimento de texto e explicação de
            conteúdo.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Funcionalidades Principais
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Upload de arquivos</li>
            <li>Reconhecimento de texto (OCR)</li>
            <li>Explicação de texto usando LLM</li>
            <li>Gerenciamento de usuários</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Como Funciona
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Faça o upload de um arquivo, nosso sistema reconhecerá o texto e
            fornecerá uma explicação detalhada.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Tecnologias Utilizadas
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>NestJS</li>
            <li>Next.js</li>
            <li>Prisma</li>
            <li>Tesseract.js</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Equipe
          </h2>
          <div className="flex items-center">
            <p className="text-gray-700 dark:text-gray-300">
              Conheça a equipe por trás do projeto. <br />
              <strong>Júlio César</strong>
            </p>
          </div>
        </section>

        <section className="text-center">
          <a
            href="/auth"
            className="inline-block py-3 px-6 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Experimente Agora
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
