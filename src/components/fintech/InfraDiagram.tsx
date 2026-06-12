import { 
    Users, 
    Building2, 
    Layers, 
    ShieldCheck, 
    RefreshCw, 
    CreditCard, 
    Lock, 
    UserCheck, 
    Landmark, 
    Globe, 
    ArrowRight,
    Coins
} from 'lucide-react';

export default function InfraDiagram() {
    return (
        <section className="relative w-full py-16 bg-black overflow-hidden">
            {/* Inline styles for keyframe animations */}
            <style>{`
                @keyframes stroke-flow-left {
                    to {
                        stroke-dashoffset: 20;
                    }
                }
                @keyframes stroke-flow-right {
                    to {
                        stroke-dashoffset: -20;
                    }
                }
                .flow-left {
                    stroke-dasharray: 4, 4;
                    animation: stroke-flow-left 1.2s linear infinite;
                }
                .flow-right {
                    stroke-dasharray: 4, 4;
                    animation: stroke-flow-right 1.2s linear infinite;
                }
                .glow-box:hover {
                    box-shadow: 0 0 15px rgba(242, 149, 1, 0.25);
                    border-color: rgba(242, 149, 1, 0.6);
                }
            `}</style>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    
                    {/* Left Column: Copy & Actions */}
                    <div className="lg:col-span-5 text-left flex flex-col justify-center">
                        <span className="text-[#F29501] text-xs sm:text-[13px] font-bold tracking-[0.15em] uppercase mb-4">
                            DOAR FINANCIAL INFRASTRUCTURE
                        </span>
                        
                        <h1 className="text-3xl sm:text-4xl lg:text-[45px] leading-[1.15] font-extrabold text-white tracking-tight mb-6">
                            Infraestructura <br className="hidden sm:inline" />
                            <span className="text-[#F29501]">financiera moderna</span> <br />
                            para operaciones <br />
                            digitales <span className="text-[#F29501]">interoperables</span>
                        </h1>

                        <p className="text-gray-400 text-[15px] sm:text-[16px] leading-relaxed mb-8 max-w-lg">
                            DOAR coordina operaciones digitales a través de infraestructura financiera especializada, 
                            integrando pagos, cumplimiento, tesorería y liquidación bajo una arquitectura ledger-first 
                            diseñada para la economía digital.
                        </p>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                            <button className="bg-[#F29501] text-black font-semibold px-6 py-3 rounded-full text-[14px] flex items-center justify-center gap-2 hover:bg-[#d98500] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#F29501]/10">
                                Explorar Modelo Operativo
                                <ArrowRight className="h-4.5 w-4.5" />
                            </button>
                            
                            <button className="bg-transparent border border-white/20 text-white font-semibold px-6 py-3 rounded-full text-[14px] hover:bg-white/5 active:scale-[0.98] transition-all duration-200">
                                Ver Infraestructura
                            </button>
                        </div>

                        <a href="#ledger" className="inline-flex items-center gap-2 text-[#F29501] hover:text-[#d98500] font-semibold text-[14px] mt-6 transition-colors group self-start">
                            Arquitectura Ledger
                            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Right Column: Visual Diagram */}
                    <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[520px]">
                        
                        {/* SVG Connection Lines - Desktop Only */}
                        <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 500" fill="none">
                            {/* Lines from Top (Usuarios, Empresas) to Center (DOAR) */}
                            {/* Stem going down from Usuarios & Empresas connector */}
                            <path d="M 350 78 L 350 160" stroke="#F29501" strokeWidth="1.5" className="flow-right" />
                            {/* Horizontal branch to Usuarios */}
                            <path d="M 350 78 L 270 78" stroke="#F29501" strokeWidth="1.5" className="flow-left" />
                            {/* Horizontal branch to Empresas */}
                            <path d="M 350 78 L 430 78" stroke="#F29501" strokeWidth="1.5" className="flow-right" />
                            
                            {/* Lines from Left (Ledger, Tesorería) to Center (DOAR) */}
                            {/* Ledger -> DOAR */}
                            <path d="M 230 180 C 275 180, 275 220, 310 220" stroke="#F29501" strokeWidth="1.5" strokeDasharray="4,4" className="flow-right" />
                            {/* Tesorería -> DOAR */}
                            <path d="M 230 280 C 275 280, 275 240, 310 240" stroke="#F29501" strokeWidth="1.5" strokeDasharray="4,4" className="flow-right" />

                            {/* Lines from Right (Cumplimiento, Liquidación) to Center (DOAR) */}
                            {/* Cumplimiento -> DOAR */}
                            <path d="M 470 180 C 425 180, 425 220, 390 220" stroke="#F29501" strokeWidth="1.5" strokeDasharray="4,4" className="flow-left" />
                            {/* Liquidación -> DOAR */}
                            <path d="M 470 280 C 425 280, 425 240, 390 240" stroke="#F29501" strokeWidth="1.5" strokeDasharray="4,4" className="flow-left" />

                            {/* Line from Bottom (Integrated Infra) to Center (DOAR) */}
                            <path d="M 350 360 L 350 290" stroke="#F29501" strokeWidth="1.5" className="flow-left" />
                        </svg>

                        {/* Top Nodes */}
                        <div className="flex gap-12 sm:gap-24 mb-16 relative z-10">
                            {/* Usuarios */}
                            <div className="glow-box flex items-center gap-3 px-5 py-2.5 bg-[#030914] border border-white/10 rounded-xl transition-all duration-300 group cursor-pointer">
                                <div className="p-1.5 bg-[#F29501]/10 rounded-lg text-[#F29501] group-hover:scale-110 transition-transform">
                                    <Users className="h-4.5 w-4.5" />
                                </div>
                                <span className="text-white text-[13.5px] font-medium tracking-wide">Usuarios</span>
                            </div>

                            {/* Empresas */}
                            <div className="glow-box flex items-center gap-3 px-5 py-2.5 bg-[#030914] border border-white/10 rounded-xl transition-all duration-300 group cursor-pointer">
                                <div className="p-1.5 bg-[#F29501]/10 rounded-lg text-[#F29501] group-hover:scale-110 transition-transform">
                                    <Building2 className="h-4.5 w-4.5" />
                                </div>
                                <span className="text-white text-[13.5px] font-medium tracking-wide">Empresas</span>
                            </div>
                        </div>

                        {/* Center & Lateral Nodes Row */}
                        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-2xl px-4 gap-8 md:gap-4 mb-14 relative z-10">
                            
                            {/* Left Nodes Stack */}
                            <div className="flex md:flex-col gap-6 md:gap-24 w-full md:w-auto">
                                {/* Ledger */}
                                <div className="glow-box flex-1 md:flex-none flex items-center gap-3 px-4 py-2.5 bg-[#030914] border border-white/10 rounded-xl transition-all duration-300 group cursor-pointer justify-center md:justify-start">
                                    <div className="p-1.5 bg-[#F29501]/10 rounded-lg text-[#F29501] group-hover:scale-110 transition-transform">
                                        <Layers className="h-4.5 w-4.5" />
                                    </div>
                                    <span className="text-white text-[13.5px] font-medium tracking-wide">Ledger</span>
                                </div>

                                {/* Tesorería */}
                                <div className="glow-box flex-1 md:flex-none flex items-center gap-3 px-4 py-2.5 bg-[#030914] border border-white/10 rounded-xl transition-all duration-300 group cursor-pointer justify-center md:justify-start">
                                    <div className="p-1.5 bg-[#F29501]/10 rounded-lg text-[#F29501] group-hover:scale-110 transition-transform">
                                        <Coins className="h-4.5 w-4.5" />
                                    </div>
                                    <span className="text-white text-[13.5px] font-medium tracking-wide">Tesorería</span>
                                </div>
                            </div>

                            {/* Center Box: DOAR */}
                            <div className="relative p-6 sm:p-8 bg-[#030914] border-2 border-[#F29501]/80 rounded-2xl w-full max-w-[280px] text-center shadow-[0_0_25px_rgba(242,149,1,0.15)] group hover:border-[#F29501] hover:shadow-[0_0_30px_rgba(242,149,1,0.25)] transition-all duration-300 cursor-pointer">
                                <div className="flex items-center justify-center gap-2 mb-3">
                                    {/* Ala DOAR Logo Isotipo */}
                                    <svg className="h-6 w-8 text-[#F29501] fill-current" viewBox="0 0 32 24">
                                        <path d="M4 4 L28 4 L20 12 L28 12 L12 20 L16 12 L4 12 Z" />
                                    </svg>
                                    <span className="text-white font-extrabold text-2xl tracking-wider">DOAR</span>
                                </div>
                                <div className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">
                                    FINANCIAL ORCHESTRATION LAYER
                                </div>
                            </div>

                            {/* Right Nodes Stack */}
                            <div className="flex md:flex-col gap-6 md:gap-24 w-full md:w-auto">
                                {/* Cumplimiento */}
                                <div className="glow-box flex-1 md:flex-none flex items-center gap-3 px-4 py-2.5 bg-[#030914] border border-white/10 rounded-xl transition-all duration-300 group cursor-pointer justify-center md:justify-start">
                                    <span className="text-white text-[13.5px] font-medium tracking-wide">Cumplimiento</span>
                                    <div className="p-1.5 bg-[#F29501]/10 rounded-lg text-[#F29501] group-hover:scale-110 transition-transform">
                                        <ShieldCheck className="h-4.5 w-4.5" />
                                    </div>
                                </div>

                                {/* Liquidación */}
                                <div className="glow-box flex-1 md:flex-none flex items-center gap-3 px-4 py-2.5 bg-[#030914] border border-white/10 rounded-xl transition-all duration-300 group cursor-pointer justify-center md:justify-start">
                                    <span className="text-white text-[13.5px] font-medium tracking-wide">Liquidación</span>
                                    <div className="p-1.5 bg-[#F29501]/10 rounded-lg text-[#F29501] group-hover:scale-110 transition-transform">
                                        <RefreshCw className="h-4.5 w-4.5" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Bottom Box: Infraestructura Financiera Integrada */}
                        <div className="w-full max-w-xl bg-[#030914] border border-white/10 rounded-2xl p-6 relative z-10">
                            <div className="text-[11px] text-gray-400 font-bold tracking-[0.2em] uppercase text-center mb-6">
                                INFRAESTRUCTURA FINANCIERA INTEGRADA
                            </div>
                            <div className="grid grid-cols-5 gap-2 text-center">
                                {/* Pagos */}
                                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                    <div className="p-2 bg-[#F29501]/10 rounded-xl text-[#F29501] group-hover:scale-110 transition-all duration-200">
                                        <CreditCard className="h-5 w-5" />
                                    </div>
                                    <span className="text-white text-[11px] font-medium">Pagos</span>
                                </div>

                                {/* Custodia */}
                                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                    <div className="p-2 bg-[#F29501]/10 rounded-xl text-[#F29501] group-hover:scale-110 transition-all duration-200">
                                        <Lock className="h-5 w-5" />
                                    </div>
                                    <span className="text-white text-[11px] font-medium">Custodia</span>
                                </div>

                                {/* Cumplimiento */}
                                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                    <div className="p-2 bg-[#F29501]/10 rounded-xl text-[#F29501] group-hover:scale-110 transition-all duration-200">
                                        <UserCheck className="h-5 w-5" />
                                    </div>
                                    <span className="text-white text-[11px] font-medium">Cumplimiento</span>
                                </div>

                                {/* Banca */}
                                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                    <div className="p-2 bg-[#F29501]/10 rounded-xl text-[#F29501] group-hover:scale-110 transition-all duration-200">
                                        <Landmark className="h-5 w-5" />
                                    </div>
                                    <span className="text-white text-[11px] font-medium">Banca</span>
                                </div>

                                {/* Liquidación */}
                                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                    <div className="p-2 bg-[#F29501]/10 rounded-xl text-[#F29501] group-hover:scale-110 transition-all duration-200">
                                        <Globe className="h-5 w-5" />
                                    </div>
                                    <span className="text-white text-[11px] font-medium">Liquidación</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Particle Network Decorative Background Effect (Bottom) */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F29501]/5 to-transparent pointer-events-none" />
            </div>
        </section>
    );
}
