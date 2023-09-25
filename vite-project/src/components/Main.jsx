function Main() {
    return (
        <>
            <section className="w-100">

                <div className="my-3 shadow p-3 m-5 bg-body rounded border d-flex justify-content-between">
                    <span className="btn btn-primary text-light">Agregar Paciente</span>
                </div>

                <div className="main-table shadow m-5 bg-body rounded border">
                    <table className="table table-striped rounded text-center">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">fecha_nacimiento</th>
                                <th scope="col">Sexo</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Discapacidad</th>
                                <th scope="col" colSpan="2">Funciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Melanie</td>
                                <td>Acuña</td>
                                <td>16/05/2004</td>
                                <td>Feminino</td>
                                <td>3704697102</td>
                                <td>No</td>
                                <td>
                                    <div className="row">
                                        <a href="#" className="btn btn-sm btn-warning">Editar</a>
                                        <button className="btn btn-danger btn-sm">Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Monica</td>
                                <td>Argento</td>
                                <td>14/10/2000</td>
                                <td>Femenino</td>
                                <td>3705678944</td>
                                <td>Si</td>
                                <td>
                                    <div className="row">
                                        <span className="btn btn-sm btn-warning">Editar</span>
                                        <button className="btn btn-danger btn-sm">Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section >
        </>
    )
}

export default Main