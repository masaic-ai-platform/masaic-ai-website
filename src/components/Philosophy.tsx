const MosaicTile = ({ color, delay = 0 }) => {
  return (
    <div 
      className={`${color} rounded-md animate-mosaic-float`}
      style={{ 
        animationDelay: `${delay}s`,
        aspectRatio: '1',
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        zIndex: '1'
      }}
    ></div>
  );
};

const Philosophy = () => {
  return (
    <section id="about" className="section-padding mb-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The <span className="gradient-text">Mosaic Philosophy</span>
            </h2>
            
            <p className="text-gray-600 mb-6">
              At Masaic AI, we believe that small, mosaic-like components, when arranged thoughtfully, create powerful, beautiful, and efficient systems. This philosophy guides everything we build.
            </p>
            
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3">Building Blocks of Innovation</h3>
              <p className="text-gray-600">
                Just as a mosaic combines small pieces to form a complete image, our solutions combine specialized components to build comprehensive systems. Each piece is carefully crafted to fit perfectly with others.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3">Modular by Design</h3>
              <p className="text-gray-600">
                Our modular architecture allows for scalability, flexibility, and resilience. Add, remove, or replace components without disrupting the entire system—enabling your organization to evolve over time.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Attention to Detail</h3>
              <p className="text-gray-600">
                Like a master mosaicist, we believe in precision and attention to detail. Each component is optimized for performance, security, and user experience to create a harmonious whole.
              </p>
            </div>
          </div>
          
          <div className="relative h-[32rem] md:h-[36rem] overflow-hidden">
            {/* Visual representation of the mosaic philosophy using a grid of colored squares */}
            <div className="grid grid-cols-5 gap-4 h-full w-full">
              <MosaicTile color="bg-mosaic-primary/20" delay={0} />
              <MosaicTile color="bg-mosaic-secondary/30" delay={0.4} />
              <MosaicTile color="bg-mosaic-tertiary/50" delay={0.8} />
              <MosaicTile color="bg-mosaic-primary/30" delay={1.2} />
              <MosaicTile color="bg-mosaic-secondary/20" delay={1.6} />
              
              <MosaicTile color="bg-mosaic-secondary/20" delay={2.2} />
              <MosaicTile color="bg-mosaic-tertiary/30" delay={1.8} />
              <MosaicTile color="bg-mosaic-primary/40" delay={1.4} />
              <MosaicTile color="bg-mosaic-secondary/50" delay={1.0} />
              <MosaicTile color="bg-mosaic-primary/20" delay={0.6} />
              
              <MosaicTile color="bg-mosaic-tertiary/40" delay={0.3} />
              <MosaicTile color="bg-mosaic-primary/30" delay={0.7} />
              <MosaicTile color="bg-mosaic-secondary/40" delay={1.1} />
              <MosaicTile color="bg-mosaic-tertiary/20" delay={1.5} />
              <MosaicTile color="bg-mosaic-primary/50" delay={1.9} />
              
              <MosaicTile color="bg-mosaic-primary/40" delay={2.1} />
              <MosaicTile color="bg-mosaic-secondary/20" delay={1.7} />
              <MosaicTile color="bg-mosaic-tertiary/50" delay={1.3} />
              <MosaicTile color="bg-mosaic-primary/30" delay={0.9} />
              <MosaicTile color="bg-mosaic-secondary/40" delay={0.5} />
              
              <MosaicTile color="bg-mosaic-secondary/30" delay={0.2} />
              <MosaicTile color="bg-mosaic-tertiary/40" delay={0.6} />
              <MosaicTile color="bg-mosaic-primary/20" delay={1.0} />
              <MosaicTile color="bg-mosaic-secondary/50" delay={1.4} />
              <MosaicTile color="bg-mosaic-tertiary/30" delay={1.8} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
