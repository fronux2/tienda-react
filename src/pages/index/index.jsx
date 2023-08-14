import './index.css'
import ProductCard from '../../components/ProductCard/ProductCard';
import InfoCard from '../../components/InfoCard/InfoCard.jsx';
import { Fragment } from 'react';
// En el archivo 'IndexPage.jsx'
const IndexPage = () => {
    return (
        <div>
            <nav className="flex-nav">
                <section className='section-name'><a>NewWord</a></section>
                <ul className='nav-list'>
                    <li>dd</li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Contacto</a></li>
                    <li><a href="/">Tienda</a></li>
                </ul>
            </nav>
            <section className="section-index">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </section>
            <section className='section-info'>               
                <InfoCard/>
                <InfoCard/>
                <InfoCard/>
            </section>
        </div>

        
    );
};

export default IndexPage;