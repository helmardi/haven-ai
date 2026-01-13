import { Link } from "react-router-dom";
import { Building2, Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                <Building2 className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="font-display text-xl font-semibold">
                ImmoTrust
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/70">
              Votre partenaire de confiance pour l'immobilier et la gestion de propriété. Propulsé par l'intelligence artificielle.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/60 transition-colors hover:text-accent">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 transition-colors hover:text-accent">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 transition-colors hover:text-accent">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link to="/properties?type=sale" className="transition-colors hover:text-accent">
                  Achat immobilier
                </Link>
              </li>
              <li>
                <Link to="/properties?type=rent" className="transition-colors hover:text-accent">
                  Location
                </Link>
              </li>
              <li>
                <Link to="/syndic" className="transition-colors hover:text-accent">
                  Syndic de copropriété
                </Link>
              </li>
              <li>
                <Link to="/estimate" className="transition-colors hover:text-accent">
                  Estimation gratuite
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">
              Entreprise
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link to="/about" className="transition-colors hover:text-accent">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/team" className="transition-colors hover:text-accent">
                  Notre équipe
                </Link>
              </li>
              <li>
                <Link to="/careers" className="transition-colors hover:text-accent">
                  Carrières
                </Link>
              </li>
              <li>
                <Link to="/blog" className="transition-colors hover:text-accent">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Avenue Louise 123, 1050 Bruxelles</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+3225551234" className="transition-colors hover:text-accent">
                  +32 2 555 12 34
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@immotrust.be" className="transition-colors hover:text-accent">
                  info@immotrust.be
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/50">
            © 2024 ImmoTrust. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/50">
            <Link to="/privacy" className="transition-colors hover:text-accent">
              Politique de confidentialité
            </Link>
            <Link to="/terms" className="transition-colors hover:text-accent">
              Conditions d'utilisation
            </Link>
            <Link to="/cookies" className="transition-colors hover:text-accent">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
