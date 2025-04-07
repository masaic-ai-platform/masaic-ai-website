import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Shield, Clock, Github, MessageCircle, MessagesSquare, AlertCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Mosaic background pattern */}
      <div className="absolute inset-0 -z-10 mosaic-pattern opacity-20"></div>
      
      {/* Mosaic floating elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 left-10 w-12 h-12 bg-mosaic-primary/20 rounded-lg animate-mosaic-float"></div>
        <div className="absolute top-60 right-1/4 w-16 h-16 bg-mosaic-secondary/20 rounded-lg animate-mosaic-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-10 h-10 bg-mosaic-tertiary/30 rounded-lg animate-mosaic-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 right-10 w-14 h-14 bg-mosaic-light/20 rounded-lg animate-mosaic-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Empowering seamless, secure,</span>
            <br />and scalable AI Agents Building
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Built like Mosaic art piece by piece—OpenResponses provides an enterprise-grade, self-hosted AI platform that seamlessly integrates into your existing infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="https://openresponses.masaic.ai/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-mosaic-primary hover:bg-mosaic-primary/90 px-6 py-6">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href="https://github.com/masaic-ai-platform/open-responses" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a href="https://discord.com/channels/1335132819260702723/1354795442004820068" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
              <MessageCircle className="h-5 w-5" />
              <span>Discord</span>
            </a>
            <a href="https://github.com/orgs/masaic-ai-platform/discussions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
              <MessagesSquare className="h-5 w-5" />
              <span>Discussion Forum</span>
            </a>
            <a href="https://github.com/masaic-ai-platform/open-responses/issues" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
              <AlertCircle className="h-5 w-5" />
              <span>Report Issues</span>
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center">
              <Server className="h-5 w-5 text-mosaic-primary mr-2" />
              <span className="text-sm">Self-Hosted & Secure</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-mosaic-primary mr-2" />
              <span className="text-sm">Compliance Friendly</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-mosaic-primary mr-2" />
              <span className="text-sm">Quick Deployment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
