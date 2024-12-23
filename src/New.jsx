import React, { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import './App.css'
import Spinner from './Spinner';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const New = (props) => {
  const [articles, setArticles]=useState([])
  const [page, setPage]=useState(0)
  const [total, setTotal]=useState(0)
  const [loading, setLoading]=useState(true)
  const [progress, setProgress] = useState(0)
 


  {  document.title=`${props.category}   TOP -HEADLINES`}
  let url =`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=73356bb0fea841f8888da59c9cd52f2a&pageSize=9`;
 
  const fetchDataMore = async()=>{
   try {
    
setProgress(30)
  setLoading(true)

    const fData = await fetch(url)
    setProgress(60)
    const res = await fData.json()
    setArticles(res.articles)
  
  console.log(res.articles.source)
    setLoading(false)
    setProgress(100)
    setTotal(res.totalResults)
   } catch (error) {
    
   }
  
   
  }
  useEffect(()=>{
fetchDataMore()
  },[])
 

  const next= async()=>{
  

   
    let url =`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=73356bb0fea841f8888da59c9cd52f2a&pageSize=9&page=${page+1}`;

    const fetchDataMore = async()=>{
     
     try {
      setLoading(true)
       setProgress(30)
      const fData = await fetch(url)
      setProgress(50)
      const res = await fData.json()
      setArticles(res.articles)
      setLoading(false)
      setTotal(res.totalResults)
      console.log(articles.source)
      setProgress(100)
     } catch (error) {
      
     }
   
     
    }
  
    setPage(page+1)
    fetchDataMore()
  
  }
 

  const prev= async()=>{
    let url =`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=73356bb0fea841f8888da59c9cd52f2a&pageSize=9&page=${page-1}`;

    const fetchDataMore = async()=>{
     try {
      setLoading(true)
      setProgress(30)
      const fData = await fetch(url)
      setProgress(50)
      const res = await fData.json()
      setArticles(res.articles)
      setLoading(false)
      setProgress(100)
      
     } catch (error) {
      
     }
    
     
    }
    setPage(page-1)
    fetchDataMore()
  }


  
  
  return (
  
   
    <div className='bg-black' >
  <div className="flex justify-center  font-serif font-extrabold ">
        <h1 id='head'  className='text-3xl uppercase z-60 mt-20 py-10 text-white '>{props.category} <span className='ml-3 '  >Top  -Headlines</span></h1>
    </div>
    <LoadingBar
     color='#50d71e'
     
     progress={progress}

   />
      {loading && <Spinner/>}
      <div id='anime' className=' px-40 md:w-screen container ' >
      
   { !loading && articles.map((elem)=>{
    
     return (
      
    
        
            <div id='badges'  className="max-w-sm text-wrap h-1/3 text-white bg-cyan-900/25 md:rounded-ss-[10vh]   md:rounded-ee-[20vh]  overflow-hidden my-20  w-screen " style={{padding:"0 3vw"}}>
               <h1><span class="badge  text-bg-warning">  {elem.source.name}</span></h1>
           <img className='py-2 rounded-3xl' src={!elem.urlToImage?'https://images.unsplash.com/photo-1728931710370-a8025325b6f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D':elem.urlToImage} />
           <div className="px-0 py-4">
             <h1 className="font-bold  text-xl mb-2">{elem.title==="[Removed]"?'Lorem  odio commodi.':elem.title.slice(0,40)}...</h1>
             <span> PUBLSHED ON : {new Date(elem.publishedAt).toGMTString()} by <h6 className=' inline underline text-cyan-600 font-bold'>{!elem.author?"UNKNOWN":elem.author}</h6></span>
             <h5 className=" text-base text-white">
              {elem.description===""?"Lorem ipsum dolor sit amet, consectetur  aliquam sed perspiciatis sequi, explicabo, praesentium hic delectus inventore nesciunt deleniti quia officiis. Molestias doloremque sed odit!":elem.description.slice(0,80)}......
             </h5>
            
           </div>
           <div className="  pt-4 pb-10 ">
           <h4><a className='hover:text-green-800 sm:bg-red-900 hover:transition-all hover:ease-in-out hover:duration-500 rounded-2xl bg-black text-white p-4 ' href={elem.url}> Read more... </a></h4>
           </div>
          
           </div>
           
       
          


      )
     
    })}
   
   

            
           </div>
  <div className="button flex  justify-between xl:p-60  ">
        <button id='btn'  onClick={prev} disabled={page+1<=1} className='  p-3 ml-6  uppercase btn  rounded-xl pl-6 pr-6'> <h5>&laquo; previous</h5></button>
        <button  id='btn'  onClick={next} disabled={page+1>Math.ceil(total/9)} className=' mr-6  uppercase btn  p-3 rounded-xl pl-6 pr-6' ><h5 >next &raquo;</h5></button>
  </div>
    
    </div> 
      
     
  )
  
}

export default New;
