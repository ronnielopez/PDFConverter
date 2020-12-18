import React, { useState, useEffect } from 'react';
import { PDFDownloadLink, BlobProvider } from '@react-pdf/renderer'
import DeclaracionJ from './components/pdf/declaracionJurada'
import CartaCompro from './components/pdf/cartaCompromiso';
import Email from './components/email/email';
import RE06 from './components/pdf/RE06';
import { act } from 'react-dom/test-utils';
import swal from 'sweetalert';

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
                      <Formulario />
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
  const [tipo, setTipo] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [edad, setEdad] = useState(null);
  const [departamento, setDepartamento] = useState(null);
  const [domicilio, setDomicilio] = useState(null);
  const [dui, setDui] = useState(null);
  const [nit, setNit] = useState(null);
  const [facultad, setFacultad] = useState(null);
  const [carrera, setCarrera] = useState(null);
  const [firma, setFirma] = useState(null);
  const [carne, setCarne] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [correoI, setCorreoI] = useState(null);
  const [correoP, setCorreoP] = useState(null);
  //Fin de los datos de declaracion Jurada de Beca

  //RE-06 ---------------------------
  const [telefenoH, setTelefonoH] = useState(null);
  const [telefenoP, setTelefonoP] = useState(null);
  const [direccion, setDireccion] = useState(null);
  const [carga, setCarga] = useState(null);
  const [actividad, setActividad] = useState(null);
  //---------------------------------

  //PDF SEND -------------------------------
  const [url, setUrl] = useState("");
  //----------------------------------------
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
        <input id="inputDomicilio" type="text" placeholder="Domicilio" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" onChange={(event) => setDomicilio(event.target.value)} />
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
        <input type="file" accept="image/*,.jpg,.png" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" id="customFile" onChange={(event) => setFirma(URL.createObjectURL(event.target.files[0]))} />
      </div>
      <span className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm white-text"
        onClick={() => setBandera(1)}>
        Siguiente
    </span>
    </>)
  }
  else if (bandera === 1 && tipo != null && nombre != null && departamento != null
    && departamento != null && dui != null && nit != null && facultad != null && carrera != null
    && firma != null && carne != null && fecha != null && correoI != null && correoP != null) {
    /*  */
    //Formulario para declaracion jurada de beca
    return (<>
      <p className="text-muted mb-4">* Formulario RE-06</p>
      <div className="form-group mb-3">
        <textarea id="inputTelC" rows='1' placeholder="Numero de telefono de celular" className="form-control rounded-pill border-0 shadow-sm px-4" onChange={(event) => setTelefonoP(event.target.value)}></textarea>
      </div>
      <div className="form-group mb-3">
        <textarea id="inputDireccion" rows='3' placeholder="Direccion" className="form-control rounded-pill border-0 shadow-sm px-4" onChange={(event) => setDireccion(event.target.value)} ></textarea>
      </div>
      <div className="form-group mb-3">
        <textarea placeholder='Actividad desarrollada por el Becario en la Facultad' className="form-control rounded-pill border-0 shadow-sm px-4" id="inputActividad" rows="3" onChange={(event) => setActividad(event.target.value)}></textarea>
      </div>
      <div className="form-group mb-3">
        <textarea placeholder='Carga Academica por el becario en el ciclo' className="form-control rounded-pill border-0 shadow-sm px-4" id="inputCarga" rows="3" onChange={(event) => setCarga(event.target.value)}></textarea>
      </div>
      <span className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm white-text"
        onClick={() => setBandera(2)}>
        Siguiente
    </span>
    </>)
  }
  else if (bandera === 2 && telefenoP != null && direccion != null && actividad != null
    && carga != null) {
    return (<>
      <PDFDownloadLink document={<DeclaracionJ
        tipo={tipo}
        nombre={nombre}
        edad={edad}
        departamento={departamento}
        domicilio={domicilio}
        dui={dui}
        nit={nit}
        facultad={facultad}
        carrera={carrera}
        firma={firma}
        carne={carne}
        fecha={fecha}
        correoI={correoI}
        correoP={correoP}
      />} fileName="Declarion Jurada.pdf" className='btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm white-text'>
        {({ blob, url, loading, error }) => (loading ? 'Cargando...' : 'Descargar Declaracion Jurada') }
      </PDFDownloadLink>
      <PDFDownloadLink document={<CartaCompro
        tipo={tipo}
        nombre={nombre}
        edad={edad}
        departamento={departamento}
        domicilio={domicilio}
        dui={dui}
        nit={nit}
        facultad={facultad}
        carrera={carrera}
        firma={firma}
        carne={carne}
        fecha={fecha}
        correoI={correoI}
        correoP={correoP}
      />} fileName="Carta de compromiso.pdf" className='btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm white-text'>
        {({ blob, url, loading, error }) => (loading ? 'Cargando...' : 'Descargar Carta de compromiso')}
      </PDFDownloadLink>
      <PDFDownloadLink document={<RE06
        nombre={nombre}
        facultad={facultad}
        carrera={carrera}
        correoP={correoP}
        firma={firma}
        carne={carne}
        telefenoH={telefenoH}
        telefenoP={telefenoP}
        direccion={direccion}
        actividad={actividad}
        carga={carga}
      />} fileName="RE-06.pdf" className='btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm white-text'>
        {({ blob, url, loading, error }) =>{
          if (loading) {
            return 'Cargando'
          } else {
            let reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function () {
            let base64data = reader.result;
            setUrl(base64data);
            setNombre(nombre);
            setCorreoI(correoI);
            }
            return 'Descargar RE-06'
          }
        }}
      </PDFDownloadLink>
      <span className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm white-text"
        onClick={() => setBandera(3)}>
        Siguiente
    </span>
    </>);

  }
  else if(bandera === 3){
    return(<>
    <p className="text-muted mb-4">* Esta a punto de enviar los archivos</p>
    <Email nombre={nombre} email={correoI} pdf={url}/>
    </>);
  }
  else {
    swal("Debe llenar todos los campos", "Revise bien los campos", "error");
    bandera === 1 ? setBandera(0) : setBandera(1)
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
