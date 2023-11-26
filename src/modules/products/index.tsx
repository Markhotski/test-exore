import React from 'react'
import FromApiProductsList from './fromApi/ProductsList'
import CreatedProductsList from './custom/ProductsList'
import Toggle from '../../components/Toggle'
import { useSearchParams } from 'react-router-dom'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleChange = () => {
    const tab = searchParams.get('tab')
  
    setSearchParams(prev => (
      new URLSearchParams({
      ...Object.fromEntries(prev.entries()),
      ...{tab: !tab || tab === 'api' ? 'created' : 'api'},
    })))
  }

  const isShowCreated = searchParams.get('tab') === 'created'

  return (
    <>
      <Toggle checked={isShowCreated} labels={['from api', 'created']} onChange={handleChange}/>
      {isShowCreated ? <CreatedProductsList /> : <FromApiProductsList />}
    </>
  )
}
