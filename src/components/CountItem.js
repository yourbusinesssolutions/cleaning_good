import React, { useEffect, useRef, useState } from 'react';

const CountItem = ({ value, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          animateCount();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (countRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  const animateCount = () => {
    const duration = 2000; // ms
    const interval = 20; // ms
    const steps = duration / interval;
    const step = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += step;
      setCount(Math.min(Math.round(current), value));
      
      if (current >= value) {
        clearInterval(timer);
      }
    }, interval);
  };
  
  return (
    <div className="flex flex-col items-center" ref={countRef}>
      <div className="text-blue-600 font-bold text-4xl mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600 text-center">{label}</div>
    </div>
  );
};

export default CountItem;