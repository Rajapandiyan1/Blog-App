"use client"
import Image, { StaticImageData } from "next/image";
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import dhoni from '../public/Dhoni.jpg';
import { useState } from "react";
import Homes from "@/components/Homes";

export default function Home() {
  return (
    <Homes/>
  );
}
