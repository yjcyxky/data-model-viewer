import { ReactComponent as IconAdministrative } from './icons/icon_administrative.svg';
import { ReactComponent as IconAnalysis } from './icons/icon_analysis.svg';
import { ReactComponent as IconBiospecimen } from './icons/icon_biospecimen.svg';
import { ReactComponent as IconClinical } from './icons/icon_clinical.svg';
import { ReactComponent as IconClinicalAssessment } from './icons/icon_clinical_assessment.svg';
import { ReactComponent as IconDataFile } from './icons/icon_data_file.svg';
import { ReactComponent as IconMetadata } from './icons/icon_metadata.svg';
import { ReactComponent as IconNotation } from './icons/icon_notation.svg';
import { ReactComponent as IconIndexFile } from './icons/icon_index_file.svg';
import { ReactComponent as IconDataObservations } from './icons/icon_data_observations.svg';
import { ReactComponent as IconDefault } from './icons/icon_default.svg';
import { ReactComponent as IconExperimentalMethods } from './icons/icon_experimental_methods.svg';
import { ReactComponent as IconSubjectCharacteristics } from './icons/icon_subject_characteristics.svg';
import { ReactComponent as IconImaging } from './icons/icon_imaging.svg';
import { ReactComponent as IconStudyAdministration } from './icons/icon_study_administration.svg';

const nodeCategoryList = {
  clinical: {
    icon: IconClinical,
    color: '#05B8EE',
  },
  biospecimen: {
    icon: IconBiospecimen,
    color: '#27AE60',
  },
  data_file: {
    icon: IconDataFile,
    color: '#7EC500',
  },
  metadata_file: {
    icon: IconMetadata,
    color: '#F4B940',
  },
  analysis: {
    icon: IconAnalysis,
    color: '#FF7ABC',
  },
  administrative: {
    icon: IconAdministrative,
    color: '#AD91FF',
  },
  notation: {
    icon: IconNotation,
    color: '#E74C3C',
  },
  index_file: {
    icon: IconIndexFile,
    color: '#26D9B1',
  },
  clinical_assessment: {
    icon: IconClinicalAssessment,
    color: '#3283C8',
  },
  medical_history: {
    icon: IconClinical,
    color: '#05B8EE',
  },
  data_observations: {
    icon: IconDataObservations,
    color: '#FF8585',
  },
  experimental_methods: {
    icon: IconExperimentalMethods,
    color: '#E74C3C',
  },
  subject_characteristics: {
    icon: IconSubjectCharacteristics,
    color: '#05B8EE',
  },
  imaging: {
    icon: IconImaging,
    color: '#7EC500',
  },
  study_administration: {
    icon: IconStudyAdministration,
    color: '#733EA3',
  },
};

const defaultCategory = {
  icon: IconDefault,
  color: '#9B9B9B',
};

export const getCategoryIconSVG = (category) => {
  if (nodeCategoryList[category]) {
    return nodeCategoryList[category].icon;
  }

  return defaultCategory.icon;
};

export const getCategoryColor = (category) => {
  if (nodeCategoryList[category]) {
    return nodeCategoryList[category].color;
  }

  return defaultCategory.color;
};
