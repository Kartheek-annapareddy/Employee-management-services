import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import './Home.css'

function Home() {
 var data=useLoaderData()
 var usersdetails=data.users
 console.log(usersdetails)
   
  
  return (
    <div>
      <div style={{width:'100%',height:'80px'}}>
          <p>Employe management</p>
      </div>
      <table>
      {
        usersdetails.map((ele,index)=>{
          return(
            <div>
              <tr>
                <td>{index}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>
              </tr>
            
            </div>
          )
        })
      }
      </table>  
    </div>
  )
}

export default Home
