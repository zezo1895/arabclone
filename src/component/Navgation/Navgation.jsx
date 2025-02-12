import React, { Fragment, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "../Navgation/nav.css";
import "boxicons";
import Side from "../side/Side";

const show = () => {
  console.log("zaid");
  document.querySelector(".ziad").classList.toggle("showinput");
};
// const handleScroll = () => {
//   if (window.scrollY > 2000) {
//     document.querySelector(".nav").classList.add('fixednav')
//   } else {
//     document.querySelector(".nav").classList.remove('fixednav')
//   }
// };
// window.addEventListener('scroll', function() {
//   if (window.pageYOffset > 2000) {
//     // تنفيذ classList هنا
// console.log("scrol")
//     // على سبيل المثال، قم بإضافة "active" لعنصر الصفحة
//     var element = document.querySelector('.nav');
//     element.classList.add('.fixednav');
//   }
// });

const Navgation = (props) => {
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 50) {
        // تنفيذ classList هنا
        var element = document.querySelector('.naver');
        element.classList.add('fixednav');
        // على سبيل المثال، قم بتحديث حالة المكون لإضافة "active"
        // يمكنك استخدام حالة المكون (useState) لتحقيق ذلك

      }
      else{
        var element = document.querySelector('.naver');
        element.classList.remove('fixednav');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const onserch = (word) => {

    if(word===""){
      props.search(false);
    }else{
      props.search(word);
    }
    
  };
  return (
    <Fragment>
      <nav className="naver">
        <div className="container-fluid">
          <div className="row  d-flex justfiy-contact-center align-items-center">
            <div className="col-lg-4">
              <div className="left">
                <ul className="icons">
                  <li>
                    <a href="">
                      {" "}
                      <box-icon
                        type="logo"
                        name="facebook-square"
                        color="#fff"
                      ></box-icon>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      {" "}
                      <box-icon
                        name="twitter"
                        type="logo"
                        color="#fff"
                      ></box-icon>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      {" "}
                      <box-icon
                        name="telegram"
                        type="logo"
                        color="#fff"
                      ></box-icon>
                    </a>
                  </li>
        
                 
                </ul>
              </div>
            </div>
            <div className="col-lg-2 input">  <input
                      type="text"
                      onChange={(e) => onserch(e.target.value)}
                      className="form-control ziads"
                      placeholder="ابحث..."
                    /></div>

            <div className="col-lg-6 text-end">
              <div className="right">
                <button onClick={props.handleClick} className="menu border-0 ">
                  <box-icon name="menu" color="#fff"></box-icon>
                </button>
                <ul className="Links">
                
                  <li>
                    {" "}
                    <box-icon name="chevron-left" color="#dadada"></box-icon>
                    <span>Others</span>
                  </li>
                  <li className="series">
                    {" "}
                    <box-icon name="chevron-left" color="#dadada"></box-icon>
                    <span>Series</span>
                    <ul className="typefilms">
                      <li>Arabic Series</li>
                      <li>Asian Series</li>
                      <li>English Series</li>
                    </ul>
                  </li>
                  <li className="film">
                    <box-icon name="chevron-left" color="#dadada"></box-icon>
                    <span>Films</span>
                    <ul className="typefilms">
                      <li>Arabic Films</li>
                      <li>Asian Films</li>
                      <li>English Films</li>
                    </ul>
                  </li>
                </ul>
                <a href="/">
                <div className="logo">
                  <div className="en">
                    <div className="s1">Arab </div>{" "}
                    <div className="s2"> Lionz </div>
                  </div>
                  <div className="ar">
                    <div className="s3">ليونز</div>{" "}
                    <div className="s4">عرب</div>
                  </div>
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Side change={props.isActive} />
    </Fragment>
  );
};
export default Navgation;
