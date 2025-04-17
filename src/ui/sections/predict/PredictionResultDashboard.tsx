import styles from './styles/PredictionResultDashboard.module.css';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    Typography,
} from '@mui/material';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import { RankedPredictionsInterface } from './models/predictInterface.ts';
import { useState } from 'react';
import { useLang } from '../../../core/context/LanguageContext.tsx';

// const predictionsDummy: RankedPredictionsInterface[] = [
//     { rank: 1, stockTicker: 'HUH', closingPrice: 175.43, predictedPrice: 189.21 },
//     { rank: 2, stockTicker: 'HOLA', closingPrice: 234.56, predictedPrice: 256.78 },
//     { rank: 3, stockTicker: 'ELLO', closingPrice: 145.67, predictedPrice: 167.89 },
//     { rank: 4, stockTicker: 'COMO', closingPrice: 298.45, predictedPrice: 324.56 },
//     { rank: 5, stockTicker: 'TACK', closingPrice: 445.67, predictedPrice: 409.9 },
// ];

const predictionsDummy: RankedPredictionsInterface[] = [
    { rank: 1, stockTicker: '', closingPrice: null, predictedPrice: null },
    { rank: 2, stockTicker: '', closingPrice: null, predictedPrice: null },
    { rank: 3, stockTicker: '', closingPrice: null, predictedPrice: null },
    { rank: 4, stockTicker: '', closingPrice: null, predictedPrice: null },
    { rank: 5, stockTicker: '', closingPrice: null, predictedPrice: null },
];

interface PredictionResultDashboardProps {
    predictions: RankedPredictionsInterface[] | null;
}

type SortKey = keyof RankedPredictionsInterface;
type SortOrder = 'asc' | 'desc';

const PredictionResultDashboard = ({ predictions }: PredictionResultDashboardProps) => {
    const { t } = useLang();
    const staticText = t.predictSection.predictionDashboard;
    if (predictions === null) {
        predictions = predictionsDummy;
    }
    const tableHeaders = ['rank', 'stockTicker', 'closingPrice', 'predictedPrice'];
    const [sortKey, setSortKey] = useState<SortKey>('rank');
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

    const handleSort = (key: SortKey) => {
        if (key === sortKey) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setSortOrder('asc');
        }
    };
    const sorted = [...(predictions ?? predictionsDummy)].sort((a, b) => {
        const aValue = a[sortKey];
        const bValue = b[sortKey];

        if (typeof aValue === 'number' && typeof bValue === 'number') {
            return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
        }

        if (typeof aValue === 'string' && typeof bValue === 'string') {
            return sortOrder === 'asc'
                ? aValue.localeCompare(bValue)
                : bValue.localeCompare(aValue);
        }

        return 0;
    });

    return (
        <div className={styles.predictionResultContainer}>
            <Typography
                sx={{
                    textAlign: 'left',
                    fontSize: 'var(--header-3)',
                    fontWeight: '600',
                    paddingInlineStart: '0.6em',
                }}
            >
                {staticText.title}
            </Typography>
            {predictions && predictions.length > 0 && (
                <TableContainer className={styles.predictionResultTable}>
                    <Table>
                        <TableHead>
                            {tableHeaders.map((key) => (
                                <TableCell
                                    key={key}
                                    sx={{
                                        color: 'var(--text)',
                                        fontWeight: '600',
                                        paddingBottom: '0.8em',
                                        borderBottomColor: 'var(--border-color)',
                                    }}
                                >
                                    <TableSortLabel
                                        active={sortKey === key}
                                        direction={sortKey === key ? sortOrder : 'asc'}
                                        onClick={() => handleSort(key as SortKey)}
                                        sx={{
                                            'color': 'var(--text)',
                                            '&:hover': {
                                                'color': 'var(--text)',
                                                '& .MuiTableSortLabel-icon': {
                                                    color: 'var(--text)',
                                                },
                                            },
                                            '&.Mui-active': {
                                                'color': 'var(--text)',
                                                '& .MuiTableSortLabel-icon': {
                                                    color: 'var(--text)',
                                                },
                                            },
                                            '& .MuiTableSortLabel-icon': {
                                                color: 'var(--text)',
                                            },
                                        }}
                                    >
                                        {key === 'stockTicker' && staticText.stock}
                                        {key === 'closingPrice' && staticText.closingPrice}
                                        {key === 'predictedPrice' && staticText.predictedPrice}
                                        {key === 'rank' && staticText.rank}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                        </TableHead>
                        <TableBody>
                            {sorted.map((prediction) => {
                                const percentage: number | null =
                                    prediction.closingPrice !== 0 &&
                                    prediction.closingPrice !== null &&
                                    prediction.predictedPrice !== null
                                        ? ((prediction.predictedPrice - prediction.closingPrice) /
                                              prediction.closingPrice) *
                                          100
                                        : null;
                                const percentageString: string | null =
                                    percentage !== null
                                        ? percentage > 0
                                            ? `(+${percentage.toFixed(2)}%)`
                                            : `(${percentage.toFixed(2)}%)`
                                        : null;
                                const isIncreasing: boolean | null =
                                    prediction.closingPrice !== null &&
                                    prediction.predictedPrice !== null
                                        ? prediction.predictedPrice > prediction.closingPrice
                                        : null;
                                const rankIcon =
                                    prediction.rank === 1 ? (
                                        <EmojiEventsRoundedIcon />
                                    ) : (
                                        `#${prediction.rank}`
                                    );

                                return (
                                    <TableRow key={prediction.rank}>
                                        <TableCell
                                            sx={{
                                                border: 'none',
                                                paddingBottom: '0.5em',
                                                color: 'var(--text)',
                                            }}
                                        >
                                            {rankIcon}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                border: 'none',
                                                paddingBottom: '0.5em',
                                                color: 'var(--text)',
                                            }}
                                        >
                                            {prediction.stockTicker}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                border: 'none',
                                                paddingBottom: '0.5em',
                                                color: 'var(--text)',
                                            }}
                                        >
                                            {prediction.closingPrice}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                border: 'none',
                                                color: isIncreasing ? 'var(--green)' : 'var(--red)',
                                                paddingBottom: '0.5em',
                                            }}
                                        >
                                            {prediction.predictedPrice} {percentageString}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
};

export default PredictionResultDashboard;
