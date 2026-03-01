import { useEffect, useCallback, useRef } from "react";

interface Sparkle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
}

const colors = [
  "hsl(316, 80%, 65%)",
  "hsl(270, 60%, 60%)",
  "hsl(340, 80%, 70%)",
  "hsl(280, 70%, 70%)",
  "hsl(300, 50%, 80%)",
];

const SparkCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparkles = useRef<Sparkle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const animFrame = useRef<number>(0);
  const lastSpawn = useRef(0);

  const spawn = useCallback((x: number, y: number) => {
    for (let i = 0; i < 2; i++) {
      sparkles.current.push({
        x,
        y,
        size: Math.random() * 4 + 2,
        opacity: 1,
        rotation: Math.random() * 360,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2 - 1,
        life: 0,
        maxLife: 40 + Math.random() * 30,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      const now = Date.now();
      if (now - lastSpawn.current > 30) {
        spawn(e.clientX, e.clientY);
        lastSpawn.current = now;
      }
    };
    window.addEventListener("mousemove", onMove);

    const drawStar = (cx: number, cy: number, size: number, rot: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate((rot * Math.PI) / 180);
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2;
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle) * size, Math.sin(angle) * size);
      }
      ctx.stroke();
      // Diamond shape
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.6);
      ctx.lineTo(size * 0.3, 0);
      ctx.lineTo(0, size * 0.6);
      ctx.lineTo(-size * 0.3, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparkles.current = sparkles.current.filter((s) => {
        s.life++;
        s.x += s.vx;
        s.y += s.vy;
        s.rotation += 3;
        s.opacity = 1 - s.life / s.maxLife;

        if (s.life >= s.maxLife) return false;

        ctx.globalAlpha = s.opacity;
        ctx.strokeStyle = s.color;
        ctx.fillStyle = s.color;
        ctx.lineWidth = 1;
        drawStar(s.x, s.y, s.size, s.rotation);

        return true;
      });

      ctx.globalAlpha = 1;
      animFrame.current = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animFrame.current);
    };
  }, [spawn]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default SparkCursor;
