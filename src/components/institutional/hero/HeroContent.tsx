export default function HeroContent() {
    return (
        <div className="flex flex-col justify-center ">
            <span className="mb-6 text-base font-semibold uppercase tracking-[0.2em] text-doar-gold">
                DOAR FINANCIAL INFRASTRUCTURE
            </span>

            <h1 className="mb-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-text-primary sm:text-5xl lg:text-5xl xl:text-5xl">
                Infraestructura{' '} <br />
                <span className="text-doar-gold">financiera</span>{' '}
                moderna <br />
                para operaciones <br />
                digitales <span className="text-doar-gold">interoperables</span>
            </h1>

            <p className="max-w-[640px] text-[20px] font-light leading-relaxed text-white">
                DOAR coordina operaciones digitales a través de infraestructura financiera
                especializada, integrando pagos, cumplimiento, tesorería y liquidación bajo una
                arquitectura ledger-first diseñada para la economía digital.
            </p>
        </div>
    );
}
