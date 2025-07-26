import { useState } from 'react'
import { Header, Footer, CurrentWeather, HeroSection, Forecast } from './components'
import useweatherData from './hooks/useweatherdata'


function App() {

  const [place, setPlace] = useState('Delhi')

  const { data, isLoading,weatherData } = useweatherData(place)
  
  const time=weatherData?.dt
  const presentTemp=weatherData?.main?.temp 
  

  const dt = time; 
  const totalMilliseconds=new Date(dt*1000)

  const localTime = totalMilliseconds.toLocaleTimeString('en-IN', {
    hour: 'numeric',
  }) 

  const day=totalMilliseconds.toLocaleDateString('en-IN',{
    weekday:'long',
    day:'numeric',
    month:'long',
    year:'numeric'
  }) 

  
  
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <HeroSection place={place} setPlace={setPlace}  />
        <CurrentWeather place={place} data={data} isloading={isLoading} time={localTime} day={day} presentTemp={presentTemp}/>
        <Forecast data={data}/>
        <Footer />
      </div>

    </>
  )
}

export default App
