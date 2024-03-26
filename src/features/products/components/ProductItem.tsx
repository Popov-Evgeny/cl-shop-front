import React from 'react';
import { Card, CardActions, CardContent, CardHeader, Grid, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Props {
  id: string;
  title: string;
  price: number;
}
const ProductItem: React.FC<Props> = ({id, title, price}) => {
  return (
    <Grid item xs md={4} lg={3}>
      <Card>
        <CardHeader title={title} />
        <CardContent>
          <strong>{price} KGS</strong>
        </CardContent>
        <CardActions>
          <IconButton component={Link} to={`/products/${id}`}>
            <ArrowForwardIcon/>
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;