import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthForm from "@/components/AuthForm";
import "../app/layout";

const Auth = () => {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Autenticação
        </h1>
        <AuthForm />
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
