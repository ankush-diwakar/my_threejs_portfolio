import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../components/Target'
import Cube from '../components/Cube'
import ReactLogo from '../components/ReactLogo'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'


const Hero = () => {

    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const sizes = calculateSizes(isMobile, isTablet, isSmall);

    return (
        <section className='relative flex flex-col w-full min-h-screen' >
            <div className="flex flex-col w-full gap-3 mx-auto mt-20 sm:mt-36 c-space">
                <p className='text-xl font-medium text-center text-white sm:text-3xl font-generalsans'>Hi, I am Ankush <span className='waving-hand'>👋🏻</span></p>
                <p className='hero_tag text-gray_gradient'>Turning visions into visuals.</p>

                {/* container for three js model */}
                <div className="absolute inset-0 w-full h-full">

                    <Canvas className='w-full h-full'>
                        <Suspense fallback={<CanvasLoader />}>
               
                            <ambientLight intensity={1} />
                            <OrbitControls />
                            <PerspectiveCamera makeDefault position={[0, 0, 27]} />
                            {/* <HeroCamera isMobile={isMobile}> */}
                                <HackerRoom
                                    position={[1.5, -6.9, 2.7]}
                                    rotation={[2.3, 4.7, 1.9]}
                                    scale={isMobile ? 1.2 : 1.6}
                                />
                            {/* </HeroCamera> */}
                            {!isMobile && (
                                <group>
                                    <Target position={sizes.targetPosition} />

                                    <ReactLogo position={sizes.cubePosition} />
                                    <Cube position={sizes.ringPosition} />
                                </group>
                            )}

                            <directionalLight intensity={0.9} position={[10, 10, 10]} />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
            <div className='absolute left-0 right-0 z-10 w-full bottom-7 c-space'>
                <a href="#about" className='w-full'>
                   <Button name='Get in touch' isBeam={true} containerClass='sm:w-fit w-full sm:min-w-96' />
                </a>
            </div>
        </section>
    )
}

export default Hero
