import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Building2, Key, Home, Sparkles, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import PropertyCard from "@/components/PropertyCard";
import ServiceCard from "@/components/ServiceCard";
import { propertyService, Property } from "@/services/propertyService";
import heroImage from "@/assets/hero-image.jpg";

const services = [
  {
    icon: Home,
    title: "Acheter",
    description: "Trouvez le bien de vos rêves parmi notre sélection exclusive de propriétés.",
    href: "/properties?type=sale",
    features: [
      "Recherche personnalisée IA",
      "Visites virtuelles 3D",
      "Accompagnement juridique",
      "Financement sur mesure",
    ],
  },
  {
    icon: Key,
    title: "Louer",
    description: "Des appartements et maisons de qualité, vérifiés et prêts à l'emploi.",
    href: "/properties?type=rent",
    features: [
      "Biens vérifiés",
      "Contrats sécurisés",
      "Service conciergerie",
      "Assurance incluse",
    ],
  },
  {
    icon: Building2,
    title: "Syndic IA",
    description: "Gestion de copropriété intelligente, automatisée et transparente.",
    href: "/syndic",
    features: [
      "Assistant IA 24/7",
      "Comptabilité automatisée",
      "Maintenance prédictive",
      "Reporting temps réel",
    ],
  },
];

const stats = [
  { value: "2,500+", label: "Propriétés gérées" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "15+", label: "Années d'expérience" },
  { value: "24/7", label: "Support IA" },
];

const LandingPage = () => {
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadFeatured = async () => {
      const properties = await propertyService.getFeaturedProperties();
      setFeaturedProperties(properties);
    };
    loadFeatured();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative mx-auto flex min-h-screen flex-col justify-center px-4 pt-24 md:px-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                Propulsé par l'Intelligence Artificielle
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              L'immobilier de demain,
              <br />
              <span className="text-accent">aujourd'hui.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-lg text-lg text-white/80"
            >
              Achat, location et gestion de copropriété intelligente. Découvrez une nouvelle façon de vivre l'immobilier à Bruxelles.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <div className="glass-card flex items-center gap-2 p-2 md:max-w-lg">
                <div className="flex flex-1 items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <Search className="h-5 w-5 text-white/60" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher une adresse, un quartier..."
                    className="flex-1 bg-transparent text-white placeholder-white/50 focus:outline-none"
                  />
                  <kbd className="hidden rounded border border-white/20 px-2 py-1 font-mono text-xs text-white/50 md:block">
                    ⌘K
                  </kbd>
                </div>
                <Button variant="sage" size="lg" className="shrink-0">
                  Rechercher
                </Button>
              </div>

              {/* Quick Filters */}
              <div className="mt-4 flex flex-wrap gap-2">
                <Link to="/properties?type=sale">
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                    Acheter
                  </Button>
                </Link>
                <Link to="/properties?type=rent">
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                    Louer
                  </Button>
                </Link>
                <Link to="/estimate">
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                    Estimer mon bien
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-white/50">Découvrir</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-6 w-4 rounded-full border-2 border-white/30"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mx-auto mt-1 h-1.5 w-1.5 rounded-full bg-white/50"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-card py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl font-bold text-accent md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              Nos Services
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Une solution complète pour
              <br />
              <span className="text-accent">tous vos besoins immobiliers</span>
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="bg-muted py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                Sélection
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Nos coups de cœur
              </h2>
            </motion.div>

            <Link to="/properties">
              <Button variant="sage-outline">
                Voir tous les biens
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-accent blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              Prêt à transformer votre
              <br />
              expérience immobilière ?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/70">
              Rejoignez les milliers de propriétaires et locataires qui font confiance à notre plateforme intelligente.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/properties">
                <Button variant="sage" size="xl">
                  Explorer les biens
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/portal">
                <Button variant="outline" size="xl" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  Espace client
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default LandingPage;
