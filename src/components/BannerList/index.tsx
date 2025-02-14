import Banner from '../Banner'

export type Props = {
  restaurante: Restaurantes
}

const BannerList = ({ restaurante }: Props) => {
  return (
    <>
      {restaurante && (
        <Banner
          key={restaurante.id}
          capa={restaurante.capa}
          tipo={restaurante.tipo}
          titulo={restaurante.titulo}
        />
      )}
    </>
  )
}

export default BannerList
