import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Home,
  Building2,
  Key,
  Calculator,
  Users,
  FileText,
  ArrowRight,
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

const quickActions = [
  {
    icon: Home,
    label: "Acheter un bien",
    description: "Parcourir les propriétés à vendre",
    href: "/properties?type=sale",
  },
  {
    icon: Key,
    label: "Louer un appartement",
    description: "Trouver votre prochain logement",
    href: "/properties?type=rent",
  },
  {
    icon: Building2,
    label: "Services Syndic",
    description: "Gestion de copropriété IA",
    href: "/syndic",
  },
  {
    icon: Calculator,
    label: "Estimer mon bien",
    description: "Estimation gratuite en 2 minutes",
    href: "/estimate",
  },
];

const recentSearches = [
  { label: "Appartement 2 chambres Bruxelles", type: "Recherche" },
  { label: "Maison avec jardin Uccle", type: "Recherche" },
  { label: "Studio Ixelles", type: "Recherche" },
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
          placeholder="Rechercher une propriété, un service..."
          className="border-0 focus:ring-0"
        />
        <kbd className="pointer-events-none hidden h-6 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-xs font-medium text-muted-foreground md:flex">
          ESC
        </kbd>
      </div>
      <CommandList className="max-h-[400px]">
        <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>

        <CommandGroup heading="Actions rapides">
          {quickActions.map((action) => (
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

        <CommandGroup heading="Recherches récentes">
          {recentSearches.map((search) => (
            <CommandItem
              key={search.label}
              onSelect={() => handleSelect(`/properties?q=${encodeURIComponent(search.label)}`)}
              className="flex cursor-pointer items-center gap-3 px-4 py-2"
            >
              <Search className="h-4 w-4 text-muted-foreground" />
              <span>{search.label}</span>
              <span className="ml-auto text-xs text-muted-foreground">
                {search.type}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Pages">
          <CommandItem
            onSelect={() => handleSelect("/portal")}
            className="flex cursor-pointer items-center gap-3 px-4 py-2"
          >
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>Espace Client</span>
          </CommandItem>
          <CommandItem
            onSelect={() => handleSelect("/about")}
            className="flex cursor-pointer items-center gap-3 px-4 py-2"
          >
            <FileText className="h-4 w-4 text-muted-foreground" />
            <span>À propos de nous</span>
          </CommandItem>
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
