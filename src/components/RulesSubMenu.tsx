"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X, Award, Flower, Cake, Palette, Sparkles, Star, Calendar, Users, Baby} from "lucide-react"
import { cn } from "@/lib/utils"

type MenuSection = {
    id: string
    title: string
    icon: React.ReactNode
    color: string
}

export function RulesSubmenu() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState<string | null>(null)

    // Define the sections for the submenu
    const sections: MenuSection[] = [
        {
            id: "important-dates",
            title: "Important Dates",
            icon: <Calendar className="w-5 h-5" />,
            color: "bg-yellow-100 border-yellow-300 text-yellow-800",
        },
        {
            id: "general-rules",
            title: "General Rules",
            icon: <Award className="w-5 h-5" />,
            color: "bg-blue-100 border-blue-300 text-blue-800",
        },
        {
            id: "category-rules",
            title: "Category Rules",
            icon: <Star className="w-5 h-5" />,
            color: "bg-green-100 border-green-300 text-green-800",
        },
        {
            id: "vegetables-flowers",
            title: "Vegetables & Flowers",
            icon: <Flower className="w-5 h-5" />,
            color: "bg-green-50 border-green-200 text-green-700",
        },
        {
            id: "baking-cakes",
            title: "Baking",
            icon: <Cake className="w-5 h-5" />,
            color: "bg-pink-50 border-pink-200 text-pink-700",
        },
        {
            id: "hobbies-crafts",
            title: "Hobbies & Crafts",
            icon: <Sparkles className="w-5 h-5" />,
            color: "bg-purple-50 border-purple-200 text-purple-700",
        },
        {
            id: "artwork-photography",
            title: "Photography",
            icon: <Palette className="w-5 h-5" />,
            color: "bg-blue-50 border-blue-200 text-blue-700",
        },
        {
            id: "five-and-under",
            title: "5 & Under",
            icon: <Baby className="w-5 h-5" />,
            color: "bg-orange-50 border-orange-200 text-orange-700",
        },
        {
            id: "team-entries",
            title: "Team Entries",
            icon: <Users className="w-5 h-5" />,
            color: "bg-blue-100 border-blue-200 text-blue-800",
        },
        {
            id: "judging-prizes",
            title: "Judging & Prizes",
            icon: <Award className="w-5 h-5" />,
            color: "bg-red-100 border-red-200 text-red-700",
        },
    ]

    // Function to scroll to a section
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        console.log(id)
        if (element) {
            // Offset for the sticky header
            setActiveSection(id)
            const offset = 100
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            })

            // Highlight the section briefly
            element.classList.add("highlight-section")
            setTimeout(() => {
                element.classList.remove("highlight-section")
            }, 1500)

            // Close the menu on mobile after clicking
            if (window.innerWidth < 768) {
                setIsOpen(false)
            }
        }
    }


    return (
        <div className="fixed left-4 top-24 z-20 md:left-8">
            <div className="relative">
                {/* Menu toggle button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300",
                        isOpen
                            ? "bg-red-100 border-2 border-red-300 rotate-90"
                            : "bg-blue-100 border-2 border-blue-300 hover:scale-110",
                    )}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X className="w-6 h-6 text-red-600" /> : <Menu className="w-6 h-6 text-blue-600" />}
                </button>

                {/* Menu items */}
                <div
                    className={cn(
                        "absolute left-0 top-16 bg-white rounded-2xl shadow-xl border-2 border-blue-200 transition-all duration-300 overflow-hidden",
                        isOpen ? "opacity-100 translate-x-0 max-h-[80vh] w-64" : "opacity-0 -translate-x-8 max-h-0 w-0",
                    )}
                >
                    <div className="p-3 bg-blue-50 border-b-2 border-blue-100">
                        <h3 className="font-bold text-blue-800 flex items-center">
                            <Star className="w-5 h-5 mr-2 text-yellow-500" />
                            Jump to Section
                        </h3>
                    </div>

                    <div className="p-2 max-h-[60vh] overflow-y-auto">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={cn(
                                    "flex items-center w-full px-3 py-2 my-1 rounded-xl text-left transition-all",
                                    activeSection === section.id
                                        ? `${section.color} border-2 shadow-md`
                                        : "hover:bg-gray-50 border-2 border-transparent",
                                    activeSection === section.id ? "font-bold" : "font-medium",
                                )}
                            >
                                <div
                                    className={cn(
                                        "flex items-center justify-center w-8 h-8 rounded-full mr-2",
                                        activeSection === section.id ? "bg-white" : "bg-gray-100",
                                    )}
                                >
                                    {section.icon}
                                </div>
                                <span>{section.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
