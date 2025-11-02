import { Award, Camera, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Camera, value: "500+", label: "Events Covered" },
    { icon: Users, value: "2000+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground">Passionate photographer based in Lagos, Nigeria</p>
          </div>

          <div className="bg-card rounded-lg p-8 mb-12 shadow-lg">
            <p className="text-lg mb-4">
              With over 15 years of experience in professional photography, I specialize in capturing the essence of life's most precious moments. From intimate weddings to grand corporate events, my work reflects a commitment to excellence and artistic vision.
            </p>
            <p className="text-lg mb-4">
              Based in Lagos, I serve clients across Nigeria, bringing a unique perspective that blends contemporary techniques with cultural sensitivity. My approach combines technical expertise with genuine passion, ensuring every shot tells a compelling story.
            </p>
            <p className="text-lg">
              Whether it's the joy of a wedding celebration, the professionalism of corporate imagery, or the intimacy of portrait sessions, I'm dedicated to delivering photographs that you'll treasure for a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="font-serif text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
