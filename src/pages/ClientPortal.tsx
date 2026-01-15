import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Lock,
  Mail,
  Building2,
  FileText,
  CreditCard,
  Bell,
  Settings,
  ArrowRight,
  Eye,
  EyeOff,
  MessageSquare,
  Wrench,
  BarChart3,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const dashboardFeatures = [
  {
    icon: Building2,
    title: "Ma Copropriété",
    description: "Accédez aux informations de votre immeuble et aux documents officiels",
  },
  {
    icon: FileText,
    title: "Documents & PV",
    description: "Décomptes, factures, procès-verbaux d'AG accessibles 24/7",
  },
  {
    icon: CreditCard,
    title: "Paiements & Charges",
    description: "Consultez vos appels de fonds et effectuez vos paiements en ligne",
  },
  {
    icon: MessageSquare,
    title: "Assistant IA",
    description: "Posez vos questions à notre assistant et obtenez des réponses instantanées",
  },
  {
    icon: Wrench,
    title: "Signalements",
    description: "Déclarez un incident ou demandez une intervention technique",
  },
  {
    icon: BarChart3,
    title: "Tableau de Bord",
    description: "Suivez les finances et l'état de votre copropriété en temps réel",
  },
];

const ClientPortal = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication
    console.log("Form submitted:", { email, password });
  };

  return (
    <Layout>
      <div className="min-h-screen pt-28">
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left - Auth Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-card-elevated mx-auto max-w-md p-8">
                <div className="mb-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-sage-light text-accent">
                    <User className="h-8 w-8" />
                  </div>
                  <h1 className="font-display text-2xl font-bold">
                    {isLogin ? "Espace Copropriétaire" : "Créer un compte"}
                  </h1>
                  <p className="mt-2 text-muted-foreground">
                    {isLogin
                      ? "Accédez à votre espace de gestion"
                      : "Rejoignez SyndicIA"}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {!isLogin && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input id="firstName" placeholder="Jean" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom</Label>
                        <Input id="lastName" placeholder="Dupont" />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="jean.dupont@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Mot de passe</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {isLogin && (
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="rounded border-input"
                        />
                        <span className="text-muted-foreground">
                          Se souvenir de moi
                        </span>
                      </label>
                      <a
                        href="#"
                        className="text-accent hover:underline"
                      >
                        Mot de passe oublié ?
                      </a>
                    </div>
                  )}

                  <Button variant="sage" className="w-full" size="lg">
                    {isLogin ? "Accéder à mon espace" : "Créer mon compte"}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>

                <div className="mt-6 text-center text-sm">
                  <span className="text-muted-foreground">
                    {isLogin
                      ? "Pas encore de compte ?"
                      : "Déjà un compte ?"}
                  </span>{" "}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="font-medium text-accent hover:underline"
                  >
                    {isLogin ? "Demander un accès" : "Se connecter"}
                  </button>
                </div>

                <div className="mt-6 rounded-xl bg-muted p-4">
                  <p className="text-center text-sm text-muted-foreground">
                    <Bell className="mr-2 inline-block h-4 w-4" />
                    Votre syndic vous a envoyé vos identifiants par email
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right - Features Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block"
            >
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                Votre Espace Personnel
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">
                Tout gérer depuis un seul endroit
              </h2>
              <p className="mt-4 text-muted-foreground">
                Accédez à toutes les informations de votre copropriété, vos documents,
                paiements et communications en quelques clics.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {dashboardFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="glass-card p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-light text-accent">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 font-display font-semibold">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-muted p-4">
                <div className="flex items-center gap-3">
                  <Settings className="h-5 w-5 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Sécurité renforcée</strong>
                    {" "}— Authentification à deux facteurs disponible
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ClientPortal;
