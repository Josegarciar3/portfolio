import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useRef, useState } from 'react'
import  emailjs  from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass  ] = useState('text-animate')
    const refForm = useRef ()

    // const [letterClass, setLetterClass ] = useState('text-animate')
    

    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 4000)
    //   }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'icloud',
            'template_574d27p',
            refForm.current,
            '1J3PxUh0jFHmfIezR'        
        )
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
    }

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in new freelance challenges, However, if you have one idea on mind 
                        or any request, dont hesitate to contact me.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>

                    </div>
                
                    
                   
                </div>
                <div className='info-map'>
                    Jose Garcia,
                    <br />
                    EEUU,
                    <br />
                    5345 Stevens Creek, 95014 <br />
                    Cupertino <br />
                    <span>josegarciar3@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[44.96366, 19.61045]}>
                            <Popup>Jose lives here. :) </Popup>
                        </Marker>
                    </MapContainer>
                </div>                    
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact