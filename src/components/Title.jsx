
import '../../css/title.css'

function Title() {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-lg rounded mt-3 ">
    <div className="container">
      <div className="navbar-brand " href="#">
        <p className="fw-bolder title" >MySeries</p>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <p className="nav-link" >Desenvolvido por:</p>
          </li>
          <li className="nav-item active">
            <p className="nav-link" >Alex Guimarães</p>
          </li>
          <li className="nav-item">
            <p className="nav-link" >Ana Léia</p>
          </li>
          <li className="nav-item">
            <p className="nav-link" >Emille Vitória</p>
          </li>
          <li className="nav-item">
            <p className="nav-link" >Alexya Vitória</p>
          </li>
        </ul>
      </div>
    </div>
  </nav>
     );
}

export default Title;