import React, { useState } from 'react';
import axios from 'axios';
import path from 'path';


const Email = (props) => {
    const email = props.email;
    const nombre = props.nombre;
    const pdf = props.pdf;
    const handleSubmit = (e) => {
        e.preventDefault();

        const dataSubmit = {
            name: nombre,
            email: email,
            pdf: pdf
        }
        console.log(dataSubmit);

        axios.post("http://localhost:5000/api/sendMail", dataSubmit);
    }

    return (
        <>
            <span className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm white-text"
                onClick={handleSubmit}>
                Enviar
            </span>

        </>
    );
}

export default Email


