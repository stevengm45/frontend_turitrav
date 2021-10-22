import React from "react";
import HeaderPrueba from "./headertt";
import FaunaTest from "./faunaprueba";
import tolimaJson from '../jsonfiles/tolima.json'


function Tolima() {

    let lugares = tolimaJson


    return (
        <div>
            <HeaderPrueba />
            {lugares.map(places =>
                <FaunaTest place={places.lugar}
                    calificacion={places.calificacion}
                    dpto={places.dpto}
                    mun={places.muni}
                    categoria={places.categoria}
                    img={places.img} />
            )}
        </div>
    )

}

export default Tolima;