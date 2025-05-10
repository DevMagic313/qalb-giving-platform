
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projectsData";

// Get featured projects from the main data source
const featuredProjects = projects
  .filter(project => project.featured)
  .slice(0, 3)
  .map(project => ({
    id: project.id,
    title: project.title,
    category: project.category === "water" ? "Water" : 
             project.category === "education" ? "Education" : 
             project.category === "orphans" ? "Orphan Care" : 
             project.category === "food" ? "Food Security" : "Emergency",
    location: project.location,
    description: project.description,
    imageSrc: project.image,
    goalAmount: project.goal,
    raisedAmount: project.raised,
    donors: project.donorsCount,
    remainingDays: project.daysLeft,
  }));

const ProjectCard = ({ project }: { project: typeof featuredProjects[0] }) => {
  const percentRaised = (project.raisedAmount / project.goalAmount) * 100;
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-transparent hover:border-islamic-teal">
      <div className="relative h-48">
        <img 
          src={project.imageSrc} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <Badge 
          className="absolute top-3 left-3 bg-islamic-teal text-white"
        >
          {project.category}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-center text-xs text-muted-foreground mb-2">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {project.location}
        </div>
        
        <h3 className="font-playfair font-bold text-lg mb-2 line-clamp-1">{project.title}</h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
        
        <div className="mb-3">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-semibold">${project.raisedAmount.toLocaleString()}</span>
            <span className="text-muted-foreground">of ${project.goalAmount.toLocaleString()}</span>
          </div>
          <Progress value={percentRaised} className="h-2" />
        </div>
        
        <div className="flex justify-between text-xs text-muted-foreground mb-4">
          <div>{project.donors} donors</div>
          <div>{project.remainingDays} days left</div>
        </div>
        
        <Link 
          to={`/projects/${project.id}`}
          className="block w-full text-center py-2 px-4 bg-islamic-teal hover:bg-islamic-teal/90 text-white rounded transition-colors"
        >
          Donate Now
        </Link>
      </CardContent>
    </Card>
  );
};

const FeaturedProjects = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-3">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your donation can make a real difference in these ongoing projects. 
            Track your impact in real-time and see how your generosity transforms lives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/projects"
            className="inline-flex items-center text-islamic-teal hover:text-islamic-teal/80 font-medium"
          >
            View All Projects
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
