"use client"
import Faq from '@/components/Faq';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Framericon from '@/components/Framericon';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

export default function Home() {

  return (
    <div>
      <Navbar />
      <Header/>
      <Features/>
      <Faq/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
      <Framericon/>
    </div>
  )
}
