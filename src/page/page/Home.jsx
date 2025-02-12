import React, { Fragment } from "react";
import Landing from "../component/Landing";
import Newfilms from "../component/Newfilms/Newfilms";
import Bestfilm from "../component/Newfilms/Bestfilm";

const Home = (props) => {


return(
  <Fragment>
    <Landing />
    <Newfilms new={props.ones}  getpage={props.getpage} Pagecount={props.Pagecount}  fetchmoive={props.fetchmoive}  />
    <Bestfilm ones={props.ones} />
   
  
  
  </Fragment>
);
}
export default Home;
