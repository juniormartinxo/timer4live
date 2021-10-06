import styled from 'styled-components/macro'

const AdminBoxStyled = styled.div`
  background-color: #fff;
  color: aquamarine;
  padding: 25px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const ButtonSave = styled.button`
  background-color: aquamarine;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    color: aquamarine;
  }
`

export { AdminBoxStyled, FormControl, ButtonSave }
