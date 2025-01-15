import { motion } from "framer-motion";

interface ImageShowcaseProps {
  frontImage: 'reports' | 'dashboard';
  setFrontImage: (image: 'reports' | 'dashboard') => void;
}

const ImageShowcase = ({ frontImage, setFrontImage }: ImageShowcaseProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-[180px] xs:h-[220px] sm:h-[280px] md:h-[320px] lg:h-[480px] select-none"
      style={{
        perspective: '2000px',
      }}
    >
      {/* Dashboard Image */}
      <motion.div
        className="absolute w-[75%] xs:w-[70%] sm:w-[75%] md:w-[80%] h-full cursor-pointer mx-auto left-0 right-0"
        style={{
          transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: `
            ${frontImage === 'dashboard' 
              ? 'translateZ(30px) translateX(-5%) translateY(0%) rotateY(-15deg)' 
              : 'translateZ(-100px) translateX(-20%) translateY(-5%) rotateY(-25deg)'}
          `,
          opacity: frontImage === 'dashboard' ? 1 : 0.4,
          zIndex: frontImage === 'dashboard' ? 20 : 10
        }}
        onClick={() => setFrontImage('dashboard')}
      >
        <img
          src="/lovable-uploads/ea8e9384-86a2-4501-b686-5a95b634d919.png"
          alt="Hypersight Dashboard"
          className="w-full h-auto rounded-2xl shadow-2xl max-w-[300px] xs:max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[480px] mx-auto"
          style={{ 
            maxWidth: "100%",
            transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: `scale(${frontImage === 'dashboard' ? '1.05' : '0.95'})`,
            filter: `
              drop-shadow(0 ${frontImage === 'dashboard' ? '40px' : '20px'} 
              50px rgb(0 0 0 / ${frontImage === 'dashboard' ? '0.6' : '0.3'}))
              brightness(${frontImage === 'dashboard' ? '1' : '0.7'})
            `
          }}
        />
      </motion.div>

      {/* Reports Image */}
      <motion.div
        className="absolute w-[75%] xs:w-[70%] sm:w-[75%] md:w-[80%] h-full cursor-pointer mx-auto left-0 right-0"
        style={{
          transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: `
            ${frontImage === 'reports' 
              ? 'translateZ(30px) translateX(5%) translateY(0%) rotateY(15deg)' 
              : 'translateZ(-100px) translateX(20%) translateY(-5%) rotateY(25deg)'}
          `,
          opacity: frontImage === 'reports' ? 1 : 0.4,
          zIndex: frontImage === 'reports' ? 20 : 10
        }}
        onClick={() => setFrontImage('reports')}
      >
        <img
          src="/lovable-uploads/b48dc1f3-2fab-4171-b95b-80ec0562821d.png"
          alt="Hypersight Reports"
          className="w-full h-auto rounded-2xl shadow-2xl max-w-[300px] xs:max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[480px] mx-auto"
          style={{ 
            maxWidth: "100%",
            transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: `scale(${frontImage === 'reports' ? '1.05' : '0.95'})`,
            filter: `
              drop-shadow(0 ${frontImage === 'reports' ? '40px' : '20px'} 
              50px rgb(0 0 0 / ${frontImage === 'reports' ? '0.6' : '0.3'}))
              brightness(${frontImage === 'reports' ? '1' : '0.7'})
            `
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ImageShowcase;