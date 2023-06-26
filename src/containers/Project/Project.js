import React, { useContext, useEffect } from 'react'
import classes from './Project.module.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Adamstown from '../../assets/images/Adamstown.png'
import Miranda from '../../assets/images/Miranda.png'
import Elora from '../../assets/images/Elora.png'
import Belrose from '../../assets/images/Belrose.png'
import House from '../../assets/images/House.png'
import Parkside from '../../assets/images/Parkside.png'
import Narrow from '../../assets/images/Narrow.png'
import Escarpment from '../../assets/images/Escarpment.png'
import Pioneer from '../../assets/images/Pioneer.png'
import Pinnacle from '../../assets/images/Pinnacle .png'
import Emperial from '../../assets/images/Emperial.png'
import Manhatan from '../../assets/images/Manhattan.png'
import Pennant from '../../assets/images/Pennant.png'
import Waterfront from '../../assets/images/Waterfront.png'
import { NavigationContext } from '../../helper/context';
const Item = styled(Paper)(({ theme }) => ({

    padding: theme.spacing(0),
   
    color: theme.palette.text.secondary,
   
  height:"100%"
  }));
function Project() {
  const { tabIndex, setTabIndex } = useContext(NavigationContext);
  useEffect(()=>{
    setTabIndex(2);
  });
  return (
    <div>
        <div className={classes.titre}> Our Projects</div>
        <div className={classes.soustitre}>The Landmark team has worked with some 
        of the world’s leading companies and brands</div>

        <Box paddingTop='100px'>
      <Grid container >
        <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.left} >
            <img src={Adamstown} className={classes.image}></img>

          </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.right} >
<div className={classes.box}>
<div className={classes.title} > Adamstown Living</div>
<div className={classes.paragraphe}>The development consists of 40 apartments and 4 commercial spaces located in the heart of thriving Newcastle. A green focused building PV panels and electric car charges,
     it is one of the most aesthetically pleasing developments to hit Adamstown.</div>
     <br/>  <br/>
     <div className={classes.content}>
     Budget: $36m
     </div>  <br/>
     <div className={classes.content}>
     Service: Construction
     </div>  <br/>
     <div className={classes.content}>
     Launch Date: 2022
     </div>  <br/>
     <div className={classes.content}>
     Completion Date: 2024
     </div>  <br/>
     <div className={classes.content}>
     Status: Current
     </div>

</div>

          </Item>
          </Grid>

          </Grid>
          </Box>



          <Box paddingTop='100px'>
      <Grid container >
        <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.left} >
          <div className={classes.box}>
<div className={classes.title} > Miranda Central</div>
<div className={classes.paragraphe}>For those who desire everything at their fingertips, Miranda Central Presents the ultimate Sutherland Shire address. These brand new 1,2 and 3-bedroom apartments showcase affordable luxury and unrivalled convenience in a one-of-a-kind boutique building. Located in the heart of Miranda Town Centre, just a stone's throw to a host of leisure attractions, Westfield Miranda and the 
station, they offer a stylish, vibrant and connected way of life.</div>
     <br/>
     <br/>
     <div className={classes.content}>
     Budget: $20m
     </div>  <br/>
     <div className={classes.content}>
     Service: Construction
     </div>  <br/>
     <div className={classes.content}>
     Launch Date: 2020
     </div>  <br/>
     <div className={classes.content}>
     Completion Date: 2022
     </div>  <br/>
     <div className={classes.content}>
     Status: Completed<br/><br/>
     </div>
     <div className={classes.content1}>Miranda Central NSW</div>

</div>

          </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.right} >

          <img src={Miranda} className={classes.image}></img>
          </Item>
          </Grid>

          </Grid>
          </Box>


          <Box paddingTop='100px'>
      <Grid container >
        <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.left} >
            <img src={Elora} className={classes.image}></img>

          </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.right} >
