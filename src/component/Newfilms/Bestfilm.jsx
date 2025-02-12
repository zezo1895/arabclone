import React, { Fragment } from "react";
import Productfilm from "./Productfilm";
import "../Newfilms/Bestfilm.css";
import { motion } from "framer-motion"; // Import motion from framer-motio

const Bestfilm = (props) => {
  // const filmitem=props.news.filter(news=> new.rate > 1).map((movie)=>{
  //     return(
  //      <Fragment>
  //       <Productfilm name={movie.name} url={movie.image} rate={movie.rate} />

  //       </Fragment>
  //     )
  //       })
  const filmitem = props.ones.filter((one) => one.vote_average > 7);
  const bests = filmitem.map((movie) => {
    return (
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
    );
  });

  return (
    <div className="allfilmss">
        <div className=" another">
            <h1>NEW FILMS</h1>
            <div className="moive" >{bests}
   
            </div>
               
        
        </div>
    </div>
  );
};

export default Bestfilm;

