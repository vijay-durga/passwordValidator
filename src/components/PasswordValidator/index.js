import {useState} from 'react'

import {
  BgCont,
  BgCont2,
  MainHead,
  MainPara,
  MainInput,
  MainError,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const showErrorMessage = password.length < 8

  const onEnterPassword = event => {
    setPassword(event.target.value)
  }

  return (
    <BgCont>
      <BgCont2>
        <MainHead>Password Validator</MainHead>
        <MainPara>Check how strong and secure is your password</MainPara>
        <MainInput
          type="password"
          value={password}
          onChange={onEnterPassword}
        />
        {showErrorMessage && (
          <MainError>Your password must be at least 8 characters</MainError>
        )}
      </BgCont2>
    </BgCont>
  )
}

export default PasswordValidator
