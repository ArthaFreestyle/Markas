import './App.css'
import React from "react";
import { Img } from 'react-image'
import LinkItem from './components/LinkItem'

const links = [
  { href: 'https://www.instagram.com/arthgndi', title: 'Instagram' },
  { href: 'https://github.com/ArthaFreestyle', title: 'GitHub' },
  { href: 'https://www.linkedin.com/in/artha-gandhi-wardhana-aksa-724b42253/', title: 'LinkedIn' },
]

function App() {

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-cyan-400 to-blue-500 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <Img
            src="/Artha.JPG"
            alt="Profile Picture"
            width={150}
            height={150}
            loader={<div>Loading...</div>}
            unloader={<div>Image failed to load</div>}
            className="mx-auto rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="mt-4 text-3xl font-bold text-white">Artha Gandhi</h1>
          <p className="mt-2 text-xl text-white opacity-80">@Arthgndi</p>
        </div>
        <div className="space-y-4">
          {links.map((link, index) => (
            <LinkItem key={index} href={link.href} title={link.title} />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
