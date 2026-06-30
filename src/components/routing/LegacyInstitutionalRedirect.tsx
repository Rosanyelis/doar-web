import { Navigate, useParams } from 'react-router-dom';
import { institutionalSectionPath } from '../../constants/routes';
import { isDoarPageSectionId } from '../../lib/doar-page-navigation';

export default function LegacyInstitutionalRedirect() {
    const { sectionId } = useParams<{ sectionId?: string }>();

    if (sectionId && isDoarPageSectionId(sectionId)) {
        return <Navigate to={institutionalSectionPath(sectionId)} replace />;
    }

    return <Navigate to="/institucional" replace />;
}
