import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import { useState , useEffect } from 'react'
import Layout from './Layout'
import Home from './components/Home/Home'
import Child1 from './components/Featured/Child1/Child1'
import Child2 from './components/Featured/Child2/Child2'
import Child3 from './components/Featured/Child3/Child3'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Shop from './components/Shop/Shop'
import { allProducts, spcificCat } from './components/Projson'
import axios from 'axios'
import SingleApp from './components/SingleApp/SingleApp'
import Nested_1 from './components/SingleApp/nested-1/nested-1'
import Nested_2 from './components/SingleApp/nested-2/nested-2'
import Nested_3 from './components/SingleApp/nested-3/nested-3'
import Cart from './components/Cart/Cart'
import { MdDoneAll } from "react-icons/md";

import toast , {Toaster} from 'react-hot-toast'
import Wishlist from './components/Wishlist/Wishlist'
import Blog from './components/Blog/Blog'
import Singleblog from './components/Singleblog/Singleblog'
import Swal from 'sweetalert2'

function App() {
  
  const [flexd , setFlexd] = useState('row')
  const [alldata , setAlldata] = useState([])
  const [cat , setCat] = useState([])
  const [sort , setSort] = useState(null)
  const [cart , setCart] = useState([])
  const[wish , SetWish] = useState([])
  function Changeflexd(state){
    if(state === 'row'){
      setFlexd('row')
    }else{
      setFlexd('column')
    }
  }

  function GetSpaCatofpro(index){
    let newArr = spcificCat[index].products
    setAlldata(newArr)
    
  }


  async function getallpro(){
    let {data} = await axios.get('https://dummyjson.com/products')
    
    setAlldata(allProducts.concat(data.products))
  }
  //api 
  async function GetbackData() {
    setSort('Default')
   getallpro()
  }

async function GetCat() {
  let {data} = await axios.get('https://dummyjson.com/products/categories')
  setCat(data)
}


async function GetSpurl(url) {
  let {data} = await axios.get(url)
  setAlldata(data.products)
  
}

// Sorting
function Changesoting(e , data){
  if(e.target.value === 'Name(A-Z)'){
    alldata.sort((a , b)=>{
      return a.title > b.title ? 1 : -1
    })
    setAlldata([...alldata])
    setSort('Name(A-Z)')
  }else if(e.target.value === 'Name(Z-A)'){
    alldata.sort((a , b)=>{
      return a.title < b.title ? 1 : -1
    })
    setAlldata([...alldata])
    setSort('Name(Z-A)')
  }else if(e.target.value === 'Price(hight-low)'){
    alldata.sort((a , b)=>{
      return b.price - a.price 
    })
    setAlldata([...alldata])
    setSort('Price(hight-low)')
  }else if(e.target.value === 'Price(low-hight)'){
    alldata.sort((a , b)=>{
      return a.price - b.price 
    })
    setAlldata([...alldata])
    setSort('Price(low-hight)')
  }else{
    getallpro()
    setSort('Default')
  }
  
  
}


//cart
function Addtocart(proudct){
  let selectedpro = cart.find( e => e.title === proudct.title)
  if (!selectedpro){

    setCart([...cart , {...proudct , amount: 1} ])
    toast.success( `Done Add ${proudct.title}`)
  }else{
    Swal.fire({
      title: "Are you sure?",
      text: `${proudct.title} is already added !`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Add one more"
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success( `Done Add ${proudct.title}`)
        selectedpro.amount += 1
        setCart([...cart])
        Swal.fire({
          title: `You have ${selectedpro.amount} from ${proudct.title} now`,
          icon: "success"
        });
      }
    });
  }
}

function delpro(index , pro){
  let newArr = cart.filter(el => el.title !== pro.title)
  Swal.fire({
    title: "Are you sure?",
    text: `You will delete ${pro.title} `,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your product has been deleted.",
        icon: "success"
      });
      setCart(newArr)
    }
  });

}

