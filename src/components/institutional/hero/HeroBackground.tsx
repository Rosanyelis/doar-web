import { useEffect, useRef } from 'react';
import { cn } from '../../../lib/utils';

function TopologyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId = 0;
        let W = 0;
        let H = 0;

        interface Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            r: number;
            alpha: number;
        }

        const particles: Particle[] = [];
        const COUNT = 55;

        const resize = () => {
            W = canvas.offsetWidth;
            H = canvas.offsetHeight;
            canvas.width = W;
            canvas.height = H;
        };

        const init = () => {
            particles.length = 0;
            for (let i = 0; i < COUNT; i++) {
                particles.push({
                    x: W * 0.25 + Math.random() * W * 0.75,
                    y: H * 0.45 + Math.random() * H * 0.55,
                    vx: (Math.random() - 0.5) * 0.22,
                    vy: (Math.random() - 0.5) * 0.16,
                    r: Math.random() * 1.2 + 0.35,
                    alpha: Math.random() * 0.35 + 0.08,
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, W, H);

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 110) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(245,196,0,${0.07 * (1 - dist / 110)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            for (const p of particles) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(245,196,0,${p.alpha})`;
                ctx.fill();
            }

            ctx.beginPath();
            ctx.strokeStyle = 'rgba(245,196,0,0.12)';
            ctx.lineWidth = 0.8;
            for (let x = 0; x < W; x += 8) {
                const y = H * 0.82 + Math.sin(x * 0.008) * 18 + Math.sin(x * 0.02) * 8;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = 'rgba(245,196,0,0.08)';
            ctx.lineWidth = 0.6;
            for (let x = 0; x < W; x += 8) {
                const y = H * 0.9 + Math.sin(x * 0.006 + 1.2) * 14;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        };

        const update = () => {
            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < W * 0.2 || p.x > W) p.vx *= -1;
                if (p.y < H * 0.4 || p.y > H) p.vy *= -1;
            }
        };

        const loop = () => {
            update();
            draw();
            animId = requestAnimationFrame(loop);
        };

        resize();
        init();
        loop();

        const ro = new ResizeObserver(() => {
            resize();
            init();
        });
        ro.observe(canvas);

        return () => {
            cancelAnimationFrame(animId);
            ro.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
            aria-hidden="true"
        />
    );
}

export default function HeroBackground() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div
                className={cn(
                    'absolute inset-0',
                    'bg-gradient-to-b from-midnight-navy via-midnight-navy to-deep-space'
                )}
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(245,196,0,0.05),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_60%,rgba(47,107,255,0.03),transparent_65%)]" />
            <div
                className={cn(
                    'absolute inset-0',
                    '[mask-image:radial-gradient(ellipse_90%_80%_at_65%_55%,black_15%,transparent_80%)]',
                    '[-webkit-mask-image:radial-gradient(ellipse_90%_80%_at_65%_55%,black_15%,transparent_80%)]'
                )}
            >
                <TopologyCanvas />
            </div>
        </div>
    );
}
