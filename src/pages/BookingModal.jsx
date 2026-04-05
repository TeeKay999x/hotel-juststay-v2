import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

const BookingModal = () => {
  const location = useLocation()
  const form = useRef()

  const [roomType, setRoomType] = useState(location.state?.roomType || 'Executive Room')

  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSending(true)

    emailjs.sendForm(
      'service_w700ku9',
      'template_lgq5hs5',
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
    <section className='min-h-screen bg-[#070b11] pt-32 pb-20 px-[8%] scroll-mt-20 overflow-x-hidden'>
      <div className='max-w-3xl mx-auto bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-800 shadow-2xl'>
        <div className='mb-10'>
          <h1 className='text-3xl font-bold text-white mb-2'>Finalize Your Stay</h1>
          <p className='text-slate-400'>Please provide your details to complete the reservation.</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className='space-y-6'>
          <div className='space-y-2'>
            <label className='text-[10px] font-bold text-slate-500 uppercase ml-2 tracking-widest'>Selected Accomodation</label>
            <select name="room_type" value={roomType} onChange={(e) => setRoomType(e.target.value)} className='w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-emerald-500 font-bold outline-none focus:borderemerald-500 transition-all appearance-none'>
              <option value="Executive Suite">Executive Room</option>
              <option value="Luxury Double">Luxury Double</option>
              <option value="Presidential Villa">Presidential Villa</option>
            </select>
          </div>

          <div>
            <div className='space-y-2'>
              <label className='text-[10px] font-bold text-slate-500 uppercase ml-2 tracking-widest'>
                Your Name
              </label>
              <input type="text" name="from_name" required placeholder="John Doe" className='placeholder-slate-500 w-full bg-slate-950 border border-slate-800  rounded-2xl p-4 text-white outline-none focus:border-emerald-500' />
            </div>

            <div className='space-y-2'>
              <label className='text-[10px] font-bold text-slate-500 uppercase ml-2 tracking-widest'>
                Email Address
              </label>
              <input type="email" name="reply_to" required placeholder="johndoe@gmail.com" className='placeholder-slate-500 w-full bg-slate-950 border border-slate-800  rounded-2xl p-4 text-white outline-none focus:border-emerald-500' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-6'>
            <div className='space-y-2'>
              <label className='text-[10px] font-bold text-slate-500 uppercase ml-2 tracking-widest'>
                Check In
              </label>

              <input type="date" name="check_in" required className='w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white outline-none focus:border-emerald-500' />
            </div>

            <div className='space-y-2'>
              <label className='text-[10px] font-bold text-slate-500 uppercase ml-2 tracking-widest'>
                Check Out
              </label>

              <input type="date" name="check_out" required className='w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white outline-none focus:border-emerald-500' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-6'>
            <div className='space-y-2'>
              <label className='text-[10px] font-bold text-slate-500 uppercase ml-2 tracking-widest'>
                Adults
              </label>
              <input type="number" name="adults" min="1" className='w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white outline-none' />
            </div>

            <div className='space-y-2'>
              <label className='text-[10px] font-bold text-slate-500 uppercase ml-2 tracking-widest'>
                Children
              </label>
              <input type="number" name="children" min="0" className='w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white outline-none' />
            </div>
          </div>

          <div className='space-y-2'>
            <label className='text-[10px] font-bold text-slate-500 uppercase ml-2 tracking-wide'>Special Requests</label>
            <textarea name="message" rows="4" placeholder='Anything else we should know?' className='w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white outline-none focus:border-emerald-500 resize-none placeholder-slate-500'></textarea>
          </div>

          <button type='submit' disabled={isSending} className='w-full bg-emerald-500 hover:bg-emerald-400 py-5 rounded-xl font-bold text-slate-950 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer'>
            {isSending ? 'Sending Message...' : 'Send Message'}
          </button>
          {status === 'success' && <p className='text-emerald-500 text-center font-medium mt-4'>✅ Message sent successfully.</p>}
          {status === 'error' && <p className='text-red-500 text-center font-medium mt-4'>✖️ Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}

export default BookingModal