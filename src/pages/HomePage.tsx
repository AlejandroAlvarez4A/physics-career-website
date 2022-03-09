import { Col, Container, Row } from "react-bootstrap";
import CardComponent from "../components/Card/CardComponent";

const HomePage = () => {
    return (
        <Container className="justify-content-md-center">
            <CardComponent />
            <Row className="justify-content-md-center">
                <img src="http://www.fiumsa.edu.bo/LabFisCos_invitacion.jpg" style={{ width: '500px' }} />
                <img src="http://www.fiumsa.edu.bo/jornadas2022.jpg" style={{ width: '500px' }} />
            </Row>
            <Row className="justify-content-md-center">
                <h1>Video Institucional Carrera de Física</h1>
                <video style={{ width: '500px' }} poster="http://www.fiumsa.edu.bo/frontis_edif.jpg" controls >
                    <source src="http://www.fiumsa.edu.bo/FisicaFCPN.mp4" type="video/mp4" />
                </video>
            </Row>
            <Row className="justify-content-md-center">
                <Col><a href="http://www.light2015.org" target="_blank" /><img src="http://www.fiumsa.edu.bo/IYL_logo_ico.jpg" height="30" width="70" />
                    <a href="http://www.fiumsa.edu.bo/Nobel2015/index_nobel.html" target="_blank" /><img src="http://www.fiumsa.edu.bo/Nobel2015/PNF_www.jpeg" height="30" width="70" />
                    <a href="http://www.fiumsa.edu.bo/50anivFCPN/index_fotos50aniv.html" target="_blank" /><img src="http://www.fiumsa.edu.bo/50aniv.jpg" height="30" width="70" />
                    <a href="http://lagobolivia2015.fcyt.umss.edu.bo/" target="_blank" /><img src="http://www.fiumsa.edu.bo/car-lag.jepg" height="30" width="70" />
                    <a href="http://www.fiumsa.edu.bo/iif/gsc/home.html" target="_blank" /><img src="http://www.fiumsa.edu.bo/gsc.jpeg" height="30" width="70" />
                    <a href="http://www.chacaltaya.edu.bo" target="_blank" /><img src="http://www.fiumsa.edu.bo/gfa.jpeg" height="25" width="65" /> </Col>
            </Row>
            <Row className="justify-content-md-center">
                <h1>INFRAESTRUCTURA</h1>
                <p>
                    Para apoyar la Academia, Investigación e Interacción social se cuenta con una división de electrónica, biblioteca especializada, un taller con máquinas y herramientas, y salas audiovisuales con todas las facilidades técnicas para la presentación de tesis, seminarios, conferencias, etc.
                </p>
            </Row>
            <Row className="justify-content-md-center">
                <h1>HISTORIA</h1>
                <p>
                    La Carrera de Física fue creada en 1966, a raíz de las actividades desarrolladas por el Instituto de Investigaciones Físicas y el Laboratorio de Física Cósmica de Chacaltaya desde 1952.
                </p>
            </Row>
            <Row className="justify-content-md-center">
                <h1>REFERENCIAS</h1>
                <ul>
                    <li>
                        Dirección: c. 27 Cota-Cota, Campus Universitario
                    </li>
                    <li>
                        Telefono: 	2792622-2792999
                    </li>
                    <li>
                        Fax: 591-2-2792622
                    </li>
                    <li>
                        E-mail: 	fisica@fiumsa.edu.bo
                    </li>
                    <li>
                        Casilla de correos: 8635 La Paz- Bolivia
                    </li>
                </ul>
            </Row>
            <Row className="justify-content-md-center">
                <a href="http://fcpn.umsa.bo" target="_blank">Facultad de Ciencias Puras y Naturales</a>
            </Row>
        </Container >
    )
}

export default HomePage;
