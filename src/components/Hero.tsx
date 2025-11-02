import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Capturing Moments,
          <br />
          Creating Memories
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Professional photography services across Nigeria. Specializing in weddings, events, portraits, and corporate photography.
        </p>
        <button
          onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-accent text-accent-foreground px-8 py-3 rounded-sm font-medium hover:opacity-90 transition-opacity animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          View Portfolio
        </button>
      </div>
    </section>
  );
};

export default Hero;
