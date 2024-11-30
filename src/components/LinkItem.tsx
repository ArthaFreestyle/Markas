
import React from "react";
import { Link } from 'lucide-react'

interface LinkItemProps {
  href: string
  title: string
}

function LinkItem({ href, title }: LinkItemProps) {
  return (
    <>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between w-full px-4 py-3 bg-white rounded-lg shadow-md transition-transform duration-300 transform hover:shadow-lg transition-shadow duration-200 hover:scale-110"
    >
      <span className="text-gray-800 font-medium">{title}</span>
      <Link className="w-5 h-5 text-gray-500" />
    </a>
    </>
  )
}

export default LinkItem;