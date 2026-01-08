import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  status: string;
  badgeColor?: string;
  liveUrl?: string;
  startYear: number;
  endYear?: number; // Optional - if not provided, assumes "Present"
}

const projects: Project[] = [
  {
    title: "iamlockedin.com",
    description: "Focus-driven productivity tool",
    status: "Live",
    badgeColor: "bg-green-500/10 text-green-600 border-green-500/20",
    liveUrl: "https://iamlockedin.com",
    startYear: 2025,
  },
  {
    title: "hikewithme.sg",
    description: "Your guide to hidden trails in Singapore",
    status: "Live",
    badgeColor: "bg-green-500/10 text-green-600 border-green-500/20",
    liveUrl: "https://hikewithme.sg",
    startYear: 2025,
  },
  {
    title: "firejet.io",
    description: "Convert Figma designs into code",
    status: "Live",
    badgeColor: "bg-green-500/10 text-green-600 border-green-500/20",
    liveUrl: "https://firejet.io",
    startYear: 2022,
  },
  {
    title: "replyfirst.co",
    description: "AI-powered customer service solution",
    status: "Legacy",
    badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    liveUrl: "https://replyfirst.co",
    startYear: 2025,
  },
  {
    title: "ezbackend.io",
    description: "Simplified backend setup",
    status: "Legacy",
    badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    liveUrl: "https://ezbackend.io",
    startYear: 2022,
    endYear: 2022,
  },
  {
    title: "aurient.io",
    description: "Data-driven mentorship management",
    status: "Legacy",
    badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    liveUrl: "https://aurient.io",
    startYear: 2019,
    endYear: 2021,
  },
  {
    title: "meetup-mouse.com",
    description: "Find places to meet and eat",
    status: "Legacy",
    badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    liveUrl: "https://www.instagram.com/meetupmouse/",
    startYear: 2019,
    endYear: 2021,
  },
];

// Sort projects by end year (if exists), otherwise by start year, in descending order
const sortedProjects = [...projects].sort((a, b) => {
  const aYear = a.endYear || a.startYear;
  const bYear = b.endYear || b.startYear;
  return bYear - aYear;
});

const ProjectsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const getStatusColor = (project: Project) => {
    if (project.badgeColor) {
      return project.badgeColor;
    }

    // Fallback colors based on status text
    const status = project.status.toLowerCase();
    if (status.includes("live") || status.includes("active")) {
      return "bg-green-500/10 text-green-600 border-green-500/20";
    } else if (status.includes("beta")) {
      return "bg-blue-500/10 text-blue-600 border-blue-500/20";
    } else if (status.includes("progress")) {
      return "bg-orange-500/10 text-orange-600 border-orange-500/20";
    } else if (status.includes("planning")) {
      return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    } else {
      return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  const formatYearRange = (project: Project) => {
    return project.endYear 
      ? `${project.startYear} - ${project.endYear}`
      : `${project.startYear} - Present`;
  };

  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-thin font-inter mb-4">
            Projects
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-background/50 backdrop-blur-sm rounded-lg border border-foreground/10 overflow-hidden shadow-sm">
            {sortedProjects.map((project, index) => (
              <motion.div 
                key={project.title} 
                variants={itemVariants}
                className={`group p-6 hover:bg-background/70 transition-all duration-300 ${
                  index !== sortedProjects.length - 1 ? 'border-b border-foreground/5' : ''
                } ${project.liveUrl ? 'cursor-pointer' : ''}`}
                onClick={() => {
                  if (project.liveUrl) {
                    window.open(project.liveUrl, "_blank");
                  }
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                  {/* Project Title */}
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-md font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.liveUrl && (
                        <ExternalLink className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                      )}
                    </div>
                  </div>
                  
                  {/* Years */}
                  <div className="md:col-span-2">
                    <p className="text-foreground/60 text-sm">
                      {formatYearRange(project)}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <div className="md:col-span-4">
                    <p className="text-foreground/70 text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Status */}
                  <div className="md:col-span-3 flex justify-start md:justify-end">
                    <Badge
                      variant="outline"
                      className={`text-xs font-medium ${getStatusColor(project)}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;