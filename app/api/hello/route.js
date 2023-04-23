import Error from 'next/error'

const CustomError = ({ statusCode }) => {
  return <Error statusCode={statusCode} title="This page could not be found" />
}

export default CustomError
