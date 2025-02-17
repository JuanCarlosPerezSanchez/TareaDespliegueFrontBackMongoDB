import React, { useState } from "react";
import { getDatos } from "../services/API";

const Button = ({ text }) => {
    const [data, setData] = useState(null);

    const handleClick = async () => {
        try {
            const result = await getDatos();
            console.log('Datos obtenidos:', result);
            setData(result);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };

    return (
        <div>
            <button onClick={handleClick}>{text}</button>
            {data && (
                <div>
                    <h2>Datos obtenidos:</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default Button;