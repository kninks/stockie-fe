import { InitialMappedData } from '../core/models/apiInterface.ts';
import { fallbackIndustryInfo } from './industryData.ts';
import { industryOptions, periodOptions } from './predictData.ts';

export const fallbackInitialMappedData: InitialMappedData = {
    periodOptions: periodOptions,
    industryOptions: industryOptions,
    industryInfo: fallbackIndustryInfo,
};
