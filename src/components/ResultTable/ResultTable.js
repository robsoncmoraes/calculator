const ResultTable = (props) => {
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
        {props.data.map((yearData) => (
          <tr>
            <td>{yearData.year}</td>
            <td>{yearData.savingsEndOfYear}</td>
            <td>{yearData.yearlyInterest}</td>
            <td>
              {yearData.savingsEndOfYear -
                props.initialInvestment -
                yearData.yearlyContribution * yearData.year}
            </td>
            <td>
              {props.initialInvestment +
                yearData.yearlyContribution * yearData.year}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
