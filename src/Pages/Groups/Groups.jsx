import React, { useEffect, useState } from "react";
import { instance } from "../../API/instance";
import Sidenav from "../../Components/Sidenav/Sidenav";
import { Button, Segmented } from "antd";
import { FaPencilAlt } from "react-icons/fa";
import "./Groups.scss";

const Groups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    instance.get("/groups").then((res) => setGroups(res.data.data));
  }, []);

  console.log(groups);

  return (
    <>
      <Sidenav />
      <div className="groups__wrap">
        <div className="groups__start">
          <h2 className="groups__title">Guruhlar</h2>
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
        <div className="groups__line"></div>
        <div className="groups__table">
          <Segmented
            block
            options={["Active", "Archive"]}
            style={{
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Varela Round, sans-serif",
              fontWeight: "bold",
              fontSize: "16px",
              padding: "0 10px",
            }}
          />
          <div className="groups__titles">
            <h4 className="groups__title-t">Id</h4>
            <h4 className="groups__title-t">Courses</h4>
            <h4 className="groups__title-t">Teachers</h4>
            <h4 className="groups__title-t">Time</h4>
            <h4 className="groups__title-t">Days</h4>
            <h4 className="groups__title-t">Condition</h4>
          </div>
          {groups.map((item, index) => {
            return (
              <div className="groups__texts" key={item._id}>
                <p className="groups__text">{index + 1}</p>
                <p className="groups__text">{item.category}</p>
                <p className="groups__text">{item.teacher}</p>
                <p className="groups__text">{item.startTime}</p>
                <p className="groups__text">{item.day}</p>
                <button className="groups__pen">
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

export default Groups;
