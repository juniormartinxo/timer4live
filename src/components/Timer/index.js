import React, { useState } from 'react'
import MoveBox from '../MoveBox'
import {
  TimerContainer,
  TimerContainerText,
  TimerText,
  TimerTextComum,
  BoxTransform,
  BoxAdmin,
} from './styles'

function Timer({ timer }) {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  })

  const [visibleBoxAdmin, setVisibleBoxAdmin] = useState('none')

  const handleDragMove = e => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    })
  }

  return (
    <div>
      <TimerContainer>
        <TimerContainerText
          onClick={() => {
            setTranslate(prevState => ({
              x: prevState.x + 1,
              y: prevState.y + 1,
            }))
          }}
        >
          <MoveBox onDragMove={handleDragMove}>
            <BoxTransform
              style={{
                transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
              }}
              onContextMenu={e => {
                e.preventDefault()
                setVisibleBoxAdmin(prevState => {
                  return prevState === 'none' ? 'block' : 'none'
                })
              }}
            >
              <BoxAdmin
                style={{ display: `${visibleBoxAdmin}` }}
                onClick={() => {
                  setVisibleBoxAdmin('none')
                }}
              >
                X
              </BoxAdmin>
              <TimerTextComum>A live iniciará em</TimerTextComum>
              <TimerText>{timer}</TimerText>
            </BoxTransform>
          </MoveBox>
        </TimerContainerText>
      </TimerContainer>
    </div>
  )
}

export default Timer
