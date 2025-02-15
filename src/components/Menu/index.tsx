import * as S from './styles'
import Button from '../Button'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  restaurante: Restaurantes
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
}

const Menu = ({
  restaurante,
  id,
  foto,
  nome,
  descricao,
  preco,
  porcao
}: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(restaurante))
    dispatch(open())
  }
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const { produtoId } = useParams<{ produtoId: string }>()

  const getDescricao = (descricao: string) => {
    if (descricao.length > 240) {
      return descricao.slice(0, 240) + '...'
    }
    return descricao
  }

  useEffect(() => {
    if (produtoId === String(id)) {
      setModalEstaAberto(true)
    }
  }, [produtoId, id])

  return (
    <>
      <S.Card>
        <img src={foto} alt={nome} />
        <S.Titulos>
          <S.Titulo>{nome}</S.Titulo>
        </S.Titulos>
        <S.Text>{getDescricao(descricao)}</S.Text>
        <Button
          onClick={() => setModalEstaAberto(true)}
          size="big"
          type="button"
          title="Clique aqui para conhecer o restaurante"
        >
          Adicionar ao carrinho
        </Button>
      </S.Card>
      <S.Modal className={modalEstaAberto ? 'visivel' : ''}>
        <S.BannerContainer>
          <S.Overlay onClick={() => setModalEstaAberto(false)} />
          <S.Sidebar>
            <button
              onClick={() => setModalEstaAberto(false)}
              className="close"
              type="button"
            />
            <li>
              <div className="geral">
                <img src={foto} alt={nome} />
                <div className="parcial">
                  <h3>{nome}</h3>
                  <p>{descricao}</p>
                  <p className="porcao">{porcao}</p>
                  <Button
                    onClick={addToCart}
                    size="small"
                    type="button"
                    title="Clique para adicionar item ao carrinho"
                  >
                    {`Adicionar ao carrinho - R$ ${preco.toFixed(2)}`}
                  </Button>
                </div>
              </div>
            </li>
          </S.Sidebar>
        </S.BannerContainer>
      </S.Modal>
    </>
  )
}

export default Menu
