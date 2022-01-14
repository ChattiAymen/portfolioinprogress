import "./portfolio.scss";

export default function Potfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web Development</li>
        <li>Web Design</li>
        <li>Management</li>
        <li>Economics</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/portfolio.png" alt="" />
          <h3>E-Commerce Website</h3>
        </div>
        <div className="item">
          <img src="assets/portfolio.png" alt="" />
          <h3>E-Commerce Website</h3>
        </div>
        <div className="item">
          <img src="assets/portfolio.png" alt="" />
          <h3>E-Commerce Website</h3>
        </div>
        <div className="item">
          <img src="assets/portfolio.png" alt="" />
          <h3>E-Commerce Website</h3>
        </div>
        <div className="item">
          <img src="assets/portfolio.png" alt="" />
          <h3>E-Commerce Website</h3>
        </div>
        <div className="item">
          <img src="assets/portfolio.png" alt="" />
          <h3>E-Commerce Website</h3>
        </div>
        <div className="item">
          <img src="assets/portfolio.png" alt="" />
          <h3>E-Commerce Website</h3>
        </div>
      </div>
    </div>
  );
}
