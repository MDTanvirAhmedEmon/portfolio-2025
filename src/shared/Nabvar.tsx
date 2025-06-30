"use client";
import { Briefcase, Code, Mail, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathname = usePathname();
    console.log(pathname);

    return (
        <div className="relative overflow-hidden">
            {/* {renderCurrentSection()} */}

            {/* macOS-style Dock Navigation */}
            <nav className="fixed bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 z-50">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-1 md:p-2 border border-white/20 shadow-2xl">
                    <div className="flex items-center gap-1 md:gap-2">
                        <Link href={`/`}>
                            <button
                                className={`p-2 md:p-3 rounded-lg md:rounded-xl transition-all duration-300 hover:scale-110 touch-manipulation cursor-pointer ${pathname === "/" ? "bg-white/20 shadow-lg scale-110" : "hover:bg-white/10"
                                    }`}
                                title="Home"
                            >
                                <User className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </button>
                        </Link>
                        <Link href={`/skills`}>
                            <button
                                className={`p-2 md:p-3 rounded-lg md:rounded-xl transition-all duration-300 hover:scale-110 touch-manipulation cursor-pointer ${pathname === "/skills" ? "bg-white/20 shadow-lg scale-110" : "hover:bg-white/10"
                                    }`}
                                title="Skills"
                            >
                                <Code className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </button>
                        </Link>
                        <button
                            className={`p-2 md:p-3 rounded-lg md:rounded-xl transition-all duration-300 hover:scale-110 touch-manipulation cursor-pointer ${pathname === "/projects" ? "bg-white/20 shadow-lg scale-110" : "hover:bg-white/10"
                                }`}
                            title="Projects"
                        >
                            <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </button>
                        <Link href={`/contact`}>
                            <button
                                className={`p-2 md:p-3 rounded-lg md:rounded-xl transition-all duration-300 hover:scale-110 touch-manipulation cursor-pointer ${pathname === "/contact" ? "bg-white/20 shadow-lg scale-110" : "hover:bg-white/10"
                                    }`}
                                title="Contact"
                            >
                                <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </button>
                        </Link>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;