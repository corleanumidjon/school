import React, { useEffect, useState } from "react";
import { instance } from "../../API/instance";
import Sidenav from "../../Components/Sidenav/Sidenav";
import { Button } from "antd";
import "./Courses.scss";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    instance.get("/category").then((res) => setCourses(res.data.data));
  }, []);

  console.log(courses);

  return (
    <>
      <Sidenav />
      <div className="courses__wrap">
        <div className="courses__start">
          <h2 className="courses__title">Kurslar</h2>
          <Button
            type="primary"
            style={{
              height: "40px",
              fontFamily: "Varela Round, sans-serif",
              fontSize: "16px",
            }}>
            Yangisini qo'shish
          </Button>
        </div>
        <div className="courses__line"></div>
        <div className="courses__box">
          {courses.map((item) => {
            return (
              <ul className="courses__list" key={item._id}>
                <li className="courses__item">
                  <div className="courses__img-wrap">
                    <img
                      className="courses__img"
                      src="https://modme-crm.vercel.app/assets/books-a285f3d4.png"
                      alt="Image"
                    />
                  </div>
                  <h4 className="courses__name">{item.title}</h4>
                  <p className="courses__price">{item.price} UZS</p>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;
