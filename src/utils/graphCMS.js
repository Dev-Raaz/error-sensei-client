import {GraphQLClient, gql} from 'graphql-request'

// Graph CMS Client
const gCMS = new GraphQLClient(
    'https://api-ap-south-1.hygraph.com/v2/cl7exuolp69ik01umbmdt9oxi/master'
)

// Get Posts
export const getPosts = async(setPosts, setIsLoading) => {

    const QUERRY = gql`
        {
            posts {
            id
            slug
            title
            description
            coverImage {
                url
            }
            technology {
                name
                slug
            }
            updatedAt
            readTime
            date
            }
        }
        `
    
    // Getting the posts and setting loading to false
    const {posts} = await gCMS.request(QUERRY)
    setPosts(posts)
    setIsLoading(false)
}

// Getting the list of all the technologies
export const getTechnologies = async(setTechnologies, setIsLoading) => {
    // GraphQL Querry
    const QUERRY = gql`
        {
            technologies{
                id,
                slug,
                name,
                description,
                icon {
                    url
                },
                posts {
                    slug
                }
            }
        }
        `
    // Getting and setting authors
    const {technologies} = await gCMS.request(QUERRY)
    setTechnologies(technologies)
    setIsLoading(false)
}

// Gets a single post
export const getPost = async(slug, setPost, setIsLoading) => {

    const QUERRY = gql`
    {
        post(where: {slug: "${slug}"}){
            id
            slug
            title
            description
            coverImage {
                url
            }
            technology {
                name
                slug
            }
            updatedAt
            readTime
            author{
                avatar{
                    url
                }
                name
            },
            content{
                html
            }
        }
    }
    `
    // Getting and setting authors
    const {post} = await gCMS.request(QUERRY)
    setIsLoading(false)
    // console.log(post)
    setPost(post)
}

export const getTechnology = async(slug, setTechnology, setIsLoading) => {
    const QUERRY = gql`
    {
        technology(where: {slug: "${slug}"}) {
          name
          icon {
            url
          }
          slug
          description
          posts {
            slug
            id
            coverImage {
              url
            }
            description
            title
            readTime
            updatedAt
            technology{
                slug
            }
          }
        }
    }
    `
    // Technology
    const {technology} =  await gCMS.request(QUERRY)
    setTechnology(technology)
    setIsLoading(false)
}

