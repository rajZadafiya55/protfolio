import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";
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
      toast.success("Message sent successfully!", {
        autoClose: 3000,
      });
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
      className="py-12 px-4 bg-white relative overflow-hidden"
    >
      {/* Subtle Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section heading */}
        <div
          className={`text-center mb-20 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="inline-block px-4 py-1.5 mb-4 text-primary font-bold text-sm tracking-widest uppercase bg-primary/10 rounded-lg font-heading">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-heading">
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Have a project in mind? I'd love to hear about it and discuss how we
            can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <Card
            className={`bg-white border-slate-100 p-10 shadow-xl rounded-3xl ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8 font-heading">Send me a message</h3>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Name</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    className="bg-slate-50 border-slate-100 focus:border-primary focus:ring-primary/20 rounded-xl py-6"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs font-medium">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-slate-50 border-slate-100 focus:border-primary focus:ring-primary/20 rounded-xl py-6"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs font-medium">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Subject</label>
                <Input
                  placeholder="Project collaboration"
                  className="bg-slate-50 border-slate-100 focus:border-primary focus:ring-primary/20 rounded-xl py-6"
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs font-medium">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  className="bg-slate-50 border-slate-100 focus:border-primary focus:ring-primary/20 rounded-xl min-h-32 resize-none p-4"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs font-medium">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 rounded-xl py-7 font-bold text-lg transition-all duration-300 group"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              {mailStatus && (
                <p className="text-sm mt-4 text-center text-green-600 font-bold">
                  {mailStatus}
                </p>
              )}
            </form>
          </Card>

          {/* Contact info */}
          <div
            className={`space-y-10 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in touch</h3>
              <p className="text-slate-500 leading-relaxed text-lg mb-8">
                I'm always open to discussing new opportunities, creative
                projects, or just having a chat about technology and design.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-5 p-2 group transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">{info.label}</p>
                    <p className="text-slate-900 font-bold text-lg">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="space-y-6 pt-6">
              <h4 className="text-xl font-bold text-slate-900">Follow me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-green-50 border border-green-100 rounded-2xl">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-bold text-green-700">Available for new projects</span>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center text-slate-400 text-sm mt-12 border-t border-slate-100 pt-10">
        &copy; {new Date().getFullYear()} Raj Zadafiya. All rights reserved.
      </footer>
    </section>
  );
};

export default Contact;