<div className={classes.box}>
<div className={classes.title} > Elora, The Hills</div>
<div className={classes.paragraphe}>
Elora, Baulkham Hills is a boutique development. Featuring 4 levels with 56 Luxury apartments, a mix between one, two and three bedroom options. With spacious balconies and courtyard,
 as well as two-level underground carpark in the heart of the hills district.
</div>
     <br/>  <br/>
     <div className={classes.content}>
     Budget: $20m
     </div>  <br/>
     <div className={classes.content}>
     Service: Construction
     </div>  <br/>
     <div className={classes.content}>
     Launch Date: 2020
     </div>  <br/>
     <div className={classes.content}>
     Completion Date: 2022
     </div>  <br/>
     <div className={classes.content}>
     Status: Completed
     </div>

</div>

          </Item>
          </Grid>

          </Grid>
          </Box>



          <Box paddingTop='100px'>
      <Grid container >
        <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.left} >
          <div className={classes.box}>
<div className={classes.title} > The Belrose Collection</div>
<div className={classes.paragraphe}>
The Belrose collection is the redevelopment of the iconic Belrose library consisting of 50 residential apartments, 13 commercial lots, 2 basements with 238 car spaces (between residential and commercial spaces) and disabled access into each lot. The development caters for a large array of business types, think retail, medical, allied health, gyms, specialised health services, professional, food & beverage and many more. In addition, there's a
 large communal open atrium space with alfresco seating & landscaped garden throughout.
</div>
     <br/>
     <br/>
     <div className={classes.content}>
     Budget: $35m
     </div>  <br/>
     <div className={classes.content}>
     Service: Construction
     </div>  <br/>
     <div className={classes.content}>
     Launch Date: 2023
     </div>  <br/>
     <div className={classes.content}>
     Completion Date: 2025
     </div>  <br/>
     <div className={classes.content}>
     Status: Current<br/><br/>
     </div>
     <div className={classes.content1}>Belrose NSW</div>

</div>

          </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.right} >

          <img src={Belrose} className={classes.image}></img>
          </Item>
          </Grid>

          </Grid>
          </Box>



          <Box paddingTop='100px'>
      <Grid container >
        <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.left} >
            <img src={House} className={classes.image}></img>

          </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.right} >
<div className={classes.box}>
<div className={classes.title} >House of Ryuu</div>
<div className={classes.paragraphe}>From the moment you step through the front door, you'll be wowed by the 
attention to detail and the high end finishes that adorn every inch of this magnificent property.
The kitchen is a chef's dream, with its top-of-the-line appliances, sleek cabinetry, and beautiful stone countertops. You'll love entertaining in this space, whether you're whipping up a gourmet meal for friends or just enjoying a quiet dinner with your family.
The living areas are equally impressive, with soaring ceiling, floor-to-ceiling windows, and an inviting fireplace. The open floor plan allows for plenty of natural light to flood the space, creating a warm and welcoming atmosphere.
But it's not just the inside of this home that will take your breath away. The outdoors spaces are equally impressive, with a sparkling pool, a covered patio, and a beautifully landscape yard.
You'll love spending time here in the warmer months, lounging by the pool or hosting a barbecue for friends and family.
In short, this home has it all - style, sophistication, and luxury. If you're looking for the best of the best, this is the property for you.</div>
     <br/>  <br/>
     <div className={classes.content}>
     Budget: $35m
     </div>  <br/>
     <div className={classes.content}>
     Service: Construction
     </div>  <br/>
     <div className={classes.content}>
     Launch Date: 2020
     </div>  <br/>
     <div className={classes.content}>
     Completion Date: 2022
     </div>  <br/>
     <div className={classes.content}>
     Status: Completed
     </div>

</div>

          </Item>
          </Grid>

          </Grid>
          </Box>



          <Box paddingTop='100px'>
      <Grid container >
        <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.left} >
          <div className={classes.box}>
