import './InfoCard.css'
import zyroImage from '../../../../imagenes/zoro-amigurumi-removebg-preview.png'

export default function InfoCard () {
    return(
        <section className='info-card'>
            <p>Costuras</p>
            <img src={zyroImage} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic unde quo voluptate pariatur exercitationem, natus quod sed delectus, dolorum ab distinctio,
                 repellat vero culpa. Obcaecati, cumque commodi. Aliquam, laborum.</p>
        </section>)
}