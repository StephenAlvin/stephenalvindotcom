import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Timer,
  BarChart,
  Mountain,
  Globe,
  Smartphone,
  Database,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: string;
  badgeColor?: string;
  icon: React.ReactNode;
  gradient: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "iamlockedin.com",
    description: "Minamilist focus timer with white noise and focus analytics",
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "Supabase",
      "TanStack Query",
      "PostHog",
    ],
    status: "30 Daily Active Users",
    badgeColor: "bg-green-500/10 text-green-600 border-green-500/20",
    icon: <Timer className="w-6 h-6" />,
    gradient: "from-purple-500/20 to-pink-500/20",
    githubUrl: "#",
  },

  {
    id: "2",
    title: "hikewithme.sg",
    description: "Personal hiking guide for hiddel trails in Singapore",
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "Zod",
      "GitHub Actions",
      "React Hook Form",
    ],
    status: "Live",
    badgeColor: "bg-green-500/10 text-green-600 border-green-500/20",
    icon: <Mountain className="w-6 h-6" />,
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    id: "3",
    title: "replyfirst.co",
    description:
      "AI generated replies for customer service professionals",
    technologies: [
      "TypeScript",
      "React",
      "OpenAI",
      "Node.js",
      "Zod",
      "GitHub Actions",
    ],
    status: "Validating Idea",
    badgeColor: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    icon: <BarChart className="w-6 h-6" />,
    gradient: "from-blue-500/20 to-cyan-500/20",
    githubUrl: "#",
    liveUrl: "#",
  },
];

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

  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-thin font-inter mb-4">
            Current Projects
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card
                onClick={() => {
                  window.open(project.liveUrl, "_blank");
                }}
                className={`h-full group cursor-pointer border border-foreground/10 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-gradient-to-br ${project.gradient} backdrop-blur-sm`}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 rounded-lg bg-background/50 backdrop-blur-sm">
                      {project.icon}
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-xs ${getStatusColor(project)}`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-background/20 hover:bg-background/70 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {/* {project.technologies.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="text-xs bg-background/50"
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      )} */}
                    </div>

                    {/* <div className="flex gap-2">
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 px-2 hover:bg-background/50"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, "_blank");
                          }}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 px-2 hover:bg-background/50"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, "_blank");
                          }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
