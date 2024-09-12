import React from 'react'
import { clientReviews } from '../constants'


const Testimonials = () => {
    return (
        <section className="my-20 c-space">
            <h3 className="head-text">
            What My Peers Say
            </h3>
            <div className="client-container">
                {clientReviews.map(({ id, name, img, position,review}) => (
                    <div key={id} className='client-review'>
                        <div>
                            <p className='text-white fontlight'>{review}</p>
                            <div className='client-content'>
                                <div className="flex gap-3">
                                        <img src={img} alt={name} className='w-12 h-12 rounded-full'/>
                                        <div className='flex flex-col'>
                                            <p className="font-semibold text-white-800">{name}</p>
                                            <p className='text-sm font-light text-white-500 md:text-base'>{position}</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials
