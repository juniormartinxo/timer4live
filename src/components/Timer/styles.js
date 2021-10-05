import styled from 'styled-components/macro'

const TimerContainer = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  gap: 0px 0px;
  grid-template-areas: 'TimerContainerText';
  height: 100vh;
  width: 100vw;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
  text-align: center;

  animation-name: animacaoBolada;
  animation-duration: 15s;
  animation-timing-function: cubic-bezier();
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-play-state: running;

  @keyframes animacaoBolada {
    0% {
      color: #9900cc;
    }
    25% {
      color: #cc3300;
    }
    50% {
      color: #009acc;
    }
    75% {
      color: #9acc00;
    }
    100% {
      color: #cc0035;
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
  color: #fff;
`

const BoxAdmin = styled.div`
  background-color: bisque;
  top: -80px;
  position: absolute;
  margin: 0 auto;
  padding: 8px;
  border-radius: 100%;
  cursor: pointer;
`

const BoxTransform = styled.div`
  display: block;
  float: left;
`

export {
  TimerContainer,
  TimerContainerText,
  TimerText,
  TimerTextComum,
  BoxTransform,
  BoxAdmin,
}
