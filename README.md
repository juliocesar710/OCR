# OCR - Reconhecimento Óptico de Caracteres


## 📌 Sobre o Projeto

Este projeto é uma aplicação de Reconhecimento Óptico de Caracteres (OCR) desenvolvida utilizando **Nest.js** e **Next.js**, com **TypeScript** como linguagem principal. O objetivo é permitir a conversão de imagens contendo texto em dados editáveis e pesquisáveis.

🔗 **Deploy:** [ocr-jade.vercel.app](https://ocr-jade.vercel.app)

## 🚀 Tecnologias Utilizadas

- **TypeScript** - Tipagem estática para melhor manutenção do código.
- **Nest.js** - Framework backend para construção de APIs robustas e escaláveis.
- **Next.js** - Framework frontend para SSR e SSG eficientes.
- **Tesseract.js** - Biblioteca de OCR baseada no Tesseract para extração de texto de imagens.
- **Vercel** - Plataforma de hospedagem utilizada para o deploy.

## 📂 Estrutura do Projeto

```
📦 OCR
 ┣ 📂 nest/       # Backend (Nest.js)
 ┣ 📂 next/       # Frontend (Next.js)
 ┣ 📜 README.md   # Documentação
 ┣ 📜 package.json # Dependências e scripts
```

## 🛠️ Instalação e Execução

### 🔧 Pré-requisitos
- Node.js (versão 16+)
- npm ou yarn

### 📥 Clonando o Repositório
```bash
git clone https://github.com/juliocesar710/OCR.git
cd OCR
```

### 📌 Instalando as Dependências
```bash
npm install
# ou
yarn install
```

### ▶️ Rodando a Aplicação
```bash
# Iniciar o backend (Nest.js)
npm run start:nest

# Iniciar o frontend (Next.js)
npm run dev:next
```

Acesse `http://localhost:3000` para visualizar a aplicação.

## ✨ Funcionalidades
✅ Upload de imagens para extração de texto  
✅ Suporte a múltiplos idiomas no OCR  
✅ Interface amigável para visualização do texto extraído  
✅ API para processar imagens e retornar o texto reconhecido  

## 🤝 Contribuição
Sinta-se à vontade para contribuir! Faça um **fork** do repositório, crie uma **branch**, implemente sua funcionalidade/correção e abra um **pull request**.

```bash
git checkout -b minha-feature
# Desenvolva a funcionalidade

git commit -m "feat: nova funcionalidade"
git push origin minha-feature
```



---

📧 **Contato:** Caso tenha dúvidas ou sugestões, entre em contato!
