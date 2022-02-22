import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoaprops'
import List from './components/List'
import Evento from './components/Evento'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Evento />
      <Form />
      <SayMyName nome="Matheus" />
      <SayMyName nome="João" />
      <SayMyName nome="Francisco" />
      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  )
}

export default App