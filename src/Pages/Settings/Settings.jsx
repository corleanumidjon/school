import React from "react";
import "./Settings.scss";
import Sidenav from "../../Components/Sidenav/Sidenav";
import { Segmented, Switch } from "antd";
import { FaMousePointer } from "react-icons/fa";

const Settings = () => {

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <>
      <Sidenav />
      <div className="set__wrap">
        <Segmented
          block
          options={["Staffs", "Rooms", "Auto-SMS", "SMS-Templates"]}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Varela Round, sans-serif",
            fontWeight: "bold",
            fontSize: "17px",
            padding: "0 10px",
          }}
        />
        <div className="set__title4">
         <div className="set__title3">
          
        <ul className="set__title" >
        <h3 className="set__title2" >SMS turi</h3>
          <li className="set__title2">
          <div className="set__smss">
            <p className="set__title5">To'lov ammalga oshirildi</p>
            <FaMousePointer />
            <Switch  defaultChecked onChange={onChange} />
          </div>
          </li>
          <li className="set__title2">
          <div className="set__smss">
            <p className="set__title5">To'lov ammalga oshirildi</p>
            <FaMousePointer />
            <Switch  defaultChecked onChange={onChange} />
          </div>
          </li>
          <li className="set__title2">
          <div className="set__smss">
            <p className="set__title5">To'lov ammalga oshirildi</p>
            <FaMousePointer />
            <Switch  defaultChecked onChange={onChange} />
          </div>
          </li>
        </ul>
        
         </div>
         <div className="set__title3">
         <h3 className="set__title2">SMS matn: Talaba tug'ilgan kuni</h3>
          <textarea className="set__title6" placeholder="SMS - matni">
          </textarea>
          <h3>Yuborilgan SMS misoli</h3>
         </div >

         <div className="set__title3">
          <h3 className="set__title2" >Tavsif</h3>
           <div className="set__title7">
             <h3 className="set__title10">Mavjud o'zgaruvchilar</h3>
             <p className="set__title9">(STUDENT) - talabaning ismi</p>
             <p className="set__title9">(GROUP) - guruh nomi</p>
             <p className="set__title9">(SUM) - to'lob miqdori</p>
             <p className="set__title9">(LC) - o'quv markazingiz nomi</p>
             <p className="set__title9">(TEACHER) - auto-sms-teacher</p>
             <p className="set__title9">(TIME) - vaqt</p>
             <p className="set__title9">(ROOM) - xona</p>
             <p className="set__title9">(DAYS) - kunlar</p>
           </div>
         </div>
        </div>
       
      </div>
    </>
  );
};

export default Settings;
