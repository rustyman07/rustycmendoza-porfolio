import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { AiOutlineHome } from "react-icons/ai";
import { BsPersonExclamation } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import css from "./assets/css.png";
import html from "./assets/html.png";
import js from "./assets/js.png";
import react from "./assets/react.png";
import express from "./assets/express.png";
import php from "./assets/php.png";
import cs6 from "./assets/cs6.png";
import mysql from "./assets/mysql.png";
import mongodb from "./assets/mongo.png";
import redux from "./assets/redux.png";
import figma from "./assets/figma.png";
import node from "./assets/node.png";
import tailwind from "./assets/tailwind1.png";
import sass from "./assets/sass.png";

export const data = [
  {
    title: "Todo-list",
    desc: "My first todo list built in react",
    image: "image/img4.jpg",
    id: 1,
  },
  {
    title: "Ecommerce-website",
    desc: "My first e-commerce built in react",
    image: "/image/img2.jpg",
    id: 2,
  },
  {
    title: "Portfolio website",
    desc: "Portfolio website built in react",
    image: "/image/img3.jpg",
    id: 3,
  },
];

export const contact = {
  email: "mendozakean12@gmail.com",
  phoneNumber: "09957830346",
  address: "Cagayan de Oro, Philippines",
  icon: [AiOutlineMail, BsFillTelephoneFill, MdLocationPin],
};

export const navlink = [
  {
    nav: "home",
    icon: AiOutlineHome,
  },
  {
    nav: "about",
    icon: BsPersonExclamation,
  },
  {
    nav: "project",
    icon: HiOutlineSquaresPlus,
  },
  {
    nav: "contact",
    icon: TiContacts,
  },
];

export const logos = [
  {
    id: 1,
    title: "html",
    src: html,
  },
  {
    id: 2,
    title: "css",
    src: css,
  },
  {
    id: 3,
    title: "javascript",
    src: js,
  },
  {
    id: 4,
    title: "react",
    src: react,
  },
  {
    id: 5,
    title: "redux",
    src: redux,
  },
  {
    id: 6,
    title: "express",
    src: express,
  },
  {
    id: 7,
    title: "node",
    src: node,
  },
  {
    id: 8,
    title: "php",
    src: php,
  },
  {
    id: 9,
    title: "mysql",
    src: mysql,
  },
  {
    id: 10,
    title: "mongodb",
    src: mongodb,
  },

  {
    id: 11,
    title: "tailwind",
    src: tailwind,
  },
  {
    id: 12,
    title: "sass",
    src: sass,
  },
  {
    id: 13,
    title: "figma",
    src: figma,
  },
  {
    id: 14,
    title: "photoshop",
    src: cs6,
  },
];
