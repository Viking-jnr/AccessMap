import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

export default function Reports({ reports, onFlag, onResolve }) {
  return reports.map(report => (
    <Card key={report.id} sx={{ mb: 2 }}>
      <CardMedia component="img" height="140" image={report.mediaUrl} />
      <CardContent>
        <Typography variant="body1">{report.description}</Typography>
        <Button onClick={() => onFlag(report.id)}>Flag</Button>
        <Button onClick={() => onResolve(report.id)}>Resolve</Button>
      </CardContent>
    </Card>
  ));
}
