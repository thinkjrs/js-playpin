import client, { previewClient } from './sanity'
import sanityImage from '@sanity/image-url'

const getUniquePosts = posts => {
  const slugs = new Set()
  return posts.filter(post => {
    if (slugs.has(post.slug)) {
      return false
    } else {
      slugs.add(post.slug)
      return true
    }
  })
}
const getUniqueAccounts = account => {
  const account_name = new Set()
  return account.filter(account => {
    if (account_name.has(account.account_name)) {
      return false
    } else {
      account_name.add(account.account_name)
      return true
    }
  })
}
const postFields = `
  name,
  title,
  date,
  excerpt,
  'slug': slug.current,
  'coverImage': coverImage.asset->url,
  'author': author->{name, 'picture': picture.asset->url},
`
const accountFields = `
  name,
  title,
  date,
  excerpt,
  artist_name,
  account_name,
  'slug': slug.current,
  'coverImage': coverImage.asset->url,
  'author': author->{name, 'picture': picture.asset->url},
`
const getClient = preview => (preview ? previewClient : client)

export const imageBuilder = sanityImage(client)

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(date desc){
      ${postFields}
      content
    }`,
    { slug }
  )
  return data[0]
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`)
  return data
}

export async function getArtistPage() {
  const data = await client.fetch(`*[_type == "account"]{ 'artist_name': artist_name }`)
  return data
}

export async function getAccountName() {
  const data = await client.fetch(`*[_type == "account"]{ 'account_name': account_name}`)
  return data
}

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(date desc, _updatedAt desc){
      ${postFields}
    }`)
  return getUniquePosts(results)
}

export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview)
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        content,
      }`,
        { slug }
      )
      .then(res => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc){
        ${postFields}
        content,
      }[0...2]`,
      { slug }
    ),
  ])
  return { post, morePosts: getUniquePosts(morePosts) }
}

export async function getAccountAndMoreAccounts(account_name, preview) {
  const curClient = getClient(preview)
  const [account,] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "account" && account_name == $account_name] | order(_updatedAt desc) {
        ${accountFields}
        content,
      }`,
        { account_name }
      )
      .then(res => res?.[0])
  ])
  return { account }// moreAccounts: getUniqueAccounts(moreAccounts) }
}

export async function getAccount(account_name, artist_name, preview) {
  const curClient = getClient(preview)
  const [account,] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "account" && account_name == $account_name && artist_name == $artist_name] | order(_updatedAt desc) {
        ${accountFields}
        content,
      }`, 
        { account_name, artist_name }
      )
      .then(res => res?.[0])
  ])
  return { account } // moreAccounts: getUniqueAccounts(moreAccounts) }
}