import React, {FunctionComponent} from "react";
import { graphql } from "gatsby";

type InfoPageProps = {
    data : {
        site : {
            siteMetadata : {
                title : string
                description : string
                author : string
            }
        }
    }
}

const InfoPage : FunctionComponent<InfoPageProps> = function({
    data : {
        site : {
            siteMetadata : {title, description, author},
        },
    },
}) {
    return (
        <div>
            {title} {description} {author}
        </div>
    )
}

export default InfoPage;

export const metadataQuery = graphql`
 {
    site {
        siteMetadata {
            title
            description
            author
        }
    }
 }
`