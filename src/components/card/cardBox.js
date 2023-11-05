import { Card, CardContent, Typography } from '@mui/material';

function CardBox({ address, width }) {
    return (
        <Card sx={{ [width]: 210, margin: '3px', width: '100%' }} >
            <CardContent>
                <Typography sx={{ fontSize: 14, fontWeight: 700 }} color="text.primary" gutterBottom>
                    Seleted Address
                </Typography>
                <Typography sx={{ mb: 2 }} color="text.secondary">
                    {address}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardBox;