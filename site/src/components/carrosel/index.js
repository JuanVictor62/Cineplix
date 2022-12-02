import './index.scss';
import '../../assets/common/index.scss'
import { Link } from 'react-router-dom';
import Banner from '../../assets/img/Banner-Adão-Negro.jpg'
import Banner2 from '../../assets/img/Banner-Noite-Infeliz.jpg'
import Banner3 from '../../assets/img/Banner-Orfa-2.jpg'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Index() {


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1// optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    return (
        <main className='main-carrossel-landingPage'>
            <Carousel
                autoPlaySpeed={1500}
                infinite={true} responsive={responsive}>

                <div className='slides'>
                    <img className='img-01' src={Banner}  alt='imagem-carrossel' />
                </div>

                <div className='slides-2' >
                    <img className='img-02' src={Banner2} alt='imagem-carrossel' />
                </div>

                <div className='slides-3' >
                    <img className='img-03' src={Banner3} alt='imagem-carrossel' />    
                </div>
            </Carousel>;
        </main>
    );
}