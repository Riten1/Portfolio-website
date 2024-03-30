import React, { useEffect, useState } from "react";
import '../components/conicGradient.css'

const AboutComp = () => {
  const [creativityCount, setCreativityCount] = useState(0);
  const [intuitionCount, setIntuitionCount] = useState(0)
  const [interactionCount, setInteractionCount] = useState(0)

  const [style, setStyle] = useState({bg: `conic-gradient(#7d2ae8 3.6deg, #ededed 0deg)`})
  

  useEffect(() => {
    const intervalId1 = setInterval(() => {
      setCreativityCount((prevCount1) => {
        if (prevCount1 === 90) {
          clearInterval(intervalId1);
          return prevCount1;
        }
        
        const conicGradientStyle = {
          backgroundImage: `conic-gradient(#7d2ae8 ${prevCount1 * 3.6}deg, #ededed 0deg)`
        };
        setStyle(conicGradientStyle)
        return prevCount1 + 1
        
        ;
      });
    }, 30);

    const intervalId2 = setInterval(() => {
      setIntuitionCount((prevCount2) => {
        if (prevCount2 === 75) {
          clearInterval(intervalId2);
          return prevCount2;
        }
        const conicGradientStyle = {
          backgroundImage: `conic-gradient(#7d2ae8 ${prevCount2 * 3.6}deg, #ededed 0deg)`
        };
        setStyle(conicGradientStyle)
       
        return prevCount2 + 1
        
        ;
      });
    }, 30);

    const intervalId3 = setInterval(() => {
      setInteractionCount((prevCount3) => {
        if (prevCount3 === 95) {
          clearInterval(intervalId3);
          return prevCount3;
        }
        
        const conicGradientStyle = {
          backgroundImage: `conic-gradient(#7d2ae8 ${prevCount3 * 3.6}deg, #ededed 0deg)`
        };
        setStyle(conicGradientStyle)
        return prevCount3 + 1
        
        ;
      });
    }, 30);

    return () => clearInterval(intervalId1, intervalId2, intervalId3);
  }, []);
  

  return (
    <div className="items-start justify-end pl-20 pt-20 pr-10 w-3/4">
      <div className="text-3xl font-medium text-gray-500 inline-block">
        Frontend Developer
      </div>
      <div className="text-7xl font-extrabold text-indigo-950 mt-3 mb-20">
        Riten Gurung
      </div>

      <div className="overflow-y-scroll h-72 bg-">
      <div className="text-3xl text-indigo-950 font-bold ">Description</div>
      <div className="mt-8 ">
      <p className='text-sm font-medium text-gray-500 leading-7 text-left'>Hi there! 👋 I'm Riten Gurung, a passionate frontend developer based in Nepal. With a love for turning creative ideas into tangible, interactive experiences, I thrive on the challenges and rewards of web development. I believe in the power of combining creativity with precision. Crafting pixel-perfect, visually stunning user interfaces is not just a job for me - it's my passion. My goal is to create user interfaces that go beyond aesthetics – they should feel intuitive and enhance the overall user experience. I pay attention to user feedback and iterate to ensure the best possible interaction. I'm always open to new opportunities, collaborations, and connecting with like-minded individuals. Feel free to reach out on LinkedIn, explore my GitHub repositories, or drop me an email. Let's create something remarkable together!</p>
      
      </div>
      <div className="flex w-96 p-12 rounded-xl gap-row-7 flex-col items-center">
        <div style={style} className={`relative h-56 w-56 rounded-full flex items-center justify-center before:absolute before:rounded-full before:bg-indigo-400 before:w-50 before:h-50`}>
          <span className="relative text-5xl h-48 font-bold text-indigo-950 bg-f5f0f0 pl-12 pr-12 pt-14 pb-14 rounded-full">{creativityCount}%</span>
        </div>
        <span className="text-base font-bold text-indigo-950">Creativity</span>

        <div style={style} className={`relative h-56 w-56 rounded-full flex items-center justify-center before:absolute before:rounded-full before:bg-indigo-400 before:w-50 before:h-50`}>
          <span className="relative text-5xl h-48 font-bold text-indigo-950 bg-f5f0f0 pl-12 pr-12 pt-14 pb-14 rounded-full">{intuitionCount}%</span>
        </div>
        <span className="text-base font-bold text-indigo-950">Intuition</span>

        <div style={style} className={`relative h-56 w-56 rounded-full flex items-center justify-center before:absolute before:rounded-full before:bg-indigo-400 before:w-50 before:h-50`}>
          <span className="relative text-5xl h-48 font-bold text-indigo-950 bg-f5f0f0 pl-12 pr-12 pt-14 pb-14 rounded-full">{interactionCount}%</span>
        </div>
        <span className="text-base font-bold text-indigo-950">Interaction</span>
      </div>
      </div>

      
      
      </div>
      
    
  );
};

export default AboutComp;
