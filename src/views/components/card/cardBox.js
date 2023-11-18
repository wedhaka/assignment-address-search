import { Card, CardContent, Typography } from '@mui/material';

function CardBox({ address, width }) {
    return (
        <Card sx={{ width: '100%', margin: '3px', [width]: 210 }} >
            <CardContent>
                <Typography sx={{ fontSize: 16, fontWeight: 700 }} className='cardtitle' gutterBottom>
                    Seleted Address
                </Typography>
                <Typography sx={{ mb: 2 }} className='cardbody'>
                    {address}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardBox;