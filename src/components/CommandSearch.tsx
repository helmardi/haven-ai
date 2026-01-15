import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Building2,
  Users,
  FileText,
  ArrowRight,
  Brain,
  Wrench,
  BarChart3,
  MessageSquare,
  Home,
  Key,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

interface CommandSearchProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const syndicActions = [
  {
    icon: Building2,
    label: "Services Syndic",
    description: "Découvrir notre gestion de copropriété IA",
    href: "/syndic",
  },
  {
    icon: Brain,
    label: "Assistant IA 24/7",
    description: "Poser une question à notre assistant intelligent",
    href: "/portal",
  },
  {
    icon: Users,
    label: "Espace Copropriétaire",
    description: "Accéder à mon espace personnel",
    href: "/portal",
  },
  {
    icon: FileText,
    label: "Documents & PV",
    description: "Consulter les documents de ma copropriété",
    href: "/portal",
  },
];

const syndicFeatures = [
  {
    icon: BarChart3,
    label: "Reporting & Finances",
    description: "Tableau de bord financier en temps réel",
    href: "/syndic",
  },
  {
    icon: Wrench,
    label: "Maintenance Prédictive",
    description: "Anticiper les besoins de votre immeuble",
    href: "/syndic",
  },
  {
    icon: MessageSquare,
    label: "Demander un devis",
    description: "Obtenir une proposition personnalisée",
    href: "/portal",
  },
];

const complementaryServices = [
  {
    icon: Home,
    label: "Biens à vendre",
    description: "Biens confiés par nos copropriétaires",
    href: "/properties?type=sale",
  },
  {
    icon: Key,
    label: "Biens à louer",
    description: "Locations exclusives",
    href: "/properties?type=rent",
  },
];

const CommandSearch = ({ open, onOpenChange }: CommandSearchProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const handleSelect = (href: string) => {
    onOpenChange(false);
    navigate(href);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <div className="flex items-center gap-2 border-b px-4 py-3">
        <Search className="h-5 w-5 text-muted-foreground" />
        <CommandInput
          placeholder="Rechercher un service, une fonctionnalité..."
          className="border-0 focus:ring-0"
        />
        <kbd className="pointer-events-none hidden h-6 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-xs font-medium text-muted-foreground md:flex">
          ESC
        </kbd>
      </div>
      <CommandList className="max-h-[400px]">
        <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>

        <CommandGroup heading="Services Syndic">
          {syndicActions.map((action) => (
            <CommandItem
              key={action.label}
              onSelect={() => handleSelect(action.href)}
              className="group flex cursor-pointer items-center gap-3 px-4 py-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-light text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <action.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{action.label}</p>
                <p className="text-sm text-muted-foreground">
                  {action.description}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Fonctionnalités IA">
          {syndicFeatures.map((feature) => (
            <CommandItem
              key={feature.label}
              onSelect={() => handleSelect(feature.href)}
              className="flex cursor-pointer items-center gap-3 px-4 py-2"
            >
              <feature.icon className="h-4 w-4 text-muted-foreground" />
              <div className="flex-1">
                <span>{feature.label}</span>
                <span className="ml-2 text-xs text-muted-foreground">
                  {feature.description}
                </span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Services Complémentaires">
          {complementaryServices.map((service) => (
            <CommandItem
              key={service.label}
              onSelect={() => handleSelect(service.href)}
              className="flex cursor-pointer items-center gap-3 px-4 py-2"
            >
              <service.icon className="h-4 w-4 text-muted-foreground" />
              <span>{service.label}</span>
              <span className="ml-auto text-xs text-muted-foreground">
                Biens Confiés
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>

      <div className="border-t px-4 py-3">
        <p className="text-xs text-muted-foreground">
          Appuyez sur{" "}
          <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-xs">
            ⌘
          </kbd>{" "}
          <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-xs">
            K
          </kbd>{" "}
          pour ouvrir à tout moment
        </p>
      </div>
    </CommandDialog>
  );
};

export default CommandSearch;
