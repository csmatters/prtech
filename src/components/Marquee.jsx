import React from "react";
import MarqueeItem from "./MarqueeItem";
import AI from "../assets/images/AI.png";
import PHP from "../assets/images/PHP-logo.png";
import laravel from "../assets/images/laravel.png";
import JS from "../assets/images/javascript.png";
import reactjs from "../assets/images/ReactJS1.png";
import nodejs from "../assets/images/nodejs.webp";
import MySQLLogo from "../assets/images/MySQL-Logo.jpg";
import mongodb from "../assets/images/MongoDB_Logo.png";
import nextjs from "../assets/images/nextjs.png";
import aws from "../assets/images/amazon-web.png"
import java from "../assets/images/java-logo.png";
import bootstrap from "../assets/images/bootstrap-logo.png";
import WordPress from "../assets/images/WordPress-logo.png";

const Marquee = () => {
  const upperMarquee = [
    AI, PHP, laravel, JS, reactjs, nodejs
  ];

  const lowerMarquee = [
    MySQLLogo, mongodb, nextjs, aws, java, bootstrap, WordPress
  ];

  return (
    <div className="container mx-auto py-10">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      <br/>
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
    </div>
  );
};

export default Marquee;