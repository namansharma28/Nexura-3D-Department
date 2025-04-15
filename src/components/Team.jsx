import React, { useState } from "react";
import styles from "../assets/TeamSection.module.css"; 
import TeamMember from "./membercards";
import Devendra from "/Devendra Rathore .jpg";
import Himanshu from "/Himanshu Bharti.jpg";
import Kunal from "/Kunal Thakur.jpg";
import Rishi from "/Rishi Pandey.jpg";
import img from "/IMG-20250319-WA0003.jpg";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const members = [
    {
      image1: Devendra,
      name1: "Aryan Singh",
      image2: Himanshu,
      name2: "Yashi Trivedi",
    },
    {
      image1: Kunal,
      name1: "Kashish Bhuriya",
      image2: Rishi,
      name2: "Vaidika Purohit",
    },
    
  ]
  return (
    <div className={styles.dropdown} id="team">
      <div className={styles.mainMembers}>
      <TeamMember 
            image1= {Rishi}
            name1="Rishi Pandey" 
            image2={Kunal}
            name2="Kunal Thakur" 
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
