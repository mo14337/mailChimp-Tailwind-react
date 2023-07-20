import { useEffect, useState } from 'react'
import Navbar from './component/Navbar';
import laptop from "./assets/laptop-img.png"
import cycle from "./assets/cycle-img.png"
import axios from 'axios';


function App() {
  // const [name,setName]=useState("")
  // const [users,setUsers]=useState([])
  //   useEffect(()=>{
  //     axios.get("https://64b7cdd221b9aa6eb07910e1.mockapi.io/users")
  //     .then((res)=>{
  //       console.log(res.data)
  //       setUsers(res.data)
  //     })

  //   },[])




  // const  postData= ()=>{
  //   console.log("hello");
  //     axios.post("https://64b7cdd221b9aa6eb07910e1.mockapi.io/users",{
  //     Name: name,
  //     Age: 16 ,
  //     hobbies: ["Cricket","football"]

  //   }).then((res)=>{
  //     console.log(res.data);
  //   })
  // }

  //  function handlChange(e){
  //     setName(e.target.value)
  // }

  // function update(id){
  // axios.put(`https://64b7cdd221b9aa6eb07910e1.mockapi.io/users/${id}`,{
  //   name:"sunnnyyyyy"
  // })

  // }

  return (
    <>

      <div className=' flex flex-col '>
        <Navbar />
        <section className=' flex w-full justify-between py-24 px-5 h-fit'>
          <div className=' w-[45%] flex flex-col justify-center left'>
            <p className=' text-lg'>LANDING PAGE CREATOR</p>
            <h1 className=' text-5xl font-semibold mb-4 w-[546px]'>Create must click Landing Page</h1>
            <p className=' w-[546px] mb-9'>Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <button className='w-[103px] text-white border-1 text-lg focus: outline-none hover:border-b-4 bg-yellow-400 rounded-full  border-black py-2 px-6 '>Button</button>
          </div>

          <div className=' right w-[55%]'>
            <img src={laptop}></img>
          </div>
        </section>


        <section className=' flex w-full justify-between py-24 px-5 h-fit'>
          <div className='left w-3/6 '>
              <img className=' object-center rounded' src={cycle}/>
          </div>
          <div className='right flex flex-col mx-auto my-auto pl-24'>
          <h1 className=' text-4xl font-semibold mb-4' >Your landing page starts with the right domain. Claim yours today</h1>
          <p className=' leading-relaxed text-lg mb-8'>Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
          <button className=' w-[172px] py-3 px-5 bg-white rounded-full border-black  border focus:outline-none hover:border-b-4 '>Find Your Domain</button>
          </div>
        </section>
          
      </div>
    </>
  )
}

export default App;