function delall(){
  Swal.fire({
    title: "Are you sure?",
    text: "You wil delete all products",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your products hava been deleted.",
        icon: "success"
      });
      setCart([])
    }
  });
 
}

function Changeamount(e , pro){
  pro.amount = +e.target.value
  setCart([...cart])
  toast.success(`You have ${pro.amount} from ${pro.title} `)
}

function otherChangeamount(state , el){
  console.log(el);
  
if (state === 'plus'){
  el.amount +=1
  setCart([...cart])
  toast.success(`You have ${el.amount} from ${el.title} `)
}else{
  if(el.amount > 1){
    --el.amount
  setCart([...cart])
  toast.success(`You have ${el.amount} from ${el.title} `)
  }else{
    delpro(state , el)
  }
}
}

// Wish
function AddtoWish(proudct){
SetWish([...wish , proudct])
toast.success( `Done Add ${proudct.title}`)
}
function delWish(index , pro){
  toast.success( `Done Delete ${pro.title}`)
let newArr = wish.filter(el => el.title !== pro.title)
SetWish(newArr)
}

useEffect(()=>{
if(localStorage.getItem('wish')){
  SetWish(JSON.parse(localStorage.getItem('wish')))
}
},[])

useEffect(()=>{
localStorage.setItem('wish' , JSON.stringify(wish))
},[wish])


useEffect(()=>{
  if(localStorage.getItem('cart')){
    setCart(JSON.parse(localStorage.getItem('cart')))
  }else{
    setCart([])
  }
}, [])

  useEffect(()=>{
    localStorage.setItem('cart' , JSON.stringify(cart))
  },[cart])


  useEffect(()=>{
    getallpro() 
    GetCat()
  },[])


  
  const router = createBrowserRouter([
    {
      path: '/', 
      element: <Layout delpro={delpro} otherChangeamount={otherChangeamount} cart={cart} wish={wish}/>,
     children:[
        {path : '', element:<Home/> ,children: [
          {path : '',element : <Child1  AddtoWish={AddtoWish} alldata={alldata}  Addtocart={Addtocart} />},
          {path : 'best seller',element : <Child2  AddtoWish={AddtoWish}alldata={alldata} Addtocart={Addtocart} />},
           {path : 'featured',element : <Child3 AddtoWish={AddtoWish} alldata={alldata} Addtocart={Addtocart} />}
        ]},
        {path : 'contact',
          element: <Contact/>,
        },
        {path : 'about',
          element: <About GetSpaCatofpro={GetSpaCatofpro} GetSpurl={GetSpurl} cat={cat}/>,
        },
        {path : 'shop', 
          element: <Shop AddtoWish={AddtoWish} Addtocart={Addtocart}  sort={sort} Changesoting={Changesoting} GetbackData={GetbackData} GetSpurl={GetSpurl} GetSpaCatofpro={GetSpaCatofpro} cat={cat} alldata={alldata} flexd={flexd} Changeflexd={Changeflexd}/>
        },
        {path : 'singleproduct/:index',
          element: <SingleApp AddtoWish={AddtoWish}  Addtocart={Addtocart}  alldata={alldata} GetSpaCatofpro={GetSpaCatofpro} GetSpurl={GetSpurl} cat={cat}/> , children: [
            {path : '', element:<Nested_1/>},
            {path : 'nested-2' , element:<Nested_2/>},
            {path : 'nested-3' , element:<Nested_3/>},
          ]
        },
        {path : 'cart' , element:<Cart  Changeamount={ Changeamount} delall={delall} delpro={delpro} cart={cart} GetSpaCatofpro={GetSpaCatofpro} GetSpurl={GetSpurl} cat={cat}/>},
        {path : 'wish' , element : <Wishlist delWish={delWish} wish={wish} Addtocart={Addtocart} GetSpaCatofpro={GetSpaCatofpro} GetSpurl={GetSpurl} cat={cat}/>},
        {path : 'blog', element : <Blog  />},
        {path :'/singlepost/:id' , element:<Singleblog/>}
      ]
    }])
    
  return (
    <main>
      <Toaster/>
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
