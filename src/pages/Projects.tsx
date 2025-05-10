
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects, projectCategories } from '../data/projectsData';

const Projects = () => {
  return (
    <Layout>
      <div className="bg-islamic-cream py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-islamic-charcoal">Our Projects</h1>
            <p className="text-islamic-charcoal/80 max-w-3xl mx-auto">
              Discover impactful projects that change lives around the world. 
              Track their progress in real-time and see how your donations make a difference.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-8 bg-transparent">
              {projectCategories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-islamic-teal data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {projectCategories.map(category => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects
                    .filter(project => category.id === 'all' || project.category === category.id)
                    .map(project => (
                      <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <Link to={`/projects/${project.id}`}>
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </Link>
                        
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <Badge variant="outline" className="bg-islamic-teal/10 text-islamic-teal">
                              {projectCategories.find(c => c.id === project.category)?.name}
                            </Badge>
                            {project.featured && (
                              <Badge className="bg-islamic-gold text-white">Featured</Badge>
                            )}
                          </div>
                          <Link to={`/projects/${project.id}`}>
                            <CardTitle className="mt-2 hover:text-islamic-teal transition-colors">{project.title}</CardTitle>
                          </Link>
                          <CardDescription className="text-sm text-islamic-charcoal/70">
                            {project.location}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="pb-4">
                          <p className="text-sm text-islamic-charcoal/80 mb-4">
                            {project.description}
                          </p>
                          
                          <div className="mt-4">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-semibold">${project.raised.toLocaleString()} raised</span>
                              <span className="text-islamic-charcoal/70">of ${project.goal.toLocaleString()}</span>
                            </div>
                            <Progress value={(project.raised / project.goal) * 100} className="h-2 bg-gray-200" />
                            
                            <div className="flex justify-between mt-4 text-xs text-islamic-charcoal/70">
                              <span>{project.donorsCount} donors</span>
                              <span>{project.daysLeft} days left</span>
                            </div>
                          </div>
                        </CardContent>
                        
                        <CardFooter className="pt-0">
                          <Link to={`/projects/${project.id}`} className="w-full">
                            <Button className="w-full bg-islamic-teal hover:bg-islamic-teal/90">
                              Donate Now
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
