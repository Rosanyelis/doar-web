import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

/* ───────────────────────────────────────────
   Particle Network Canvas
─────────────────────────────────────────── */
function ParticleCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId: number;
        let W = 0, H = 0;

        interface Particle {
            x: number; y: number;
            vx: number; vy: number;
            r: number; alpha: number;
        }

        const COUNT = 80;
        const particles: Particle[] = [];

        function resize() {
            W = canvas!.offsetWidth;
            H = canvas!.offsetHeight;
            canvas!.width = W;
            canvas!.height = H;
        }

        function init() {
            particles.length = 0;
            for (let i = 0; i < COUNT; i++) {
                particles.push({
                    x: Math.random() * W,
                    y: Math.random() * H,
                    vx: (Math.random() - 0.5) * 0.35,
                    vy: (Math.random() - 0.5) * 0.25,
                    r: Math.random() * 1.6 + 0.4,
                    alpha: Math.random() * 0.55 + 0.15,
                });
            }
        }

        function draw() {
            ctx!.clearRect(0, 0, W, H);

            // Lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 130) {
                        ctx!.beginPath();
                        ctx!.strokeStyle = `rgba(242,149,1,${0.12 * (1 - dist / 130)})`;
                        ctx!.lineWidth = 0.5;
                        ctx!.moveTo(particles[i].x, particles[i].y);
                        ctx!.lineTo(particles[j].x, particles[j].y);
                        ctx!.stroke();
                    }
                }
            }

            // Dots
            for (const p of particles) {
                ctx!.beginPath();
                ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx!.fillStyle = `rgba(242,149,1,${p.alpha})`;
                ctx!.fill();
            }
        }

        function update() {
            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > W) p.vx *= -1;
                if (p.y < 0 || p.y > H) p.vy *= -1;
            }
        }

        function loop() {
            update();
            draw();
            animId = requestAnimationFrame(loop);
        }

        resize();
        init();
        loop();

        const ro = new ResizeObserver(() => { resize(); init(); });
        ro.observe(canvas);

        return () => {
            cancelAnimationFrame(animId);
            ro.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.85 }}
        />
    );
}

