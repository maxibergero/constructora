import React from 'react'
import './Body.css'
import asfalto from './90f7471e31d2a15770862785cb2469f1.jpg'
import proceso from './proceso de pavimentacion.jpg'
import whatsapp from './whatsapp-6273368_1280.webp'


import { Slide } from "react-awesome-reveal";

const Body = () => {
    return (
        <div className='complementario'>

            <div className='body'> 
                <h1>Nosotros</h1>

                <Slide direction="left" duration={3000}><img src={asfalto} alt='imagen de calle asfaltada' /></Slide>

                <Slide direction="right" duration={3000}><p>"Somos una empresa que se dedica a la construcción de pavimentación y cordón cuneta. Te brindamos un servicio a través de la planificación, coordinación y ejecución. Nos basamos en la responsabilidad y el compromiso de crear un nuevo proyecto para el bienestar de la sociedad y así poder brindar un trabajo de calidad que perdure en el tiempo. Desarrollamos cada paso que das y pensamos en tu futuro."</p></Slide>

               
            </div>

            <div className='informacion'>
                <h2>Información Complementaria</h2>
                <p>La pavimentación ocurre cuando se colocan varias capas de diversos materiales sobre el suelo o sobre la terracería. Luego, para llevar a cabo las técnicas para la pavimentación de calles se debe aplicar piedras, ladrillos, asfalto, o diversos elementos que servirán como la superficie de rodamiento.</p>
                
               
                <img src={proceso} alt='proceso de pavimentacion imagen'/>
              
                
            </div>

            <a href='https://wa.me/543512698844' target='blank'><img className='whatsapp' src={whatsapp} alt='logo de whatsapp' /></a>
        </div>
    )
}

export default Body