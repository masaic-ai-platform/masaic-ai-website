
import { 
  Server, Shield, Code, Dock, BarChart, Settings 
} from "lucide-react";

const features = [
  {
    icon: <Server className="h-8 w-8 text-white" />,
    title: "Self-hosted AI Platform",
    description: "Deploy and run our AI solution on your own infrastructure, maintaining full control over your data and complying with internal security policies."
  },
  {
    icon: <Code className="h-8 w-8 text-white" />,
    title: "Seamless Integration",
    description: "Integrate with minimal code changes through our well-documented API. Plug into existing systems with minimal disruption."
  },
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "Enterprise-grade Security",
    description: "Built with security and compliance in mind. Keep your data on your infrastructure and meet industry regulations."
  },
  {
    icon: <Dock className="h-8 w-8 text-white" />,
    title: "Quick Docker Deployment",
    description: "Deploy within minutes using Docker. Streamlined installation process with comprehensive documentation."
  },
  {
    icon: <BarChart className="h-8 w-8 text-white" />,
    title: "Real-time Monitoring",
    description: "Monitor usage, performance, and system health with comprehensive analytics dashboards."
  },
  {
    icon: <Settings className="h-8 w-8 text-white" />,
    title: "Flexible Configuration",
    description: "Customize and configure to meet your specific needs. Adapt to changing requirements with minimal effort."
  }
];

const FeatureCard = ({ feature }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
      <div className="h-14 w-14 flex items-center justify-center bg-black rounded-lg mb-4">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for <span className="gradient-text">Enterprise AI</span>
          </h2>
          <p className="text-gray-600">
            OpenResponses combines powerful capabilities with ease of use to help you deploy AI solutions with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
