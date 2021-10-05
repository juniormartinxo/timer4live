import React, { useState } from 'react'
import { Box } from './styles'

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
    <Box
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      style={style}
      className={className}
    >
      {children}
    </Box>
  )
}

MoveBox.defaultProps = {
  onPointerDown: () => {},
  onPointerUp: () => {},
  onPointerMove: () => {},
}

export default MoveBox
