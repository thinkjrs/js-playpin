import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import { getAccountName, getAllPostsForHome } from '../../lib/api'
import Head from 'next/head'
import { BIZ_NAME, PROD_NAME} from '../../lib/constants'
export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{PROD_NAME} by {BIZ_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  const account = await getAccountName()
  return {
    props: { account, allPosts, preview },
  }
}

export async function getStaticPaths() {
  const account = await getAccountName()
  console.log(account[0])
  return {
    paths: [
      { params: {
        account_name: 'test',//account[0].account_name
      }}, 
    ],
    fallback: true
  }
}