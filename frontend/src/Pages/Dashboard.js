import { DollarCircleOutlined ,ShoppingCartOutlined,ShoppingOutlined, UserOutlined } from '@ant-design/icons'
import { Card, Space, Statistic, Table, Typography, Row, Col } from 'antd'
import {useDispatch, useSelector} from "react-redux"
import { revenueList } from '../Components/Actions/ChartActions'
import { orderList } from '../Components/Actions/OrderAction'
import React, { useEffect, useState } from 'react'
import { getRevenue } from '../API/APIData'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  ;
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export default function Dashboard() {
  return (
    <div className='dashboard'>
        <Space size={1} direction='vertical' xs={20} sm={16} md={12} lg={8} xl={4}>
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Row className='dashboard_cards' >
          <Col xs={20} sm={16} md={12} lg={8} xl={4} >
          <DashboardCard  icon={<ShoppingCartOutlined
            style={{color:"green",
            backgroundColor:"rgba(0,255,0,0.25)",
            fontSize:20,
            borderRadius:20,
            padding:8
        }}
           /> } title={"Orders"} values={12345}></DashboardCard>
          </Col>

          <Col xs={20} sm={16} md={12} lg={8} xl={4} >
            
          <DashboardCard 
            icon={ <ShoppingOutlined
                style={{color:"blue",
                backgroundColor:"rgba(0,0,255,0.25)",
                fontSize:20,
                borderRadius:20,
                padding:8
           }}
            />} title={"Inventry"} values={1785} >
            </DashboardCard>

          </Col>


          <Col xs={20} sm={16} md={12} lg={8} xl={4}>
          <DashboardCard 
            icon={ <UserOutlined
                style={{color:"purple",
                backgroundColor:"rgba(0,255,255,0.25)",
                fontSize:20,
                borderRadius:20,
                padding:8
           }}
            />}title={"Customers"} values={1233} >
            </DashboardCard>

          </Col>

          <Col xs={20} sm={16} md={12} lg={8} xl={4}>
           
          <DashboardCard
            icon={<DollarCircleOutlined
                style={{color:"red",
                backgroundColor:"rgba(255,0,0,0.25)",
                fontSize:20,
                borderRadius:20,
                padding:8
             }}
            />} title={"Revenue"} values={1233}>
             </DashboardCard>

          </Col>
        </Row>
       

        <Space >
          <Row xs={20} sm={16} md={12} lg={8} xl={4} >
            <Col  >
            <RecentOrders/>
            </Col>
          

         
            <Col xs={20} sm={16} md={12} lg={8} xl={4} style={{marginLeft:"10px"}}>
            <DashboardChart  />
            </Col>

            </Row>
 
        </Space>

        </Space>
    </div>
  )
}

function DashboardCard({title, values,icon}){
    return (
        <Card>
                <Space direction='horizontal'>

                {icon}
                <Statistic title={title} value={values} />
                </Space>
            </Card>
    )
}

function RecentOrders(){
  const [ loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const ordersList = useSelector(state=> state.ordersList)
  const {error, orders} = ordersList

  useEffect(()=>{
    setLoading(true)
    dispatch(orderList())
    setLoading(false)
    console.log(orders)
  },[dispatch])

     

    return (
    <>
    <Typography.Title level={4}>Recent Orders</Typography.Title>
    <Table
    columns={[
        {
        title:"Title",
        dataIndex:"title",

    },
        {
        title:"Quantity",
        dataIndex:"quantity",

    },
        {
        title:"Price",
        dataIndex:"price",

    },

    ]}
    loading={loading}
    dataSource={orders.products}
    pagination={false}
    >
    </Table>
    </>
    )
}



function DashboardChart(){
    const dispatch = useDispatch()
    const revenueLists = useSelector(state=> state.revenueLists)
    const {error, loading, carts} = revenueLists

    useEffect(()=>{
      dispatch(revenueList())

    },[dispatch]);


    const [ revenueData, setRevenueData] = useState({labels:[], datasets:[]})

    useEffect(()=>{
        getRevenue().then(res=>{
            const labels = res.carts.map((cart)=>{
                return `User-${cart.userId}`
            })
            const data = res.carts.map((cart)=>{
                return cart.discountedTotal
            })

            const dataSource = {
                labels,
                datasets: [
                  {
                    label: 'Revenue by Users',
                    data: data,
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  }
                ],
              };
              
              setRevenueData(dataSource)
            }) 
 
        },[])

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom' 
          },
          title: {
            display: true,
            text: 'Revenue',
          },
        },
      };
      
 
      
    
    return <Card style={{width:500,height:400}}>
           <Bar options={options} data={revenueData} />;
           </Card>
   
}