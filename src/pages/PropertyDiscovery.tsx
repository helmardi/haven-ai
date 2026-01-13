import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Grid3X3,
  Map,
  X,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import PropertyCard from "@/components/PropertyCard";
import { propertyService, Property, PropertyFilters } from "@/services/propertyService";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PropertyDiscovery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [filters, setFilters] = useState<PropertyFilters>({
    type: (searchParams.get("type") as "sale" | "rent") || undefined,
    bedrooms: undefined,
    minPrice: undefined,
    maxPrice: undefined,
  });

  useEffect(() => {
    const loadProperties = async () => {
      setIsLoading(true);
      try {
        const result = await propertyService.getProperties(filters);
        setProperties(result.properties);
      } catch (error) {
        console.error("Failed to load properties:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProperties();
  }, [filters]);

  const handleFilterChange = (key: keyof PropertyFilters, value: string | number | undefined) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({});
    setSearchParams({});
  };

  const activeFilterCount = Object.values(filters).filter((v) => v !== undefined).length;

  return (
    <Layout>
      <div className="min-h-screen pt-28">
        {/* Header */}
        <div className="border-b bg-card">
          <div className="container mx-auto px-4 py-6 md:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="font-display text-2xl font-bold md:text-3xl">
                  {filters.type === "sale"
                    ? "Biens à vendre"
                    : filters.type === "rent"
                    ? "Biens à louer"
                    : "Tous les biens"}
                </h1>
                <p className="mt-1 text-muted-foreground">
                  {properties.length} propriété{properties.length > 1 ? "s" : ""} trouvée{properties.length > 1 ? "s" : ""}
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* View Toggle */}
                <div className="flex rounded-xl border bg-background p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`rounded-lg p-2 transition-colors ${
                      viewMode === "grid"
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("map")}
                    className={`rounded-lg p-2 transition-colors ${
                      viewMode === "map"
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Map className="h-4 w-4" />
                  </button>
                </div>

                {/* Filters Toggle */}
                <Button
                  variant={filtersOpen ? "sage" : "outline"}
                  onClick={() => setFiltersOpen(!filtersOpen)}
                  className="relative"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filtres
                  {activeFilterCount > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs text-accent-foreground">
                      {activeFilterCount}
                    </span>
                  )}
                </Button>
              </div>
            </div>

            {/* Filters Panel */}
            {filtersOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 overflow-hidden border-t pt-6"
              >
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                  {/* Type */}
                  <Select
                    value={filters.type || "all"}
                    onValueChange={(value) =>
                      handleFilterChange("type", value === "all" ? undefined : value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous types</SelectItem>
                      <SelectItem value="sale">À vendre</SelectItem>
                      <SelectItem value="rent">À louer</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Bedrooms */}
                  <Select
                    value={filters.bedrooms?.toString() || "any"}
                    onValueChange={(value) =>
                      handleFilterChange("bedrooms", value === "any" ? undefined : parseInt(value))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chambres" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Toutes</SelectItem>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Min Price */}
                  <Select
                    value={filters.minPrice?.toString() || "any"}
                    onValueChange={(value) =>
                      handleFilterChange("minPrice", value === "any" ? undefined : parseInt(value))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Prix min" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Aucun</SelectItem>
                      <SelectItem value="100000">100.000€</SelectItem>
                      <SelectItem value="200000">200.000€</SelectItem>
                      <SelectItem value="300000">300.000€</SelectItem>
                      <SelectItem value="500000">500.000€</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Max Price */}
                  <Select
                    value={filters.maxPrice?.toString() || "any"}
                    onValueChange={(value) =>
                      handleFilterChange("maxPrice", value === "any" ? undefined : parseInt(value))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Prix max" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Aucun</SelectItem>
                      <SelectItem value="300000">300.000€</SelectItem>
                      <SelectItem value="500000">500.000€</SelectItem>
                      <SelectItem value="750000">750.000€</SelectItem>
                      <SelectItem value="1000000">1.000.000€</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Clear Filters */}
                  {activeFilterCount > 0 && (
                    <Button variant="ghost" onClick={clearFilters}>
                      <X className="mr-2 h-4 w-4" />
                      Effacer
                    </Button>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8 md:px-6">
          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="glass-card animate-pulse">
                  <div className="aspect-[4/3] bg-muted" />
                  <div className="space-y-3 p-4">
                    <div className="h-5 w-3/4 rounded bg-muted" />
                    <div className="h-4 w-1/2 rounded bg-muted" />
                    <div className="flex gap-4 border-t pt-4">
                      <div className="h-4 w-12 rounded bg-muted" />
                      <div className="h-4 w-12 rounded bg-muted" />
                      <div className="h-4 w-12 rounded bg-muted" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : properties.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="mt-6 font-display text-xl font-semibold">
                Aucun bien trouvé
              </h2>
              <p className="mt-2 text-muted-foreground">
                Essayez de modifier vos critères de recherche
              </p>
              <Button variant="sage" className="mt-6" onClick={clearFilters}>
                Réinitialiser les filtres
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {properties.map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDiscovery;
