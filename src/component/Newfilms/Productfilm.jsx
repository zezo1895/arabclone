import React from "react";

import "../Newfilms/Productfilm.css";
import { Link } from "react-router-dom";
import { motion , AnimatePresence } from "framer-motion";

const Productfilm = (props) => {
  const urlim = "https://image.tmdb.org/t/p/w500/";

  return (
    <AnimatePresence>
    <div className=" col-lg-3 col-sm-6  colums">
      <Link to={`/movie/${props.id}`}>
        <motion.div layout transition={{ type:"spring",damping:8,stiffness:50 }}  initial={{ transform:"scale(0)" }} animate={{ transform:"scale(1)" }} exit={{ transform:"scale(0)" }} className="boxfilm">
          <div className="show">
            <div className="imagefilm">
              <img className="imgfilm" src={urlim + props.url} alt="" />
            </div>
            <div className="namefilm">{props.name}</div>
          </div>
          <div className="willshow">
            <div className="info">
              <div className="namefilm">{props.name}</div>
              <div className="rate">
                {" "}
                <box-icon type="solid" name="star" color="#FDCC0D"></box-icon>
                {props.rate} 
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
    </AnimatePresence>
  );
};
export default Productfilm;
