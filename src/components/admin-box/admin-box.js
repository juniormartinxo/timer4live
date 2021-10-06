import { AdminBoxStyled, FormControl, ButtonSave } from './admin-box-styles'

function AdminBox({ setVisibleAdminBox, visibleAdminBox }) {
  const handleClick = () => {
    setVisibleAdminBox('none')
  }
  return (
    <AdminBoxStyled style={{ display: `${visibleAdminBox}` }}>
      <FormControl>
        <input type='text' />
      </FormControl>
      <FormControl>
        <input type='text' />
      </FormControl>
      <FormControl>
        <ButtonSave onClick={handleClick}>Salvar</ButtonSave>
      </FormControl>
    </AdminBoxStyled>
  )
}

export { AdminBox }
