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
        paddingHorizontal: 50,
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
    cajita:{
        marginLeft: 50,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Agency FB',
        width: '425',
        heigth: 'auto',
        border: '2 solid black'
    },
});

const RE06 = (props) => {
    let date = new Date();
    const nombre = props.nombre;
    const facultad = props.facultad;
    const carrera = props.carrera;
    const firma = props.firma;
    const carne = props.carne;
    const correoP = props.correoP;
    const fecha = date.getDate() + '-' + ( date.getMonth() + 1 ) + '-' + date.getFullYear();;
    const telefonoH = props.telefenoH;
    const telefonoP = props.telefenoP;
    const direccion = props.direccion;
    const actividad = props.actividad;
    const carga = props.carga;

    return (
        <Document>
            <Page style={styles.body}>
                <Image style={styles.image} src={ImgHeader} fixed></Image>
                <Text style={styles.cajita}>Nombre de Estudiante : {nombre}</Text>
                <Text style={styles.cajita}>Carne : {carne} |  Carrera: {carrera}</Text>
                <Text style={styles.cajita}>Correo electronico : {correoP} | Telefono cel: {telefonoP}</Text>
                <Text style={styles.cajita}>Direccion : {direccion}</Text>
                <Text style={styles.cajita}>Fecha de referencia : {fecha} | Facultad: {facultad}</Text>
                <Text style={styles.cajita}>Actividad a realizar por el Becario en la Facultad: </Text>
                <Text style={styles.cajita}>{actividad}</Text>
                <Text style={styles.cajita}> Carga Académica Inscrita por el Becario en el ciclo: </Text>
                <Text style={styles.cajita}>{carga}</Text>
                <Text style={styles.text}></Text>
                <Image style={styles.firma} src={firmaTemplate}></Image>
                <Text style={styles.text}>________________________________     ________________________________</Text>
                <Text style={styles.fonts}>Nombre firma y sello del Decano                      Firma</Text>
            </Page>
        </Document>
    )
};

//const blob = pdf(DeclaracionJ).toBlob();

//<Text style={styles.fonts}>Firma : <Image src={firma}></Image></Text>
export default RE06