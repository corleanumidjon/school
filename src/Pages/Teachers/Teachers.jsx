import React, { useEffect, useState } from "react";
import { instance } from "../../API/instance";
import Sidenav from "../../Components/Sidenav/Sidenav";
import { Button } from "antd";
import "./Teachers.scss";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    instance.get("/teacher").then((res) => setTeachers(res.data.data));
  }, []);

  console.log(teachers);

  return (
    <>
      <Sidenav />
      <div className="teachers__wrap">
        <div className="teachers__start">
          <h2 className="teachers__title">O'qituvchilar</h2>
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
        <div className="teachers__line"></div>
        <div className="teachers__table">
          <div className="teachers__titles">
            <h4 className="teachers__title-t">Id</h4>
            <h4 className="teachers__title-t">Name</h4>
            <h4 className="teachers__title-t">Age</h4>
            <h4 className="teachers__title-t">Category</h4>
            <h4 className="teachers__title-t">Phone</h4>
          </div>
          {teachers.map((item, index) => {
            return (
              <div className="teachers__texts" key={item._id}>
                <p className="teachers__text">{index + 1}</p>
                <p className="teachers__text">{item.name}</p>
                <p className="teachers__text">{item.age}</p>
                <p className="teachers__text">{item.categorys}</p>
                <p className="teachers__text">(97) 773-33-73</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Teachers;
