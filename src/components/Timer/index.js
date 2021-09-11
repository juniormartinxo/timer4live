import {
  TimerContainer,
  TimerContainerText,
  TimerText,
  TimerTextComum,
} from './styles'

function Timer({ timer }) {
  return (
    <TimerContainer>
      <TimerContainerText>
        <TimerTextComum>A live iniciará em</TimerTextComum>
        <TimerText>{timer}</TimerText>
        <TimerTextComum></TimerTextComum>
      </TimerContainerText>
    </TimerContainer>
  )
}

export default Timer
