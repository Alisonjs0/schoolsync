const InfoAluno = ({ voltar, infoAluno, setInfoAluno }) => {
    const retornar = () => {
        voltar("DetalhesTurma");
        setInfoAluno("");
    }
  return (
    <>
      <div className="perfilAluno">
        <div className="imagem">Imagem</div>
        <div className="infoAluno">
          <p>Nome: {infoAluno.nome}</p>
          <p>Matricula: {infoAluno.matricula}</p>
          <p>Telefone: {infoAluno.telefone}</p>
          <p>Data de Nascimento: {infoAluno.dataNascimento}</p>
        </div>
        <div>
          <button>Editar</button>
        </div>
      </div>
      <div>
        <h3>Notas</h3>
        <table>
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            {infoAluno.notas.map((nota) => (
              <tr key={nota.disciplina}>
                <td>{nota.disciplina}</td>
                <td>{nota.nota}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={retornar}>Voltar</button>
    </>
  );
};

export default InfoAluno;
