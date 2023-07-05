import React, { useContext, useEffect, useState } from 'react';
import { FormControl, InputLabel, Input } from '@mui/material';
import classes from './Working.module.css';
import {MdCloudUpload, MdDelete} from 'react-icons/md';
import {AiFillFileImage}  from 'react-icons/ai'

import Paragraphe from './Paragraphe'
import { NavigationContext } from '../../helper/context';

const Working = () => {
const [image, setImage] = useState(null);
const [fileName, setFileName] = useState("No selected file");
const { tabIndex, setTabIndex } = useContext(NavigationContext);
useEffect(()=>{
  setTabIndex();
});
  return (<div>
    <Paragraphe/>
    <div className={classes.total}>
      <div className={classes.cadre}>
<div classes={classes.somme}>

        <div className={classes.postotal}>
        <div className={classes.position}>
        
            <div>
              <InputLabel htmlFor="name-input"> First Name</InputLabel>
              <Input id="name-input" defaultValue="asma" />
            </div>
            <div>
              <InputLabel htmlFor="email-input">Last Name</InputLabel>
              <Input id="LastName-input" defaultValue="Last Name" />
            </div>
   
        </div>

        <div className={classes.position}>
        
        <div>
          <InputLabel htmlFor="email-input">Email</InputLabel>
          <Input id="email-input" defaultValue="Email" />
        </div>
        <div>
          <InputLabel htmlFor="email-input">Phone Number</InputLabel>
          <Input id="phone" defaultValue="Phone Number" />
        </div>

    </div>
</div>
<div className={classes.upload}>
    <span>Resume/Cv</span>
<form action=""
onClick={() => document.querySelector(".field").click()}>
    <input type="file" accept='image/*' className={classes.field}  hidden     />
    {image?
    <img src={image}  width={60}  height={60} alt={fileName}/>
:
<>
<MdCloudUpload color='#1475cf' size={60}/>
<p> Browse Files to upload</p>
</>}
    </form>
    <section className={classes.updated}>
        <AiFillFileImage color='#1475cf'/>
        <span className={classes.uploadContent}>
            {fileName}
            <MdDelete onClick={()=>{
                setFileName("No selected file")
                setImage(null)}}/>
            </span>
        </section>
    </div>

</div>
      </div>
    </div>
    </div>
  );
};

export default Working;