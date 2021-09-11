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
  font-size: 8rem;

  animation-name: animacaoBolada;
  animation-duration: 5s;
  animation-timing-function: cubic-bezier();
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-play-state: running;

  @keyframes animacaoBolada {
    0% {
      color: black;
    }
    25% {
      color: green;
    }
    50% {
      color: blue;
    }
    75% {
      color: red;
    }
    100% {
      color: yellow;
    }
  }
`
const TimerTextComum = styled.p`
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  font-size: 2.5rem;
`

export { TimerContainer, TimerContainerText, TimerText, TimerTextComum }
