import React, { useEffect, useRef } from 'react';

const CubeParticles = () => {
  const canvasRef = useRef(null);
  const numCubes = 120;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const cubes = Array.from({ length: numCubes }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 4 + Math.random() * 4,
      speedX: -0.5 + Math.random(),
      speedY: -0.5 + Math.random(),
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      cubes.forEach(cube => {
        ctx.fillStyle = '#12f3e0'; // yellow glow color
        ctx.shadowColor = '#FFD700';
        ctx.shadowBlur = 12;

        ctx.fillRect(cube.x, cube.y, cube.size, cube.size);

        // reset shadows
        ctx.shadowBlur = 0;
        ctx.shadowColor = 'transparent';

        cube.x += cube.speedX;
        cube.y += cube.speedY;

        if (cube.x < 0 || cube.x > width) cube.speedX *= -1;
        if (cube.y < 0 || cube.y > height) cube.speedY *= -1;
      });
    };

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',       // fills viewport always
        top: 0,
        left: 0,
        width: '100vw',
        height: '100%',
        zIndex: 0,               // very back
        backgroundColor: '#000',
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
};

export default CubeParticles;
