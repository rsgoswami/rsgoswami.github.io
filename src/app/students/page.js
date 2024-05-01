'use client'

import HeroSection from '@/components/HeroSection'
import Nav from '@/components/Nav'
import { Students } from '@/components/students'

export default function page() {
  return (
    <div>
        <Nav/>
        <HeroSection/>
        <Students/>
    </div>
  )
}
