
function FuncPlaces(props) {

    return (

        <div>
            <div>
                <div>
                    <img src={props.img} />
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <h3>
                            {props.categoria}
                        </h3>
                    </div>
                    <div>
                        <h1>
                            {props.place}
                        </h1>
                    </div>
                    <div>
                        <h3>
                            {props.dpto}
                        </h3>
                    </div>
                    <div>
                        <h3>
                            {props.mun}
                        </h3>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="" />
                    </div>
                    <div>
                        <h3>
                            <b>{props.calificacion}</b>
                        </h3>
                    </div>
                </div>
            </div>
        </div>


        // <div className="col-animal">
        //     <div >
        //         <div>
        //             <img className="img-animal" src="imgs/fauna/2.png" alt="cocuy" />
        //         </div>
        //         <div className="card-body">
        //             <h3 className="descrip-animal"><b>Guacamaya</b></h3>
        //         </div>
        //     </div>
        // </div>
    )

}

export default FuncPlaces;