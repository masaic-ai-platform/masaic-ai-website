import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const codeSnippets = {
  openai_sdk: `openai_client = OpenAI(
    base_url="http://localhost:8080/v1", 
    api_key="your_api_key", 
    default_headers={'x-model-provider': 'openai'}
)

response = openai_client.responses.create(
    model="gpt-4o-mini",
    input="Tell me a joke"
)

print(response.text)`,

  agent_sdk: `client = AsyncOpenAI(
    base_url="http://localhost:8080/v1", 
    api_key="your_api_key", 
    default_headers={'x-model-provider': 'openai'}
)

agent = Agent(
    name="Assistant",
    instructions="You are a humorous poet who can write funny poems of 4 lines.",
    model=OpenAIResponsesModel(model="gpt-4o-mini", openai_client=client)
)

response = await agent.run("Write a poem about coding")
print(response)`,

  curl: `curl -X POST http://localhost:8080/v1/responses \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "x-model-provider: openai" \\
  -d '{
    "model": "gpt-4o-mini",
    "input": "Tell me a joke"
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
              Integrate OpenResponses into your existing applications with just a few lines of code. 100% compliant with OpenAI Responses API specifications. Can be used with OpenAI SDK or OpenAI Agent SDK.
            </p>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-mosaic-tertiary flex items-center justify-center mr-4">
                  <span className="font-semibold text-mosaic-primary">1</span>
                </div>
                <div>
                  <h3 className="font-semibold">Use Existing OpenAI SDKs</h3>
                  <p className="text-sm text-gray-600">No need for custom libraries - use the standard OpenAI SDK</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-mosaic-tertiary flex items-center justify-center mr-4">
                  <span className="font-semibold text-mosaic-primary">2</span>
                </div>
                <div>
                  <h3 className="font-semibold">Configure the Client</h3>
                  <p className="text-sm text-gray-600">Just point to your OpenResponses endpoint URL</p>
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
            
            <div className="mt-6">
              <a href="https://openresponses.masaic.ai/introduction" target="_blank" rel="noopener noreferrer">
                <Button className="bg-mosaic-primary hover:bg-mosaic-primary/90 text-white">
                  View Documentation
                </Button>
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in-right">
            <div className="bg-gray-900 rounded-xl p-4 shadow-xl">
              <Tabs defaultValue="openai_sdk">
                <TabsList className="mb-4 bg-gray-800 border-gray-700 w-full">
                  <TabsTrigger value="openai_sdk">OpenAI SDK</TabsTrigger>
                  <TabsTrigger value="agent_sdk">Agent SDK</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                </TabsList>
                <TabsContent value="openai_sdk">
                  <pre className="code-block">{codeSnippets.openai_sdk}</pre>
                </TabsContent>
                <TabsContent value="agent_sdk">
                  <pre className="code-block">{codeSnippets.agent_sdk}</pre>
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
