"use client";

import { useEffect, useRef } from "react";

export default function CyberPitchBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId: number;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      // High DPI screens support
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    window.addEventListener("resize", resize);
    resize();

    // ─── LORE ELEMENTS & STATE ───────────────────────────────────────
    // The "cyber-squad": 11 players in a 4-3-3 formation
    const nodes: { x: number; y: number; baseR: number; currentR: number; phase: number; glow: number }[] = [];
    
    const initNodes = () => {
      nodes.length = 0;
      // Center coordinates of the "pitch"
      const cx = width / 2;
      const cy = height / 2;
      const spreadX = Math.min(width * 0.4, 400);
      const spreadY = Math.min(height * 0.35, 300);

      const positions = [
        // Goalkeeper
        { dx: 0, dy: 1 },
        // Defenders (4)
        { dx: -0.7, dy: 0.6 }, { dx: -0.25, dy: 0.7 }, { dx: 0.25, dy: 0.7 }, { dx: 0.7, dy: 0.6 },
        // Midfielders (3)
        { dx: -0.5, dy: 0.1 }, { dx: 0, dy: 0.2 }, { dx: 0.5, dy: 0.1 },
        // Attackers (3)
        { dx: -0.6, dy: -0.5 }, { dx: 0, dy: -0.6 }, { dx: 0.6, dy: -0.5 }
      ];

      positions.forEach(pos => {
        nodes.push({
          x: cx + pos.dx * spreadX,
          y: cy + pos.dy * spreadY,
          baseR: Math.random() * 2 + 3,
          currentR: 0,
          phase: Math.random() * Math.PI * 2,
          glow: 0, // 0 to 1, increases when hit by a data packet
        });
      });
    };

    // Data packets (real-world steps flowing upward)
    const packets: { x: number; y: number; speed: number; targetIndex: number; opacity: number }[] = [];
    
    const spawnPacket = () => {
      const targetIndex = Math.floor(Math.random() * nodes.length);
      const target = nodes[targetIndex];
      packets.push({
        x: target.x + (Math.random() - 0.5) * 40,
        y: height + 50,
        speed: Math.random() * 2 + 2,
        targetIndex,
        opacity: 0
      });
    };

    // Connections between nodes (passes/chemistry)
    const connections: { from: number; to: number; progress: number; duration: number }[] = [];

    // ─── RENDER LOOP ───────────────────────────────────────────────
    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw the "Cyber Pitch" Background Grid
      ctx.lineWidth = 1;
      const cx = width / 2;
      const cy = height / 2;
      
      // Draw grid lines moving upwards to simulate perspective
      ctx.strokeStyle = "rgba(0, 240, 255, 0.03)";
      ctx.beginPath();
      const numVertical = Math.floor(width / 50);
      for (let i = 0; i <= numVertical; i++) {
        const x = i * 50;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      
      const numHorizontal = Math.floor(height / 50);
      const offset = (frame * 0.5) % 50;
      for (let i = -1; i <= numHorizontal + 1; i++) {
        const y = i * 50 + offset;
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Pitch abstract shapes (Center circle)
      ctx.beginPath();
      ctx.arc(cx, cy, Math.min(width, height) * 0.15, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(147, 51, 234, 0.15)";
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(width, cy);
      ctx.stroke();

      // 2. Draw Connections (Chemistry/Passes)
      if (Math.random() < 0.02) {
        // Spawn a new connection
        const from = Math.floor(Math.random() * nodes.length);
        let to = Math.floor(Math.random() * nodes.length);
        while (to === from) to = Math.floor(Math.random() * nodes.length);
        connections.push({ from, to, progress: 0, duration: Math.random() * 60 + 40 });
      }

      for (let i = connections.length - 1; i >= 0; i--) {
        const c = connections[i];
        c.progress++;
        const p = c.progress / c.duration;
        
        if (p >= 1) {
          connections.splice(i, 1);
          continue;
        }

        const n1 = nodes[c.from];
        const n2 = nodes[c.to];

        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n1.x + (n2.x - n1.x) * p, n1.y + (n2.y - n1.y) * p);
        
        const alpha = Math.sin(p * Math.PI) * 0.5;
        ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // 3. Draw Data Packets (Steps converting to stats)
      if (Math.random() < 0.1) spawnPacket();

      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        const target = nodes[p.targetIndex];
        
        // Move towards target
        const dx = target.x - p.x;
        const dy = target.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 5) {
          // Packet reached node! Hit effect.
          target.glow = 1.0;
          packets.splice(i, 1);
          continue;
        }

        p.x += (dx / dist) * p.speed;
        p.y += (dy / dist) * p.speed;
        
        // Fade in
        if (p.opacity < 1) p.opacity += 0.02;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${p.opacity * 0.8})`;
        ctx.fill();
        
        // Draw tail
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x, p.y + 15);
        ctx.strokeStyle = `rgba(0, 240, 255, ${p.opacity * 0.3})`;
        ctx.stroke();
      }

      // 4. Draw Nodes (Players)
      nodes.forEach((node, i) => {
        node.phase += 0.02;
        // Breathing effect
        node.currentR = node.baseR + Math.sin(node.phase) * 1.5;
        
        // Glow decay
        if (node.glow > 0) node.glow -= 0.02;
        if (node.glow < 0) node.glow = 0;

        // Draw outer glow if hit
        if (node.glow > 0) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.currentR + 10 * node.glow, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(147, 51, 234, ${node.glow * 0.4})`;
          ctx.fill();
        }

        // Draw core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.currentR, 0, Math.PI * 2);
        // Mix Violet and Cyan based on glow
        const r = Math.floor(147 + (0 - 147) * node.glow);
        const g = Math.floor(51 + (240 - 51) * node.glow);
        const b = Math.floor(234 + (255 - 234) * node.glow);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.9)`;
        ctx.fill();
        
        // Inner white dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.currentR * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    // Initialize and start
    initNodes();
    // Handle orientation changes for mobile
    window.addEventListener("orientationchange", () => {
      setTimeout(() => {
        resize();
        initNodes();
      }, 100);
    });

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}
