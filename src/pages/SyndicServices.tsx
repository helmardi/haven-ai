import { motion } from "framer-motion";
import {
  Sparkles,
  Brain,
  FileText,
  Clock,
  BarChart3,
  Shield,
  Users,
  Bell,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Brain,
    title: "Assistant IA 24/7",
    description:
      "Un assistant intelligent disponible en permanence pour répondre aux questions des copropriétaires et gérer les demandes.",
  },
  {
    icon: FileText,
    title: "Comptabilité automatisée",
    description:
      "Génération automatique des décomptes, appels de fonds et bilans. Transparence totale sur les finances.",
  },
  {
    icon: Clock,
    title: "Maintenance prédictive",
    description:
      "L'IA anticipe les besoins de maintenance avant qu'ils ne deviennent des problèmes coûteux.",
  },
  {
    icon: BarChart3,
    title: "Reporting temps réel",
    description:
      "Tableaux de bord interactifs pour suivre l'état de votre copropriété en un coup d'œil.",
  },
  {
    icon: Shield,
    title: "Conformité garantie",
    description:
      "Veille réglementaire automatique et mise en conformité continue de votre immeuble.",
  },
  {
    icon: Users,
    title: "Gestion des AG",
    description:
      "Organisation simplifiée des assemblées générales avec vote en ligne et procès-verbaux automatiques.",
  },
];

const benefits = [
  "Réduction de 40% des coûts de gestion",
  "Réponses aux demandes en moins de 2 heures",
  "Transparence totale sur les finances",
  "Zéro paperasse grâce au 100% digital",
  "Anticipation des travaux nécessaires",
  "Communication fluide avec tous les copropriétaires",
];

const SyndicServices = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary pt-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent blur-3xl" />
          <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 pb-20 pt-8 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent">
                <Sparkles className="h-4 w-4" />
                Syndic nouvelle génération
              </span>

              <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
                La gestion de copropriété
                <span className="text-accent"> réinventée par l'IA</span>
              </h1>

              <p className="mt-6 max-w-lg text-lg text-primary-foreground/70">
                Dites adieu aux tracas administratifs. Notre syndic intelligent gère
                votre immeuble avec précision, transparence et réactivité.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/portal">
                  <Button variant="sage" size="xl">
                    Demander une démo
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="xl"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Voir les tarifs
                </Button>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card-elevated p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">Assistant IA</h3>
                  <p className="text-sm text-muted-foreground">
                    Actif maintenant
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl bg-muted p-4">
                  <div className="flex items-start gap-3">
                    <Bell className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Alerte maintenance</p>
                      <p className="text-sm text-muted-foreground">
                        La chaudière nécessite un entretien préventif sous 30 jours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-muted p-4">
                  <div className="flex items-start gap-3">
                    <FileText className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Décompte généré</p>
                      <p className="text-sm text-muted-foreground">
                        Les décomptes Q4 2024 sont disponibles pour consultation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-muted p-4">
                  <div className="flex items-start gap-3">
                    <Users className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">AG programmée</p>
                      <p className="text-sm text-muted-foreground">
                        Assemblée générale le 15/02 - Ordre du jour disponible
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              Fonctionnalités
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Tout ce dont vous avez besoin,
              <br />
              <span className="text-accent">automatisé par l'IA</span>
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage-light text-accent">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                Pourquoi nous choisir
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Des résultats concrets pour votre copropriété
              </h2>
              <p className="mt-4 text-muted-foreground">
                Nos clients constatent des améliorations significatives dès les
                premiers mois. L'IA transforme la gestion de votre immeuble.
              </p>

              <ul className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <Link to="/portal" className="mt-8 inline-block">
                <Button variant="sage" size="lg">
                  Commencer gratuitement
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

              <blockquote className="mt-6 text-lg">
                "Depuis que nous avons adopté ImmoTrust Syndic, la gestion de notre
                copropriété a été transformée. L'assistant IA répond instantanément
                aux demandes et les décomptes sont toujours à jour."
              </blockquote>

              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-sage-light" />
                <div>
                  <p className="font-medium">Marie Dubois</p>
                  <p className="text-sm text-muted-foreground">
                    Présidente du conseil, Résidence Les Érables
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass-card-elevated overflow-hidden bg-primary p-8 text-center md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
                Prêt à révolutionner la gestion de votre copropriété ?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
                Demandez une démonstration personnalisée et découvrez comment notre
                syndic IA peut transformer votre quotidien.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/portal">
                  <Button variant="sage" size="xl">
                    Demander une démo
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="xl"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Nous contacter
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SyndicServices;
