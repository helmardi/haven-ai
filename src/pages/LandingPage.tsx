import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Sparkles, 
  ArrowRight, 
  ChevronRight,
  Brain,
  FileText,
  BarChart3,
  Shield,
  Users,
  Clock,
  Wrench,
  Calculator,
  Scale,
  Home,
  Key
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-image.jpg";

// Main Syndic Services
const syndicServices = [
  {
    icon: Brain,
    title: "Assistant IA 24/7",
    description: "Un assistant intelligent disponible en permanence pour répondre instantanément aux questions des copropriétaires.",
    href: "/syndic#assistant",
    features: [
      "Réponses instantanées",
      "Signalement d'incidents",
      "Suivi des demandes",
      "Multilingue",
    ],
  },
  {
    icon: Calculator,
    title: "Comptabilité Automatisée",
    description: "Décomptes, appels de fonds et bilans générés automatiquement avec une transparence totale.",
    href: "/syndic#comptabilite",
    features: [
      "Décomptes en temps réel",
      "Appels de fonds automatiques",
      "Rapports financiers",
      "Export comptable",
    ],
  },
  {
    icon: Users,
    title: "Gestion des AG",
    description: "Organisation simplifiée des assemblées générales avec vote électronique et procès-verbaux automatiques.",
    href: "/syndic#ag",
    features: [
      "Convocations digitales",
      "Vote en ligne sécurisé",
      "PV automatiques",
      "Suivi des décisions",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance Prédictive",
    description: "L'IA anticipe les besoins de maintenance avant qu'ils ne deviennent des problèmes coûteux.",
    href: "/syndic#maintenance",
    features: [
      "Alertes préventives",
      "Planning automatisé",
      "Réseau d'artisans vérifiés",
      "Suivi des interventions",
    ],
  },
  {
    icon: BarChart3,
    title: "Reporting Temps Réel",
    description: "Tableaux de bord interactifs pour suivre l'état de votre copropriété en un coup d'œil.",
    href: "/syndic#reporting",
    features: [
      "Dashboards personnalisés",
      "Indicateurs clés",
      "Historique complet",
      "Alertes intelligentes",
    ],
  },
  {
    icon: Scale,
    title: "Conseil Juridique",
    description: "Veille réglementaire automatique et accompagnement juridique pour votre copropriété.",
    href: "/syndic#juridique",
    features: [
      "Veille légale IA",
      "Mise en conformité",
      "Gestion des litiges",
      "Contrats sécurisés",
    ],
  },
];

// Additional services from trust
const additionalServices = [
  {
    icon: Home,
    title: "Vente de Biens",
    description: "Nos copropriétaires nous font confiance pour vendre leurs biens. Bénéficiez de notre réseau et expertise.",
    href: "/properties?type=sale",
    features: [
      "Estimation IA gratuite",
      "Mise en valeur pro",
      "Réseau d'acheteurs qualifiés",
      "Accompagnement complet",
    ],
  },
  {
    icon: Key,
    title: "Location de Biens",
    description: "Gestion locative complète pour les copropriétaires qui nous confient leurs unités.",
    href: "/properties?type=rent",
    features: [
      "Sélection des locataires",
      "Gestion des loyers",
      "États des lieux",
      "Service conciergerie",
    ],
  },
];

const stats = [
  { value: "150+", label: "Copropriétés gérées" },
  { value: "8,500+", label: "Lots sous gestion" },
  { value: "98%", label: "Satisfaction client" },
  { value: "<2h", label: "Temps de réponse moyen" },
];

const testimonials = [
  {
    quote: "Depuis que SyndicIA gère notre copropriété, tout est plus simple. L'assistant répond instantanément et les décomptes sont toujours à jour.",
    author: "Marie Dubois",
    role: "Présidente du conseil, Résidence Les Érables",
  },
  {
    quote: "La transparence financière et la réactivité de l'équipe ont transformé notre expérience de copropriétaire. Je recommande vivement.",
    author: "Jean-Pierre Martin",
    role: "Copropriétaire, Immeuble Haussmann",
  },
];

const LandingPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern building interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/40" />
        </div>

        {/* Content */}
        <div className="container relative mx-auto flex min-h-screen flex-col justify-center px-4 pt-24 md:px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                Syndic de Copropriété Nouvelle Génération
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              Votre copropriété mérite
              <br />
              <span className="text-accent">l'intelligence artificielle.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-white/80"
            >
              SyndicIA révolutionne la gestion de copropriété avec une approche 
              100% digitale, transparente et réactive. Assistant IA 24/7, 
              comptabilité automatisée, maintenance prédictive.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link to="/syndic">
                <Button variant="sage" size="xl">
                  Découvrir nos services
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/portal">
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  Espace copropriétaire
                </Button>
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8"
            >
              <div className="flex items-center gap-2 text-white/60">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm">Agréé IPI</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-sm">Support 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <FileText className="h-5 w-5 text-accent" />
                <span className="text-sm">100% Digital</span>
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

      {/* Main Syndic Services Section */}
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
              Notre Métier
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              La gestion de copropriété
              <br />
              <span className="text-accent">réinventée par l'IA</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              SyndicIA combine expertise immobilière et intelligence artificielle 
              pour offrir une gestion de copropriété transparente, efficace et moderne.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {syndicServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                Pourquoi SyndicIA
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Un syndic qui comprend vos besoins
              </h2>
              <p className="mt-4 text-muted-foreground">
                Fini les syndics injoignables et les comptes obscurs. SyndicIA place 
                la transparence et la réactivité au cœur de sa mission.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Réponse à vos questions en moins de 2 heures (IA 24/7)",
                  "Accès en temps réel à tous vos documents et comptes",
                  "Anticipation des problèmes grâce à la maintenance prédictive",
                  "Réduction moyenne de 30% des charges de copropriété",
                  "Vote électronique sécurisé pour les AG",
                  "Conformité légale garantie avec veille réglementaire IA",
                ].map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <ChevronRight className="h-3 w-3" />
                    </div>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <Link to="/syndic" className="mt-8 inline-block">
                <Button variant="sage" size="lg">
                  En savoir plus
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card-elevated p-8"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <blockquote className="mt-6 text-lg">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                <div className="mt-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-sage-light" />
                  <div>
                    <p className="font-medium">{testimonials[currentTestimonial].author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Dots indicator */}
              <div className="mt-6 flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-accent" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
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
              Services Complémentaires
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
              La confiance de nos copropriétaires
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Grâce à la relation de confiance établie dans notre gestion de syndic, 
              nos copropriétaires nous confient également leurs biens pour la vente 
              ou la location.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
            {additionalServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
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
            <Building2 className="mx-auto h-16 w-16 text-accent" />
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              Prêt à moderniser la gestion
              <br />
              de votre copropriété ?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/70">
              Rejoignez les 150+ copropriétés qui font déjà confiance à SyndicIA 
              pour une gestion transparente et intelligente.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact">
                <Button variant="sage" size="xl">
                  Demander un devis gratuit
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/portal">
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Espace copropriétaire
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
