import Head from 'next/head'
import styles from '../styles/home.module.css'
import Image from 'next/image'
import Layout from '../components/Layout'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import data from '../utils/data'
import NextLink from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>
          <h1>Products</h1>
          <Grid container spacing={3}>
            {data.products.map((product) => (
              <Grid item md={4} key={product.name}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Typography>${product.price}</Typography>
                    <Button size="small" color="primary">
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Layout>
      
    </div>
  )
}
