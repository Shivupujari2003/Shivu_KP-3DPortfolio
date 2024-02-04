import React from 'react'
import "./Footer.css"
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BsGithub,BsTwitterX,BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <Typography variant="h5">About Me</Typography>
             <Typography>    {/*by default p tag */}
            Hey, my name is Shivaraj K P. I am a Full-Stack Developer.
            </Typography>
            <Link to="/contact" className='footerContactBtn'>
                <Typography>Contact Us</Typography>
            </Link>
        </div>
        <div>
            <Typography variant="h6">Social Media</Typography>
                <a href="https://github.com/Shivupujari2003" target="black">
                <BsGithub />
                </a>
                <a href="https://www.instagram.com/shivu_sp_33/?hl=en" target="black">
                <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/in/shivraj-kp-9920bb255/" target="black">
                <BsLinkedin />
                </a>
                <a href="https://www.linkedin.com/in/shivraj-kp-9920bb255/" target="black">
                <BsTwitterX />
                </a>
        </div>
    </div>
  )
}

export default Footer
