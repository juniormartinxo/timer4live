import { Timer } from './components/timer'
import GlobalStyle from './global-styles'
import { useState, useEffect } from 'react'

function App() {
  const [timer, setTimer] = useState('33:00')
  const [minutes, setMinutes] = useState(timer.split(':')[0])
  const [seconds, setSeconds] = useState(timer.split(':')[1])

  useEffect(() => {
    const interval = setInterval(() => {
      const newSeconds =
        Number(seconds) - 1 < 0 ? Number(59) : Number(seconds) - 1

      const newMinute =
        Number(seconds) === 59 && Number(minutes) > 0
          ? Number(minutes) - 1
          : Number(minutes)

      setSeconds(newSeconds)

      setMinutes(newMinute)

      setTimer(
        `${newMinute.toString().padStart(2, '0')}:${seconds
          .toString()
          .padStart(2, '0')}`,
      )

      if (minutes === Number(0) && seconds === Number(0)) {
        setSeconds(0)
        setMinutes(0)
        setTimer('00:00')
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [timer, minutes, seconds])

  return (
    <>
      <Timer
        timer={timer}
        setTimer={setTimer}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />
      <GlobalStyle />
    </>
  )
}

export default App
