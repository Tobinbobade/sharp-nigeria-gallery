import { Camera } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <Camera className="h-6 w-6 text-accent" />
            <span className="font-serif text-xl font-semibold">Obinna Nnamani Photography</span>
          </div>
          <p className="text-primary-foreground/80 text-sm">
            Capturing life's precious moments across Nigeria
          </p>
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Obinna Nnamani Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