/* ───────────────────────────────────────────
   Diagrama central SVG (lado derecho)
─────────────────────────────────────────── */
function InfraDiagramRight() {
    return (
        <div className="relative w-full flex items-center justify-center" style={{ minHeight: 480 }}>
            <svg
                viewBox="0 0 560 480"
                className="w-full max-w-[580px]"
                style={{ overflow: 'visible' }}
            >
                <defs>
                    <style>{`
                        @keyframes dash-flow {
                            to { stroke-dashoffset: -20; }
                        }
                        .anim-dash { 
                            stroke-dasharray: 5 4; 
                            animation: dash-flow 1.4s linear infinite; 
                        }
                        @keyframes pulse-dot {
                            0%,100% { r: 3.5; opacity: 1; }
                            50%      { r: 5;   opacity: 0.6; }
                        }
                        .pulse { animation: pulse-dot 2s ease-in-out infinite; }
                    `}</style>
                    <filter id="glow-gold">
                        <feGaussianBlur stdDeviation="3" result="b"/>
                        <feComposite in="SourceGraphic" in2="b" operator="over"/>
                    </filter>
                </defs>

                {/* ── Top nodes: Usuarios & Empresas ── */}
                {/* Usuarios box */}
                <rect x="55" y="24" width="116" height="42" rx="8"
                    fill="#131313" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                {/* Usuarios icon (people) */}
                <g transform="translate(72,38)" fill="none" stroke="#F29501" strokeWidth="1.4">
                    <circle cx="7" cy="5" r="3.2"/>
                    <path d="M0 17c0-4 3.1-7 7-7s7 3 7 7"/>
                    <circle cx="17" cy="6" r="2.5" opacity=".5"/>
                    <path d="M14 17c0-3 1.8-5.2 4-5.8" opacity=".5"/>
                </g>
                <text x="99" y="50" fill="white" fontSize="11" fontFamily="sans-serif">Usuarios</text>

                {/* Empresas box */}
                <rect x="389" y="24" width="116" height="42" rx="8"
                    fill="#131313" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                {/* Empresas icon (building) */}
                <g transform="translate(406,34)" fill="none" stroke="#F29501" strokeWidth="1.4">
                    <rect x="2" y="2" width="16" height="18" rx="1"/>
                    <rect x="6" y="9" width="3" height="3"/>
                    <rect x="11" y="9" width="3" height="3"/>
                    <rect x="8" y="15" width="4" height="5"/>
                    <line x1="0" y1="20" x2="20" y2="20"/>
                </g>
                <text x="432" y="50" fill="white" fontSize="11" fontFamily="sans-serif">Empresas</text>

                {/* Connecting lines top: Usuarios -> stem -> Empresas */}
                {/* Horizontal bar */}
                <line x1="113" y1="66" x2="280" y2="66" stroke="#F29501" strokeWidth="1.2" className="anim-dash"/>
                <line x1="280" y1="66" x2="447" y2="66" stroke="#F29501" strokeWidth="1.2" className="anim-dash"/>
                {/* Vertical stem down from center */}
                <line x1="280" y1="66" x2="280" y2="148" stroke="#F29501" strokeWidth="1.2" className="anim-dash"/>
                {/* Dots at junction */}
                <circle cx="280" cy="66" r="3.5" fill="#F29501" className="pulse"/>

                {/* ── Left nodes: Ledger & Tesorería ── */}
                {/* Ledger */}
                <rect x="14" y="158" width="108" height="40" rx="8"
                    fill="#131313" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                <g transform="translate(28,168)" fill="none" stroke="#F29501" strokeWidth="1.4">
                    <rect x="1" y="1" width="14" height="18" rx="1"/>
                    <line x1="4" y1="6" x2="12" y2="6"/>
                    <line x1="4" y1="10" x2="12" y2="10"/>
                    <line x1="4" y1="14" x2="9" y2="14"/>
                </g>
                <text x="54" y="183" fill="white" fontSize="11" fontFamily="sans-serif">Ledger</text>

                {/* Ledger -> center line */}
                <path d="M 122 178 L 186 178 L 186 228 L 218 228"
                    fill="none" stroke="#F29501" strokeWidth="1.2" className="anim-dash"/>
                <circle cx="186" cy="178" r="3" fill="#F29501" opacity=".7"/>

                {/* Tesorería */}
                <rect x="14" y="248" width="108" height="40" rx="8"
                    fill="#131313" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                <g transform="translate(28,258)" fill="none" stroke="#F29501" strokeWidth="1.4">
                    <circle cx="9" cy="10" r="8"/>
                    <path d="M6 10h6M9 7v6"/>
                </g>
                <text x="54" y="273" fill="white" fontSize="11" fontFamily="sans-serif">Tesorería</text>

                {/* Tesorería -> center line */}
                <path d="M 122 268 L 186 268 L 186 248 L 218 248"
                    fill="none" stroke="#F29501" strokeWidth="1.2" className="anim-dash"/>
                <circle cx="186" cy="268" r="3" fill="#F29501" opacity=".7"/>

                {/* ── Center Box: DOAR ── */}
                <rect x="218" y="148" width="124" height="130" rx="10"
                    fill="#0e0e0e" stroke="#F29501" strokeWidth="1.8"
                    style={{ filter: 'drop-shadow(0 0 12px rgba(242,149,1,0.25))' }}/>
                {/* DOAR Wing SVG icon */}
                <g transform="translate(248, 170) scale(1.1)">
                    <path d="M0 0 L20 0 L14 8 L20 8 L8 16 L11 8 L0 8 Z"
                        fill="#F29501"/>
                </g>
                <text x="280" y="200" fill="white" fontSize="16" fontWeight="800"
                    fontFamily="sans-serif" textAnchor="middle" letterSpacing="2">DOAR</text>
                <text x="280" y="218" fill="#666" fontSize="7.5" fontFamily="sans-serif"
                    textAnchor="middle" letterSpacing="1.5">FINANCIAL ORCHESTRATION LAYER</text>

                {/* ── Right nodes: Cumplimiento & Liquidación ── */}
                {/* Cumplimiento */}
                <rect x="438" y="158" width="122" height="40" rx="8"
                    fill="#131313" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                <g transform="translate(452,168)" fill="none" stroke="#F29501" strokeWidth="1.4">
                    <path d="M9 1L1 4v7c0 5 4 8 8 9 4-1 8-4 8-9V4L9 1z"/>
                    <polyline points="5.5,10 8,12.5 13,7.5"/>
                </g>
                <text x="478" y="183" fill="white" fontSize="11" fontFamily="sans-serif">Cumplimiento</text>

                {/* center -> Cumplimiento line */}
                <path d="M 342 218 L 410 218 L 410 178 L 438 178"
                    fill="none" stroke="#F29501" strokeWidth="1.2" className="anim-dash"/>
                <circle cx="410" cy="218" r="3" fill="#F29501" opacity=".7"/>

                {/* Liquidación */}
                <rect x="438" y="248" width="122" height="40" rx="8"
                    fill="#131313" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                <g transform="translate(452,258)" fill="none" stroke="#F29501" strokeWidth="1.4">
                    <path d="M2 12c0-5.5 5-9 8-10 3 1 8 4.5 8 10a8 8 0 01-16 0z"/>
                    <path d="M10 7v6l3 3"/>
                </g>
                <text x="478" y="273" fill="white" fontSize="11" fontFamily="sans-serif">Liquidación</text>

                {/* center -> Liquidación line */}
                <path d="M 342 248 L 410 248 L 410 268 L 438 268"
                    fill="none" stroke="#F29501" strokeWidth="1.2" className="anim-dash"/>
                <circle cx="410" cy="268" r="3" fill="#F29501" opacity=".7"/>

                {/* Vertical line from Center bottom to Bottom box */}
                <line x1="280" y1="278" x2="280" y2="318" stroke="#F29501" strokeWidth="1.2" className="anim-dash"/>
                <circle cx="280" cy="318" r="3.5" fill="#F29501" className="pulse"/>

                {/* ── Bottom box: Infraestructura Financiera Integrada ── */}
                <rect x="60" y="330" width="440" height="120" rx="10"
                    fill="#111" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                <text x="280" y="354" fill="#888" fontSize="8" fontFamily="sans-serif"
                    textAnchor="middle" letterSpacing="2">INFRAESTRUCTURA FINANCIERA INTEGRADA</text>

                {/* 5 columns: Pagos, Custodia, Cumplimiento, Banca, Liquidación */}
                {[
                    { x: 105, label: 'Pagos',        icon: 'M2 7h16v10H2zm4 10v2m8-2v2M5 7V5a1 1 0 011-1h8a1 1 0 011 1v2' },
                    { x: 193, label: 'Custodia',     icon: 'M9 1L1 4v7c0 5 4 8 8 9 4-1 8-4 8-9V4L9 1zM9 8v4m0-7v1' },
                    { x: 280, label: 'Cumplimiento', icon: 'M9 1L1 4v7c0 5 4 8 8 9 4-1 8-4 8-9V4L9 1zM5.5 10l2.5 2.5 4.5-5' },
                    { x: 367, label: 'Banca',        icon: 'M1 8h18M2 8V18h16V8M9 1l9 7H0l9-7zM7 12h2v4H7zm4 0h2v4h-2z' },
                    { x: 455, label: 'Liquidación',  icon: 'M10 1a9 9 0 100 18A9 9 0 0010 1zm0 4v6l4 2' },
                ].map(({ x, label, icon }) => (
                    <g key={label}>
                        {/* Icon circle bg */}
                        <circle cx={x} cy="388" r="18" fill="rgba(242,149,1,0.08)"/>
                        {/* Icon */}
                        <g transform={`translate(${x - 9}, 379)`} fill="none" stroke="#F29501" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                            <path d={icon}/>
                        </g>
                        {/* Label */}
                        <text x={x} y="424" fill="white" fontSize="9.5" fontFamily="sans-serif" textAnchor="middle">{label}</text>
                    </g>
                ))}
            </svg>
        </div>
    );
}

