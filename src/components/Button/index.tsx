import * as S from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  size?: 'small' | 'big'
  children: string
  disabled?: boolean
}

const Button = ({
  type,
  size = 'small',
  title,
  to,
  onClick,
  children,
  disabled
}: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonContainer
        size={size}
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
