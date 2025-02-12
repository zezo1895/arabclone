import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../page/moivedetails.css";
const Moivedetails = () => {
  useEffect(() => {
    details();
  }, []);

  const [film, setfilm] = useState([]);
  const par = useParams();
  console.log(par.id);

  async function details() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${par.id}?api_key=78ddfdc6daceeab1601f478174eb6071&language=ar-US`
    );
    const data = await response.json();

    console.log(data);

    // const datatran = data.results.map((item) => {
    //   return {
    //     id: item.id,
    //     name: item.original_title,
    //     image: item.poster_path,
    //     rate: item.vote_average,
    //   };
    // });
    setfilm(data);
  }
  const urlim = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="detailsonemoive">
      <div className="container-fluid">
        <div className="row allabout">
          <div className="col-lg-12 d-flex justify-content-center">
            {" "}
            <div className="boxfilm">
              <div className="show">
                <div className="imagefilm">
                  <img
                    className="imgfilm"
                    src={urlim + film.poster_path}
                    alt=""
                  />
                </div>
                <div className="namefilm">
                  <h2>{film.original_title}</h2>
                </div>
              </div>
              <div className="willshow">
                <div className="info">
                  <div className="namefilm">{film.original_title}</div>
                  <div className="rate">
                    {" "}
                    <box-icon
                      type="solid"
                      name="star"
                      color="#FDCC0D"
                    ></box-icon>
                    {film.vote_average}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 justify-content-center">
            <div className="aboutfilm">
              <div className="namethis">
                Name:<span> {film.original_title}</span>
              </div>
              <div className="rating">
                Rate<i class="fa-solid fa-star"></i>:
                <span> {film.vote_average}</span>
              </div>
              <div className="update">
                Release Date<i class="fa-regular fa-calendar"></i>:{" "}
                <span>{film.release_date}</span>
              </div>
              <div className="story">
                <h1>Story</h1>
                <div className="detailstory">{film.overview}</div>
              </div>
              <div className="buttonss row">
                <div className="col-lg-6">
                  {" "}
                  <a href={film.homepage}>

                  <button  className="btn1 border-0">
                    مشاهده الان{" "}
                    <span>
                      <i class="fa-solid fa-tv"></i>
                    </span>
                  </button>
                  </a>
                </div>
                
                <div className="col-lg-6">
                  {" "}
                  <Link to='/'>
                  <button className="btn2 border-0">
                    {" "}
                    الصفحة الرئيسية
                    <span>
                      <i class="fa-solid fa-house"></i>
                    </span>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Moivedetails;
