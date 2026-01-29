import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white mt-16"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Professional badge/intro */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-8 transition-all duration-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          AVAILABLE FOR PROJECTS
        </div>

        {/* Main heading with staggered animation */}
        <div
          className={`space-y-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <h1 className="text-6xl font-black tracking-tight text-slate-900 leading-[1.1] font-heading">
            Full-Stack Developer <br />
            <span className="text-primary italic">
              Building Scalable & Impactful Solutions
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
            style={{ animationDelay: "0.2s" }}
          >
            I’m a Full-Stack Developer with specialize in building scalable, efficient, and user-friendly solutions that streamline operations and enhance productivity. By combining technical expertise with creativity, I deliver high-quality digital products that help businesses grow.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 transition-all duration-700"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/30 transition-all duration-300 px-10 py-7 text-lg font-bold group rounded-2xl"
              onClick={() => scrollToSection("projects")}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>

            <div className="flex gap-4">
              <a 
                href="https://github.com/rajZadafiya55" 
                target="_blank"
                className="p-4 rounded-2xl border-2 border-slate-100 text-slate-600 hover:border-primary hover:text-primary transition-all duration-300 bg-white shadow-sm"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/raj-zadafiya-3b1ab1258" 
                target="_blank"
                className="p-4 rounded-2xl border-2 border-slate-100 text-slate-600 hover:border-primary hover:text-primary transition-all duration-300 bg-white shadow-sm"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <button 
                onClick={() => scrollToSection("contact")}
                className="p-4 rounded-2xl border-2 border-slate-100 text-slate-600 hover:border-primary hover:text-primary transition-all duration-300 bg-white shadow-sm"
              >
                <Mail className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
