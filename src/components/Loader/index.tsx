import { FadeLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <FadeLoader color={colors.pink} />
  </Container>
)

export default Loader
