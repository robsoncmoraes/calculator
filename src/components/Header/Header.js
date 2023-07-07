import logo from "../../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <h1>Calculadora de Investimento</h1>
    </header>
  );
};

export default Header;
