import { useState } from 'react'
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

function Timer({ timer, setTimer, setMinutes, setSeconds }) {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  })

  const [visibleAdminBox, setVisibleAdminBox] = useState('none')

  const [title, setTitle] = useState('A live vai começar em')

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
            title={title}
            setTitle={setTitle}
            setTimer={setTimer}
            setMinutes={setMinutes}
            setSeconds={setSeconds}
          ></AdminBox>
          <MoveBox
            onDragMove={handleDragMove}
            style={{
              transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
            }}
          >
            <BoxTransform
              onContextMenu={e => {
                e.preventDefault()
                handleMouseHover()
              }}
              onDragEnd={() => {
                console.log('saiu')
              }}
            >
              <TimerTextComum>{title}</TimerTextComum>
              <TimerText>{timer}</TimerText>
            </BoxTransform>
          </MoveBox>
        </TimerContainerText>
      </TimerContainer>
    </>
  )
}

export { Timer }
