// import { useFormik } from 'formik'
// import Card from '../../components/Card'

// import * as S from './styles'
// import * as Yup from 'yup'
// import { usePurchaseMutation } from '../../services/api'

// const Delivery = () => {
//   const form = useFormik({
//     initialValues: {
//       fullName: '',
//       description: '',
//       city: '',
//       zipCode: '',
//       number: '',
//       complement: ''
//     },
//     onSubmit: (values) => {
//       purchase({
//          delivery: {
//           receiver: values.fullName,
//           address: {
//             descripition: values.description,
//             city: values.city,
//             zipCode: values.zipCode,
//             number: values.number,
//             complement: values.complement,
//           }
//         },

//     validationSchema: Yup.object({
//       fullName: Yup.string()
//         .min(5, 'O nome precisa ter pelo menos 5 caracteres')
//         .required('O campo é obrigatório'),
//       address: Yup.string()
//         .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
//         .required('O campo é obrigatório'),
//       city: Yup.string()
//         .min(5, 'A cidade precisa ter pelo menos 5 caracteres')
//         .required('O campo é obrigatório'),
//       zipCode: Yup.string()
//         .min(10, 'A cidade precisa ter pelo menos 5 caracteres')
//         .max(10, 'A cidade precisa ter pelo menos 5 caracteres')
//         .required('O campo é obrigatório')
//     }),
//     onSubmit: (values) => {
//       console.log(values)
//     }
//   })

//   const getErrorMessage = (fieldName: string, message?: string) => {
//     const isTouched = fieldName in form.touched
//     const isInvalid = fieldName in form.errors

//     if (isTouched && isInvalid) return message
//     return ''
//   }

//   return (
//     <form onSubmit={form.handleSubmit} className="container">
//       <Card title="Engrega">
//         <S.Row>
//           <S.InputGroup maxWidth="344px">
//             <label htmlFor="fullName">Quem irá receber</label>
//             <input
//               id="fullName"
//               type="text"
//               name="fullName"
//               value={form.values.fullName}
//               onChange={form.handleChange}
//               onBlur={form.handleBlur}
//             />
//             <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
//           </S.InputGroup>
//           <S.InputGroup maxWidth="344px">
//             <label htmlFor="description">Endereço</label>
//             <input
//               id="description"
//               type="text"
//               name="description"
//               value={form.values.description}
//               onChange={form.handleChange}
//               onBlur={form.handleBlur}
//             />
//             <small>{getErrorMessage('description', form.errors.description)}</small>
//           </S.InputGroup>
//           <S.InputGroup maxWidth="344px">
//             <label htmlFor="city">Cidade</label>
//             <input
//               id="city"
//               type="text"
//               name="city"
//               value={form.values.city}
//               onChange={form.handleChange}
//               onBlur={form.handleBlur}
//             />
//             <small>{getErrorMessage('city', form.errors.city)}</small>
//           </S.InputGroup>
//           <S.InputGroup maxWidth="155px">
//             <label htmlFor="zipCode">Cep</label>
//             <input
//               id="zipCode"
//               type="text"
//               name="zipCode"
//               value={form.values.zipCode}
//               onChange={form.handleChange}
//               onBlur={form.handleBlur}
//             />
//             <small>{getErrorMessage('zipCode', form.errors.zipCode)}</small>
//           </S.InputGroup>
//           <S.InputGroup maxWidth="155px">
//             <label htmlFor="number">Número</label>
//             <input
//               id="number"
//               type="number"
//               name="number"
//               value={form.values.number}
//               onChange={form.handleChange}
//               onBlur={form.handleBlur}
//             />
//             <small>{getErrorMessage('number', form.errors.number)}</small>
//           </S.InputGroup>
//           <S.InputGroup maxWidth="344px">
//             <label htmlFor="complement">Complemento (opcional)</label>
//             <input
//               id="complement"
//               type="text"
//               name="complement"
//               value={form.values.complement}
//               onChange={form.handleChange}
//               onBlur={form.handleBlur}
//             />
//             <small>
//               {getErrorMessage('complement', form.errors.complement)}
//             </small>
//           </S.InputGroup>
//           <button type="button" title="Clique aqui para pagamento">
//             Continuar com o pagamento
//           </button>
//           <button type="button" title="Clique aqui para voltar para o carrinho">
//             Voltar para o carrinho
//           </button>
//         </S.Row>
//       </Card>
//     </form>
//   )
// }

// export default Delivery
