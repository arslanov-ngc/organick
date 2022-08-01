import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <section className="section">
        <h3 className="txt--desc">made with nature</h3>
        <h1 className="txt--title">Welcome to the world of nature and organic</h1>
        <button className="btn btn--secondary mt-1">
          explore now
          <FaArrowRight className="icon" />
        </button>
      </section>
    </header>
  );
};

export default Header;
