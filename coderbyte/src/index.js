import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
//understand props
const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook }) {

  const [form,setForm] = useState({
    userFirstname:"",
    userLastname:"",
    userPhone:""
})

const [list,setList] =  useState([])

useEffect(()=>{
  console.log("list")
  addEntryToPhoneBook(list)
},[list])

const handleChange = (e) =>{
  console.log(e.target.name,e.target.value)
  const{name,value}= e.target
  setForm({
      ...form,
      [name]:value
  })
}
  return (
    <form onSubmit={e => { e.preventDefault()
      console.log(form)
      
   setList([...list,form])
//    setForm({
//     userFirstname:"",
//     userLastname:"",
//     userPhone:""
// })
//console.log(list,"list")
   
    }} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        onChange={handleChange} 
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text'
        onChange={handleChange} 
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        onChange={handleChange} 
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable({data}) {
 const [set, setState] = useState([])
 useEffect(()=>{
   console.log("reRender")
  setState(data)
 },[data])
 
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      
        {
           console.log(data, "data 2")
        }
        {
         
          set.map((e,i)=>{
          return <tr key={i}><td>{e.userFirstname}</td></tr>
          })
        }
        
     
      </thead> 
    </table>
  );
}

function Application(props) {
  const [data,setData] = useState([])
  const addEntryToPhoneBook = (name)=>{
console.log("Parent Recieved",name)
setData(name)
  }

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook = {addEntryToPhoneBook}/>
      <InformationTable data={data}/>
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);