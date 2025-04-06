import { useApi } from '../viewmodels/useApi.ts';
import { RankedPredictionsInterface } from '../../ui/sections/predict/models/predictInterface.ts';
import { API_ENDPOINTS } from './endpoints.ts';
import { mapInitialInfoResponse, mapPredictResponse } from '../viewmodels/mapper.ts';
import {
    InitialInfoResponseInterface,
    InitialMappedData,
    PredictResponseInterface,
} from '../models/apiInterface.ts';

export const usePrediction = () => {
    return useApi<PredictResponseInterface, RankedPredictionsInterface[]>(
        API_ENDPOINTS.PREDICT,
        'get',
        mapPredictResponse
    );
};

export const useInitialize = () => {
    return useApi<InitialInfoResponseInterface, InitialMappedData>(
        API_ENDPOINTS.INFO,
        'get',
        mapInitialInfoResponse
    );
};
