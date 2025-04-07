
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is OpenResponses?",
    answer: "OpenResponses is a self-hosted AI platform that allows enterprises to integrate AI capabilities into their applications while maintaining full control over their data. It's designed for organizations that need powerful AI features without compromising on security or compliance."
  },
  {
    question: "How is OpenResponses different from other AI solutions?",
    answer: "OpenResponses is fully self-hosted, meaning all your data stays on your infrastructure. Unlike cloud-based AI services, we prioritize data privacy, security, and compliance while still providing state-of-the-art AI capabilities."
  },
  {
    question: "What are the hardware requirements?",
    answer: "OpenResponses is designed to run on a wide range of hardware configurations. For minimum requirements, we recommend at least 8GB RAM and 4 CPU cores. For optimal performance, 16GB RAM and 8 CPU cores are recommended. GPU acceleration is supported but not required."
  },
  {
    question: "Is OpenResponses compliant with regulations like GDPR and HIPAA?",
    answer: "Yes, OpenResponses is designed with compliance in mind. Since it's self-hosted and your data never leaves your infrastructure, it can be configured to meet various regulatory requirements including GDPR, HIPAA, SOC 2, and others, depending on how you implement it within your security framework."
  },
  {
    question: "How easy is it to integrate OpenResponses into existing systems?",
    answer: "Very easy! We provide SDKs for multiple programming languages including JavaScript, Python, Java, and more. Most integrations require only a few lines of code, and our comprehensive documentation includes examples for common use cases."
  },
  {
    question: "Can I customize the AI models used by OpenResponses?",
    answer: "Yes, OpenResponses supports model customization and fine-tuning to meet your specific needs. You can use our pre-trained models as a starting point or integrate your own custom models."
  },
  {
    question: "How is OpenResponses deployed?",
    answer: "OpenResponses can be deployed via Docker containers, making installation straightforward across different environments. We provide comprehensive deployment guides for various infrastructure setups including on-premises servers, private clouds, and Kubernetes clusters."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about OpenResponses and how it can help your organization.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="mb-4 text-gray-600">
            Still have questions? We're here to help.
          </p>
          <div className="inline-flex items-center justify-center">
            <a href="#" className="text-mosaic-primary hover:underline font-medium">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
