import React from 'react'
import classes from './Terms.module.css'
import Belrose1 from '../../assets/images/Belrose1.png'
function Terms() {
  return (
    <div>
        <div className={classes.titre}>
        Terms & Conditions
        </div>
        <div >
<img src={Belrose1} className={classes.image}></img>
        </div>
        <div className={classes.title}>
1.Website Content
        </div>
        <div className={classes.paragraphe}>

      <br/>
a. The content on this website is for general information purposes only and may be subject to change
 without notice.<br/><br/>
b. We make no representations or warranties of any kind, express or implied, regarding the accuracy,
 completeness, or reliability of the information provided.<br/><br/>
c. The content may include third-party information or links to external websites, 
which are not under our control. We do not endorse or assume any responsibility for 
the content of those external websites.<br/><br/>

        </div>


        <div className={classes.title}>
        2- Services Provided:
        </div>
        <div className={classes.paragraphe}>

      <br/>
      a. We provide real estate services including property listings, project information, 
      and company details. <br/><br/>
      b. The information provided about our services, projects,
       and company history is intended to give a general overview and may be subject to change..<br/><br/>
        </div>


        <div className={classes.title}>
        3- Privacy and Data Collection:
        </div>
        <div className={classes.paragraphe}>

      <br/>
      a. We respect your privacy; however, please note that this website does not collect or store any personal
       information unless explicitly provided by you through the contact us or careers form.  <br/><br/>
       b. Any personal information shared with us through these forms will be used solely for the purpose of responding to your inquiries or considering your job application. We will not disclose your personal 
       information to any third parties without your consent, unless required by law. <br/><br/>
        </div>


        <div className={classes.title}>
        4- Contact Us: 
        </div>
        <div className={classes.paragraphe}>

      <br/>
      a. The Contact Us page allows you to send inquiries and messages to our team. <br/><br/>
      b. We will make reasonable efforts to respond to your inquiries in a timely manner, but we do not guarantee
      immediate or uninterrupted response.<br/><br/>
        </div>

        <div className={classes.title}>
        5- Careers:
        </div>
        <div className={classes.paragraphe}>

      <br/>
      a. The Careers section allows you to fill out a form and attach your CV for job applications. <br/><br/>
      b. By submitting your application, you acknowledge
       that the information provided is accurate and complete.<br/><br/>
       c. We will review your application but cannot guarantee employment or provide individual 
       feedback on every application.
        </div>


        <div className={classes.title}>
        6- Intellectual Property:
        </div>
        <div className={classes.paragraphe}>

      <br/>
      a. All content, including text, images, logos, and trademarks on this website, is the property of the Australian real estate 
      company unless otherwise stated. <br/><br/>
      b. You may not reproduce, modify, distribute, or use any content from this website 
      without obtaining prior written permission.<br/><br/>
      
        </div>

        <div className={classes.title}>
        7- Limitation of Liability:
        </div>
        <div className={classes.paragraphe}>

      <br/>
      a. We are not liable for any direct, indirect, incidental, consequential, or punitive damages 
      arising from the use or inability to use this website or its content. <br/><br/>
      b. We do not guarantee the availability, accuracy, or 
      reliability of the website, and you use it at your own risk. <br/><br/>
      
        </div>


        <div className={classes.title}>
        8- Governing Law:
        </div>
        <div className={classes.paragraphe}>

      <br/>
      a. These terms and conditions shall be governed by and construed in
       accordance with the laws of Australia.  <br/><br/>
       b. Any disputes arising from the use of this website shall be subject to the exclusive
        jurisdiction of the courts in Australia. <br/><br/>
      
        </div>
    </div>
  )
}

export default Terms