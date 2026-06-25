import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Code,
      title: "WEB DEVELOPMENT",
      description:
        "Building responsive and dynamic web applications using modern frameworks",
    },
    {
      icon: Code,
      title: "BACKEND DEVELOPMENT",
      description:
        "Building scalable and secure server-side applications and RESTful APIs with Node.js to support web projects.",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description:
        "Crafting beautiful user interfaces with attention to detail and user experience",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working effectively in teams and communicating complex ideas clearly",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-12 px-4 bg-slate-50 relative overflow-hidden"
    >
      {/* Subtle Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section heading */}
        <div className="text-center mb-20">
          <div className={`inline-block px-4 py-1.5 mb-4 text-primary font-bold text-sm tracking-widest uppercase bg-primary/10 rounded-lg font-heading transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"
            }`}>
            My Biography
          </div>
          <h2 className={`text-4xl md:text-6xl font-black text-slate-900 mb-6 font-heading transition-all duration-700 delay-150 ${isVisible ? "animate-fade-in" : "opacity-0"
            }`}>
            About Me
          </h2>

          <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium transition-all duration-700 delay-300 ${isVisible ? "animate-fade-in" : "opacity-0"
            }`}>
            Passionate full-stack developer with 2.5+ years of experience crafting high-performance
            web applications with modern technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Story section */}
          <div
            className={`space-y-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            <div className={`relative group max-w-md mx-auto lg:mx-0 transition-all duration-700 delay-300 ${isVisible ? "animate-scale-in" : "opacity-0"
              }`}>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dsrk7genk/image/upload/v1769687325/6136526638779844186_dk0ct0.jpg"
                  alt="Raj Zadafiya"
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <div className={`space-y-6 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}>
              <h3 className="text-3xl font-bold text-slate-900 font-heading">My Journey</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                As a Web Developer with 2.5+ year hands-on experience in building
                scalable web applications, I bring strong expertise in React.js,
                Node.js, Express.js, and MongoDB. Having contributed to real-time
                ERP systems, RESTful API development, and user-friendly UI
                designs, I excel at delivering interactive and efficient
                solutions.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg italic border-l-4 border-primary pl-6 py-2">
                I thrive in competitive environments that encourage innovation and
                continuous learning, aiming to contribute my skills to the growth
                and success of the organization.
              </p>

              <div className="pt-6">
                <a
                  href="https://drive.google.com/file/d/10bHExNHOTBRXnJbknZd01Ix3_FG1AHtF/view?usp=sharinghttps://drive.google.com/file/d/10bHExNHOTBRXnJbknZd01Ix3_FG1AHtF/view?usp=sharing"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-primary text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-xl shadow-slate-200 group/btn"
                  target="_blank"
                >
                  Download My Resume
                  <Zap className="h-5 w-5 fill-current transition-transform group-hover/btn:rotate-12 group-hover/btn:scale-110" />
                </a>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`transition-all duration-700 ${isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
                  }`}
                style={{ transitionDelay: `${700 + index * 150}ms` }}
              >
                <Card
                  className="h-full bg-white border-slate-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group rounded-3xl"
                >
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                      <feature.icon className="h-7 w-7" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
