
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const codeSnippets = {
  python: `import openresponses

# Initialize the client
client = openresponses.Client(api_key="your_api_key")

# Send a request
response = client.generate(
    prompt="Summarize this article about AI ethics",
    context=article_text,
    options={"max_length": 200}
)

print(response.text)`,

  javascript: `import { OpenResponsesClient } from '@openresponses/sdk';

// Initialize the client
const client = new OpenResponsesClient({
  apiKey: 'your_api_key'
});

// Send a request
async function generateResponse() {
  const response = await client.generate({
    prompt: 'Summarize this article about AI ethics',
    context: articleText,
    options: { maxLength: 200 }
  });
  
  console.log(response.text);
}

generateResponse();`,

  curl: `curl -X POST https://your-openresponses-instance/api/v1/generate \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer your_api_key" \\
  -d '{
    "prompt": "Summarize this article about AI ethics",
    "context": "Article text goes here...",
    "options": {
      "max_length": 200
    }
  }'`
};

const Integration = () => {
  return (
    <section id="integration" className="section-padding relative">
      <div className="absolute inset-0 -z-10 mosaic-pattern opacity-10"></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Easy Integration with <span className="gradient-text">Minimal Code</span>
            </h2>
            
            <p className="text-gray-600 mb-6">
              Integrate OpenResponses into your existing applications with just a few lines of code. Our SDKs are available for multiple programming languages and platforms.
            </p>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-mosaic-tertiary flex items-center justify-center mr-4">
                  <span className="font-semibold text-mosaic-primary">1</span>
                </div>
                <div>
                  <h3 className="font-semibold">Install the SDK</h3>
                  <p className="text-sm text-gray-600">Add our package via npm, pip, or other package managers</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-mosaic-tertiary flex items-center justify-center mr-4">
                  <span className="font-semibold text-mosaic-primary">2</span>
                </div>
                <div>
                  <h3 className="font-semibold">Configure the Client</h3>
                  <p className="text-sm text-gray-600">Initialize with your API key and endpoint URL</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-mosaic-tertiary flex items-center justify-center mr-4">
                  <span className="font-semibold text-mosaic-primary">3</span>
                </div>
                <div>
                  <h3 className="font-semibold">Start Making API Calls</h3>
                  <p className="text-sm text-gray-600">Begin generating AI responses in your application</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-mosaic-primary hover:bg-mosaic-primary/90">
              View Documentation
            </Button>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in-right">
            <div className="bg-gray-900 rounded-xl p-4 shadow-xl">
              <Tabs defaultValue="javascript">
                <TabsList className="mb-4 bg-gray-800 border-gray-700 w-full">
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                </TabsList>
                <TabsContent value="javascript">
                  <pre className="code-block">{codeSnippets.javascript}</pre>
                </TabsContent>
                <TabsContent value="python">
                  <pre className="code-block">{codeSnippets.python}</pre>
                </TabsContent>
                <TabsContent value="curl">
                  <pre className="code-block">{codeSnippets.curl}</pre>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
