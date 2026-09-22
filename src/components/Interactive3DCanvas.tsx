import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  symbol: string;
}

export const Interactive3DCanvas: React.FC<{ themeColor?: string }> = ({ themeColor = 'orange' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Symbols representing Indian digital services & citizen tech
    const symbols = ['₹', '🪪', '🛂', '🚗', '📜', '⚖️', '✈️', '💼', '🛕', '🏛️'];
    const particleCount = Math.min(Math.floor(width / 22), 55);
    const particles: Particle[] = [];

    const getPrimaryColor = () => {
      if (themeColor === 'red-white') return 'rgba(239, 68, 68, ';
      if (themeColor === 'emerald-gold') return 'rgba(16, 185, 129, ';
      if (themeColor === 'royal-blue') return 'rgba(56, 189, 248, ';
      return 'rgba(249, 115, 22, '; // orange
    };

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * width;
      const y = (Math.random() - 0.5) * height;
      const z = Math.random() * 800 + 100;
      particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 1.2,
        color: getPrimaryColor(),
        symbol: symbols[i % symbols.length]
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left - width / 2) * 0.6;
      targetMouseY = (e.clientY - rect.top - height / 2) * 0.6;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      angle += 0.002;

      const fov = 400;
      const cx = width / 2;
      const cy = height / 2;

      const projected: { px: number; py: number; scale: number; alpha: number; p: Particle }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Boundary wrap
        if (Math.abs(p.x) > width / 1.5) p.vx *= -1;
        if (Math.abs(p.y) > height / 1.5) p.vy *= -1;

        // 3D rotation with mouse perspective
        const cosA = Math.cos(angle + mouseX * 0.001);
        const sinA = Math.sin(angle + mouseX * 0.001);

        const rotX = p.x * cosA - p.z * sinA;
        const rotZ = p.x * sinA + p.z * cosA + 300;
        const rotY = p.y + mouseY * 0.15;

        if (rotZ > 20) {
          const scale = fov / rotZ;
          const px = cx + rotX * scale;
          const py = cy + rotY * scale;
          const alpha = Math.max(0.1, Math.min(1, (1000 - rotZ) / 800));

          projected.push({ px, py, scale, alpha, p });
        }
      }

      // Draw constellation network lines between close points
      const baseColor = getPrimaryColor();
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].px - projected[j].px;
          const dy = projected[i].py - projected[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            const lineAlpha = (1 - dist / 90) * 0.25 * Math.min(projected[i].alpha, projected[j].alpha);
            ctx.beginPath();
            ctx.strokeStyle = `${baseColor}${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(projected[i].px, projected[i].py);
            ctx.lineTo(projected[j].px, projected[j].py);
            ctx.stroke();
          }
        }
      }

      // Draw nodes and badges
      for (let i = 0; i < projected.length; i++) {
        const item = projected[i];
        const radius = Math.max(1.5, item.p.size * item.scale);

        ctx.beginPath();
        ctx.arc(item.px, item.py, radius, 0, Math.PI * 2);
        ctx.fillStyle = `${baseColor}${item.alpha * 0.85})`;
        ctx.shadowColor = `${baseColor}0.8)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Render digital service icon periodically for depth
        if (i % 5 === 0 && item.scale > 0.8) {
          ctx.font = `${Math.floor(13 * item.scale)}px sans-serif`;
          ctx.fillStyle = `rgba(255, 255, 255, ${item.alpha * 0.75})`;
          ctx.textAlign = 'center';
          ctx.fillText(item.p.symbol, item.px + 10 * item.scale, item.py - 10 * item.scale);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [themeColor]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-screen"
      style={{ willChange: 'transform' }}
    />
  );
};
