
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "water", name: "Water Wells" },
  { id: "education", name: "Education" },
  { id: "orphans", name: "Orphan Care" },
  { id: "food", name: "Food Security" },
  { id: "emergency", name: "Emergency Relief" }
];

const projects = [
  {
    id: 1,
    title: "Clean Water Well in Somalia",
    description: "Provide clean water to a village of 500 people in drought-affected Somalia.",
    category: "water",
    location: "Mogadishu Region, Somalia",
    raised: 7500,
    goal: 12000,
    donorsCount: 145,
    daysLeft: 12,
    image: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Girls' School Construction in Afghanistan",
    description: "Help build a school for 200 girls to continue their education despite challenges.",
    category: "education",
    location: "Kabul, Afghanistan",
    raised: 35000,
    goal: 50000,
    donorsCount: 310,
    daysLeft: 45,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 3,
    title: "Orphanage Support in Indonesia",
    description: "Provide food, education, and care for 50 orphans in Jakarta.",
    category: "orphans",
    location: "Jakarta, Indonesia",
    raised: 12000,
    goal: 24000,
    donorsCount: 230,
    daysLeft: 30,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 4,
    title: "Emergency Food Packages in Yemen",
    description: "Deliver essential food packages to families affected by conflict.",
    category: "food",
    location: "Sanaa, Yemen",
    raised: 18000,
    goal: 20000,
    donorsCount: 405,
    daysLeft: 7,
    image: "https://images.unsplash.com/photo-1469571486292-b53601010376?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 5,
    title: "Medical Aid for Gaza",
    description: "Provide urgent medical supplies and equipment to hospitals in Gaza.",
    category: "emergency",
    location: "Gaza, Palestine",
    raised: 45000,
    goal: 50000,
    donorsCount: 780,
    daysLeft: 5,
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 6,
    title: "Solar-Powered Water Pumps in Mali",
    description: "Install sustainable water pumps to serve rural communities.",
    category: "water",
    location: "Timbuktu Region, Mali",
    raised: 8200,
    goal: 15000,
    donorsCount: 134,
    daysLeft: 20,
    image: "https://images.unsplash.com/photo-1548407260-da850faa41e3?auto=format&fit=crop&w=800&q=80",
    featured: false
  }
];

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
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <Badge variant="outline" className="bg-islamic-teal/10 text-islamic-teal">
                              {projectCategories.find(c => c.id === project.category)?.name}
                            </Badge>
                            {project.featured && (
                              <Badge className="bg-islamic-gold text-white">Featured</Badge>
                            )}
                          </div>
                          <CardTitle className="mt-2">{project.title}</CardTitle>
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
                          <Button className="w-full bg-islamic-teal hover:bg-islamic-teal/90">
                            Donate Now
                          </Button>
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
