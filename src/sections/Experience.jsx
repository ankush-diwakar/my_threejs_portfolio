import { Canvas } from '@react-three/fiber'
import React, { Suspense, useRef, useState } from 'react'
import { workExperiences } from '../constants'
import { OrbitControls } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
import DeveloperModelAnimated from '../components/DeveloperModelAnimated'


const Experience = () => {
    const [animation, setAnimation] = useState('idle');
    return (
        <section className="my-20 c-space" id="work" >
            <div className="w-full text-white-600">
                <h3 className="head-text">My Work Experience</h3>
                <div className="work-container">
                    <div className="work-canvas">
                        <Canvas>
                            <ambientLight intensity={7} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <directionalLight position={[10, 10, 10]} intensity={1} />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                            <Suspense fallback={<CanvasLoader />}>
                                <DeveloperModelAnimated animationName={animation} position-y={-3} scale={3} />
                            </Suspense>

                        </Canvas>
                    </div>
                    <div className="work-content">
                        <div className="py-5 sm:py-10 sm:px-5 px-2.5">
                            {workExperiences.map(({ id, name, pos, duration, title, animation, icon }) => (
                                <div key={id} className='work-content_container group'
                                    onClick={() => setAnimation(animation.toLowerCase())}
                                    onPointerOver={() => setAnimation(animation.toLowerCase())}
                                    onPointerOut={() => setAnimation('idle')}
                                >
                                    <div className="flex flex-col items-center justify-start h-full py-2">
                                        <div className='work-content_logo'>
                                            <img src={icon} alt="logo" className='w-full h-full' />
                                        </div>
                                        <div className='work-content_bar' />

                                    </div>
                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className='font-bold text-white-800'>{name}</p>
                                        <p className="mb-5 text-sm">{pos} ~ {duration}</p>
                                        <p className='duration-500 ease-in-out group-hover:text-white transiton'>{title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
