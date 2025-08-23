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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 gradient-animated opacity-80" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main heading with staggered animation */}
        <div
          className={`space-y-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <span className="block gradient-text">Software</span>
            <span
              className="block gradient-text pb-4"
              style={{ animationDelay: "0.2s" }}
            >
              Developer
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-gray-700"
            style={{ animationDelay: "0.4s" }}
          >
            I develop innovative web solutions, blending creativity with modern
            technology.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 "
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="glass hover-glow transition delay-50 duration-200 group px-8 py-6 text-lg"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5  transition delay-150 duration-300 group-hover:translate-y-1 transition-transform " />
            </Button>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="glass transition delay-50 duration-200 hover-glow"
              >
                <a href="https://github.com/rajZadafiya55" target="_blank">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass transition delay-50 duration-200 hover-glow"
              >
                <a
                  href="https://www.linkedin.com/in/raj-zadafiya-3b1ab1258"
                  target="_blank"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass transition delay-50 duration-200 hover-glow"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
