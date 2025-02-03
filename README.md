# PDF to JPG Converter

Este script converte arquivos **PDF** para **JPG**, salvando cada página separadamente em uma pasta específica.

## 🚀 Como Funciona

1. O script busca arquivos **PDF** na pasta `pdf/`.
2. Converte cada página do PDF em um arquivo **JPG**.
3. As imagens são salvas na pasta `jpg/`, dentro de uma subpasta com o nome do PDF.
4. Os arquivos gerados seguem a numeração da página, ex: `1.jpg`, `2.jpg`, etc.

## 📌 Pré-requisitos

Antes de rodar o script, certifique-se de ter:

- **Node.js** instalado
- Dependências do projeto instaladas

### 📦 Instalação das Dependências

```sh
npm install
```

## ▶️ Como Executar

1. **Crie as pastas** `pdf/` e `jpg/` no mesmo diretório do script.
2. **Adicione arquivos PDF** na pasta `pdf/`.
3. **Execute o script:**

```sh
npm run start
```

## 🔧 Configuração

Se desejar ajustar a **qualidade das imagens**, altere o valor da variável `scale` no código:

```js
scale: 2000; // Quanto maior, melhor a qualidade
```

## 📂 Estrutura de Saída

Se o `pdf/` contiver um arquivo chamado `documento.pdf`, a saída será:

```
📂 jpg/
 ├── 📂 documento/
 │   ├── 1.jpg
 │   ├── 2.jpg
 │   ├── 3.jpg
```

## 🛠️ Problemas e Soluções

- **Nenhum PDF encontrado?** Certifique-se de que há arquivos na pasta `pdf/`.
- **Conversão falhou?** Verifique se `pdf-poppler` está corretamente instalado.

---

Feito com 💻 para automatizar a conversão de PDFs! 🚀
