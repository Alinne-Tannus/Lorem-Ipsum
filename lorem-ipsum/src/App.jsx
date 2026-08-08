import { useState } from 'react'
import './index.css'
import axios from 'axios'
import logo from './assets/icon-Tannus.png'


function App() {
  const [texto, setTexto] = useState("")
  const [qtdeParagrafos, setQtdeParagrafos] = useState(3)
  const [geradorSelecionado, setGeradorSelecionado] = useState("Hipster")
  const [copiado, setCopiado] = useState(false)


  async function gerarHipster(){
    const resposta = await axios.get(
    `https://hipsum.co/api/?type=hipster-centric&paras=${qtdeParagrafos}`
    );

    setTexto(resposta.data.join("\n\n "));
  }

  async function gerarBacon(){
    const resposta = await axios.get(
    `https://baconipsum.com/api/?type=all-meat&paras=${qtdeParagrafos}`
    );

    setTexto(resposta.data.join("\n\n "));
  }
async function gerarDummy() {
  const resposta = await axios.get(
    `https://dummyjson.com/quotes?limit=${qtdeParagrafos}`
  );

  const frases = resposta.data.quotes.map((item) => item.quote);

  setTexto(frases.join("\n\n"));
}
async function selecionarGerador() {
  switch (geradorSelecionado) {
    case "Hipster":
      gerarHipster();
      break;
    case "Bacon":
      gerarBacon();
      break;
    case "Dummy":
      gerarDummy();
      break;
    default:
      setTexto("");
  }
}
  return (
    <>
    <head>
      <link rel="icon" type="image/png" href={logo} />
    </head>
      <h1>Gerador de Texto</h1>
      <div className='linha'></div>
      <div className="area-input">
        <h2 className='escolha-gerador'>Tipo do gerador:</h2>
        <select value={geradorSelecionado} onChange={(event) => setGeradorSelecionado(event.target.value)}>
          <option value="Hipster">Hipster Ipsum</option>
          <option value="Bacon">Bacon Ipsum</option>
          <option value="Dummy">Dummy</option>
        </select>
        <input value={qtdeParagrafos} onChange={(event) => setQtdeParagrafos(event.target.value)} placeholder="Quantidade de parágrafos" />
        <button className="botao-gerar" onClick={selecionarGerador}>Gerar Texto</button>
      </div>
      <div className='linha'></div>
       <div className="area-copiar-container">
            {copiado && <span className="copiado">Copiado com sucesso!</span>}
           <button className="botao-copiar" onClick={async () => {await navigator.clipboard.writeText(texto)
      setCopiado(true)
      setTimeout(() => {
        setCopiado(false)
      }, 2000)
    }}
  >
    Copiar
  </button>
        </div>
      <div className="area-texto">
        <p style={{ whiteSpace: "pre-line" }}>{texto}</p>
      </div>
      <footer>
        <p>&copy; 2026 Gerador de Texto. Todos os direitos reservados.</p>
        <p>Desenvolvido por <span className="footer-nome">Alinne Tannus</span></p>
      </footer>
    </>
  )
}
export default App
