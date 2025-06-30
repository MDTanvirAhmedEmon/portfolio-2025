import {
    Code,
    Database,
    Server,
    Globe,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Skills = () => {

    const skills = {
        frontend: [
            "React.js",
            "Next.js",
            "React Native",
            "JavaScript",
            "TypeScript",
            "Tailwind CSS",,
        ],
        backend: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "JWT Authentication"],
        database: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL"],
        tools: ["Git", "GitHub", "VS Code", "Postman", "Docker", "AWS", "Vercel", "Netlify", "VPS Server"],
    }

    return (
        <section className="min-h-screen md:h-screen flex items-center justify-center px-4 pb-24 md:pb-0 pt-14 md:pt-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 md:mb-16">
                    Skills & Technologies
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:transform hover:scale-105 transition-all duration-300">
                        <CardContent className="p-4 md:p-6 text-center">
                            <Globe className="w-10 h-10 md:w-12 md:h-12 text-blue-400 mx-auto mb-3 md:mb-4" />
                            <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
                                {skills.frontend.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="bg-blue-500/20 text-blue-300 text-xs">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:transform hover:scale-105 transition-all duration-300">
                        <CardContent className="p-4 md:p-6 text-center">
                            <Server className="w-10 h-10 md:w-12 md:h-12 text-green-400 mx-auto mb-3 md:mb-4" />
                            <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
                                {skills.backend.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="bg-green-500/20 text-green-300 text-xs">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:transform hover:scale-105 transition-all duration-300">
                        <CardContent className="p-4 md:p-6 text-center">
                            <Database className="w-10 h-10 md:w-12 md:h-12 text-purple-400 mx-auto mb-3 md:mb-4" />
                            <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Database</h3>
                            <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
                                {skills.database.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="bg-purple-500/20 text-purple-300 text-xs">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:transform hover:scale-105 transition-all duration-300">
                        <CardContent className="p-4 md:p-6 text-center">
                            <Code className="w-10 h-10 md:w-12 md:h-12 text-orange-400 mx-auto mb-3 md:mb-4" />
                            <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Tools</h3>
                            <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
                                {skills.tools.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="bg-orange-500/20 text-orange-300 text-xs">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Skills;