/* ───────────────────────────────────────────
   Hero Section (full page)
─────────────────────────────────────────── */
export default function DoarHero() {
    return (
        <section
            className="relative w-full overflow-hidden"
            style={{ backgroundColor: '#0a0a0a', minHeight: 'calc(100vh - 60px)' }}
        >
            {/* Particle Network Background */}
            <div className="absolute inset-0" style={{ zIndex: 0 }}>
                <ParticleCanvas />
            </div>

            {/* Subtle radial gradient center glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 70% 55% at 65% 45%, rgba(242,149,1,0.04) 0%, transparent 70%)',
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <div
                className="relative max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-0 flex flex-col lg:flex-row items-center gap-12 lg:gap-6"
                style={{ zIndex: 2, minHeight: 'calc(100vh - 60px)' }}
            >
                {/* ── Left: Text & CTAs ── */}
                <div className="w-full lg:w-[44%] flex flex-col justify-center pt-8 lg:pt-0">
                    <span
                        className="text-[11px] font-bold tracking-[0.18em] uppercase mb-5"
                        style={{ color: '#F29501' }}
                    >
                        DOAR FINANCIAL INFRASTRUCTURE
                    </span>

                    <h1 className="text-[36px] sm:text-[42px] lg:text-[50px] leading-[1.13] font-extrabold text-white tracking-tight mb-6">
                        Infraestructura{' '}
                        <span style={{ color: '#F29501' }}>financiera moderna</span>{' '}
                        para operaciones digitales{' '}
                        <span style={{ color: '#F29501' }}>interoperables</span>
                    </h1>

                    <p className="text-[15px] leading-relaxed mb-9" style={{ color: '#888', maxWidth: 400 }}>
                        DOAR coordina operaciones digitales a través de infraestructura financiera
                        especializada, integrando pagos, cumplimiento, tesorería y liquidación bajo
                        una arquitectura ledger-first diseñada para la economía digital.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <button
                            className="flex items-center gap-2 font-semibold text-[13.5px] text-black px-6 py-3 rounded-full transition-all duration-200 active:scale-[0.97]"
                            style={{ backgroundColor: '#F29501' }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#da8600')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#F29501')}
                        >
                            Explorar Modelo Operativo
                            <ArrowRight className="h-4 w-4" />
                        </button>

                        <button
                            className="font-semibold text-[13.5px] text-white px-6 py-3 rounded-full transition-all duration-200 active:scale-[0.97]"
                            style={{ border: '1px solid rgba(255,255,255,0.22)', background: 'transparent' }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                        >
                            Ver Infraestructura
                        </button>
                    </div>

                    <a
                        href="#ledger"
                        className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors duration-150 group w-fit"
                        style={{ color: '#F29501' }}
                    >
                        Arquitectura Ledger
                        <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* ── Right: Diagram ── */}
                <div className="w-full lg:w-[56%] flex items-center justify-center">
                    <InfraDiagramRight />
                </div>
            </div>
        </section>
    );
}
