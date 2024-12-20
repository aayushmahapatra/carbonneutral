import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import Accordion from '../components/Accordion'

import post from '../js/post'
import get from '../js/get'
import displayValue from '../js/displayValue'
import intensityFactor from '../js/intensityFactor'
import recommendations from '../public/recommendations'
import ReactMarkdown from 'react-markdown'
import VARIABLES from '../data/variables.json'

import { useState, useEffect } from 'react'
import { Button, Text, Container, Card, Row, Spacer, Collapse, Navbar, Dropdown, Avatar, Input } from '@nextui-org/react';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Virtual Forest - Carbon Neutral Website</title>
        <meta name="description" content="Browse websites with good ratings and calculation results listed on the Carbon Neutral Website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Container sm>
        <Spacer/>
        <Spacer/>
        <h1 style={{fontSize: 32}}>Virtual Forest</h1>
        <p style={{fontSize: 19}}>Browse websites calculation results of few websites, feel free to visit these websites and compare the emission amount and data they serve.</p>


        <div className="forest" style={{marginTop: 20}}>

          <a href="https://wikipedia.org/" target="_blank" rel="noreferrer">
            <img src="https://carbonneutralwebsite.org/api/banner/wikipedia.org/8.04mg/light.svg" width="300px"  alt="Carbon impact of this web page" />
          </a>

          <a href="https://apple.com/" target="_blank" rel="noreferrer">
            <img src="https://carbonneutralwebsite.org/api/banner/apple.com/1.24g/light.svg" width="300px"  alt="Carbon impact of this web page" />
          </a>

          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <img src="https://carbonneutralwebsite.org/api/banner/google.com/85.29mg/light.svg" width="300px"  alt="Carbon impact of this web page" />
          </a>

          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src="https://carbonneutralwebsite.org/api/banner/facebook.com/35.55mg/light.svg" width="300px"  alt="Carbon impact of this web page" />
          </a>

          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img src="https://carbonneutralwebsite.org/api/banner/github.com/232.79mg/light.svg" width="300px"  alt="Carbon impact of this web page" />
          </a>

          <a href="https://www.500px.com/" target="_blank" rel="noreferrer">
            <img src="https://carbonneutralwebsite.org/api/banner/www.500px.com/589.11mg/light.svg" width="300px"  alt="Carbon impact of this web page" />
          </a>

          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="https://carbonneutralwebsite.org/api/banner/instagram.com/141.53mg/light.svg" width="300px"  alt="Carbon impact of this web page" />
          </a>

          <a href="https://stackoverflow.com/" target="_blank" rel="noreferrer">
            <img src="https://carbonneutralwebsite.org/api/banner/stackoverflow.com/50.89mg/light.svg" width="300px"  alt="Carbon impact of this web page" />
          </a>

          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src="https://carbonneutralwebsite.org/api/banner/twitter.com/209.96mg/light.svg" width="300px"  alt="Carbon impact of this web page" />
          </a>

          <a href="https://medium.com/" target="_blank" rel="noreferrer">
            <img src="https://carbonneutralwebsite.org/api/banner/medium.com/99.91mg/light.svg" width="300px"  alt="Carbon impact of this web page" />
          </a>

          <a href="https://youtube.com/" target="_blank" rel="noreferrer">
            <img src="https://carbonneutralwebsite.org/api/banner/youtube.com/93.17mg/light.svg" width="300px"  alt="Carbon impact of this web page" />
          </a>

          <a href="https://microsoft.com/" target="_blank" rel="noreferrer">
            <img src="https://carbonneutralwebsite.org/api/banner/microsoft.com/115.56mg/light.svg" width="300px"  alt="Carbon impact of this web page" />
          </a>

          <a href="https://airbnb.com/" target="_blank" rel="noreferrer">
            <img src="https://carbonneutralwebsite.org/api/banner/airbnb.com/212.74mg/light.svg" width="300px"  alt="Carbon impact of this web page" />
          </a>

          <a href="https://netflix.com/" target="_blank" rel="noreferrer">
            <img src="https://carbonneutralwebsite.org/api/banner/netflix.com/91.70mg/light.svg" width="300px"  alt="Carbon impact of this web page" />
          </a>

          <a href="https://spotify.com/" target="_blank" rel="noreferrer">
            <img src="https://carbonneutralwebsite.org/api/banner/spotify.com/331.45mg/light.svg" width="300px"  alt="Carbon impact of this web page" />
          </a>

          <a href="https://etherscan.com/" target="_blank" rel="noreferrer">
            <img src="https://carbonneutralwebsite.org/api/banner/etherscan.com/232.49mg/light.svg" width="300px"  alt="Carbon impact of this web page" />
          </a>

          <a href="https://openai.com/" target="_blank" rel="noreferrer">
            <img src="https://carbonneutralwebsite.org/api/banner/openai.com/346.96mg/light.svg" width="300px"  alt="Carbon impact of this web page" />
          </a>

          <a href="https://youtube.com/" target="_blank" rel="noreferrer">
            <img src="https://carbonneutralwebsite.org/api/banner/youtube.com/436.57mg/light.svg" width="300px"  alt="Carbon impact of this web page" />
          </a>

          <a href="https://carbonneutralwebsite.vercel.app/" target="_blank" rel="noreferrer">
            <img src="https://carbonneutralwebsite.org/api/banner/carbonneutralwebsite.vercel.app/30.5mg/light.svg" width="300px"  alt="Carbon impact of this web page" />
          </a>

          <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer">
            <img src="https://carbonneutralwebsite.org/api/banner/aws.amazon.com/88.86mg/light.svg" width="300px"  alt="Carbon impact of this web page" />
          </a>

          <a href="https://canva.com/" target="_blank" rel="noreferrer">
            <img src="https://carbonneutralwebsite.vercel.app/api/banner/canva.com/32.24mg/light.svg" width="300px"  alt="Carbon impact of this web page" />
          </a>
        </div>

        <p style={{fontSize: 19, paddingTop: 20, textAlign: "center"}}>Would you like us to add your website here? <b><a href="mailto:mahapatraaayush@gmail.com">Contact Us.</a></b></p>
      </Container>
      <Footer/>
    </div>
  )
}
