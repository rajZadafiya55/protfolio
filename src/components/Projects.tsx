import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "YouTube Clone",
      description:
        "Developed a full-stack video sharing platform with features like user authentication, video uploads, playlist management, likes, comments, subscriptions, and profile handling.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Redux",
        "Multer",
        "Cloudinary",
      ],
      image:
        "https://res.cloudinary.com/dsrk7genk/image/upload/v1755934915/youtube_clone_qwsnqx.png",
      featured: true,
      github: "https://github.com/rajZadafiya55/YouTube-MERN",
      live: "https://yoouttube.vercel.app/",
    },
    {
      title: "Restaurant Management System",
      description:
        "Developed a restaurant management website enabling users to browse menus, place orders, give reviews, and contact support, with an admin panel for managing orders and user data",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "React-bootstrap",
      ],
      image:
        "https://res.cloudinary.com/dsrk7genk/image/upload/v1755936564/chili-image_zf1ywl.png",
      github: "https://github.com/rajZadafiya55/UI",
      live: "https://chili-restaurant.vercel.app/",
    },
    {
      title: "Resume Builder",
      description:
        "Built a resume builder application that enables users to create, edit, preview, and download professional resumes in PDF format with real-time updates and responsive design.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "jsPDF"],
      image:
        "https://res.cloudinary.com/dsrk7genk/image/upload/v1755936089/resume_builder_ohcwoe.png",
      github: "https://github.com/rajZadafiya55/Resume-Client",
      live: "https://resume-rz.vercel.app/",
    },
    {
      title: "QR Code Generator",
      description:
        "A responsive web application that generates QR codes from user-provided URLs, allowing users to create and download QR code images while ensuring only valid URLs are accepted.",
      technologies: ["Node.js", "Express.js", "Embedded JavaScript (EJS)"],
      image:
        "https://res.cloudinary.com/dsrk7genk/image/upload/v1755936438/qr_code_yyp399.png",
      github: "https://github.com/rajZadafiya55/QRCode-Generator",
      live: "https://qr-coode.vercel.app/",
    },
    {
      title: "E-commerce Website",
      description:
        "Built a responsive e-commerce website with a product filtering feature, enabling users to browse and filter products by category, price, brand, and ratings.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose"],
      image:
        "https://res.cloudinary.com/dsrk7genk/image/upload/v1755936919/e-coomerce_s9bppv.png",
      github: "https://github.com/rajZadafiya55/Ecom-UI",
      live: "https://raj-ecom.netlify.app/",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section heading */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4 pb-3">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`glass cursor-pointer hover-glow group overflow-hidden ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              } ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Project links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="outline" className="glass">
                    <a href={project.github} target="_blank">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="glass">
                    <a href={project.live} target="_blank">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <Button size="lg" className="glass hover-glow">
            <a
              href="https://github.com/rajZadafiya55?tab=repositories"
              target="_blank"
            >
              View All Projects
            </a>
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
