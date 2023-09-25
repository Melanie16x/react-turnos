function Footer() {

    return (
        <>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <span className="mb-3 mb-md-0 text-body-secondary">© 2023 San Antonio, Centro de Atención</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24">
                            <use href="#twitter"></use>
                        </svg>Facebook</a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24">
                            <use href="#instagram"></use>
                        </svg>Twitter</a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24">
                            <use href="#facebook"></use>
                        </svg>Instagram</a></li>
                    </ul>
                </footer>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
                crossOrigin="anonymous"></script>
        </>
    )
}

export default Footer