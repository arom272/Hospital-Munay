import HistoriaClinicaTemplate  from './HistoriaClinicaTemplate';
import EpicrisisTemplate        from './EpicrisisTemplate';
import HistoriaQxTemplate       from './HistoriaQxTemplate';
import FichaSocialTemplate      from './FichaSocialTemplate';
import EvolucionTemplate        from './EvolucionTemplate';
import ConsentimientoTemplate   from './ConsentimientoTemplate';

const TEMPLATES = {
  historia_clinica:    HistoriaClinicaTemplate,
  epicrisis:           EpicrisisTemplate,
  historia_quirurgica: HistoriaQxTemplate,
  ficha_social:        FichaSocialTemplate,
  evolucion:           EvolucionTemplate,
  consentimiento:      ConsentimientoTemplate,
};

/**
 * Returns the React-PDF template component for a given documentType.
 * Falls back to HistoriaClinicaTemplate for unknown types.
 */
export function getTemplateForType(documentType) {
  return TEMPLATES[documentType] ?? HistoriaClinicaTemplate;
}

export {
  HistoriaClinicaTemplate,
  EpicrisisTemplate,
  HistoriaQxTemplate,
  FichaSocialTemplate,
  EvolucionTemplate,
  ConsentimientoTemplate,
};