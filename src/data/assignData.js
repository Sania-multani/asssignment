import { MapPin, CreditCard, PlaneLanding } from "lucide-react";

import weatherIcon from "../assets/service-weather.svg";
import flightIcon from "../assets/service-flight.svg";
import eventsIcon from "../assets/service-events.svg";
import customIcon from "../assets/service-custom.svg";

import romeImg from "../assets/rome.png";
import londonImg from "../assets/london.png";
import europeImg from "../assets/europe.png";

import axonLogo from "../assets/partner-axon.png";
import jetstarLogo from "../assets/partner-jetstar.png";
import expediaLogo from "../assets/partner-expedia.png";
import qantasLogo from "../assets/partner-qantas.png";
import alitaliaLogo from "../assets/partner-alitalia.png";

import mikeImg from "../assets/avatar-mike.jpg";
import chrisImg from "../assets/avatar-chris.jpg";
import annaImg from "../assets/avatar-anna.jpg";


export const assignNavLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Hotels", href: "#services" },
  { label: "Flights", href: "#services" },
  { label: "Bookings", href: "#booking" },
];

export const assignServices = [
  {
    title: "Calculated Weather",
    text: "Built Wicket longer admire do barton vanity itself do in it.",
    image: weatherIcon,
  },
  {
    title: "Best Flights",
    text: "Engrossed listening. Park gate sell they west hard for the.",
    image: "/src/assets/service-flight.svg",
  },
  {
    title: "Local Events",
    text: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    image: "/src/assets/service-events.svg",
  },
  {
    title: "Customization",
    text: "We deliver outsourced aviation services for military customers",
    image: "/src/assets/service-custom.svg",
  },
];

export const assignDestinations = [
  {
    name: "Rome, Italy",
    price: "$5,42k",
    days: "10 Days Trip",
    image: romeImg,
  },
  {
    name: "London, UK",
    price: "$4.2k",
    days: "12 Days Trip",
    image: londonImg,
  },
  {
    name: "Full Europe",
    price: "$15k",
    days: "28 Days Trip",
    image: europeImg,
  },
];

export const assignSteps = [
  { title: "Choose Destination", icon: MapPin, color: "bg-assign-yellow" },
  { title: "Make Payment", icon: CreditCard, color: "bg-assign-orange" },
  {
    title: "Reach Airport on Selected Date",
    icon: PlaneLanding,
    color: "bg-assign-teal",
  },
];

export const assignStepText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.";

export const assignTestimonials = [
  {
    name: "Mike taylor",
    place: "Lahore, Pakistan",
    image: mikeImg,
    text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
  },
  {
    name: "Chris Thomas",
    place: "CEO of Red Button",
    image: chrisImg,
    text: "Barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.",
  },
  {
    name: "Anna Williams",
    place: "Berlin, Germany",
    image: annaImg,
    text: "Built Wicket longer admire do barton vanity itself do in it. Engrossed listening. Park gate sell they west hard for the.",
  },
];

export const assignPartners = [
  { name: "Axon", image: axonLogo, widthClass: "w-[120px]" },
  { name: "Jetstar", image: jetstarLogo, widthClass: "w-[124px]" },
  { name: "Expedia", image: expediaLogo, widthClass: "w-[162px]" },
  { name: "Qantas", image: qantasLogo, widthClass: "w-[162px]" },
  { name: "Alitalia", image: alitaliaLogo, widthClass: "w-[94px]" },
];

export const assignFooterColumns = [
  { title: "Company", links: ["About", "Careers", "Mobile"] },
  { title: "Contact", links: ["Help/FAQ", "Press", "Affiliates"] },
  { title: "More", links: ["Airlinefees", "Airline", "Low fare tips"] },
];
