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
    school: "Sadhna Vidyabhavan",
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
    <section id="education" className="py-20 px-4 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl  font-bold mb-8 text-center gradient-text">
          Education
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <Card
              key={idx}
              className={`p-8 glass cursor-pointer hover-glow   shadow-xl transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center text-primary text-2xl font-bold shadow-md">
                  {edu.degree.split(" ")[0][0]}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.school}</p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-2 text-sm">
                    <span className="bg-secondary/20 px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                    <span className="bg-secondary/20 px-3 py-1 rounded-full">
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
