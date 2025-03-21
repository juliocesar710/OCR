import { useState, FormEvent } from "react";
import { getRequest, uploadFile } from "../api/api";

const Form = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [uploadResponse, setUploadResponse] = useState<any>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleTestConnection = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await getRequest("/");
      console.log(response);
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 3000);
    } catch (error) {
      console.error("Erro ao conectar ao back-end:", error);
    }
  };

  const handleUploadFile = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      console.error("Nenhum arquivo selecionado");
      return;
    }

    setLoading(true);
    try {
      const response = await uploadFile(file);
      console.log("Arquivo enviado com sucesso:", response);
      setUploadResponse(response);
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 3000);
    } catch (error) {
      console.error("Erro ao enviar arquivo:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg mb-6">
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

      {loading && (
        <div className="flex justify-center items-center mt-4">
          <div className="animate-spin border-4 border-t-4 border-blue-500 rounded-full w-8 h-8"></div>
          <span className="ml-2 text-gray-500">Processando...</span>
        </div>
      )}

      {uploadResponse && !loading && (
        <div className="mt-6 p-4 bg-gray-100 rounded shadow-md">
          <h3 className="text-xl font-semibold text-black-400">Resultado do Upload</h3>
          <div className="mt-2">
            <p className="text-sm text-gray-700 ">{uploadResponse.message}</p>
            <h4 className="mt-2 font-semibold text-black-400">Texto Extraído:</h4>
            <p className="text-sm text-gray-700">
              {uploadResponse.extractedText}
            </p>
            <h4 className="mt-2 font-semibold text-black-400">Explicação:</h4>
            <p className="text-sm text-gray-700">
              {uploadResponse.explanation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
