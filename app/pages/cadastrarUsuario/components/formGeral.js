const formGeral = ({
  nome,
  cpf,
  data,
  sexo,
  email,
  tel,
  senha,
  confirmSenha,
  setNome,
  setCpf,
  setData,
  setSexo,
  setEmail,
  setTel,
  setSenha,
  setConfirmSenha,
  setCargo,
  nextPage,
  handleTelefoneChange,
  cargo
}) => {
  return (
    <form id="forms" action="" onSubmit={nextPage}>
      <input
        type="text"
        placeholder="Nome:"
        onChange={(e) => setNome(e.target.value)}
        value={nome}
      />
      <input
        type="number"
        placeholder="CPF"
        onChange={(e) => setCpf(e.target.value)}
        value={cpf}
      />
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Data de Nascimento"
      />
      <select
        name=""
        id=""
        onChange={(e) => setSexo(e.target.value)}
        value={sexo}
      >
        <option value="genero">Selecionar genero</option>
        <option value="Maculino">Maculino</option>
        <option value="Feminino">Feminino</option>
      </select>
      <input
        type="email"
        placeholder="Email:"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="tel"
        placeholder="Telefone:"
        value={tel}
        onChange={handleTelefoneChange}
      />
      <input
        type="password"
        placeholder="Senha:"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirmar Senha:"
        value={confirmSenha}
        onChange={(e) => setConfirmSenha(e.target.value)}
      />

      <select
        name=""
        id=""
        onChange={(e) => setCargo(e.target.value)}
        value={cargo}
      >
        <option value="selecione">Selecionar Cargo</option>
        <option value="Professor">Professor</option>
        <option value="Aluno">Aluno</option>
        <option value="Admin">Admin</option>
      </select>
      <button className="button" type="submit">
        Cadastrar Usuario
      </button>
    </form>
  );
};

export default formGeral;