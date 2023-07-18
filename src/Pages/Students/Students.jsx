import React, { useEffect, useState } from "react";
import { instance } from "../../API/instance";
import Sidenav from "../../Components/Sidenav/Sidenav";
import { Button } from "antd";
import { FaPencilAlt } from "react-icons/fa";
import "./Students.scss";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    instance.get("/student").then((res) => setStudents(res.data.data));
  }, []);

  console.log(students);

  return (
    <>
      <Sidenav />
      <div className="students__wrap">
        <div className="students__start">
          <h2 className="students__title">Talabalar</h2>
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
        <div className="students__line"></div>
        <div className="students__table">
          <div className="students__titles">
            <h4 className="students__title-t">Id</h4>
            <h4 className="students__title-t">Name</h4>
            <h4 className="students__title-t">Age</h4>
            <h4 className="students__title-t">Category</h4>
            <h4 className="students__title-t">Phone</h4>
            <h4 className="students__title-t">Condition</h4>
          </div>
          {students.map((item, index) => {
            return (
              <div className="students__texts" key={item._id}>
                <p className="students__text">{index + 1}</p>
                <p className="students__text">{item.name}</p>
                <p className="students__text">{item.age}</p>
                <p className="students__text">{item.category}</p>
                <p className="students__text">{item.phoneNumber}</p>
                <button className="students__pen">
                  <FaPencilAlt />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Students;
