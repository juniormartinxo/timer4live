import styled from 'styled-components'

const TimerContainer = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  gap: 0px 0px;
  grid-template-areas: 'TimerContainerText';
  height: 100vh;
  width: 100vw;
`

const TimerContainerText = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
`

const TimerText = styled.p`
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  font-size: 6rem;
`
const TimerTextComum = styled.p`
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  font-size: 2rem;
`

export { TimerContainer, TimerContainerText, TimerText, TimerTextComum }
