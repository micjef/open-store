import React from 'react'
import Head from 'next/head'
import { AppBar, Toolbar, Typography, Container, Link } from '@material-ui/core'
import useStyles from '../utils/styles'
import NextLink from 'next/link'

const Layout = ({children}) => {
  const styles = useStyles()

  return (
    <div>
      <Head>
        <title>Open Store</title>
      </Head>
      <AppBar position="static" className={styles.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={styles.brand}>Open Store</Typography>
            </Link>
          </NextLink>
          <div className={styles.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={styles.main}>{children}</Container>
      <footer className={styles.footer}>
        <Typography>All rights reserved. Open Store.</Typography>
      </footer>
    </div>
  )
}

export default Layout
