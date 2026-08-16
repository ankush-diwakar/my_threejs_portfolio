import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
const ContactMe = () => {
    const formRef = useRef(null);

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = ({ target: { name, value } }) => {
        setFormState({ ...formState, [name]: value });
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send(
                'service_r2kfuyw',
                'template_c8e0pqt',
                {
                    from_name: formState.name,
                    to_name: 'Ankush Diwakar',
                    from_email: formState.email,
                    to_email: formState.email,
                    message: formState.message
                },
                'tGbdcveBFso_CYwql'
            )
            setLoading(false);
            alert('Message sent successfully');
            setFormState({
                name: '',
                email: '',
                message: ''
            })

        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong, please try again later');

        }
    }
    return (
        <section className="my-10 c-space" id='contact'>
            <div className="relative flex flex-col items-center justify-center min-h-screen">
                <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-[80vh]" />

                <div className="contact-container">

                    <h3 className="head-text">Let's talk</h3>
                    <p className="mt-3 text-lg text-white-600">
                        Got Questions? Let's Find the Answers Together.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col mt-12 space-y-7 '>
                        <label className='space-y-3'>
                            <span className="field-label">Full name</span>
                            <input
                                type="text"
                                name='name'
                                value={formState.name}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='Your good name'

                            />
                        </label>
                        <label className='space-y-3'>
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name='email'
                                value={formState.email}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='xyx@gmail.com'

                            />
                        </label>
                        <label className='space-y-3'>
                            <span className="field-label">Your message</span>
                            <textarea
                                type="text"
                                name='message'
                                value={formState.message}
                                onChange={handleChange}
                                required
                                rows={3}
                                className='field-input'
                                placeholder='Hi, I would like to offer you a job :)'

                            />
                        </label>
                        <button className='field-btn' type='submit' disabled={loading}>
                            {loading ? 'Sending...' : 'Send message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactMe
