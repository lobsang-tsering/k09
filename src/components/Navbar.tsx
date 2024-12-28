"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Ghost } from "lucide-react";
import { ModeToggle } from "./togelButton";

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="shadow-sm sticky">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center space-x-3">
                        {/* <span className="text-xl font-bold"></span> */}
                        <Ghost />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center md:flex space-x-12">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="hover:underline hover:underline-offset-4 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <ModeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="hover:underline hover:underline-offset-4 transition-colors"
                            aria-label="Toggle menu"
                            aria-expanded={isOpen ? "true" : "false"} // Added aria-expanded
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 opacity-100 transform translate-y-0" : "max-h-0 opacity-0 transform translate-y-2"
                        }`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block px-3 py-2 hover:underline hover:underline-offset-4 rounded-md transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}
