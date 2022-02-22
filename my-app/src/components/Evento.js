//function Evento({numero})
function Evento() {
  function meuEvento() {
    console.log('Opa, fui ativado!') //(`Opa, fui ativado! ${numero}`)
  }

  return (
    <div>
      <p>Clique para disparar o evento:</p>
      <button onClick={meuEvento}>Ativar!</button>
    </div>
  )
}

export default Evento