<div className={classes.title} > Parkside Living</div>
<div className={classes.paragraphe}>
Parkside Living is a new boutique development in the heart of Wentworthville. It's just a 
few moment's walks from Wentworthville train station and shopping centre. 
Architecturally designed apartments offer an unrivalled lifestyle to their occupants. Features include:
<br/>
● Boutique block consisting of only 24 apartments<br/>
● Situated adjacent to Lytton Park & Wentworthville Community Garden<br/>
● Tiled flooring and carpet flooring to bedrooms<br/>
● Mirrored wardrobes in both bedrooms<br/>
● Internal laundry with dryer<br/>
● Secured parking and lock up storage<br/>
● Smeg stainless steel appliances<br/>
● Stunning 40mm stone benchtops<br/>
● Floor to ceiling tiled bathrooms with semi frameless showers and bathtub<br/>
● Large communal area to the rear.

</div>
     <br/>
     <br/>
     <div className={classes.content}>
     Budget: $15.6m
     </div>  <br/>
     <div className={classes.content}>
     Service: Construction
     </div>  <br/>
     <div className={classes.content}>
     Launch Date: 2020
     </div>  <br/>
     <div className={classes.content}>
     Completion Date: 2021
     </div>  <br/>
     <div className={classes.content}>
     Status: Completed<br/><br/>
     </div>
     <div className={classes.content1}>Wentworth Ville NSW</div>

</div>

          </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.right} >

          <img src={Parkside} className={classes.image}></img>
          </Item>
          </Grid>

          </Grid>
          </Box>



          <Box paddingTop='100px'>
      <Grid container >
        <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.left} >
            <img src={Narrow} className={classes.image}></img>

          </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.right} >
<div className={classes.box}>
<div className={classes.title} > Narrow Neck</div>
<div className={classes.paragraphe}>Introducing 152-166 Narrow Nick, Katoomba NSW 2780 - one of the most exciting residential offerings from the world heritage listed blue mountains. Currently under construction is a small collection of designer homes flanked by 57 acres of parklands and gorgeous escarpments. All homes offer 3 bedrooms, 3 full bathrooms and parking for multiple vehicles.
 For those with mobility issues, we've even installed a lift.</div>
     <br/>  <br/>
     <div className={classes.content}>
     Budget: $34m
     </div>  <br/>
     <div className={classes.content}>
     Service: Construction
     </div>  <br/>
     <div className={classes.content}>
     Launch Date: 2022
     </div>  <br/>
     <div className={classes.content}>
     Completion Date: 2023
     </div>  <br/>
     <div className={classes.content}>
     Status: Current
     </div><br/>
     <div className={classes.title} > Katoomba NSW</div>

</div>

          </Item>
          </Grid>

          </Grid>
          </Box>




         <Box paddingTop='100px'>
      <Grid container >
        <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.left} >
          <div className={classes.box}>
<div className={classes.title} > Escarpments Living</div>
<div className={classes.paragraphe}>
One of the most exciting residential offerings from the World Heritage-listed Blue Mountains.
<br/><br/>
Introducing 23-24 The Escarpments, Katoomba - one of the most exciting residential offerings from the World Heritage listed Blue Mountains. Currently under construction is a small collection of Designer homes flanked by 57 acres of parklands and gorgeous escarpments. All homes offer 3 bedrooms, 3 full bathrooms and parking for multiple vehicles. For those with mobility issues, we’ve even installed a lift!

</div>
     <br/>
     <br/>
     <div className={classes.content}>
     Budget: $22m
     </div>  <br/>
     <div className={classes.content}>
     Service: Construction
     </div>  <br/>
     <div className={classes.content}>
     Launch Date: 2021
     </div>  <br/>
     <div className={classes.content}>
     Completion Date: 2023
     </div>  <br/>
     </div>

          </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.right} >

          <img src={Escarpment} className={classes.image}></img>
          </Item>
          </Grid>

          </Grid>
          </Box>
 


          <Box paddingTop='100px'>
      <Grid container >
        <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.left} >
            <img src={Pioneer} className={classes.image}></img>

          </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.right} >
