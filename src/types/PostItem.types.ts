import {IGatsbyImageData} from 'gatsby-plugin-image'

export type PostFrontmatterType = {
    title : string
    date : string
    categories : string[]
    summary : string
    thumnail : {
        gatsbyImageData : IGatsbyImageData
    }
}

export type PostListItemType = {
    node : {
        id : string
        fields : {
            slug : string
        }
        frontmatter : PostFrontmatterType
    }
}