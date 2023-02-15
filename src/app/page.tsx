'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { Button, Grid, Stack } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
  <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
      <h1 className='text-red-600'>Using Material UI with Next.js 13</h1>
      <Stack direction="row" columnGap={1}>
        <Button variant="text" >Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Grid>
  </>
  )
}
