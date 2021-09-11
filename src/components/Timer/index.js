import React, { useState } from 'react'
import MoveBox from '../MoveBox'
import {
  TimerContainer,
  TimerContainerText,
  TimerText,
  TimerTextComum,
} from './styles'

function Timer({ timer }) {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  })

  const handleDragMove = e => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    })
  }

  return (
    <TimerContainer>
      <TimerContainerText>
        <MoveBox onDragMove={handleDragMove}>
          <div
            style={{
              transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
            }}
          >
            <TimerTextComum>A live iniciará em</TimerTextComum>
            <TimerText>{timer}</TimerText>
          </div>
        </MoveBox>
      </TimerContainerText>
    </TimerContainer>
  )
}

export default Timer
