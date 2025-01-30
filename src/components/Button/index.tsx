import * as S from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  disabled?: boolean
}

const Button = ({ type, title, to, onClick, children, disabled }: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
