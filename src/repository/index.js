
import AnalysisTypeRepository from './analysisType.repository.js'
import{analysis_type} from '../dao/sql/analysisType.sql.js'

export const AnalysisTypeService=new AnalysisTypeRepository(analysis_type)

