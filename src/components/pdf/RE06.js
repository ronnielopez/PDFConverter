import React from 'react';
import { Page, Text, Document, Image, StyleSheet, Font } from '@react-pdf/renderer';
import ImgHeader from '../../img/re06.PNG';
import firmaTemplate from '../../img/firmaxd.PNG';
import Agency from '../../fonts/agency-fb.ttf';
import AgencyB from '../../fonts/AgencyFB-Bold.ttf'

Font.register({ family: 'Agency FB', src: Agency });
Font.register({ family: 'Agency FB2', src: AgencyB, fontWeight: 'bold' });

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Agency FB'
    },
    author: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 40,
        fontFamily: 'Agency FB'
    },
    text: {
        margin: 16,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Agency FB',
        lineHeight: 1,
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
        marginHorizontal: 250
    },
});

const RE06 = (props) => {
    const nombre = props.nombre;
    const facultad = props.facultad;
    const carrera = props.carrera;
    const firma = props.firma;
    const carne = props.carne;
    const correoP = props.correoP;
    const fecha = props.fecha;
    const telefonoH = props.telefenoH;
    const telefonoP = props.telefenoP;
    const direccion = props.direccion;
    const actividad = props.actividad;
    const carga = props.carga;

    return (
        <Document>
            <Page style={styles.body}>
                <Image style={styles.image} src={ImgHeader} fixed></Image>
                <Text style={styles.fonts}>Nombre de Estudiante : {nombre}</Text>
                <Text style={styles.fonts}>Carne : {carne} Carrera: {carrera}</Text>
                <Text style={styles.fonts}>Correo electronico : {correoP} Telefeno casa: {telefonoH} Telefono cel: {telefonoP}</Text>
                <Text style={styles.fonts}>Direccion : {direccion}</Text>
                <Text style={styles.fonts}>Fecha de referencia : {fecha} Facultad: {facultad}</Text>
                <Text style={styles.text}>Actividad a realizar por el Becario en la Facultad: </Text>
                <Text style={styles.fonts}>{actividad}</Text>
                <Text style={styles.text}> Carga Académica Inscrita por el Becario en el ciclo: </Text>
                <Text style={styles.fonts}>{carga}</Text>
                <Text style={styles.text}></Text>
                <Image style={styles.firma} src={firma}></Image>
                <Text style={styles.text}>________________________________     ________________________________</Text>
                <Text style={styles.fonts}>Nombre firma y sello del Decano                      Firma</Text>
            </Page>
        </Document>
    )
};

//const blob = pdf(DeclaracionJ).toBlob();

//<Text style={styles.fonts}>Firma : <Image src={firma}></Image></Text>
export default RE06