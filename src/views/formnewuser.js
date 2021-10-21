import React, { useState } from "react"

function FormNewUser() {
    const [form, setForm] = useState({});

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };


    const handleChecked = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("enviado");
    };

    return (
        <div>
            <header className="header1">
                <nav className="navbar sticky-top navbar-expand-lg fixed-top navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img className="logo" src="imgs/newturitravrm.png" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Descubre</a>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categorias
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/alojamiento"><img className="iconuser" src="imgs/icons/cabana.png" /> Alojamiento</a></li>
                                        <li><a className="dropdown-item" href="/senderismo"><img className="iconuser" src="imgs/icons/adventurer.png" />Senderismo</a></li>
                                        <li><a className="dropdown-item" href="/montana"><img className="iconuser" src="imgs/icons/mountain.png" />Montaña</a></li>
                                        <li><a className="dropdown-item" href="/flora"><img className="iconuser" src="imgs/icons/leaves.png" />Flora</a></li>
                                        <li><a className="dropdown-item" href="/fauna"><img className="iconuser" src="imgs/icons/paw.png" />Fauna</a></li>
                                        <li><a className="dropdown-item" href="/culture"><img className="iconuser" src="imgs/icons/culture.png" />Cultura</a></li>
                                        <li><a className="dropdown-item" href="/gastronomy"><img className="iconuser" src="imgs/icons/salad.png" />Gastronomia</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/information">Informacion</a>
                                </li>

                            </ul>
                            <div>
                                <input className="round" type="search" placeholder="  Search" />

                            </div>
                            <form className="d-flex">

                                <button className="btn" type="submit"><img className="iconoh" src="imgs/2.png" /></button>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img className="iconoh" src="imgs/32.png" />
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/formlogin"><img className="iconuser" src="imgs/userinicio.png" />Inicia Sesión</a></li>
                                        <li><a className="dropdown-item" href="/formnewuser"><img className="iconuser" src="imgs/usernew.png" />Registrate</a></li>
                                        <li><a className="dropdown-item" href="/help"><img className="iconuser" src="imgs/help.png" />Ayuda</a></li>
                                        <li><a className="dropdown-item" href="#"></a></li>

                                    </ul>
                                </li>
                                <button className="btn" type="submit"><img className="iconoh" src="imgs/1.png" /></button>
                            </form>
                        </div>
                    </div>

                </nav>
            </header>

            <div>
                <div className="fcformnewuser">
                    <div className="subcontainer">
                        <div className="imgnewuser" >
                            <img src="imgs/campista1.jpg" width="500px" />

                        </div>
                    </div>
                    <div className="subcontainer">
                        <div className="fatherformnewuser">
                            <div className="sonform">
                                <h2>Formulario de Registro</h2>
                            </div>

                            <div className="sonform">

                                <form onSubmit={handleSubmit}>
                                    <div className="datesuser">
                                        <div className="sondatesuser">
                                            <label htmlFor="nombre">Nombre</label>
                                            <br />
                                            <input className="roundlog" type="text"
                                                id="nombre"
                                                name="nombre"
                                                value={form.nombre}
                                                onChange={handleChange} />
                                        </div>
                                        <div className="datesuser">
                                            <div className="sondatesuser">
                                                <label htmlFor="apellido">Apellido</label>
                                                <br />
                                                <input className="roundlog" type="text"
                                                    id="apellido"
                                                    name="apellido"
                                                    value={form.apellido}
                                                    onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="datesuser">
                                        <div className="sondatesuser">
                                            <label htmlFor="nombre">Correo</label>

                                            <br />
                                            <input className="roundlogdatesuser" type="email"
                                                id="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="datesuser">
                                        <div className="sondatesuser">

                                            <label htmlFor="nombre">Contraseña</label>
                                            <br />
                                            <input className="roundlog" type="password"
                                                id="password"
                                                name="password"
                                                value={form.password}
                                                onChange={handleChange} />
                                        </div>

                                        <div className="sondatesuser">

                                            <label htmlFor="nombre">Confirme Contraseña</label>
                                            <br />
                                            <input className="roundlog" type="password"
                                                id="conpass"
                                                name="conpass"
                                                value={form.password}
                                                onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="datesuser">
                                        <div className="sondatesuser">
                                            <label htmlFor="nombre">Fecha nacimiento</label>
                                            <br />
                                            <input className="roundlog" type="date"
                                                id="edad"
                                                name="edad"
                                                value={form.edad}
                                                onChange={handleChange} />

                                        </div>

                                        <div className="sondatesuser">
                                            <label htmlFor="nombre">Pais</label>
                                            <br />
                                            <input className="roundlog" type="text"
                                                id="Pais"
                                                name="Pais"
                                                value={form.Pais}
                                                onChange={handleChange} />

                                        </div>
                                    </div>
                                    <div className="datesuser">
                                        <div className="sondatesuser">
                                            <label htmlFor="celular">Celular</label>

                                            <br />
                                            <input className="roundlogdatesuser" type="text"
                                                id="celular"
                                                name="celular"
                                                value={form.email}
                                                onChange={handleChange} />
                                        </div>
                                    </div>

                                </form>
                                <div className="sonform">
                                    <br />
                                    <div className="sonsonform">

                                        <ion-icon size="large" name="logo-google" />
                                        <ion-icon size="large" name="logo-twitter" />
                                        <ion-icon size="large" name="logo-facebook" />
                                        <ion-icon size="large" name="logo-github" />

                                    </div>

                                </div>

                                <div>
                                    <input
                                        type="checkbox"
                                        id="terminos"
                                        name="terminos"
                                        required
                                        onChange={handleChecked} />
                                    <label htmlFor="terminos">Acepto terminos y condiciones  </label>
                                    <br />
                                    <br />
                                    <input className="opcioncreate" type="submit" value="CREAR CUENTA" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-muted">&copy; 2021 Company, Inc</p>

                    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <svg className="bi me-2" width="40" height="32"></svg>
                    </a>

                    <ul className="nav col-md-4 justify-content-end">
                        <li className="nav-item"><a href="#"><img className="sm" src="imgs/twitter1.png" /> </a></li>
                        <li className="nav-item"><a href="#"><img className="sm" src="imgs/instagram1.png" /> </a></li>
                        <li className="nav-item"><a href="#"><img className="sm" src="imgs/facebook1.png" /> </a></li>

                    </ul>
                </footer>
            </div>

        </div>


    );
}

export default FormNewUser;