import React from 'react'

function HeroSection({
  place,
  setPlace
}) {
  return (
    <section className=' flex flex-col items-center bg-gradient-to-r from-blue-600 to-blue-400'>
      <div className='text-center mt-14 p-6'>
        <div className=''>
          <h1
            className='font-bold text-4xl text-white'
          >Your Weather, Anywhere,Anytime</h1>
          <p
            className=' text-white my-2'
          >Get accurate weather forecasts for any location. Plan your day <span className='md:block'> with confidence</span></p>
        </div>
        <div className='bg-white border-2 flex border-white rounded-sm max-w-xl p-2 justify-evenly '>
          <input
            className='capitalize text-black placeholder-gray/70 focus:outline-none w-full border-none bg-transparent'
            type="text"
            placeholder='Enter City/Country Name'
            autoCapitalize='words'
            value={place}
            onChange={(e)=>setPlace(e.target.value)}
            />
          <img
            className='h-6 w-6 cursor-pointer'
            src="https://img.icons8.com/?size=100&id=59878&format=png&color=22C3E6" alt="search icon" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection