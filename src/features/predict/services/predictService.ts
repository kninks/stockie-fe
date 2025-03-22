import { PredictResponseInterface } from '../models/predictApiInterface.ts';
import { useApi } from '../../../core/viewmodels/useApi.ts';
import { API_ENDPOINTS } from '../../../core/api/endpoints.ts';
import { PredictInterface } from '../models/predictInterface.ts';
import { mapPredictResponse } from '../mappers/predictMapper.ts';

export const usePrediction = () => {
    return useApi<PredictResponseInterface, PredictInterface>(
        API_ENDPOINTS.PREDICT,
        'post',
        mapPredictResponse
    );
};
