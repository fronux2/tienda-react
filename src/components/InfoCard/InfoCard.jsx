import './InfoCard.css'
import zyroImage from '../../../../imagenes/zoro-ajustado.png'

export default function InfoCard () {
    return(
        <section className='info-card'>
            <p>Zoro Funk Pop: Arte Amigurumi Tejido a Mano con Espíritu Pop</p>
            <img src={zyroImage} />
            <p>Descubre la esencia única del famoso Zoro en este amigurumi Funk Pop tejido a mano. Con detalles cuidadosamente confeccionados mediante la técnica del crochet, capturamos la esencia del personaje en un estilo vibrante y audaz. Una fusión perfecta entre la artesanía del crochet y la energía del Funk Pop, esta pieza coleccionable añade originalidad y diversión a cualquier espacio.</p>
        </section>)
}