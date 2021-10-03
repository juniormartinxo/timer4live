import styled from 'styled-components'

const Box = styled.div`
  cursor: grab;
  position: absolute;
  z-index: 9;
  text-align: center;

  &:active {
    cursor: grabbing;
  }
`
export default Box
