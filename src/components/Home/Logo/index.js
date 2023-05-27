import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import Foto from '../../../assets/images/jose.jpg'
// import LogoS from '../../../assets/images/logo-jose2.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  
  const solidLogoRef = useRef()

  useEffect(() => {
    

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 2,
        opacity: 1,
      })
      

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img className='foto'
        src={Foto}   
        alt='web developer'
      />

     
    </div>
  )
}

export default Logo
