import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  features: string[];
  index?: number;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  href,
  features,
  index = 0,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Link to={href} className="group block h-full">
        <div className="glass-card flex h-full flex-col p-6 transition-all duration-300 hover:shadow-elevated lg:p-8">
          {/* Icon */}
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-light text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-sage">
            <Icon className="h-7 w-7" />
          </div>

          {/* Content */}
          <h3 className="font-display text-xl font-semibold tracking-tight lg:text-2xl">
            {title}
          </h3>
          
          <p className="mt-2 text-muted-foreground">
            {description}
          </p>

          {/* Features */}
          <ul className="mt-6 flex-1 space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-6 flex items-center gap-2 font-medium text-accent">
            <span>En savoir plus</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
