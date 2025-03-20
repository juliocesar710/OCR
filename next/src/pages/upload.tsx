import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Summary from "@/components/Summary";
import Form from "@/components/Form";
import "../app/layout"

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Envio de Fatura
        </h1>
        <Form />
        <Summary />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