<div className={classes.box}>
<div className={classes.title} > Pioneer Girraween</div>
<div className={classes.paragraphe}>The open plan living area benefits from ample sunlight with free flow design into the private courtyard. Double Ceiling voids with skylights. The town house is equipped with ducted air-conditioning and no expense is spared. The modern kitchen is large in size and provides for a detached bench space which adjoins a separate laundry. Kitchen includes stone bench-tops, splash back, stainless steel, 'Daniella' appliances, including gas cooktop and dishwasher. Ground floor master bedrooms including ensuites and ample 
rob space. Modern bathrooms are equipped with high quality finishes.</div>
     <br/>  <br/>
     <div className={classes.content}>
     Budget: $7.5m
     </div>  <br/>
     <div className={classes.content}>
     Service: Construction
     </div>  <br/>
     <div className={classes.content}>
     Launch Date: 2021
     </div>  <br/>
     <div className={classes.content}>
     Completion Date: 2023
     </div>  <br/>
     

</div>

          </Item>
          </Grid>

          </Grid>
          </Box>



          <Box paddingTop='100px'>
      <Grid container >
        <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.left} >
          <div className={classes.box}>
<div className={classes.title} > The Pinnacle</div>
<div className={classes.paragraphe}>
The open plan living area benefits from ample sunlight with free flow design into the private courtyard. Double Ceiling voids with skylights. The town house is equipped with ducted air-conditioning and no expense is spared. The modern kitchen is large in size and provides for a detached bench space which adjoins a separate laundry. Kitchen includes stone bench-tops, splash back, stainless steel, 'Daniella' appliances, including gas cooktop and dishwasher. Ground floor master bedrooms including ensues 
and ample rob space. Modern bathrooms are equipped with high quality finishes.
</div>
     <br/>
     <br/>
     <div className={classes.content}>
     Budget: $7.5m
     </div>  <br/>
     <div className={classes.content}>
     Service: Construction
     </div>  <br/>
     <div className={classes.content}>
     Launch Date: 2021
     </div>  <br/>
     <div className={classes.content}>
     Completion Date: 2022
     </div>  <br/>
     

</div>

          </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.right} >

          <img src={Pinnacle} className={classes.image}></img>
          </Item>
          </Grid>

          </Grid>
          </Box>


          <Box paddingTop='100px'>
      <Grid container >
        <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.left} >
            <img src={Emperial} className={classes.image}></img>

          </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.right} >
<div className={classes.box}>
<div className={classes.title} > The Emperial Residences</div>
<div className={classes.paragraphe}>
The Emperial Residences is a sublime collection of 20 luxury apartments. Elegant open plan interiors, stunning kitchen and bathrooms, and seamless indoor/outdoor flow combines to create an irresistibly liveable home. Lush landscaped gardens, botanical courtyards and a spectacular rooftop terrace shape a series of uplifting alfresco areas. -Four levels of individually designed apartments by award-winning SDA-Choose
 from a range of one, two and three-bedroom designs some with study-
Secure parking with basement storage provides ultimate convenience-Open plan living connects with private alfresco areas, bringing the outside in- High-spec kitchens with European stainless steel appliances- Bedrooms are restful retreats boasting plush carpets and built-in-robes Bathrooms and ensuites are designed to offer a tranquil escape to rejuvenate-Rooftop terrace with neighbourhood for entertaining with family and friends - Direct lift access into penthouse apartments.
</div>
     <br/>  <br/>
     <div className={classes.content}>
     Budget: $20m
     </div>  <br/>
     <div className={classes.content}>
     Service: Construction
     </div>  <br/>
     <div className={classes.content}>
     Launch Date: 2021
     </div>  <br/>
     <div className={classes.content}>
     Completion Date: 2024
     </div>  <br/>
     <div className={classes.content}>
     Status: Current
     </div>

