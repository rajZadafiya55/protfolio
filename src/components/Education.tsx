import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "LDRP Institute of Technology and Research",
    year: "2023 - 2025",
    location: "Gandhinagar, Gujarat, India",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Veer Narmad South Gujarat University",
    year: "2020 - 2023",
    location: "Surat, Gujarat, India",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Sadhna Vidhyabhavan",
    year: "2018 - 2020",
    location: "Surat, Gujarat, India",
  },
];

const Education = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <section id="education" className="py-12 px-4 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-primary font-bold text-sm tracking-widest uppercase bg-primary/10 rounded-lg font-heading">
            Academic Background
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-heading">
            Education
          </h2>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent font-heading">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active ${
                visible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-hover:bg-primary group-hover:text-white text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300">
                <span className="font-bold">{edu.degree[0]}</span>
              </div>
              
              {/* Card */}
              <Card className="w-[calc(100%-4rem)] md:w-[45%] p-6 bg-white border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 rounded-2xl">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-primary font-bold text-sm">{edu.year}</span>
                    <span className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-semibold rounded-full border border-slate-100">{edu.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">{edu.degree}</h3>
                  <p className="text-slate-600 font-medium">{edu.school}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
