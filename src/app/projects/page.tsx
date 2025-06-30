import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Github,
    ExternalLink,
    Smartphone,
} from "lucide-react"

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description:
                "Full-stack e-commerce application with user authentication, payment integration, and admin dashboard.",
            tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
            image: "/placeholder.svg?height=200&width=300",
            github: "#",
            live: "#",
        },
        {
            title: "Task Management App",
            description: "Collaborative task management tool with real-time updates and team collaboration features.",
            tech: ["Next.js", "Socket.io", "MongoDB", "Express", "JWT"],
            image: "/placeholder.svg?height=200&width=300",
            github: "#",
            live: "#",
        },
        {
            title: "Social Media Dashboard",
            description: "Analytics dashboard for social media management with data visualization and reporting.",
            tech: ["React", "Node.js", "MongoDB", "Chart.js", "Express"],
            image: "/placeholder.svg?height=200&width=300",
            github: "#",
            live: "#",
        },
        {
            title: "Real Estate Platform",
            description: "Property listing platform with advanced search, filters, and virtual tour integration.",
            tech: ["Next.js", "Node.js", "MongoDB", "Cloudinary", "Stripe"],
            image: "/placeholder.svg?height=200&width=300",
            github: "#",
            live: "#",
        },
        {
            title: "Learning Management System",
            description: "Educational platform with course management, progress tracking, and interactive quizzes.",
            tech: ["React", "Express", "MongoDB", "Socket.io", "AWS"],
            image: "/placeholder.svg?height=200&width=300",
            github: "#",
            live: "#",
        },
        {
            title: "Food Delivery App",
            description: "Full-featured food delivery application with real-time tracking and payment processing.",
            tech: ["React Native", "Node.js", "MongoDB", "Express", "PayPal"],
            image: "/placeholder.svg?height=200&width=300",
            github: "#",
            live: "#",
        },
    ]

    return (
        <section className="min-h-screen flex items-center justify-center px-4 md:py-0 bg-gradient-to-br from-black via-slate-800 to-black">
            <div className="max-w-6xl mx-auto w-full pt-14 md:pt-20 pb-24 md:pb-32">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 md:mb-12">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden md:hover:transform md:hover:scale-105 md:transition-all md:duration-300"
                        >
                            <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                                <Smartphone className="w-10 h-10 md:w-12 md:h-12 text-white/50" />
                            </div>
                            <CardContent className="p-3 md:p-4">
                                <h3 className="text-base md:text-lg font-semibold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-3 text-xs md:text-sm line-clamp-2">{project.description}</p>
                                <div className="flex flex-wrap gap-1 mb-3">
                                    {project.tech.slice(0, 3).map((tech) => (
                                        <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <Badge variant="outline" className="border-gray-600 text-gray-300 text-xs">
                                            +{project.tech.length - 3}
                                        </Badge>
                                    )}
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent flex-1 text-xs cursor-pointer"
                                    >
                                        <Github className="w-3 h-3 mr-1" />
                                        Code
                                    </Button>
                                    <Button size="sm" className="bg-gray-500 hover:bg-gray-600 flex-1 text-xs cursor-pointer text-white">
                                        <ExternalLink className="w-3 h-3 mr-1" />
                                        Live
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;