import { Helmet } from 'react-helmet-async';
import { DoarPageNavigationProvider } from '../../context/DoarPageNavigationProvider';
import InstitutionalHero from '../../components/institutional/hero/InstitutionalHero';
import InstitutionalNavbar from '../../components/institutional/navigation/InstitutionalNavbar';
import IntegratedInfrastructureSection from '../../components/institutional/sections/IntegratedInfrastructureSection';
import LedgerFirstArchitectureSection from '../../components/institutional/sections/LedgerFirstArchitectureSection';
import OperationalReconciliationSection from '../../components/institutional/sections/OperationalReconciliationSection';
import PartnerStrip from '../../components/institutional/sections/PartnerStrip';
import SegregatedOperationalInfrastructureSection from '../../components/institutional/sections/SegregatedOperationalInfrastructureSection';
import TreasuryLiquiditySection from '../../components/institutional/sections/TreasuryLiquiditySection';
import UnifiedFinancialOperationsSection from '../../components/institutional/sections/UnifiedFinancialOperationsSection';
import TransactionOperatingCycleSection from '../../components/institutional/sections/TransactionOperatingCycleSection';
import WhatIsDoarSection from '../../components/institutional/sections/WhatIsDoarSection';
import DoarIsNotComparisonSection from '../../components/institutional/sections/DoarIsNotComparisonSection';
import DoarResponsibilityModelSection from '../../components/institutional/sections/DoarResponsibilityModelSection';
import DoarPageFooter from '../../components/institutional/layout/DoarPageFooter';
import AuditTrailSection from '../../components/institutional/sections/AuditTrailSection';
import OperationalLiquiditySection from '../../components/institutional/sections/OperationalLiquiditySection';
import RegulatoryPositioningSection from '../../components/institutional/sections/RegulatoryPositioningSection';
import DoarFoundationDefinitionSection from '../../components/institutional/sections/DoarFoundationDefinitionSection';
import ComplianceFrameworkSection from '../../components/institutional/sections/ComplianceFrameworkSection';
import ContinuousMonitoringSection from '../../components/institutional/sections/ContinuousMonitoringSection';
import RiskManagementSection from '../../components/institutional/sections/RiskManagementSection';
import { cn } from '../../lib/utils';

export default function DoarPage() {
    return (
        <DoarPageNavigationProvider>
        <div
            className={cn(
                'min-h-screen bg-midnight-navy text-text-primary',
                'font-institutional',
                'selection:bg-doar-gold selection:text-deep-space'
            )}
        >
            <Helmet>
                <title>DOAR | Infraestructura Financiera Moderna — Plataforma de Orquestación Financiera</title>
                <meta name="description" content="DOAR coordina operaciones financieras digitales a través de infraestructura financiera especializada, integrando pagos, cumplimiento, tesorería y liquidación bajo una arquitectura ledger-first." />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
                <link rel="canonical" href="https://doar.tech/institucional" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="DOAR | Infraestructura Financiera Moderna" />
                <meta property="og:description" content="Plataforma de orquestación financiera que integra pagos, cumplimiento, tesorería y liquidación bajo una arquitectura ledger-first." />
                <meta property="og:url" content="https://doar.tech/institucional" />
                <meta property="og:image" content="https://doar.tech/assets/institucional/diagram_01.png" />
                <meta property="og:locale" content="es_LA" />
                <meta property="og:site_name" content="DOAR" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="DOAR | Infraestructura Financiera Moderna" />
                <meta name="twitter:description" content="Plataforma de orquestación financiera que integra pagos, cumplimiento, tesorería y liquidación." />
                <meta name="twitter:image" content="https://doar.tech/assets/institucional/diagram_01.png" />

                {/* Structured Data: Organization */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'DOAR LLC',
                        url: 'https://doar.tech',
                        logo: 'https://doar.tech/assets/institucional/logo.svg',
                        description: 'Plataforma de orquestación financiera que coordina pagos, cumplimiento, tesorería y liquidación.',
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: '2020 Ponce de Leon Blvd',
                            addressLocality: 'Coral Gables',
                            addressRegion: 'Florida',
                            addressCountry: 'US',
                        },
                        contactPoint: [
                            { '@type': 'ContactPoint', email: 'info@doar.tech', contactType: 'customer service' },
                            { '@type': 'ContactPoint', email: 'manager@doar.tech', contactType: 'sales' },
                        ],
                    })}
                </script>

                {/* Structured Data: WebSite */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebSite',
                        name: 'DOAR',
                        url: 'https://doar.tech',
                    })}
                </script>

                {/* Structured Data: BreadcrumbList */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://doar.tech' },
                            { '@type': 'ListItem', position: 2, name: 'Institucional', item: 'https://doar.tech/institucional' },
                        ],
                    })}
                </script>
            </Helmet>

            <InstitutionalNavbar />

            <main>
                {/* Hero Section - seccion hero */}
                <InstitutionalHero /> 
                {/* Partner Strip Section - seccion socio-comerciales */}
                <PartnerStrip />
                {/* What Is Doar Section - seccion que-es */}
                <WhatIsDoarSection />
                {/* Ledger First Architecture Section - seccion arquitectura-ledger-first */}
                <LedgerFirstArchitectureSection />
                {/* Integrated Infrastructure Section - seccion infraestructura-integrada */}
                <IntegratedInfrastructureSection />
                {/* Unified Financial Operations Section - seccion operaciones-financieras-unificadas */}
                <UnifiedFinancialOperationsSection />
                {/* Transaction Operating Cycle Section - seccion ciclo-operativo-transaccion */}
                <TransactionOperatingCycleSection />
                {/* Segregated Operational Infrastructure Section - seccion infraestructura-operacional-segregada */}
                <SegregatedOperationalInfrastructureSection />
                {/* Treasury Liquidity Section - seccion tesoreria-liquidez */}
                <TreasuryLiquiditySection />
                {/* Operational Reconciliation Section - seccion conciliacion-operativa */}
                <OperationalReconciliationSection />
                {/* Compliance Framework Section - seccion framework-de-cumplimiento */}
                <ComplianceFrameworkSection />
                {/* Risk Management Section - seccion gestion-y-monitoreo-de-riesgo */}
                <RiskManagementSection />
                {/* Continuous Monitoring Section - seccion monitoreo-continuo */}
                <ContinuousMonitoringSection />
                {/* Audit Trail Section - seccion registro-de-auditoria */}
                <AuditTrailSection />
                {/* Operational Liquidity Section - seccion liquidez-operativa */}
                <OperationalLiquiditySection />
                {/* Regulatory Positioning Section - seccion posicion-regulatorio */}
                <RegulatoryPositioningSection />
                {/* DOAR Foundation Definition Section - seccion fundacion-doar */}
                <DoarFoundationDefinitionSection />
                {/* Doar Is Not Comparison Section - seccion que-no-es */}
                <DoarIsNotComparisonSection />
                {/* Doar Responsibility Model Section - seccion responsabilidades */}
                <DoarResponsibilityModelSection />
            </main>
            <DoarPageFooter />
        </div>
        </DoarPageNavigationProvider>
    );
}
