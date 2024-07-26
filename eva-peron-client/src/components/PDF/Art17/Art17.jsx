import {
    Document,
    Page,
    Text,
    View,
} from '@react-pdf/renderer';
import { styles } from './Art17-Styles';

export const Art17 = ({ nombre, cargo, dia, mes, año, fechaCompleta }) => {
    return (
        <Document>
            <Page style={styles.page}>
                <Text style={styles.title}>PLANILLA POR ARTICULO N° 17</Text>
                <Text style={styles.nombreYApellido}>APELLIDO Y NOMBRE:   <Text style={styles.nombre}>{nombre}</Text></Text>
                <Text style={styles.cargoQueDesempeña}>CARGO QUE DESEMPEÑA:  <Text style={styles.cargo}>{cargo}</Text></Text>
                <View style={styles.articulo}>
                    <Text style={styles.primeraLinea}>SOLICITO JUSTIFICACIÓN DE INASISTENCIA POR ARTÍCULO N° 17, INCURRIDO EL DÍA</Text><Text style={styles.dia}>{dia}</Text><Text>DEL MES DE</Text><Text style={styles.mes}>{mes}</Text><Text>DEL AÑO</Text><Text style={styles.año}>{año}</Text>
                    
                    <View style={styles.fechaContainer}>
                        <Text style={styles.fechaCompleta}>{fechaCompleta}</Text>
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
