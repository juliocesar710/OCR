const Summary = () => {
    return (
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Resumo da Fatura</h2>
        <div className="space-y-4">
          <p><strong>Nome do Cliente:</strong> João Silva</p>
          <p><strong>Fatura Nº:</strong> 123456</p>
          <p><strong>Total:</strong> R$150,00</p>
          <button className="text-green-500 hover:text-green-700">Baixar PDF</button>
        </div>
      </div>
    );
  };
  
  export default Summary;
  