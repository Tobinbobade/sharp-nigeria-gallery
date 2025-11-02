import { Camera } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="h-6 w-6 text-accent" />
            <span className="font-serif text-xl font-semibold">Obinna Nnamani</span>
          </div>
          
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button 
                onClick={() => scrollToSection("portfolio")}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Portfolio
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>

          <button
            onClick={() => scrollToSection("contact")}
            className="bg-accent text-accent-foreground px-6 py-2 rounded-sm font-medium hover:opacity-90 transition-opacity"
          >
            Book Session
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
