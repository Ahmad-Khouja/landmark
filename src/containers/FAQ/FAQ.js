import React,{useContext, useEffect, useState} from "react";
import classes from "./FAQ.module.css"
import Card from "./Card/Card";
import { NavigationContext } from "../../helper/context";

function FAQ(){

    const { tabIndex, setTabIndex } = useContext(NavigationContext);
    useEffect(()=>{
      setTabIndex(6);
    });
    const [cards]=useState([


        {
          title:"How do I find available properties?",
          paragraph:'Simply fill out our Contact Us form with details about the type of property you are looking for. Our dedicated agents will promptly reach out to you, providing assistance in exploring a wide range of properties available for sale or rent.'
        }
        ,
        {
            title:"What types of industrial properties do you handle?",
            paragraph:'Our expertise covers a broad spectrum of industrial properties, including warehouses, manufacturing facilities, industrial land, and distribution centers.'
                        +'We provide specialized services and assistance tailored to the needs of first-time home buyers, guiding them through every step of the process.We provide specialized services and assistance tailored to the needs of first-time home buyers, guiding them through every step of the process.'
        }   
        ,
        {
            title:"Do you offer customized solutions or design services for commercial projects to meet specific business needs?",
            paragraph:"Our team of experts collaborates closely with clients to understand their unique requirements and develop tailored solutions that align with their vision, brand identity, and functionality requirements, ensuring a commercial space that enhances productivity and reflects the business's objectives and values."
        }
        ,
        {
            title:"Do you assist with property financing?",
            paragraph:'We can assist you with property financing by providing guidance and connecting you with trusted mortgage lenders who specialize in real estate transactions, ensuring you have access to the best financing options available for your specific needs and circumstances.'
          }
          ,
          {
              title:"Do you offer any assistance for first-time home buyers?",
              paragraph:'We provide specialized services and assistance tailored to the needs of first-time home buyers, guiding them through every step of the process.We provide specialized services and assistance tailored to the needs of first-time home buyers,'
              +' guiding them through every step of the process.'
          }
        
      ])



      return(
        <div className={classes.Parent}>
            <div className={classes.Header}>
                <h1 className={classes.Title}>Frequently asked questions</h1>
            </div>
            <div className={classes.gridParent}>
            <div className={classes.cardGrid}>
                {
                    cards.map((card,i)=>(
                        <Card title={card.title} paragraph={card.paragraph} key={i}></Card>
                      ))
                }
            </div>
            </div>

        </div>
      );
}

export default FAQ;