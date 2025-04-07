
import { Shield, Lock, Server, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const SecurityFeature = ({ icon, title, description }) => {
  return (
    <div className="flex bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <div className="h-12 w-12 flex items-center justify-center bg-mosaic-tertiary rounded-lg mr-4 shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const Security = () => {
  return (
    <section id="security" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise-grade <span className="gradient-text">Security & Compliance</span>
            </h2>
            
            <p className="text-gray-600 mb-8">
              OpenResponses is built from the ground up with security and compliance in mind. Keep your data on your infrastructure and meet industry regulations.
            </p>
            
            <div className="space-y-6">
              <SecurityFeature 
                icon={<Shield className="h-6 w-6 text-mosaic-primary" />}
                title="Data Privacy"
                description="Your data never leaves your infrastructure. All processing happens within your secure environment."
              />
              
              <SecurityFeature 
                icon={<Lock className="h-6 w-6 text-mosaic-primary" />}
                title="End-to-End Encryption"
                description="All communications are encrypted using industry-standard protocols to ensure data security."
              />
              
              <SecurityFeature 
                icon={<Server className="h-6 w-6 text-mosaic-primary" />}
                title="Self-hosted Solution"
                description="Deploy on your own infrastructure or private cloud environment with full control over your data."
              />
              
              <SecurityFeature 
                icon={<FileCheck className="h-6 w-6 text-mosaic-primary" />}
                title="Compliance Ready"
                description="Designed to help you meet GDPR, HIPAA, SOC 2, and other compliance requirements."
              />
            </div>
            
            <div className="mt-8">
              <Button className="bg-mosaic-primary hover:bg-mosaic-primary/90">
                Learn More About Security
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-mosaic-primary to-mosaic-secondary rounded-full flex items-center justify-center opacity-20 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 lg:w-72 lg:h-72 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <Shield className="h-16 w-16 text-mosaic-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">100% Secure</h3>
                  <p className="text-gray-600">Your data stays on your servers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
