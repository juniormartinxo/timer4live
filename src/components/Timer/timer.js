import React, { useState } from 'react'
import { MoveBox } from '../move-box'
import { AdminBox } from '../admin-box'
import {
  TimerContainer,
  TimerContainerText,
  TimerText,
  TimerTextComum,
  BoxTransform,
} from './timer-styles'

///import * as Icon from '../../resources/ui/icons'

function Timer({ timer }) {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  })

  const [visibleAdminBox, setVisibleAdminBox] = useState('none')

  const handleDragMove = e => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    })
  }

  const handleMouseHover = () => {
    setVisibleAdminBox(() => {
      return visibleAdminBox === 'none' ? 'block' : 'none'
    })
  }

  return (
    <>
      <TimerContainer>
        <TimerContainerText>
          <AdminBox
            visibleAdminBox={visibleAdminBox}
            setVisibleAdminBox={setVisibleAdminBox}
          ></AdminBox>
          <MoveBox onDragMove={handleDragMove}>
            <BoxTransform
              style={{
                transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
              }}
              onContextMenu={e => {
                e.preventDefault()
                handleMouseHover()
                console.log('context menu')
              }}
            >
              <TimerTextComum>A live vai começar em</TimerTextComum>
              <TimerText>{timer}</TimerText>
            </BoxTransform>
          </MoveBox>
        </TimerContainerText>
      </TimerContainer>
    </>
  )
}

export { Timer }
