import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Shield, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 relative overflow-hidden">
      {/* Mosaic background pattern */}
      <div className="absolute inset-0 -z-10 mosaic-pattern opacity-20"></div>
      
      {/* Mosaic floating elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 left-10 w-12 h-12 bg-mosaic-primary/20 rounded-lg animate-mosaic-float"></div>
        <div className="absolute top-60 right-1/4 w-16 h-16 bg-mosaic-secondary/20 rounded-lg animate-mosaic-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-10 h-10 bg-mosaic-tertiary/30 rounded-lg animate-mosaic-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 right-10 w-14 h-14 bg-mosaic-light/20 rounded-lg animate-mosaic-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* New Launch Banner */}
      <div className="flex justify-center mt-[-4px] sm:mt-[-15px] mb-6 sm:mb-10 px-2">
        <div className="flex overflow-hidden rounded-full shadow-sm max-w-full">
          <div className="flex items-center h-9 bg-mosaic-primary px-3 sm:px-5 text-white text-xs font-semibold whitespace-nowrap">
            New Launch
          </div>
          <div className="flex items-center h-9 bg-white px-3 sm:px-5 text-xs sm:text-sm font-medium border-y border-r border-gray-200 whitespace-nowrap">
            OpenResponses API
          </div>
          <a href="https://github.com/masaic-ai-platform/open-responses" 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex items-center h-9 bg-white px-2 sm:px-4 border-y border-r border-gray-200 gap-2 hover:bg-gray-50 transition-colors whitespace-nowrap">
            <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            <span className="text-xs sm:text-sm">GitHub</span>
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="gradient-text">Empowering seamless, secure,</span>
            <br className="hidden sm:block" />
            <span className="gradient-text sm:hidden">and scalable</span>
            <span className="hidden sm:inline"> and scalable</span> AI Agents Building
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Built like Mosaic art, piece by piece—Masaic AI Platform provides an enterprise-grade, self-hosted AI platform that seamlessly integrates into your existing infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-12">
            <a href="https://openresponses.masaic.ai/quickstart" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-mosaic-primary hover:bg-mosaic-primary/90 px-4 sm:px-6 py-5 sm:py-6 text-sm sm:text-base w-full sm:w-auto">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-12">
            <div className="flex items-center">
              <Server className="h-4 w-4 sm:h-5 sm:w-5 text-mosaic-primary mr-2" />
              <span className="text-xs sm:text-sm">Self-Hosted & Secure</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-mosaic-primary mr-2" />
              <span className="text-xs sm:text-sm">Compliance Friendly</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-mosaic-primary mr-2" />
              <span className="text-xs sm:text-sm">Quick Deployment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
