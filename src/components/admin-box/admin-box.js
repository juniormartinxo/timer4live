import { useState } from 'react'
import { AdminBoxStyled, FormControl, ButtonSave } from './admin-box-styles'

function AdminBox({
  setVisibleAdminBox,
  visibleAdminBox,
  title,
  setTitle,
  setTimer,
  setMinutes,
  setSeconds,
}) {
  const [newTimer, setNewTimer] = useState('00:00')

  const handleClick = () => {
    setVisibleAdminBox('none')
    setTimer(newTimer)

    setMinutes(newTimer.split(':')[0])
    setSeconds(newTimer.split(':')[1])
  }
  return (
    <AdminBoxStyled style={{ display: `${visibleAdminBox}` }}>
      <FormControl>
        <input
          type='text'
          value={title}
          onChange={event => {
            setTitle(event.target.value)
          }}
        />
      </FormControl>
      <FormControl>
        <input
          type='time'
          value={newTimer}
          onChange={event => {
            setNewTimer(event.target.value)
          }}
        />
      </FormControl>
      <FormControl>
        <ButtonSave onClick={handleClick}>Salvar</ButtonSave>
      </FormControl>
    </AdminBoxStyled>
  )
}

export { AdminBox }
