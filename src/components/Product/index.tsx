import Button from '../Button'
import Tag from '../Tag'
import { Avaliacao, Card, Titulo, Titulos, Text, Infos } from './styles'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  nota: string
}

const Product = ({ title, description, infos, image, nota }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulos>
      <Titulo>{title}</Titulo>
      <Avaliacao>
        <Titulo>4.6</Titulo>
        <img src={nota} />
      </Avaliacao>
    </Titulos>
    <Text>{description}</Text>
    <Button
      type="link"
      to="/perfil"
      title="Clique aqui para conhecer o restaurante"
    >
      Saiba mais
    </Button>
  </Card>
)

export default Product