</div>

          </Item>
          </Grid>

          </Grid>
          </Box>



          <Box paddingTop='100px'>
      <Grid container >
        <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.left} >
          <div className={classes.box}>
<div className={classes.title} > Manhattan at Revesby</div>
<div className={classes.paragraphe}>
Unrivalled not only in class, but in class itself. 
Introducing a dual level masterpiece with the following attributes:<br/>
● 4 double size bedrooms complimented with built-in wardrobes<br/>
● Main bedroom with a stunning private ensuite, walk-in robe & balcony enjoying district views<br/>
● 5th bedroom or office downstairs with downstairs bathroom<br/>
● Superb living space with open plan lounge and dining<br/>
● luxurious kitchen with gas cooking, a large breakfast bar and pantry<br/>
● Sensational outdoor entertaining area complete with built-in kitchenette, 
remote all weather blinds and sound system<br/>
● Enjoy the glamorous salt water pool with water feature<br/>
● Easy care front yard and backyard gardens.

</div>
     <br/>
     <br/>
     <div className={classes.content}>
     Budget: $4m
     </div>  <br/>
     <div className={classes.content}>
     Service: Construction
     </div>  <br/>
     <div className={classes.content}>
     Launch Date: 2021
     </div>  <br/>
     <div className={classes.content}>
     Completion Date: 2021
     </div>  <br/>
     <div className={classes.content}>
     Status: Completed<br/><br/>
     </div>
    

</div>

          </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.right} >

          <img src={Manhatan} className={classes.image}></img>
          </Item>
          </Grid>

          </Grid>
          </Box>


          <Box paddingTop='100px'>
      <Grid container >
        <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.left} >
            <img src={Pennant} className={classes.image}></img>

          </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.right} >
<div className={classes.box}>
<div className={classes.title} > Pennant Hills Road Thornleigh</div>
<div className={classes.paragraphe}>A designed boutique development comprising of 57 luxury apartments with one,
 two and three bedroom options. As well as 4 retail outlets.</div>
     <br/>  <br/>
     <div className={classes.content}>
     Budget: $20m
     </div>  <br/>
     <div className={classes.content}>
     Service: Construction
     </div>  <br/>
     <div className={classes.content}>
     Launch Date: 2020
     </div>  <br/>
     <div className={classes.content}>
     Completion Date: 2022
     </div>  <br/>
     <div className={classes.content}>
     Status: Completed
     </div>
     <div className={classes.title} > Thornleigh NSW</div>

</div>

          </Item>
          </Grid>

          </Grid>
          </Box>


          <Box paddingTop='100px'>
      <Grid container >
        <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.left} >
          <div className={classes.box}>
<div className={classes.title} > Waterfront Duplex</div>
<div className={classes.paragraphe}>

Luxury 2 x 4 bedroom waterfront dwellings. The dwelling is in exceptional condition and includes:<br/>
● 4 large bedrooms all with build-ins<br/>
● 2 bathrooms<br/>
● Multiple living and entertaining areas<br/>
● 2 fully functional kitchens<br/>
● Well maintained garden<br/>
● Possible dual living opportunity.


</div>
     <br/>
     <br/>
     <div className={classes.content}>
     Budget: $4m
     </div>  <br/>
     <div className={classes.content}>
     Service: Construction
     </div>  <br/>
     <div className={classes.content}>
     Launch Date: 2022
     </div>  <br/>
     <div className={classes.content}>
     Completion Date: 2023
     </div>  <br/>
     <div className={classes.content}>
     Status: Design Stage<br/><br/>
     </div>
     

</div>

          </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={6}  >
          <Item className={classes.right} >

          <img src={Waterfront} className={classes.image}></img>
          </Item>
          </Grid>

          </Grid>
          </Box>

    </div>
  )
}

export default Project