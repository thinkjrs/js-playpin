import Container from '../components/container'
import Layout from '../components/layout'
import { getFanBoosterThoughts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ thoughts, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const thoughts = await getFanBoosterThoughts()
  return {
    props: { thoughts, preview },
  }
}
