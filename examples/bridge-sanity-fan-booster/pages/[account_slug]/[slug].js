import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getArtistPage, getAccountName, getAccount } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { PROD_NAME, BIZ_NAME } from '../../lib/constants'

export default function ArtistCampaign({ params, preview, data }) {

  const router = useRouter()
  //console.log(params)
  //if (!router.isFallback) {
  //  return <ErrorPage statusCode={404} />
  //}
  const account = data?.account || {}
 
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
          <>
            <article>
              <Head>
                <title>
                  {account.account_name} for {account.artist_name} | {PROD_NAME} by {BIZ_NAME}
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <SectionSeparator />
              <h1>{account.artist_name}</h1>
              <p>{account.title}</p>
            </article>
          </>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getAccount(
    params.account_slug, params.slug, preview
  )
  return {
    props: {
      preview,
      params,
      data 
    },
  }
}

export async function getStaticPaths() {
  const slug = await getArtistPage()
  const actslug = await getAccountName()
  return {
    paths: [
      { params: {
        slug: slug || null,
        account_slug: actslug || null 
      }}, 
    ] || [],
    fallback: false
  }
}
