class Stores {
  id: number
  image: string
  nota: string
  infos: string[]
  title: string
  description: string

  constructor(
    id: number,
    image: string,
    nota: string,
    infos: string[],
    title: string,
    description: string
  ) {
    this.id = id
    this.image = image
    this.nota = nota
    this.infos = infos
    this.title = title
    this.description = description
  }
}

export default Stores
