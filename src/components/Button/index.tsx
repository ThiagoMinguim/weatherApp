import { Container, ContainerProps } from './styles'

interface buttonProps extends ContainerProps {
  text?: string
  onClick?: () => void
  rounded?: boolean
  search?: boolean
  children?: React.ReactNode
}

const Button = ({
  text,
  onClick,
  rounded = false,
  search = false,
  children
}: buttonProps) => {
  return (
    <Container onClick={onClick} rounded={rounded} search={search}>
      {children}
      <span>{text}</span>
    </Container>
  )
}

export default Button
