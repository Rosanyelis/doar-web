import React from 'react';

/**
 * Global SVG Definitions (e.g., Gradients) used across multiple components.
 * Render this once at the top level of your page.
 */
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

// Icono de comillas — componente Testimonials
export const QuoteIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M18.75 11H17V10.75C17 10.0625 17.5312 9.5 18.25 9.5H18.5C19.3125 9.5 20 8.84375 20 8V6.5C20 5.6875 19.3125 5 18.5 5H18.25C15.0625 5 12.5 7.59375 12.5 10.75V16.75C12.5 18 13.5 19 14.75 19H18.75C19.9688 19 21 18 21 16.75V13.25C21 12.0312 19.9688 11 18.75 11ZM19.5 16.75C19.5 17.1875 19.1562 17.5 18.75 17.5H14.75C14.3125 17.5 14 17.1875 14 16.75V10.75C14 8.40625 15.9062 6.5 18.25 6.5H18.5V8H18.25C16.7188 8 15.5 9.25 15.5 10.75V12.5H18.75C19.1562 12.5 19.5 12.8438 19.5 13.25V16.75ZM9.25 11H7.5V10.75C7.5 10.0625 8.03125 9.5 8.75 9.5H9C9.8125 9.5 10.5 8.84375 10.5 8V6.5C10.5 5.6875 9.8125 5 9 5H8.75C5.5625 5 3 7.59375 3 10.75V16.75C3 18 4 19 5.25 19H9.25C10.4688 19 11.5 18 11.5 16.75V13.25C11.5 12.0312 10.4688 11 9.25 11ZM10 16.75C10 17.1875 9.65625 17.5 9.25 17.5H5.25C4.8125 17.5 4.5 17.1875 4.5 16.75V10.75C4.5 8.40625 6.40625 6.5 8.75 6.5H9V8H8.75C7.21875 8 6 9.25 6 10.75V12.5H9.25C9.65625 12.5 10 12.8438 10 13.25V16.75Z"
            fill="currentColor"
        />
    </svg>
);

// Icono de descarga — componente BottomCTA / Onboarding
export const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
    </svg>
);

// Icono decorativo — componente BottomCTA / Security
export const DecorativeWave = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 600 361" fill="currentColor" {...props}>
        <path d="M0,0 L600,0 L600,361 L500,200 Z" />
        <circle cx="100" cy="180" r="80" />
        <circle cx="300" cy="100" r="150" />
    </svg>
);
