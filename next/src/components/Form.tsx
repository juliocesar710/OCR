import { useState } from 'react';

const Form = () => {
  const [items, setItems] = useState([{ name: '', quantity: 1, price: 0 }]);
  const [discount, setDiscount] = useState(0);

  const handleAddItem = () => {
    setItems([...items, { name: '', quantity: 1, price: 0 }]);
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    const subtotal = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    return subtotal - discount;
  };

  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg mb-6">
      <form>
        <div className="space-y-4">
          <div>
            <label htmlFor="client-name" className="block text-gray-700 dark:text-white font-semibold">Nome do Cliente</label>
            <input id="client-name" type="text" className="w-full p-3 mt-1 border border-gray-300 dark:bg-gray-800 dark:text-white rounded" />
          </div>

          <div>
            <label htmlFor="client-address" className="block text-gray-700 dark:text-white font-semibold">Endereço do Cliente</label>
            <input id="client-address" type="text" className="w-full p-3 mt-1 border border-gray-300 dark:bg-gray-800 dark:text-white rounded" />
          </div>

          <div className="mb-4">
            <label htmlFor="items" className="block text-gray-700 dark:text-white font-semibold">Itens da Fatura</label>
            {items.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 mb-4">
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => {
                    const updatedItems = [...items];
                    updatedItems[index].name = e.target.value;
                    setItems(updatedItems);
                  }}
                  className="w-1/2 p-3 border border-gray-300 dark:bg-gray-800 dark:text-white rounded"
                  placeholder="Nome do item"
                />
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => {
                    const updatedItems = [...items];
                    updatedItems[index].quantity = +e.target.value;
                    setItems(updatedItems);
                  }}
                  className="w-1/4 p-3 border border-gray-300 dark:bg-gray-800 dark:text-white rounded"
                  placeholder="Qtd"
                />
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) => {
                    const updatedItems = [...items];
                    updatedItems[index].price = +e.target.value;
                    setItems(updatedItems);
                  }}
                  className="w-1/4 p-3 border border-gray-300 dark:bg-gray-800 dark:text-white rounded"
                  placeholder="Preço"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveItem(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remover
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddItem}
              className="text-green-500 hover:text-green-700"
            >
              Adicionar Item
            </button>
          </div>

          <div>
            <label htmlFor="discount" className="block text-gray-700 dark:text-white font-semibold">Desconto</label>
            <input
              id="discount"
              type="number"
              value={discount}
              onChange={(e) => setDiscount(+e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 dark:bg-gray-800 dark:text-white rounded"
            />
          </div>

          <div className="mt-4">
            <p className="font-semibold text-gray-700 dark:text-white">Total: R${calculateTotal()}</p>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Enviar Fatura
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
