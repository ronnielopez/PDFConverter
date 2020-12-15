import React, { useState, useEffect } from 'react';
import { PDFDownloadLink, BlobProvider } from '@react-pdf/renderer'
import DeclaracionJ from './components/pdf/declaracionJurada'
import CartaCompro from './components/pdf/cartaCompromiso';

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <div className="container-fluid">
        <div className="row no-gutter">

          <div className="col-md-6 d-none d-md-flex bg-image"></div>

          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">

                    <h3 className="display-4">Relleno de formularios de becados</h3>
                    <form>
                      <Formulario
                        progress={progress}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}

function Formulario(props) {
  //Bandera---------
  const [bandera, setBandera] = useState(0);
  //----------------
  //Datos de Declaracion Jurada de Beca
  const [tipo, setTipo] = useState("");
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [dui, setDui] = useState("");
  const [nit, setNit] = useState("");
  const [facultad, setFacultad] = useState("");
  const [carrera, setCarrera] = useState("");
  const [firma, setFirma] = useState("sample");
  const [carne, setCarne] = useState("");
  const [fecha, setFecha] = useState("");
  const [correoI, setCorreoI] = useState("");
  const [correoP, setCorreoP] = useState("");
  //Fin de los datos de declaracion Jurada de Beca

  if (bandera === 0) {
    //Formulario para declaracion jurada de beca
    return (<>
      <p className="text-muted mb-4">* Declaracion Jurada * Carta de compromiso</p>
      <div className="form-group mb-3">
        <input id="inputTipo" type="text" placeholder="Tipo de Beca a refrendar" className="form-control rounded-pill border-0 shadow-sm px-4" onChange={(event) => setTipo(event.target.value)} />
      </div>
      <div className="form-group mb-3">
        <input id="inputEdad" type="text" placeholder="Edad (letras)" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" onChange={(event) => setEdad(event.target.value)} />
      </div>
      <div className="form-group mb-3">
        <input id="inputNombre" type="text" placeholder="Nombre completo" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" onChange={(event) => setNombre(event.target.value)} />
      </div>
      <div className="form-group mb-3">
        <input id="inputDepartamento" type="text" placeholder="Departamento" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" onChange={(event) => setDepartamento(event.target.value)} />
      </div>
      <div className="form-group mb-3">
        <input id="inputDui" type="text" placeholder="Dui (letras)" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" onChange={(event) => setDui(event.target.value)} />
      </div>
      <div className="form-group mb-3">
        <input id="inputNit" type="text" placeholder="NIT (letras)" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" onChange={(event) => setNit(event.target.value)} />
      </div>
      <div className="form-group mb-3">
        <input id="inputFacultad" type="text" placeholder="Facultad" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" onChange={(event) => setFacultad(event.target.value)} />
      </div>
      <div className="form-group mb-3">
        <input id="inputCarrera" type="text" placeholder="Carrera" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" onChange={(event) => setCarrera(event.target.value)} />
      </div>
      <div className="form-group mb-3">
        <input id="inputFecha" type="text" placeholder="Dia, Mes (letras)" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" onChange={(event) => setFecha(event.target.value)} />
      </div>
      <div className="form-group mb-3">
        <input id="inputCarne" type="text" placeholder="Carne" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" onChange={(event) => setCarne(event.target.value)} />
      </div>
      <div className="form-group mb-3">
        <input id="inputCorreo" type="email" placeholder="Correo personal" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" onChange={(event) => setCorreoP(event.target.value)} />
      </div>
      <div className="form-group mb-3">
        <input id="inputCorreoI" type="email" placeholder="Correo institucional" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" onChange={(event) => setCorreoI(event.target.value)} />
      </div>
      <div className="form-group mb-3">
        <input type="file" accept="image/*,.jpg,.png" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" id="customFile" onChange={(event) => setFirma(event.target.files[0])} />
      </div>
      <span className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm white-text"
        onClick={() => setBandera(1)}>
        Siguiente
    </span>
    </>)
  }
  else if (bandera === 1) {
    //Formulario para declaracion jurada de beca
    return (<>
      <p className="text-muted mb-4">* Formulario RE-06</p>
      <div className="form-group mb-3">
        <input id="inputTelH" type="text" placeholder="Numero de telefono de casa" className="form-control rounded-pill border-0 shadow-sm px-4" onChange={(event) => setTipo(event.target.value)} />
      </div>
      <div className="form-group mb-3">
        <input id="inputTelC" type="text" placeholder="Numero de telefono de celular" className="form-control rounded-pill border-0 shadow-sm px-4" onChange={(event) => setTipo(event.target.value)} />
      </div>
      <div className="form-group mb-3">
        <input id="inputDireccion" type="text" placeholder="Direccion" className="form-control rounded-pill border-0 shadow-sm px-4" onChange={(event) => setTipo(event.target.value)} />
      </div>
      <div className="form-group mb-3">
        <textarea placeholder='Actividad desarrollada por el Becario en la Facultad' className="form-control rounded-pill border-0 shadow-sm px-4" id="inputActividad" rows="3"></textarea>
      </div>
      <div className="form-group mb-3">
        <textarea placeholder='Carga Academica por el becario en el ciclo' className="form-control rounded-pill border-0 shadow-sm px-4" id="inputCarga" rows="3"></textarea>
      </div>
      <span className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm white-text"
        onClick={() => setBandera(2)}>
        Siguiente
    </span>
      {console.log(bandera)}
    </>)
  }
  else {
    return (<>
      <p>Nada</p>
    </>);
  }

}

/* <PDFDownloadLink document={<DeclaracionJ
    tipo={tipo}
    nombre={nombre}
    edad={edad}
    departamento={departamento}
    dui={dui}
    nit={nit}
    facultad={facultad}
    carrera={carrera}
    firma={firma}
    carne={carne}
    fecha={fecha}
    correoI={correoI}
    correoP={correoP}
  />} fileName="somename.pdf" className='text-white'>
    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Siguiente')}
  </PDFDownloadLink>*/

export default App;
