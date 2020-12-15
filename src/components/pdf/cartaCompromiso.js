import React from 'react';
import { Page, Text, Document, Image, StyleSheet, Font } from '@react-pdf/renderer';
import ImgHeader from '../../img/compromiso.PNG';
import ImgFooter from '../../img/Dfooter.PNG';
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
    firma:{
        height: 100,
        width: 100,
        position: 'relative',
        marginHorizontal: 100
    },
});

const CartaCompro = (props) => {
    const beca = props.tipo;
    const nombre = props.nombre;
    const edad = props.edad;
    const departamento = props.departamento;
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
            <Page style={styles.body}>
                <Image style={styles.image} src={ImgHeader} fixed></Image>

                <Text style={styles.title}>CARTA DE COMPROMISO DEL ESTUDIANTE BECADO</Text>
                <Text style={styles.author}>Tipo de beca: {beca}</Text>

                <Text style={styles.text}>
                    YO, {nombre}, de {edad} de edad, estudiante, del domicilio
          de {departamento} Departamento de {departamento},  con Documento Único de Identidad
          {dui}; y Número de Identificación
          Tributaria {nit};
          {<Text style={styles.negrita}>DECLARO  BAJO JURAMENTO</Text>}: I) Que me fue REFRENDADA
          la beca de estudios por la COMISIÓN DE BECAS DE LA UNIVERSIDAD FRANCISCO GAVIDIA,
          para cursar la carrera de {carrera} de la Facultad de {facultad}
          de la Universidad Francisco Gavidia, para el ciclo CERO DOS/dos mil veinte, y como contraprestación
          a la beca que voy a disfrutar de parte de la Universidad afirmo. II) Que me comprometo  a cumplir con
          los compromisos y atribuciones que me impone el Reglamento de Becas de la Universidad Francisco Gavidia,
          así como las disposiciones concomitantes a la calidad de estudiante o profesional,  y para tales efectos
          me obligo a desempeñar las actividades asignadas por el (la) Decano(a) de mi Facultad durante el periodo
          para el cual se me ha otorgado la beca,  III) Que, si se me solicita,   colaboraré  en el desarrollo de
          las actividades de inicio de ciclo académico de mi Facultad, brindando orientación a la comunidad estudiantil
          sobre las aulas asignadas para cada asignatura a los estudiantes que se incorporan a dicho ciclo y otras
          actividades requeridas por el (la) Decano(a); IV) Que  Representaré a mi Facultad en concursos internos o
          externos en los cuales sea designado(a) considerando mi calidad académica y habilidades personales; III)
          Que, en caso de que se me requiera, cumpliré con mi obligación de colaborar con la Dirección de Proyección
          Social en la atención a personas y entidades públicas en casos de desastre nacional, calamidad pública o
          en proyectos específicos que así lo requieran;
          </Text>
                <Text style={styles.text}>
                    V) Que Contribuiré al desarrollo de programas
                    organizados por mi Facultad en beneficio de la población salvadoreña, en los cuales sea requerido mi apoyo;
                    VI) Que Colaboraré  en actividades académicas coordinadas por mi Facultad, tales como Foros, Conferencias,
                    Videoconferencias, Ferias, Congresos y otros que sean solicitados por mi Decano(a); VII) Que me desempeñaré
                    en  todas aquellas actividades que en mi calidad de becario (a) me sean asignadas por el (la) Decano(a) de
                    la Facultad a la que corresponde mi carrera; VIII) Que he comprendido el alcance de las obligaciones que se me
                    atribuyen como becario (a); Así  me expreso, ratifico su contenido y firmo en la ciudad de San Salvador a los
                    {fecha} de dos mil veinte.
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
                <Image style={styles.pageNumber} src={ImgFooter}  fixed></Image>
            </Page>
        </Document>
    )
};

//const blob = pdf(DeclaracionJ).toBlob();

//<Text style={styles.fonts}>Firma : <Image src={firma}></Image></Text>
export default CartaCompro