import React from 'react'
import './Footers.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';


import marca from './33333333333.png'

const Footers = () => {
  return (
    <div className='footers' >
        
        <img src={marca} alt='logo de la marca'/>

        <div className='redSocial'>        
        
        <h3>Red Social</h3>
      <a href='https://www.instagram.com/maximiliano_541/' target='blank'><InstagramIcon style={{fontSize: 30 , margin:10 ,color:'red' }}/></a> 
        </div>

        <div className='phone'>        
        <PhoneAndroidIcon style={{fontSize: 30 , margin:10 , color:'#00e676'}}/>
        <h3 style={{color:'white'}}>3512698844</h3>
        </div>
        
    </div>
  )
}

export default Footers