import React,{useEffect} from 'react'
import { Typography, Table} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { pokeData } from '../Components/Actions/PokeAction'

export default function DummyPage() {
  const dispatch = useDispatch()
  const pokesData = useSelector(state => state.pokesData)
  const {products } = pokesData

  useEffect(()=>{
    dispatch(pokeData())
    console.log(products.title)
  },[dispatch])

  return (
    <div>
        <Typography.Title level={4}>Products List</Typography.Title>
        <Table
    columns={[
        {
        title:"Title",
        dataIndex:"title",

    },
        {
        title:"Description",
        dataIndex:"description",

    },
        {
        title:"Price",
        dataIndex:"price",

    },
    {
      title:"Brand",
      dataIndex:"brand",

  },
    {
      title:"Action",
      dataIndex: 'id',
      key: 'id',
      render: (id) => <Link to={`/product/${products.id}`} >view</Link>

  }
    ]}
     
    dataSource={products.products}
    pagination={true}
    >
    </Table>
    </div>
  )
}
