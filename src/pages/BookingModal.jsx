import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import emailjs from '@emailjs/browser'

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
      form.current,
      'nDjzVE_79vgWAOHKM'
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
    <section className='min-h-screen bg-[#070b11] pt-32 pb-20 px-[8%] scroll-mt-20'>
      <div className='max-w-3xl mx-auto bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-800 shadow-2xl'>
        <h1 className='text-3xl font-bold text-white mb-8'>Finalize Your Stay</h1>
        <form ref={form} onSubmit={sendEmail} className='space-y-6'>
          <div className='space-y-2'>
            <label className='text-[10px] font-bold text-slate-500 uppercase tracking-widest'>Accommodation</label>
            <select name="room_type" value={roomType} onChange={(e) => setRoomType(e.target.value)} className='w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-emerald-500 font-bold outline-none'>
              <option value="Executive Suite">Executive Suite</option>
              <option value="Luxury Double">Luxury Double</option>
              <option value="Presidential Villa">Presidential Villa</option>
            </select>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <input type="text" name="from_name" placeholder="Name" required className='w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white outline-none' />
            <input type="email" name="reply_to" placeholder="Email" required className='w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white outline-none' />
          </div>
          <div className='grid grid-cols-2 gap-6'>
            <div className='space-y-1'>
              <label className='text-[10px] text-slate-500 uppercase'>Check-In</label>
              <input type="date" name="check_in" required className='w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white outline-none' />
            </div>
            <div className='space-y-1'>
              <label className='text-[10px] text-slate-500 uppercase'>Check-Out</label>
              <input type="date" name="check_out" required className='w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white outline-none' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-6'>
            <div className='space-y-2'>
              <label className='text-[10px] font-bold text-slate-500 uppercase ml-2 tracking-widest'>Adults (18+)</label>
              <input type="number" name="adults" placeholder="Adults" min="1" defaultValue="1" className='w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white outline-none focus:border-emerald-500 transition-all' />
            </div>

            <div className='space-y-2'>
              <label className='text-[10px] font-bold text-slate-500 uppercase ml-2 tracking-widest'>Children</label>
              <input type="number" name="children" placeholder="Children" min="0" defaultValue="0" className='w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white outline-none focus:border-emerald-500 transition-all' />
            </div>

          </div>
          <textarea name="message" rows="4" placeholder="Special Requests" className='w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white outline-none resize-none'></textarea>
          <button type='submit' disabled={isSending} className='w-full bg-emerald-500 hover:bg-emerald-400 py-5 rounded-xl font-bold text-slate-950 transition-all cursor-pointer'>
            {isSending ? 'Sending...' : 'Confirm Booking'}
          </button>
          {status === 'success' && <p className='text-emerald-500 text-center'>✅ Reservation Sent!</p>}
        </form>
      </div>
    </section>
  )
}
export default BookingModal