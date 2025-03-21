import { useState, FormEvent } from 'react';
import { getRequest, uploadFile } from '../api/api';

const Form = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Estado para controlar o loading
  const [uploadResponse, setUploadResponse] = useState<any>(null); // Estado para armazenar a resposta do upload

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleTestConnection = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await getRequest('/');
      console.log(response);
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 3000);
    } catch (error) {
      console.error('Erro ao conectar ao back-end:', error);
    }
  };

  const handleUploadFile = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      console.error('Nenhum arquivo selecionado');
      return;
    }

    setLoading(true); // Começa o loading
    try {
      const response = await uploadFile(file);
      console.log('Arquivo enviado com sucesso:', response);
      setUploadResponse(response); // Armazena a resposta do servidor
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 3000);
    } catch (error) {
      console.error('Erro ao enviar arquivo:', error);
    } finally {
      setLoading(false); // Finaliza o loading
    }
  };

  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg mb-6">
      {/* Testar Conexão Button */}
      <form onSubmit={handleTestConnection} className="mb-4">
        <button
          type="submit"
          className="w-full py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none"
        >
          Testar Conexão
        </button>
      </form>

      {/* File Upload Form */}
      <form onSubmit={handleUploadFile}>
        <div className="space-y-4">
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            Enviar Arquivo
          </button>
        </div>
      </form>

      {/* Loading Indicator */}
      {loading && (
        <div className="flex justify-center items-center mt-4">
          <div className="animate-spin border-4 border-t-4 border-blue-500 rounded-full w-8 h-8"></div>
          <span className="ml-2 text-gray-500">Processando...</span>
        </div>
      )}

      {/* Displaying Upload Response */}
      {uploadResponse && !loading && (
        <div className="mt-6 p-4 bg-gray-100 rounded shadow-md">
          <h3 className="text-xl font-semibold">Resultado do Upload</h3>
          <div className="mt-2">
            <p className="text-sm text-gray-700">{uploadResponse.message}</p>
            <h4 className="mt-2 font-semibold">Texto Extraído:</h4>
            <p className="text-sm text-gray-700">{uploadResponse.extractedText}</p>
            <h4 className="mt-2 font-semibold">Explicação:</h4>
            <p className="text-sm text-gray-700">{uploadResponse.explanation}</p>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg">
          Operação bem-sucedida!
        </div>
      )}
    </div>
  );
};

export default Form;
