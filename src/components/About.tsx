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

  const skills = [
    "Bootstrap",
    "JavaScript",
    "React.js",
    "Vue,js",
    "Node.js",
    "Express.js",
    "TypeScript",
    "Tailwind CSS",
    "MUI",
    "MongoDB",
    "PostgreSQL",
    "SQL",
    "MYSQL",
    "Redux",
    "Vuex",
    "Pinia",
    "Socket.io",
  ];

  const tools = ["Git", "GitHub", "Docker", "Postman", "Jira"];

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code with best practices",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description:
        "Crafting beautiful user interfaces with attention to detail and user experience",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for speed, efficiency, and seamless user interactions",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working effectively in teams and communicating complex ideas clearly",
    },
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
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section heading */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            About Me
          </h2>

          <span className="mb-4 flex justify-center">
            <a
              href="https://drive.google.com/file/d/1IMk96dxOJGyHip0jRQeBRi6aDMOsntPC/view?usp=sharing"
              download
              className="flex w-fit items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              target="_blank"
            >
              Download CV
            </a>
          </span>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating exceptional digital
            experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story section */}
          <div
            className={`space-y-6 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              As a Web Developer with 1.5 year hands-on experience in building
              scalable web applications, I bring strong expertise in React.js,
              Node.js, Express.js, and MongoDB. Having contributed to real-time
              ERP systems, RESTful API development, and user-friendly UI
              designs, I excel at delivering interactive and efficient
              solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My project work includes developing YouTube-like platforms,
              restaurant management systems, and e-commerce websites, showcasing
              my ability to design, develop, and deploy full-stack applications.
              I thrive in competitive environments that encourage innovation and
              continuous learning, aiming to contribute my skills to the growth
              and success of the organization.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Technologies I work with:</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="glass transition delay-50 duration-200 cursor-pointer hover-glow"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Tools:</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="glass cursor-pointer transition delay-50 duration-200 hover-glow"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="glass cursor-pointer hover-glow p-6 text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
