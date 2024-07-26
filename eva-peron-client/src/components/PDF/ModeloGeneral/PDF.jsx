import {
    Document,
    Page,
    Text,
    View,
} from '@react-pdf/renderer';
import { styles } from './PDF-Styles';

export const PDF = (datos) => {
    return (
        <Document>
            <Page style={styles.page}>
                <Text style={styles.title}>PLANILLA POR ARTICULO N° 30</Text>
                <Text style={styles.nombreYApellido}>APELLIDO Y NOMBRE:   <Text style={styles.nombre}>Neder Jorge</Text></Text>
                <Text style={styles.cargoQueDesempeña}>CARGO QUE DESEMPEÑA:  <Text style={styles.cargo}>Catedrático</Text></Text>
                <View style={styles.articulo}>
                    <Text style={styles.primeraLinea}>SOLICITO JUSTIFICACIÓN DE INASISTENCIA POR ARTÍCULO N° 30, INCURRIDO EL DÍA</Text> <Text style={styles.dia}>JUEVES 7</Text>  <Text>DEL MES DE</Text>  <Text style={styles.mes}>JULIO</Text>  <Text>DEL AÑO</Text>  <Text style={styles.año}>2024</Text>
                    
                    <View style={styles.fechaContainer}>
                        <Text style={styles.fechaCompleta}>07/07/2024</Text>
                        <Text style={styles.fechaTitulo}>FECHA</Text>
                    </View>

                    <Text style={styles.saludo}>SALUDO A UD. ATENTAMENTE.</Text>

                    <View style={styles.solicitanteContainer}>
                        <Text style={styles.solicitanteFirmaTitulo}>FIRMA DEL SOLICITANTE</Text>
                    </View>
                    <View style={styles.selloAutoridadContainer}>
                        <View style={styles.selloContainer}>
                            <Text style={styles.autoridadSelloTitulo}>SELLO</Text>
                        </View>

                        <View style={styles.autoridadContainer}>
                            <Text style={styles.autoridadFirmaTitulo}>FIRMA AUTORIDAD COMPETENTE</Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}
