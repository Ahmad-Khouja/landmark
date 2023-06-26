import React from "react"
import { useNavigate } from "react-router-dom";

const Landing = ()=>
{
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate("/landmark")}>Landing</div>
    )
}

export default Landing;