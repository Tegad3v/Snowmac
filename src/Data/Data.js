export const ig =
  "https://www.instagram.com/snowmac_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D";

export const facebook = "https://www.facebook.com/snowmacgroup/";

console.log(ig, facebook);

export const keyMetrics = [
  {
    metric: "5",
    title: "CORE SERVICES",
  },
  {
    metric: "6+",
    title: "YEARS OF EXPERIENCE",
  },
  {
    metric: "10+",
    title: "COMPLETED PROJECTS",
  },
  {
    metric: "10+",
    title: "SATISFIED CLIENTS",
  },
  {
    metric: "10+",
    title: "PROJECTS IN DEVELOPMENT",
  },
];

import serImage_1 from "../assets/Images/ser-1.jpg";
import serImage_2 from "../assets/Images/ser-2.jpg";
import serImage_3 from "../assets/Images/ser-3.jpg";

import { PiBlueprintFill } from "react-icons/pi";
import { FaHelmetSafety } from "react-icons/fa6";
import { MdConstruction } from "react-icons/md";

export const serviceDetails = [
  {
    imageUrl: serImage_1,
    title: "Architectural Design",
    details: [
      "Architectural design & planning",
      "Building approval drawings",
      "Working drawings & documentation",
      "3D visualization & renderings",
      "Renovation & remodeling design",
    ],
    Icon: PiBlueprintFill,
  },
  {
    imageUrl: serImage_2,
    title: "Construction",
    details: [
      "Residential construction",
      "Commercial construction",
      "Institutional construction",
      "Renovations & extensions",
      " Design-and-Build services",
    ],
    Icon: FaHelmetSafety,
  },
  {
    imageUrl: serImage_3,
    title: "General Building Services",
    details: [
      "Building consultancy",
      "Material manufacturing",
      "Component fabrication",
      "Building maintenance",
      "Interior design & fit-out",
    ],
    Icon: MdConstruction,
  },
];

export const approachDetails = [
  {
    title: "Consultation",
    details:
      "Understanding client needs, project requirements, and objectives.",
  },
  {
    title: "Design Development",
    details:
      "Preparation of concepts, drawings, specifications, and project documentation.",
  },
  {
    title: "Costing & Planning",
    details:
      "Budget preparation, project scheduling, and procurement planning.",
  },
  {
    title: "Construction",
    details:
      "Execution with strict quality control, safety compliance, and professional supervision.",
  },
  {
    title: "Handover",
    details: "Project delivery, commissioning, and post-construction support.",
  },
];

import pjImage_1 from "../assets/Images/pj-1.jpg";
import pjImage_2 from "../assets/Images/pj-2.jpg";
import pjImage_3 from "../assets/Images/pj-3.jpg";
import pjImage_4 from "../assets/Images/pj-4.jpg";

export const projects = [
  {
    image: pjImage_1,
    category: "RESIDENTIAL",
    title: "Project Ditrio",
    description:
      "A proposed residential development of three detached 3 bedroom duplex units. Each unit designed to provide a balance between aesthetics and usability.",
    span: "lg:col-span-2",
  },
  {
    image: pjImage_2,
    category: "COMMERCIAL",
    title: "Project DE WOODS",
    location: "Warri, Delta State",
    description:
      "A contemporary commercial project combining refined architecture, functional spaces, and lasting construction quality. De Woods, a Bar, Lounge, Restaurant.",
    span: "lg:col-span-3",
  },
  {
    image: pjImage_3,
    category: "RESIDENTIAL",
    title: "Project HEXA",
    description:
      "A proposed development of 6 units of 3 bedroom modern apartments, designed for comfort, functionality and contemporary living.",
    span: "lg:col-span-3",
  },
  {
    image: pjImage_4,
    category: "COMMERCIAL DEVELOPMENT",
    title: "Project Capital point",
    location: "Ibadan, Nigeria",
    description:
      "A proposed commercial development, comprising of 8 office units distributed across 3 floors, incorporating ample parking and a  professional working environment.",
    span: "lg:col-span-2",
  },
];

export const testimonials = [
  {
    image: "",
    quote:
      "Snowmac approached our project with professionalism, attention to detail, and a clear commitment to quality from beginning to completion.",
    name: "Semilore Anifowose",
    initial: "SA",
    role: "Residential Client",
    rating: 5,
  },
  {
    image: "",
    quote:
      "The team communicated clearly throughout the project and remained focused on delivering a result that met our expectations.",
    name: "De Woods Lounge & Restaurant",
    initial: "DW",
    role: "Commercial Client",
    rating: 5,
  },
  {
    image: "",
    quote:
      "From planning through execution, the process was structured, professional, and handled with great attention to detail.",
    name: "Capital Point",
    initial: "CP",
    role: "Property Developer",
    rating: 5,
  },
];

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
import { BsFillClockFill } from "react-icons/bs";

export const contactDetails = [
  {
    icon: "phone",
    label: "CALL OR WHATSAPP",
    value: "+234 911 728 9298",
    href: "tel:+2349117289298",
    Icon: FaPhoneAlt,
  },
  {
    icon: "mail",
    label: "EMAIL US",
    value: "snowmacoffice@gmail.com",
    href: "mailto:snowmacoffice@gmail.com",
    Icon: MdEmail,
  },
  {
    icon: "location",
    label: "VISIT US",
    value: "1, Main Idi Ishin Avenue, Ibadan, Oyo State",
    href: "#",
    Icon: FaLocationPin,
  },
  {
    icon: "clock",
    label: "OFFICE HOURS",
    value: "Monday – Friday · 8:00 AM – 5:00 PM",
    Icon: BsFillClockFill,
  },
];
