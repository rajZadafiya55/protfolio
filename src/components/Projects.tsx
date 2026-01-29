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
      className="py-12 px-4 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section heading */}
        <div
          className={`text-center mb-20 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="inline-block px-4 py-1.5 mb-4 text-primary font-bold text-sm tracking-widest uppercase bg-primary/10 rounded-lg font-heading">
            My Portfolio
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-heading">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Explore my latest work, where design meet functionality in unique digital experiences.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`bg-white border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden rounded-3xl ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              } ${isVisible ? "animate-scale-in" : "opacity-0"} hover:-translate-y-2`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Project links overlay */}
                <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.github} 
                    target="_blank"
                    className="p-3 bg-white text-slate-900 rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank"
                    className="p-3 bg-white text-slate-900 rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <ExternalLink className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Project content */}
              <div className="p-8 space-y-4">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors font-heading">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} className="bg-slate-50 text-slate-600 hover:bg-primary/10 hover:text-primary border-slate-100 px-3 py-1 font-semibold">
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
          className={`text-center mt-20 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <Button 
            size="lg" 
            className="bg-slate-900 hover:bg-primary text-white px-10 py-7 text-lg font-bold rounded-2xl shadow-xl shadow-slate-200 transition-all duration-300"
          >
            <a
              href="https://github.com/rajZadafiya55?tab=repositories"
              target="_blank"
              className="flex items-center"
            >
              See All My Works
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
