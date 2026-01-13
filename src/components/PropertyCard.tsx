import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  type: "sale" | "rent";
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  featured?: boolean;
}

interface PropertyCardProps {
  property: Property;
  index?: number;
}

const PropertyCard = ({ property, index = 0 }: PropertyCardProps) => {
  const formatPrice = (price: number, type: "sale" | "rent") => {
    return new Intl.NumberFormat("fr-BE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(price) + (type === "rent" ? "/mois" : "");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/properties/${property.id}`} className="group block">
        <div className="glass-card overflow-hidden transition-all duration-300 hover:shadow-elevated">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            {/* Tags */}
            <div className="absolute left-3 top-3 flex gap-2">
              <span className={cn(
                "rounded-full px-3 py-1 text-xs font-medium",
                property.type === "sale"
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent text-accent-foreground"
              )}>
                {property.type === "sale" ? "À vendre" : "À louer"}
              </span>
              {property.featured && (
                <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-medium text-white">
                  Coup de cœur
                </span>
              )}
            </div>

            {/* Favorite Button */}
            <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-foreground backdrop-blur-sm transition-all hover:bg-white hover:text-red-500">
              <Heart className="h-4 w-4" />
            </button>

            {/* Price on hover */}
            <div className="absolute bottom-3 left-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="font-display text-2xl font-bold text-white">
                {formatPrice(property.price, property.type)}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
              {property.title}
            </h3>
            
            <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{property.address}</span>
            </div>

            {/* Features */}
            <div className="mt-4 flex items-center gap-4 border-t pt-4">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Bed className="h-4 w-4" />
                <span>{property.bedrooms}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Bath className="h-4 w-4" />
                <span>{property.bathrooms}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Square className="h-4 w-4" />
                <span>{property.area} m²</span>
              </div>
            </div>

            {/* Price (visible by default, hides on hover) */}
            <div className="mt-3 transition-opacity duration-300 group-hover:opacity-0">
              <span className="font-display text-xl font-bold text-foreground">
                {formatPrice(property.price, property.type)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;
