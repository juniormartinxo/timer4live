import React, { useState } from 'react'
import { MoveBoxStyled } from './move-box-styles'

function MoveBox(props) {
  const {
    onPointerDown,
    onPointerUp,
    onPointerMove,
    onDragMove,
    children,
    style,
    className,
  } = props

  const [isDragging, setIsDragging] = useState(false)

  const handlePointerDown = e => {
    setIsDragging(true)

    onPointerDown(e)
  }

  const handlePointerUp = e => {
    setIsDragging(false)

    onPointerUp(e)
  }

  const handlePointerMove = e => {
    if (isDragging) onDragMove(e)

    onPointerMove(e)
  }

  return (
    <MoveBoxStyled
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      style={style}
      className={className}
    >
      {children}
    </MoveBoxStyled>
  )
}

MoveBox.defaultProps = {
  onPointerDown: () => {},
  onPointerUp: () => {},
  onPointerMove: () => {},
}

export { MoveBox }
