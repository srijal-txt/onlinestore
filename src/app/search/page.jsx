'use client';

import { useRef, useState,useEffect } from "react";
import Productcard from "../components/Productcard";
import { useQuery } from "@tanstack/react-query";
import styles from "../style/search.module.scss"
import LoaderComponent from "../components/LoaderComponent";
export default function Page(){

  const[query,setQuery]=useState("");
  const inputRef = useRef(null);
  const {data,isLoading,error}=useQuery({
    queryKey:['search',query],
    queryFn:
    ()=>fetch('https://fakestoreapi.com/products').then(
      (res) => res.json(),),
})
useEffect(() => {

  if (inputRef.current) {
    inputRef.current.focus();
  }
});
 const handleChange=(e)=>{
  setQuery(e.target.value)
 }
  if (isLoading) return <LoaderComponent/>
  
  if (error) return 'An error has occurred: '
  
    const results=data.filter(( res ) =>
    res.title.toLowerCase().includes(query.toLowerCase()))
  
  return <>
    <div className="container">
      <div className={styles.search_bar}>
        <input type="text" value={query} onChange={handleChange} ref={inputRef} placeholder="Search Here.."/>
      </div>
      {query.length!=0 ? 
      <div className="row row-gap-4">
    {results.map((product)=>
    (
        <Productcard key={product.id} a={product}/>
        ))
      }
      </div> : <></>
}
    </div>
  </>
}