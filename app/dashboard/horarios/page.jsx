import EsqueletoPrincipal from "../../.components/esqueleto";
import "./horario.css";

const Horarios = () => {
  const horarioDeAula = [
    "7:30", "8:20", "8:20", "8:20", "8:20", "8:20", "8:20", "8:20", "10:00", "11:30", "13:30", "17:00"
  ];

  return (
    <div>
      <EsqueletoPrincipal>
        <div className={`${"conteiner"} ${"conteudoMenus"}`}>
          <h3>Horarios:</h3>
          <div className="horarios">
            <table className="horariosTabela">
              <thead>
                <tr className="ok">
                  <th></th>
                  <th>Segunda</th>
                  <th>Terça</th>
                  <th>Quarta</th>
                  <th>Quinta</th>
                  <th>Sexta</th>
                </tr>
              </thead>
              <tbody>
                {horarioDeAula.map((horario, index) => (
                  <tr key={index}>
                    <th className="primeiroElemento">{horario}</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </EsqueletoPrincipal>
    </div>
  );
};

export default Horarios;
