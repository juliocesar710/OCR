import { useState, FormEvent } from "react";
import { useRouter } from "next/router";
import { register, login } from "../api/api";
import Cookies from "js-cookie";
import { useAuth } from "../context/AuthContext";

interface AuthFormProps {
  onAuth: (credentials: { email: string; password: string }) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onAuth }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const router = useRouter();
  const { setToken } = useAuth();

  const handleAuth = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      let response;
      if (isRegister) {
        response = await register(name, email, password);
        alert("Usuário registrado com sucesso!");
      } else {
        response = await login(email, password);
        console.log("Response:", response);
        alert("Login bem-sucedido!");

        // Simulate successful authentication
        const userId = response.userId; 

        // Create a token
        const token = crypto.randomUUID(); // Generate a simple token
        Cookies.set("authToken", token, { expires: 1 });
        console.log("Token:", token);

        // Call the onAuth function passed as a prop
        onAuth({ email, password });

        // Redirect to upload page
        router.push("/upload");
      }

      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 3000);
    } catch (error) {
      console.error("Erro:", error);
      alert("Ocorreu um erro, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg mb-6">
      <form onSubmit={handleAuth} className="space-y-4">
        {isRegister && (
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          {loading ? "Carregando..." : isRegister ? "Registrar" : "Entrar"}
        </button>
      </form>

      {loading && (
        <div className="flex justify-center items-center mt-4">
          <div className="animate-spin border-4 border-t-4 border-blue-500 rounded-full w-8 h-8"></div>
          <span className="ml-2 text-gray-500">Processando...</span>
        </div>
      )}

      {showSuccessPopup && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg">
          Operação bem-sucedida!
        </div>
      )}

      <p className="mt-4 text-center text-sm text-gray-500">
        {isRegister ? "Já tem uma conta?" : "Ainda não tem uma conta?"}
        <button
          onClick={() => setIsRegister(!isRegister)}
          className="text-blue-500 hover:underline ml-2"
        >
          {isRegister ? "Faça login" : "Registre-se"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;