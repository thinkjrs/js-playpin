import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllAccountsWithSlugs, getArtistPage, getAccountName, getAccount } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { PROD_NAME, BIZ_NAME } from '../../lib/constants'

export default function ArtistCampaign({ preview, data }) {

  const router = useRouter()
  if (!router.isFallback && !data?.account) {
    return <ErrorPage statusCode={404} />
  }
  const account = data?.account || {}
 
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading...</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {account.account_name} for {account.artist_name} | {PROD_NAME} by {BIZ_NAME}
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={account.title}
                coverImage={account.coverImage}
                date={account.date}
                author={account.author}
              />
              <PostBody content={account.content} />
            </article>
            <SectionSeparator />
          </>
        )}
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
      data 
    },
  }
}

export async function getStaticPaths() {
  const accounts = await getAllAccountsWithSlugs()
  return { 
    paths:
      accounts?.map(account => ({
        params: {
          slug: account.slug,
          account_slug: account.account_slug
        },
      })) || [],
    fallback: true,
  }
}
