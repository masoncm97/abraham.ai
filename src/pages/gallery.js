import { useState, useEffect, FC } from 'react'
import getCreations from './api/eden-handler';
import { EdenClient } from "eden-sdk";

let filter = {
  username: "0x2823d234473815D34B734E87b6FCbed4d783B3Dc",  
  limit: 50,
}

const Gallery = ({json}) =>{
    console.log(json)
    return <div></div>
}


export async function getServerSideProps() {
    let eden = new EdenClient();
    let result = await eden.getCreations(filter);
    let json = JSON.stringify(result)
    return { props: { json } }
  }

export default Gallery