import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthForm from "@/components/AuthForm";
import "../app/layout";

const Auth = () => {
  const handleAuth = (credentials: { email: string; password: string }) => {
    // Lógica para lidar com as credenciais de autenticação
    console.log("Credenciais de autenticação recebidas:", credentials);
  };

  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Autenticação
        </h1>
        <AuthForm onAuth={handleAuth} />
      </div>
      <Footer />
    </div>
  );
};

export default Auth;