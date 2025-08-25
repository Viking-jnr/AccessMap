import { Box, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';

export default function AnalyticsPanel({ data }) {
  return (
    <Box>
      <Typography variant="h6">Report Trends</Typography>
      <Line data={data} />
    </Box>
  );
}
