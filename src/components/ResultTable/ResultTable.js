const ResultTable = () => {
  return (
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
  );
};

export default ResultTable;
