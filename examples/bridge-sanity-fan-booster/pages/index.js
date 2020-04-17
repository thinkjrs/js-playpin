import Head from 'next/head'
import { getFanBoosterThoughts } from '../lib/api'
import { BIZ_NAME, PROD_NAME } from '../lib/constants'
import Layout from '../components/layout'
import Navbar from '../components/navbar';
import { Spend } from '../components/spend';
import { Status } from '../components/status';
import { Objectives } from '../components/objectives';
import { Done, Doing } from '../components/details';
import Thoughts from '../components/thoughts';
import React from "react";
import {
    Text,
    Box,
} from "@chakra-ui/core";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";


export default function Index({ thoughts, preview }) {
  
  return (
      <Layout preview={preview}>
        <Head>
          <title>{PROD_NAME} by {BIZ_NAME}</title>
        </Head>
        <Navbar />
        <Container>
          <Main>
            <Box pt={50} />
            <Hero />
            <Spend />
            <Status />
            <Objectives />
            <Doing />
            <Done />
            {thoughts && (
              <Thoughts contents={thoughts}/>
            )}
          <Footer>
            <Text textAlign="left">Made with ❤️ for artists.</Text>
          </Footer>
          </Main>
          <DarkModeSwitch />
        </Container>
      </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const thoughts = await getFanBoosterThoughts()
  return {
    props: { thoughts, preview },
  }
}
