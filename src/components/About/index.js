import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faSwift } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass ] = useState('text-animate')

    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 4000)
    //   }, [])

    return(    
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am very persistent in my profession as a developer. 
                    I always want to learn more and face new challenges and projects.
                </p>
                <p>
                    I am a reliable person who likes things to turn out in the best possible way. I strive for excellence and fairness, 
                    which is why you can always expect my utmost dedication to your project.
                </p>
                <p>
                    I love football, plants, and FIFA. I enjoy connecting with nature, 
                    and I would love to plant a tree in every country in the world.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color ='#F06529' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color ='#28A4D9' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJsSquare} color ='#EFD81D' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color ='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color ='#EC4D28' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faSwift} color ='#DD0031' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type ='pacman' />
        </>
    )
}   

export default About