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
import {
    PredictionDashboardInterface,
    RankedPredictionsInterface,
} from './models/predictInterface.ts';
import { useState } from 'react';
import { useLang } from '../../../core/context/LanguageContext.tsx';

const predictionsDummy: RankedPredictionsInterface[] = [
    { rank: 1, stockTicker: '', closingPrice: null, predictedPrice: null },
    { rank: 2, stockTicker: '', closingPrice: null, predictedPrice: null },
    { rank: 3, stockTicker: '', closingPrice: null, predictedPrice: null },
    { rank: 4, stockTicker: '', closingPrice: null, predictedPrice: null },
    { rank: 5, stockTicker: '', closingPrice: null, predictedPrice: null },
];

interface PredictionResultDashboardProps {
    data: PredictionDashboardInterface | null;
    error?: string | null;
}

type SortKey = keyof RankedPredictionsInterface;
type SortOrder = 'asc' | 'desc';

const PredictionResultDashboard = ({ data, error }: PredictionResultDashboardProps) => {
    const { t } = useLang();
    const staticText = t.predictSection.predictionDashboard;

    const closingPriceDate = data && !error ? new Date(data.closingPriceDate) : null;
    const predictedPriceDate = data && !error ? new Date(data.predictedPriceDate) : null;
    const predictions = data && !error ? data.rankedPredictions : predictionsDummy;

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
                                        {key === 'closingPrice' && (
                                            <span>
                                                {staticText.closingPrice}{' '}
                                                {closingPriceDate && (
                                                    <Typography
                                                        sx={{
                                                            fontSize: 'var(--caption)',
                                                            fontWeight: '600',
                                                            color: 'var(--text-muted)',
                                                        }}
                                                    >
                                                        ({closingPriceDate.toLocaleDateString()})
                                                    </Typography>
                                                )}
                                            </span>
                                        )}
                                        {key === 'predictedPrice' && (
                                            <span>
                                                {staticText.predictedPrice}
                                                {predictedPriceDate && (
                                                    <Typography
                                                        sx={{
                                                            fontSize: 'var(--caption)',
                                                            fontWeight: '600',
                                                            color: 'var(--text-muted)',
                                                        }}
                                                    >
                                                        {' '}
                                                        ({predictedPriceDate.toLocaleDateString()})
                                                    </Typography>
                                                )}
                                            </span>
                                        )}
                                        {key === 'rank' && staticText.rank}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                        </TableHead>
                        <TableBody>
                            {sorted.map((p) => {
                                const percentage: number | null =
                                    p.closingPrice !== 0 &&
                                    p.closingPrice !== null &&
                                    p.predictedPrice !== null
                                        ? ((p.predictedPrice - p.closingPrice) / p.closingPrice) *
                                          100
                                        : null;
                                const percentageString: string | null =
                                    percentage !== null
                                        ? percentage > 0
                                            ? `(+${percentage.toFixed(4)}%)`
                                            : `(${percentage.toFixed(4)}%)`
                                        : null;
                                const isIncreasing: boolean | null =
                                    p.closingPrice !== null && p.predictedPrice !== null
                                        ? p.predictedPrice > p.closingPrice
                                        : null;
                                const rankIcon =
                                    p.rank === 1 ? <EmojiEventsRoundedIcon /> : `#${p.rank}`;

                                return (
                                    <TableRow key={p.rank}>
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
                                            {p.stockTicker}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                border: 'none',
                                                paddingBottom: '0.5em',
                                                color: 'var(--text)',
                                            }}
                                        >
                                            {p.closingPrice?.toFixed(4)}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                border: 'none',
                                                color: isIncreasing ? 'var(--green)' : 'var(--red)',
                                                paddingBottom: '0.5em',
                                            }}
                                        >
                                            {p.predictedPrice?.toFixed(4)} {percentageString}
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
