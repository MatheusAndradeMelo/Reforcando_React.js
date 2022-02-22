function Form() {
    function cadastrarUsuario(e) {
      e.preventDefault() // Para a execução do formulário e imprime o console.log/ caso queira dar reload executando o cadastro só remover
      console.log('Usuário cadastrado!')
    }
  
    return (
      <div>
        <h1>Meu cadastro:</h1>
        <form onSubmit={cadastrarUsuario}>
          <div>
            <input type="text" placeholder="Digite seu nome" />
          </div>
          <div>
            <input type="submit" value="Cadastrar" />
          </div>
        </form>
      </div>
    )
  }
  
  export default Form