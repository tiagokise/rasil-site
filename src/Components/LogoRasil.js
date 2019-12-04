import React from 'react';
import { useHistory } from 'react-router-dom';



export default function LogoRasil({ label, imgURL }) {
    const history = useHistory()

    return (
        <div>
            <button className="logoButton" onClick={() => history.push("/")}>
                <h1><strong>Rasil</strong> Borrachas</h1>
            </button>
        </div>
    );
}