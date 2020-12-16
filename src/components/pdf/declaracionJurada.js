import React, { useState } from 'react';
import { Page, Text, Document, Image, StyleSheet, Font } from '@react-pdf/renderer';
import ImgHeader from '../../img/declaracionJ.PNG';
import ImgFooter from '../../img/Dfooter.PNG';
import Agency from '../../fonts/agency-fb.ttf';
import AgencyB from '../../fonts/AgencyFB-Bold.ttf'

Font.register({ family: 'Agency FB', src: Agency });
Font.register({ family: 'Agency FB2', src: AgencyB, fontWeight: 'bold' });

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Agency FB'
  },
  author: {
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: 'Agency FB'
  },
  text: {
    margin: 16,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Agency FB',
    lineHeight: 2,
    paddingHorizontal: 35
  },
  fonts: {
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Agency FB',
    lineHeight: 1,
    paddingHorizontal: 50
  },
  image: {
    marginHorizontal: 50
  },
  negrita: {
    fontFamily: 'Agency FB2',
    fontWeight: 'bold'
  },
  pageNumber: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  firma: {
    height: 100,
    width: 100,
    position: 'relative',
    marginHorizontal: 100
  },
});

const DeclaracionJ = (props) => {
  const beca = props.tipo;
  const nombre = props.nombre;
  const edad = props.edad;
  const departamento = props.departamento;
  const domicilio = props.domicilio;
  const dui = props.dui;
  const nit = props.nit;
  const facultad = props.facultad;
  const carrera = props.carrera;
  const firma = props.firma;
  const carne = props.carne;
  const correoI = props.correoI;
  const correoP = props.correoP;
  const fecha = props.fecha;
  return (
    <Document>
      <Page>
        <Image style={styles.image} src={ImgHeader} fixed></Image>

        <Text style={styles.title}>DECLARACIÓN JURADA  DE SITUACIÓN SOCIOECONÓMICA.</Text>
        <Text style={styles.author}>Tipo de beca: {beca}</Text>

        <Text style={styles.text}>
          YO, {nombre}, de {edad} de edad, estudiante, del domicilio
          de {domicilio} Departamento de {departamento},  con Documento Único de Identidad
          {dui}; y Número de Identificación
          Tributaria {nit};
          {<Text style={styles.negrita}>DECLARO  BAJO JURAMENTO</Text>}: 1. Que en mi calidad de
          estudiante activo(a) de la Facultad de  {facultad}, de la carrera de {carrera} de la
          Universidad Francisco Gavidia,
          actualmente gozando de beca de estudios  desde el CICLO uno, 2. Que para darle cumplimiento a lo
          preceptuado en el Articulo Diecisiete literal e), del Reglamento de Becas de la Universidad
          Francisco Gavidia, para efectos de poder optar a REFRENDA de beca de estudios, para el CICLO CERO
          DOS/DOS MIL VEINTE, manifiesto la Comisión de Becas de la Universidad Francisco Gavidia,
          que mi situación socioeconómica no ha cambiado,  y que no poseo  desde el momento que se me
          otorgó la beca ningún trabajo remunerado y así la presente pueda quedar registrada dentro de la
          documentación requerida, para los trámites de refrenda de beca de estudios. Así me expreso, ratifico
          su contenido y firmo, en la ciudad de San Salvador a los {fecha} de dos mil veinte.
          </Text>
          <Text style={styles.fonts}>Firma : </Text>
          <Image style={styles.firma} src={firma}></Image>
        <Text style={styles.fonts}>
          No. de Carné: {carne}
        </Text>
        <Text style={styles.fonts}>
          Correo electrónico personal: {correoP}
        </Text>
        <Text style={styles.fonts}>
          Correo electrónico institucional: {correoI}
        </Text>
        <Image style={styles.pageNumber} src={ImgFooter} fixed></Image>
      </Page>
    </Document>
  )
};

//const blob = pdf(DeclaracionJ).toBlob();

//<Text>Firma:<Image src={firma}></Image></Text>
export default DeclaracionJ