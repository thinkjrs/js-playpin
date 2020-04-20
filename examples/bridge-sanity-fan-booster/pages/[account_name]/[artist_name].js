import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getArtistPage, getAccountName, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { PROD_NAME, BIZ_NAME } from '../../lib/constants'

export default function ArtistCampaign({ account, artist, post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && `${account}/${artist}`) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | {PROD_NAME} by {BIZ_NAME}
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  const account = await getAccountName()
  const artist = await getArtistPage()
  return {
    props: {
      preview,
      post: data.post || null,
      morePosts: data.morePosts || null,
      artist: artist.artist_name,
      account: account.account_name
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getArtistPage()
  const account = await getAccountName()
  console.log(allPosts[0].artist_name)
  console.log(account[0])
  return {
    paths: [
      { params: {
        account_name: 'test',//account[0].account_name
        artist_name: 'remi-wolf'//allPosts[0].artist_name
      }}, 
    ],
    fallback: true
  }
}
