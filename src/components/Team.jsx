import React, { useState } from "react";
import styles from "../assets/TeamSection.module.css"; 
import TeamMember from "./membercards";
import Devendra from "/Devendra Rathore .jpg";
import Himanshu from "/Himanshu Bharti.jpg";
import Kunal from "/Kunal Thakur.jpg";
import Rishi from "/Rishi Pandey.jpg";
import img from "/IMG-20250319-WA0003.jpg";
import pawan from "/pawan.jpg";
import rishabh from "/Rishabh.jpg";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const members = [
    {
      image1: Devendra,
      name1: "",
      image2: Himanshu,
      name2: "",
    },
    
    
  ]
  return (
    <div className={styles.dropdown} id="team">
      <div className={styles.mainMembers}>
      <TeamMember 
            image1= {pawan}
            name1="Pawan Soni" 
            image2={rishabh}
            name2="Rishabh" 
          />
          <TeamMember 
            image1= {Himanshu}
            name1="Himanshu Bharti"
            image2={Devendra} 
            name2="Devendra Rathore"
          />
           <TeamMember
            image1= {img}
            name1="img" 
            image2=""
            name2="Your Spot"
            />
            <TeamMember
            image1= {Kunal}
            name1="Kunal Thakur"
            image2={Rishi}
            name2="Rishi Pandey" 
            />
          </div>
          {/* <button
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
        id="btn"
      >
        {isOpen ? "Show Less" : "Show All Members"}
      </button>
          {isOpen && (
            <div className={styles.content}>
              {members.map((member, index) => (
                <TeamMember 
                  key={index}
                  image1={member.image1}
                  name1={member.name1}
                  image2={member.image2}
                  name2={member.name2}
                />
                
              ))}
            </div>
          )} */}
    </div>
  );
};

export default DropDown;
