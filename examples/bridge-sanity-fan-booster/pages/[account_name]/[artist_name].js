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
  const account = data.account || {}
 
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
    params.account_name, params.artist_name, preview
  )
  console.log(data)
  return {
    props: {
      preview,
      params,
      data 
  //    account: data|| null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getArtistPage()
  const account = await getAccountName()
  //console.log(allPosts[0])
  //console.log(account[0])
  return {
    paths: [
      { params: {
        artist_name: allPosts[0].artist_name || null,//allPosts[0].artist_name,
        account_name: account[0].account_name || null //'test'//account[0].account_name
      }}, 
    ] || [],
    fallback: false
  }
}
