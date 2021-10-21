import React, { useState } from "react"

function FormLogIn() {
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
                    <div className="fatherform">
                        <div className="sonform">
                            <img className="bannerform" src="imgs/lorouse.jpg" />

                        </div>
                        <div className="sonform">
                            <form onSubmit={handleSubmit}>

                                <label htmlFor="nombre">USERNAME</label>
                                <br />
                                <input className="roundlog" type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={form.nombre}
                                    onChange={handleChange} /><br /><br />


                                <label htmlFor="nombre">PASSWORD</label>
                                <br />
                                <input className="roundlog" type="password"
                                    id="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange} />

                            </form>
                            <div className="sonform">
                                <br />
                                <p>__________________________________</p>
                                <div className="sonsonform">

                                    <ion-icon size="large" name="logo-google" />
                                    <ion-icon size="large" name="logo-twitter" />
                                    <ion-icon size="large" name="logo-facebook" />
                                    <ion-icon size="large" name="logo-github" />

                                </div>

                            </div>

                            <div className="sonform">

                                <div className="opcionuser">
                                    <div className="sonopcionuser">
                                        <p><img src="imgs/usernew.png" />CREAR CUENTA</p>
                                    </div>
                                    <div className="sonopcionuser">
                                        <p><img src="imgs/help.png" />OLVIDE MI CONTRASEÑA</p>
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

export default FormLogIn;



// export default function Formularios(){
//     const [nombre, setNombre] = useState("");
//     const [sabor, setSabor] = useState("");
//     const [lenguaje, setLenguaje] = useState("");
//     const [terminos, setTerminos] = useState(false);

//     const handleSubmit = e => {
//         e.preventDefault();
//         alert("enviado")
//     }
//     return(
//         <>
//             <h2>Formularios</h2>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="nombre">Nombre</label>
//                 <input type="text"
//                         id="nombre"
//                         name="nombre"
//                         value={nombre}
//                         onChange={(e) => setNombre(e.target.value)} />
//                 <input type="radio"
//                         id="js" 
//                         name="sabor"
//                         value="js"
//                         onChange={(e) =>setSabor(e.target.value)}/>
//                         <label htmlFor="">JS</label>
//                 <input type="radio"
//                         id="vanilla"
//                         name="sabor"
//                         value="vanilla"
//                         onChange={(e) =>setSabor(e.target.value)}/>
//                         <label htmlFor="">Vanilla</label>
//                 <input type="radio"
//                         id="react"
//                         name="sabor"
//                         value="react"
//                         onChange={(e) =>setSabor(e.target.value)}/>
//                         <label htmlFor="">React</label>
//                 <input type="radio"
//                         id="vue"
//                         name="sabor"
//                         value="vue"
//                         onChange={(e) =>setSabor(e.target.value)} defaultChecked/>
//                         <label htmlFor="">Vue</label>

//                 <p>Elige un lenguaje de programacion</p>
//                 <select name="lenguaje" onChange={(e) =>setLenguaje(e.target.value)} defaultValue="">
//                     <option value="python">Python</option>
//                     <option value="js">JavaScript</option>
//                     <option value="go">Go</option>
//                     <option value="c">C</option>
//                     <option value="java">Java</option>
//                     <option value="sql">SQL</option>
//                  </select>
//                 <br />
//                 <label htmlFor="terminos">Acepto terminos y condiciones</label>
//                 <input
//                 type="checkbox"
//                 id="terminos"
//                 name="terminos"
//                 onChange={(e) => setTerminos(e.target.checked)} />
//                 <br />
//                 <input type="submit" />

//             </form>
//         </>
//     )
// }

