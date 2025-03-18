"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const LongText = ({content,limit}: {content: string, limit: number}) => {
    const [showAll, setShowAll] = useState(false);
  
    const showMore = () => setShowAll(true);
    const showLess = () => setShowAll(false);
  
    if (content.length <= limit) {
      // there is nothing more to show
      return <div>{content}</div>
    }
    if (showAll) {
      // We show the extended text and a link to reduce it
      return <div> 
        {content} 
        <button onClick={showLess} className="font-semibold text-sm">Read less</button> 
      </div>
    }
    // In the final case, we show a text with ellipsis and a `Read more` button
    const toShow = content.substring(0, limit) + "... ";
    return <div> 
      {toShow} 
      <button onClick={showMore} className="font-semibold  text-sm">Read more</button>
    </div>
  }

export function  PostListPage () {
    const [userPost, setUserPost] = useState([])

    async function _fetchUserPost() {
        try {
          const { data } = await axios.get('https://dummyjson.com/posts');
          setUserPost(data?.posts);          
        } catch (err) {
          console.log('log',err);
        }
      }
      
    useEffect(() => {
      _fetchUserPost()
    }, [])
    
    return (
        <div className="flex flex-col" style={{width: '70%'}}>
              {
                userPost.map((item) =>{
                  return(
                    <div key={item.id} className="bg-[#F5FEFF] flex flex-row my-2 rounded-lg">
                      <div style={{width: '15%'}}>
                        <Image alt="avatar" height={100} width={100} src={'/user.png'} className="rounded-full" />
                      </div>
                      <div  style={{width: '70%'}}>
                        <p className="font-semibold text-xl">{item.title}</p>
                        <LongText content={item.body} limit={200}/>
                      </div>
                  </div>
                  )
                })
              }   
         </div>
    )
}