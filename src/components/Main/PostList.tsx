import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import PostItem from "./PostItem";

const POST_ITEM_DATA = {
    title: 'Post Item Title',
    date: '2020.01.29.',
    categories: ['Web', 'Frontend', 'Testing'],
    summary:
      '타입스크립트 재능있어 너 그렇게만 해!',
      thumbnail: 'https://image.xportsnews.com/contents/images/upload/article/2023/0202/1675304924156096.jpg',
    link: '<https://www.google.co.kr/>',
  }

const PostListWrapper = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr;
    grid-gap : 20px;
    width : 768px;
    margin : 0 auto;
    padding : 50px 0 100px;

    @media (max-width : 768px) {
        grid-template-columns : lfr;
        width : 100%;
        padding : 50px 20px;
    }
`

const PostList : FunctionComponent = function() {
    return (
        <PostListWrapper>
            <PostItem {...POST_ITEM_DATA} />
            <PostItem {...POST_ITEM_DATA} />
            <PostItem {...POST_ITEM_DATA} />
            <PostItem {...POST_ITEM_DATA} />
        </PostListWrapper>
    )
} 

export default PostList;