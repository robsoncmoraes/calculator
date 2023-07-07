import logo from "./assets/investment-calculator-logo.png";

function App() {
  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Calculadora de Investimento</h1>
      </header>

      <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Economia atual (R$)</label>
            <input type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Economia anual ($)</label>
            <input type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Juros esperados (%, por ano)
            </label>
            <input type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Duração do investimento (anos)</label>
            <input type="number" id="duration" />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Apagar
          </button>
          <button type="submit" className="button">
            Calcular
          </button>
        </p>
      </form>

      {/* Todo: Mostrar a tabela abaixo condicionalmente (somente quando os dados do resultado estiverem disponíveis) */}
      {/* Mostrar texto substituto se nenhum dado estiver disponível */}

      <table className="result">
        <thead>
          <tr>
            <th>Ano</th>
            <th>Economia Total</th>
            <th>Juros (Ano)</th>
            <th>Juros totais</th>
            <th>Capital investido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NÚMERO DO ANO</td>
            <td>ECONOMIA TOTAL NO FIM DO ANO</td>
            <td>JUROS GANHO NO ANO</td>
            <td>TOTAL DE JUROS GANHO</td>
            <td>TOTAL DE CAPITAL INVESTIDO</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
