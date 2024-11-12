import { useEffect, useState } from "react";

const FormProfessor = () => {
  const [materiasSelecionadas, setMateriasSelecionadas] = useState([]);

  // Opções de exemplo
  const opcoes = [
    "Matemática",
    "Português",
    "História",
    "Ciências",
    "Geografia",
    "Física",
    "Biologia",
    "Química",
  ];

  const handleMateriasSelecionadas = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      // Adiciona a matéria ao array
      setMateriasSelecionadas((prev) => [...prev, value]);
    } else {
      // Remove a matéria do array
      setMateriasSelecionadas((prev) =>
        prev.filter((materia) => materia !== value)
      );
    }
  };

  useEffect(() => {
    console.log(materiasSelecionadas);
  }, [materiasSelecionadas]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form id="forms" onSubmit={handleSubmit}>
      <div className="materias">
        {opcoes.map((opcao, index) => (
          <div className="inputContainer" key={index}>
            <input
              type="checkbox"
              className="checkbox"
              value={opcao}
              checked={materiasSelecionadas.includes(opcao)} // Marca o checkbox se a matéria estiver selecionada
              onChange={handleMateriasSelecionadas}
            />
            <label id={`label-${index}`} htmlFor={`checkbox-${index}`}>
              {opcao}
            </label>
          </div>
        ))}
        <div>
          {materiasSelecionadas.map((materia, index) => (
            <span key={index}>{materia}</span>
          ))}
        </div>
      </div>

      <select name="cargo" id="cargo" defaultValue="">
        <option value="" disabled>
          Selecione Cargo
        </option>
        <option value="Titular">Titular</option>
        <option value="Substituto">Substituto</option>
      </select>
      <input type="text" placeholder="CEP" />
    </form>
  );
};

export default FormProfessor;
