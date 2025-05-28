"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const allLinks = [
        { label: "RESERVATION", href: "/" },
        { label: "OFFERS", href: "/" },
        { label: "LOCATION", href: "/" },
        { label: "CAR & SERVICES", href: "/" },
        { label: "BUSSINESS RENTALS", href: "/" },
        { label: "CAR SALES", href: "/" },
        { label: "HELP", href: "/" },
        { label: "AVIS PREFERRED", href: "/" },
        { label: "SIGN UP", href: "/signup" },
        { label: "LOG IN", href: "/login" },
    ];

    const essentialLinks = [
        { label: "AVIS PREFERRED", href: "/" },
        { label: "SIGN UP", href: "/signup" },
        { label: "LOG IN", href: "/login" },
    ];

    const midDropdownLinks = allLinks.slice(0, 7); // First 7 links

    return (
        <>
            <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-3xl p-4 sm:p-5 sm:pl-10 flex items-center justify-between">
                {/* Logo + Mobile Menu Btn */}
                <div className="flex gap-100 w-full sm:w-auto pr-4">
                    <Image src="/logo.png" alt="logo" height={60} width={60} />
                    <div className="sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            className="focus:outline-none w-full"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Medium Screen: Essential Links + Toggle */}
                <div className="hidden sm:flex lg:hidden gap-5">
                    {essentialLinks.map((link) => (
                        <Link key={link.label} href={link.href}>
                            <div className="cursor-pointer no-underline text-black hover:text-blue-600">
                                {link.label}
                            </div>
                        </Link>
                    ))}
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Large Screen: All Links */}
                <div className="hidden lg:flex flex-row gap-5 text-sm ml-10">
                    {allLinks.map((link) => (
                        <Link key={link.label} href={link.href}>
                            <div className="cursor-pointer no-underline text-black hover:text-blue-600">
                                {link.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="sm:hidden bg-white shadow-lg px-0 py-20 space-y-2 w-screen fixed top-[64px] left-0 z-40">
                    {allLinks.map((link) => (
                        <Link key={link.label} href={link.href}>
                            <div className="py-2 border-b cursor-pointer no-underline text-black hover:text-blue-600 px-4 w-full">
                                {link.label}
                            </div>
                        </Link>
                    ))}
                </div>
            )}

            {/* Mid Screen Dropdown */}
            {isOpen && (
                <div className="hidden sm:block lg:hidden bg-white shadow-lg px-0 py-4 space-y-2 w-full absolute z-40 top-[64px]">
                    {midDropdownLinks.map((link) => (
                        <Link key={link.label} href={link.href}>
                            <div className="py-2 border-b cursor-pointer no-underline text-black hover:text-blue-600 px-4 w-full">
                                {link.label}
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}
