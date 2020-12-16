import React, { useState } from 'react';
import axios from 'axios';


const Email = () => {
    const [email, SetEmail] = useState("");
    const [nombre, SetNombre] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        const dataSubmit = {
            nombre:nombre,
            email:email
        }

        axios("http://localhost:5000/api/sendMail", dataSubmit);
    }

    return (
        <>  
            <form onSubmit={handleSubmit}>    
            <div className="form-group mb-3">
                <input id="inputNombre" type="text" placeholder="Nombre" className="form-control rounded-pill border-0 shadow-sm px-4" onChange={(event) => SetNombre(event.target.value)} />
            </div>
            <div className="form-group mb-3">
                <input id="inputCorreo" type="text" placeholder="Correo" className="form-control rounded-pill border-0 shadow-sm px-4" onChange={(event) => SetEmail(event.target.value)} />
            </div>
            <span className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm white-text"
                onClick={handleSubmit}>
                Siguiente
            </span>
            </form>
        </>
    );
}

export default Email


