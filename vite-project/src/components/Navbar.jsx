function Navbar() {
    return (
        <>
            <header className="container-fluid">
                <nav className="navbar navbar-expand-lg bg-black hg-20 rounded" aria-label="Thirteenth navbar example">
                    <div className="container-fluid text-center p-5 text-white">
                        <span className=" navbar-brand text-white col-lg-4 me-0 h1 text-center">
                            Centro de salud</span>
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="navbar-collapse d-lg-flex collapse" id="navbarsExample11">
                            <ul className="navbar-nav col-lg-6 justify-content-lg-center">
                                <li className="nav-item justify-content-center">
                                    <p className="fs-3">Lista de pacientes</p>
                                </li>
                            </ul>
                            <div className="d-lg-flex col-lg-4 justify-content-lg-end">
                                <button className="btn btn-primary m-1">Ayuda</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar