import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Form from "@/components/Form";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("authToken");
    console.log("Token recuperado:", token); // Adicione este log
    if (!token) {
      router.push("/auth");
      console.log("Token não encontrado, redirecionando para /auth");
    }
  }, [router]);

  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Envio de Fatura
        </h1>
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default Home;