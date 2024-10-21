import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Menu } from "lucide-react"
import { logoMain } from "@/public/assets"
import MobileNav from "./MobileNav"
import SearchBar from "./SearchBar"

export default function Navbar() {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src={logoMain}
            alt="Logo"
            width={150}
            height={40}
          />
        </Link>

        <div className="hidden md:flex items-center flex-1 mx-4">
          <SearchBar />
        </div>

        <nav className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-2">
            <Button variant="outline">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </nav>
      </div>
    </header>
  )
}