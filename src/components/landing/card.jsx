import React, { useState, useRef, useEffect } from 'react';
import { Settings, Code, Trophy, Users } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, imageContent, transform3D, opacity, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full max-w-4xl mx-auto bg-neutral-900 rounded-2xl md:rounded-3xl shadow-2xl border border-neutral-600 overflow-hidden transition-all duration-700 ease-out cursor-pointer px-4 md:px-0"
      style={{ 
        transform: `${transform3D} ${isHovered ? 'scale(1.02)' : 'scale(1)'}`,
        opacity: opacity,
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(251, 191, 36, 0.1)' 
          : '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col min-h-[600px] md:min-h-[500px] md:flex-row relative overflow-hidden">
        {/* Animated background gradient */}
        <div 
          className="absolute inset-0 bg-neutral-900 opacity-0 transition-opacity duration-500"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
        
        {/* Text Content */}
        <div className="flex-1 p-6 md:p-12 lg:p-16 flex flex-col justify-center relative">
          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
              <div 
                className="size-12 md:size-16 p-2 bg-yellow-400 rounded-2xl md:rounded-full flex items-center justify-center transition-all duration-300 transform mx-auto md:mx-0"
                style={{ 
                  boxShadow: isHovered ? '0 10px 25px rgba(251, 191, 36, 0.3)' : '0 5px 15px rgba(251, 191, 36, 0.1)'
                }}
              >
                <Icon className="size-6 md:size-8 text-black transition-transform duration-300" />
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white transition-all duration-300 text-center md:text-left"
                  style={{ 
                    transform: isHovered ? 'translateX(10px)' : 'translateX(0px)',
                    textShadow: isHovered ? '0 0 20px rgba(251, 191, 36, 0.3)' : 'none'
                  }}>
                {title}
              </h2>
            </div>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed transition-all duration-300 text-center md:text-left"
               style={{ 
                 transform: isHovered ? 'translateX(5px)' : 'translateX(0px)',
                 color: isHovered ? '#e5e7eb' : '#d1d5db'
               }}>
              {description}
            </p>
            
            <div className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed space-y-3 md:space-y-4 transition-all duration-300"
                 style={{ transform: isHovered ? 'translateX(5px)' : 'translateX(0px)' }}>
              <p className="transition-colors duration-300 text-center md:text-left" style={{ color: isHovered ? '#f3f4f6' : '#e5e7eb' }}>
                Our AI tutor{' '}
                <span className="font-bold text-yellow-400 transition-all duration-300"
                      style={{ textShadow: isHovered ? '0 0 10px rgba(251, 191, 36, 0.5)' : 'none' }}>
                  adapts in real-time
                </span>{' '}
                to the student's{' '}
                <span className="font-bold text-yellow-400 transition-all duration-300"
                      style={{ textShadow: isHovered ? '0 0 10px rgba(251, 191, 36, 0.5)' : 'none' }}>
                  unique learning style
                </span>.
              </p>
              <p className="transition-colors duration-300 text-center md:text-left" style={{ color: isHovered ? '#f3f4f6' : '#e5e7eb' }}>
                The tutor guides students towards the answer, like a good teacher would.
              </p>
            </div>
          </div>
        </div>
        
        {/* Image/Device Frame */}
        <div className="flex-1 p-6 md:p-12 lg:p-16 flex items-center justify-center bg-neutral-900 relative">
          <div 
            className="bg-black rounded-2xl md:rounded-3xl p-3 md:p-4 lg:p-6 shadow-2xl max-w-full w-full border border-gray-700 transition-all duration-500 transform"
            style={{ 
              transform: isHovered ? 'translateY(-5px) md:translateY(-10px) rotateY(0deg) md:rotateY(5deg)' : 'translateY(0px) rotateY(0deg)',
              boxShadow: isHovered 
                ? '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(251, 191, 36, 0.1)' 
                : '0 15px 30px rgba(0, 0, 0, 0.4)'
            }}
          >
            <div className="bg-neutral-900 rounded-xl md:rounded-2xl aspect-[4/3] p-4 md:p-6 relative overflow-hidden border border-gray-600 transition-all duration-300"
                 style={{ 
                   borderColor: isHovered ? '#fbbf24' : '#4b5563',
                   borderWidth: isHovered ? '2px' : '1px'
                 }}>
              <div className="transition-all duration-300 h-full" style={{ transform: isHovered ? 'scale(1.02)' : 'scale(1)' }}>
                {imageContent}
              </div>
              
              {/* Subtle glow effect on hover */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10 opacity-0 transition-opacity duration-500 rounded-xl md:rounded-2xl"
                style={{ opacity: isHovered ? 1 : 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AITutorScrollingCards = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const containerTop = rect.top;
        const containerHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Improved scroll progress calculation - starts showing first card immediately
        const viewportProgress = Math.max(0, Math.min(1, 
          (windowHeight * 0.5 - containerTop) / (windowHeight + containerHeight * 0.5)
        ));
        
        setScrollY(viewportProgress);
        
        // Better active card calculation
        const cardProgress = viewportProgress * 4;
        const newActiveCard = Math.floor(cardProgress);
        setActiveCard(Math.min(3, Math.max(0, newActiveCard)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Settings,
      title: "AI-Powered Learning",
      description: "Students can talk, draw, chat or upload their questions.",
      imageContent: (
        <div className="h-full flex flex-col text-xs md:text-sm">
          <div className="text-xs md:text-sm font-semibold text-yellow-400 mb-3 md:mb-4 border-b border-gray-600 pb-2 transition-colors duration-300">
            SSA Triangles - Exercise 1
          </div>
          <div className="flex-1 space-y-3 md:space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold text-white text-sm md:text-base">SSA Triangles Refresher</h3>
              <p className="text-xs text-gray-300">
                In the SSA (Side-Side-Angle) setup, we know two sides of a triangle and an angle
                that is not included between them.
              </p>
            </div>
            <div className="bg-yellow-400 bg-opacity-20 rounded-lg p-3 md:p-4 text-center border border-yellow-400 border-opacity-30 transition-all duration-300 hover:bg-opacity-30 hover:border-opacity-50">
              <div className="w-12 md:w-20 h-10 md:h-16 mx-auto mb-2 bg-yellow-400 bg-opacity-30 rounded flex items-center justify-center transition-all duration-300">
                <div className="text-xl md:text-2xl text-yellow-400 transition-transform duration-300">△</div>
              </div>
              <div className="text-xs text-gray-300">Triangle Diagram</div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Code,
      title: "Hands-on Labs",
      description: "12 practical modules per lab with real coding challenges and projects.",
      imageContent: (
        <div className="h-full flex flex-col text-xs md:text-sm">
          <div className="text-xs md:text-sm font-semibold text-yellow-400 mb-3 md:mb-4 border-b border-gray-600 pb-2">
            Coding Exercise - Python
          </div>
          <div className="flex-1 bg-black rounded-lg p-3 md:p-4 text-green-400 font-mono text-xs border border-gray-700 transition-all duration-300 hover:border-yellow-400">
            <div className="space-y-1">
              <div><span className="text-yellow-400">def</span> <span className="text-blue-400">fibonacci</span>(n):</div>
              <div className="ml-2 md:ml-4">if n &lt;= 1:</div>
              <div className="ml-4 md:ml-8">return n</div>
              <div className="ml-2 md:ml-4">return fibonacci(n-1) + fibonacci(n-2)</div>
              <div className="mt-2 text-gray-400"># Test your solution</div>
              <div>print(fibonacci(10))</div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Trophy,
      title: "Industry Recognition",
      description: "Build a portfolio that recruiters actually want to see.",
      imageContent: (
        <div className="h-full flex flex-col text-xs md:text-sm">
          <div className="text-xs md:text-sm font-semibold text-yellow-400 mb-3 md:mb-4 border-b border-gray-600 pb-2">
            Portfolio Dashboard
          </div>
          <div className="flex-1 space-y-2 md:space-y-3">
            <div className="bg-yellow-400 bg-opacity-20 border border-yellow-400 border-opacity-50 rounded-lg p-2 md:p-3 transition-all duration-300 hover:bg-opacity-30 hover:border-opacity-70 hover:transform hover:translateX-1">
              <div className="flex items-center justify-between">
                <span className="text-xs md:text-sm font-medium text-white">Web Development</span>
                <span className="text-yellow-400 text-xs">Completed</span>
              </div>
            </div>
            <div className="bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-lg p-2 md:p-3 transition-all duration-300 hover:bg-opacity-20 hover:border-opacity-50 hover:transform hover:translateX-1">
              <div className="flex items-center justify-between">
                <span className="text-xs md:text-sm font-medium text-white">React Project</span>
                <span className="text-yellow-400 text-xs">In Progress</span>
              </div>
            </div>
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-2 md:p-3 transition-all duration-300 hover:bg-gray-700 hover:border-gray-500 hover:transform hover:translateX-1">
              <div className="flex items-center justify-between">
                <span className="text-xs md:text-sm font-medium text-gray-300">API Integration</span>
                <span className="text-gray-400 text-xs">Upcoming</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Users,
      title: "Career Guidance",
      description: "From internships to placements, we've got your career journey covered.",
      imageContent: (
        <div className="h-full flex flex-col text-xs md:text-sm">
          <div className="text-xs md:text-sm font-semibold text-yellow-400 mb-3 md:mb-4 border-b border-gray-600 pb-2">
            Career Path Tracker
          </div>
          <div className="flex-1 space-y-3 md:space-y-4">
            <div className="flex items-center space-x-3 transition-all duration-300 hover:transform hover:translateX-2">
              <div className="w-6 md:w-8 h-6 md:h-8 bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-black rounded-full"></div>
              </div>
              <span className="text-xs md:text-sm text-white">Skills Assessment</span>
            </div>
            <div className="flex items-center space-x-3 transition-all duration-300 hover:transform hover:translateX-2">
              <div className="w-6 md:w-8 h-6 md:h-8 bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-black rounded-full"></div>
              </div>
              <span className="text-xs md:text-sm text-white">Portfolio Building</span>
            </div>
            <div className="flex items-center space-x-3 transition-all duration-300 hover:transform hover:translateX-2">
              <div className="w-6 md:w-8 h-6 md:h-8 bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-yellow-400">
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-white rounded-full transition-colors duration-300"></div>
              </div>
              <span className="text-xs md:text-sm text-gray-400 transition-colors duration-300 hover:text-white">Interview Prep</span>
            </div>
            </div>
          </div>
        
      )
    }
  ];

  // Improved card transforms calculation
  const getCardTransforms = (index) => {
    const position = index * 0.25;
    const distance = scrollY - position;

    let translateY = 0;
    let opacity = 0;
    let scale = 1;
    let rotateX = 0;

    // First card should be visible from the start
    if (index === 0 && scrollY < 0.1) {
      translateY = 0;
      opacity = 1;
      scale = 1;
      rotateX = 0;
    } else if (distance < -0.2) {
      translateY = 80;
      opacity = 0;
      scale = 0.9;
      rotateX = 10;
    } else if (distance >= -0.2 && distance <= 0.1) {
      const progress = (distance + 0.2) / 0.3;
      translateY = 80 * (1 - progress);
      opacity = progress;
      scale = 0.9 + (0.1 * progress);
      rotateX = 10 * (1 - progress);
    } else if (distance > 0.1 && distance <= 0.3) {
      const progress = (distance - 0.1) / 0.2;
      translateY = -60 * progress;
      opacity = 1 - progress;
      scale = 1 - (0.1 * progress);
      rotateX = -10 * progress;
    } else if (distance > 0.3) {
      translateY = -60;
      opacity = 0;
      scale = 0.9;
      rotateX = -10;
    } else {
      // In view
      translateY = 0;
      opacity = 1;
      scale = 1;
      rotateX = 0;
    }

    return {
      opacity,
      transform3D: `translateY(${translateY}%) scale(${scale}) rotateX(${rotateX}deg)`,
      isActive: Math.abs(distance) < 0.15
    };
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      <div className="h-16 md:h-16"></div>

      {/* Scrolling Cards Container */}
      <div className="relative pt-5 md:pt-40" ref={containerRef} style={{ height: "400vh" }}>
        <div className="sticky top-[4rem] md:top-[5rem] h-[calc(100vh-4rem)] md:h-[calc(100vh-20rem)] flex z-10 items-center justify-center overflow-hidden">
          {features.map((feature, index) => {
            const transforms = getCardTransforms(index);
            return (
              <div
                key={index}
                className="absolute top-0 left-0 w-full flex items-center justify-center transition-all duration-700 ease-out mt-10"
                style={{
                  transform: transforms.transform3D,
                  opacity: transforms.opacity,
                  zIndex: features.length - index,
                  pointerEvents: transforms.opacity > 0.1 ? 'auto' : 'none',
                }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  imageContent={feature.imageContent}
                  transform3D=""
                  opacity={transforms.opacity}
                  isActive={transforms.isActive}
                />
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Extra space at bottom */}
      {/* <div className="h-32 md:h-40"></div> */}
    </div>
  );
};

export default AITutorScrollingCards;