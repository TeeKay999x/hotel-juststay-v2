
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactUs = () => {
    const form = useRef()
    const [isSending, setIsSending] = useState(false)
    const [status, setStatus] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()
        setIsSending(true)

        emailjs.sendForm(
            'service_w700ku9',
            'template_t1j8izw',
            form.current, {
            publicKey: 'nDjzVE_79vgWAOHKM'
        }
        )
            .then(() => {
                setStatus('success')
                setIsSending(false)
                form.current.reset()
            }, (error) => {
                setStatus('error')
                setIsSending(false)
            })
    }

    return (
        <section className='min-h-screen bg-[#0a0f16] pt-32 pb-20 px-[8%]'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16'>
                <div className='space-y-8'>
                    <div>
                        <span className='text-emerald-500 uppercase tracking-widest text-xs font-bold block mb-4'>
                            Get In Touch
                        </span>
                        <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>Let's Plan Your <span className='text-emerald-500'>Perfect Stay.</span></h1>
                        <p className='text-slate-400 text-lg leading-relaxed'>Have questions about our room or services in Rivers State? Reach out and our team will get back to you shortly.</p>
                    </div>

                    <div className='space-y-6'>
                        <div className='flex items-center gap-4 text-white p-6 bg-slate-900/50 rounded-2xl border border-slate-800'>
                            <span className='text-2xl'>📍</span>

                            <div>
                                <h4 className='font-bold text-sm uppercase text-slate-500'>Location</h4>
                                <p>Rivers State, Nigeria</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 text-white p-6 bg-slate-900/50 rounded-2xl border border-slate-800'>
                            <span className='text-2xl'>📞</span>

                            <div>
                                <h4 className='font-bold text-sm uppercase text-slate-500'>Phone</h4>
                                <p>+234 000 000 0000</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 text-white p-6 bg-slate-900/50 rounded-2xl border border-slate-800'>
                            <span className='text-2xl'>📧</span>
                            <div>
                                <h4 className='font-bold text-sm uppercase text-slate-500'>Email</h4>
                                <p>info@juststay.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-slate-900 p-8 md:p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl'>
                    <form className='space-y-5' ref={form} onSubmit={sendEmail}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className='space-y-2'>
                                <label className='text-xs font-bold text-slate-500 uppercase ml-2'>Your Name</label>
                                <input type="text" name="from_name" required className='w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:border-emerald-500 outline-none transition-all placeholder-slate-600' placeholder='John Doe' />
                            </div>
                            <div className='space-y-2'>
                                <label className='text-xs font-bold text-slate-500 uppercase ml-2'>Email Address</label>
                                <input type="email" name="reply_to" required className='w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:border-emerald-500 outline-none transition-all placeholder-slate-600' placeholder='johndoe@gmail.com' />
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <label className='text-xs font-bold text-slate-500 uppercase ml-2'>Message</label>
                            <textarea name="message" rows="5" className='w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:border-emerald-500 outline-none placeholder-slate-600' placeholder='Tell us about your planned visit...'></textarea>
                        </div>

                        <button type='submit' disabled={isSending} className='w-full bg-emerald-500 hover:bg-emerald-400 py-5 rounded-xl font-bold text-slate-950 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer'>
                            {isSending ? 'Sending Message...' : 'Send Message'}
                        </button>
                        {status === 'success' && <p className='text-emerald-500 text-center font-medium mt-4'>✅ Message sent successfully.</p>}
                        {status === 'error' && <p className='text-red-500 text-center font-medium mt-4'>✖️ Something went wrong. Please try again.</p>}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactUs