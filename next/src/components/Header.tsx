const Header = () => {
    return (
      <header className="bg-gray-900 text-white py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="text-lg font-semibold">Sua Empresa</div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-green-400">Home</a></li>
              <li><a href="#" className="hover:text-green-400">Faturas</a></li>
              <li><a href="#" className="hover:text-green-400">Relatórios</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  