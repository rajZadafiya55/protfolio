import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mailStatus, setMailStatus] = useState<string | null>(null);
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

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // EmailJS send function
  interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  const onSubmit = async (data: ContactFormData) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      setMailStatus("Message sent successfully!");
      reset();
      setTimeout(() => setMailStatus(null), 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setMailStatus("Failed to send message. Try again.");
      setTimeout(() => setMailStatus(null), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "zadafiyaraj395@gmail.com",
      href: "mailto:zadafiyaraj395@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 88492 30410",
      href: "tel:+918849230410",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Surat, Gujarat, India - 395006",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/rajZadafiya55", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/raj-zadafiya-3b1ab1258",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/ZadafiyaRaj", label: "Twitter" },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section heading */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-6xl pb-4 font-bold gradient-text mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we
            can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <Card
            className={`glass p-8 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  className="glass"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="glass"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input
                  placeholder="Project collaboration"
                  className="glass"
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  className="glass min-h-32 resize-none"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                size="lg"
                className="w-full  transition delay-50 duration-200 glass hover-glow group"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              {mailStatus && (
                <p className="text-sm mt-2 text-center text-green-600">
                  {mailStatus}
                </p>
              )}
            </form>
          </Card>

          {/* Contact info */}
          <div
            className={`space-y-8 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative
                projects, or just having a chat about technology and design.
                Don't hesitate to reach out!
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 glass hover-glow rounded-lg group transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{info.label}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Follow me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="p-3 glass hover-glow rounded-lg group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon className="h-5 w-5 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card className="glass p-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Available for new projects</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <footer className="text-center text-sm text-muted-foreground mt-20">
        &copy; {new Date().getFullYear()} Raj Zadafiya. All rights reserved.
      </footer>
    </section>
  );
};

export default Contact;
