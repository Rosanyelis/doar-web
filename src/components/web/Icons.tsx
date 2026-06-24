export const WebSvgDefs = () => (
    <svg
        width="0"
        height="0"
        className="absolute hidden"
        aria-hidden="true"
        style={{ position: 'absolute', width: 0, height: 0 }}
    >
        <linearGradient
            id="orange-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
        >
            <stop stopColor="#F29501" offset="0%" />
            <stop stopColor="#FCCA01" offset="100%" />
        </linearGradient>
    </svg>
);
