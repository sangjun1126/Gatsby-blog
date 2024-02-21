export type PostFrontmatterType = {
    title : string
    date : string
    categories : string[]
    summary : string
    thumnail : {
        publicURL : string
    }
}

export type PostListItemType = {
    node : {
        id : string
        frontmatter : PostFrontmatterType
    }
}