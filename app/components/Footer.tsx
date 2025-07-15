"use client"

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    // Reset form
    setEmail("")
    // Show success message or toast
    alert("Thank you for signing up to our newsletter!")
  }

  return (
    <footer className="py-12 px-4 bg-light-sage text-soil border-t border-sun/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <img src="/images/new-footer-logo.png" alt="MAHA Collective" className="h-32 w-auto" />
            <p className="mt-2 font-libre text-soil text-lg">Join the Collective. Live MAHA.</p>
          </div>
        </div>

        <div className="border-t border-sun/10 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-libre font-normal text-soil mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-sun" />
                Contact Us
              </h3>
              <p className="text-soil/90 font-libre mb-2">
                <a href="mailto:info@mahacollective.com.au" className="hover:text-sun transition-colors">
                  info@mahacollective.com.au
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-libre font-normal text-soil mb-4">Sign up to our newsletter</h3>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="px-4 py-2 rounded-md border border-sun/20 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sun/50 flex-grow"
                />
                <Button type="submit" className="bg-sun hover:bg-sun/80 text-white rounded-md font-libre">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm">
          <p>© {new Date().getFullYear()} MAHA Collective. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
