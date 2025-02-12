import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "../side/side.css";
import { click } from "@testing-library/user-event/dist/click";

const show = () => {
  if (window.innerWidth < 992) {
    document.querySelector(".typefilm").classList.toggle("show");
  }
};
const show2 = () => {
  if (window.innerWidth < 992) {
    document.querySelector(".typeser").classList.toggle("show");
  }
};

const Side = (props) => {
  useEffect(() => {
    const handleClick = (e) => {
      // يتم استدعاء هذه الدالة عند حدوث حدث النقر على النافذة
      if (e.target !== document.querySelector(".drop")) {
        document.querySelector(".typefilm").classList.remove("show");
      }
      console.log("تم النقر على النافذة");
    };

    // إضافة مستمع لحدث النقر على النافذة عند تحميل المكون
    window.addEventListener("click", handleClick);

    // إزالة المستمع عند تفكيك المكون
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  //   =============================
  useEffect(() => {
    const handleClick = (e) => {
      // يتم استدعاء هذه الدالة عند حدوث حدث النقر على النافذة
      if (e.target !== document.querySelector(".drop2")) {
        document.querySelector(".typeser").classList.remove("show");
      }
      console.log("تم النقر على النافذة");
    };

    // إضافة مستمع لحدث النقر على النافذة عند تحميل المكون
    window.addEventListener("click", handleClick);

    // إزالة المستمع عند تفكيك المكون
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const className = props.change ? "active-class" : "inactive-class";
  return (
    <sidenav className={className}>
      <div className="container-fluid ">
        <h1 className="font-weight-bold">
          Arab <span>Lionz</span>
        </h1>
        <div className="all d-flex justify-content-center align-items-center">
          <ul className="types">
            <li className="films">
              <button className="border-0 drop" onClick={show}>
                Films
                <box-icon
                  type="solid"
                  name="down-arrow"
                  color="#fff"
                ></box-icon>
              </button>{" "}
              <ul className="typefilm">
                <li>Ziad</li>
                <li>adel</li>
                <li>fathy</li>
              </ul>
            </li>
            <li className="seires">
              {" "}
              <button className="border-0 drop2" onClick={show2}>
                Series
                <box-icon
                  type="solid"
                  name="down-arrow"
                  color="#fff"
                ></box-icon>
              </button>{" "}
              <ul className="typeser">
                <li>Ziad</li>
                <li>adel</li>
                <li>fathy</li>
              </ul>
            </li>
            <li> by Ziad Adel</li>
          </ul>
        </div>
      </div>
    </sidenav>
  );
};

export default Side;
// btn2.addEventListener('click',function(){
//     if(window.innerWidth < 992){
//     console.log('ziad')
//     drop2.classList.toggle('lokaa')
//     }
//     else{
//      drop2.classList.toggle('loka')
//     }
//     })

// useEffect(() => {
//     const handleClick = () => {
//       const element = document.getElementById('myElement');
//       if (element) {
//         element.classList.remove('myClass');
//       }
//     };

//     window.addEventListener('click', handleClick);

//     return () => {
//       window.removeEventListener('click', handleClick);
//     };
//   }, []);
