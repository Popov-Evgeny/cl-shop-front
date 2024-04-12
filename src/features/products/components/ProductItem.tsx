import React from 'react';
import {Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, styled} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import imageNotAvailable from '../../../../assets/imageNotAvailable.png';
import {apiURL} from "../../../constants.ts";

interface Props {
  id: string;
  title: string;
  price: number;
  image: string | null;
}

const ImageCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%' //16:9
});

const ProductItem: React.FC<Props> = ({id, title, price, image}) => {
  let cardImage = imageNotAvailable;

  if (image) {
    cardImage = apiURL + '/' + image;
  }


  return (
    <Grid item xs md={4} lg={3}>
      <Card>
        <CardHeader title={title} />
        <ImageCardMedia image={cardImage} title={title} />
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