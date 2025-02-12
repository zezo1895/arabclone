import React, { Fragment } from "react";
import "../Newfilms/Newfilms.css"

import "boxicons"
import Productfilm from "./Productfilm";
import Bestfilm from "./Bestfilm";
import Pagenation from "../Pagenation";

import { motion } from "framer-motion"; // Import motion from framer-motio

const Newfilms=(props)=>{
    
    // const filmitem=props.item.map((movie)=>{
    //  return(
    //    <Fragment>
    //    <div>{movie.name}</div>
    //   <img src={urlim+movie.image} alt="" />
    //    </Fragment>
    // )
    // })

  const filmitem=props.new.map((movie)=>{

 return(
    <Fragment key={movie.id}>
        {/* Wrap Productfilm with motion.div to apply animation */}
        <motion.div  className="moive-div"
          initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly below)
          animate={{ opacity: 1, y: 0 }} // Final state (visible and at normal position)
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          <Productfilm 
            name={movie.original_title} 
            url={movie.poster_path} 
            rate={movie.vote_average} 
            id={movie.id} 
          />
        </motion.div>
      </Fragment>
 )
   })
 
return(
    <div className="allfilmss">
        <div className=" another">
            <h1>NEW FILMS</h1>
            <div className="moive" >{filmitem}
   
            </div>
               
         <Pagenation getpage={props.getpage} Pagecount={props.Pagecount}  fetchmoive={props.fetchmoive} />
        </div>
    </div>
)
}
export default Newfilms;