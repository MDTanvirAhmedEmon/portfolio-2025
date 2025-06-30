import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
} from "lucide-react"

const Contact = () => {
    return (
        <section className="min-h-screen md:h-screen flex items-center justify-center px-4 py-8 md:py-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="max-w-4xl mx-auto w-full text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-5">Let&apos;s Work Together</h2>
                <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-8 max-w-2xl mx-auto px-4">
                    I&apos;m always interested in new opportunities and exciting projects. Let&apos;s discuss how we can bring your ideas to
                    life.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-8">
                    <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                        <CardContent className="p-4 md:p-6 text-center">
                            <Mail className="w-6 h-6 md:w-8 md:h-8 text-blue-400 mx-auto mb-3 md:mb-4" />
                            <h3 className="text-base md:text-lg font-semibold text-white mb-2">Email</h3>
                            <p className="text-sm md:text-base text-gray-300 break-all">tanvir.emon@email.com</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                        <CardContent className="p-4 md:p-6 text-center">
                            <Phone className="w-6 h-6 md:w-8 md:h-8 text-green-400 mx-auto mb-3 md:mb-4" />
                            <h3 className="text-base md:text-lg font-semibold text-white mb-2">Phone</h3>
                            <p className="text-sm md:text-base text-gray-300">+880 123 456 7890</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                        <CardContent className="p-4 md:p-6 text-center">
                            <MapPin className="w-6 h-6 md:w-8 md:h-8 text-purple-400 mx-auto mb-3 md:mb-4" />
                            <h3 className="text-base md:text-lg font-semibold text-white mb-2">Location</h3>
                            <p className="text-sm md:text-base text-gray-300">Dhaka, Bangladesh</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-6 flex-wrap mb-8 md:mb-8 px-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base cursor-pointer">
                        <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        Send Email
                    </Button>
                    <Button
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 md:px-8 py-2 md:py-3 rounded-full bg-transparent text-sm md:text-base cursor-pointer"
                    >
                        <Github className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        GitHub
                    </Button>
                    <Button
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 md:px-8 py-2 md:py-3 rounded-full bg-transparent text-sm md:text-base cursor-pointer"
                    >
                        <Linkedin className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        LinkedIn
                    </Button>
                </div>

                <div className="mx-4 p-4 md:p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Available for Freelance Work</h3>
                    <p className="text-sm md:text-base text-gray-400 mb-4">
                        I&apos;m currently available for freelance projects and full-time opportunities. Let&apos;s create something amazing
                        together!
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        <Badge className="bg-green-500/20 text-green-300 px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm">
                            Available Now
                        </Badge>
                        <Badge className="bg-blue-500/20 text-blue-300 px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm">
                            Remote Friendly
                        </Badge>
                        <Badge className="bg-purple-500/20 text-purple-300 px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm">
                            Quick Response
                        </Badge>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;