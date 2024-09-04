import React from "react";
import NewsItem from "./NewsItem.js";
import "../App.css"

function newsList(props) {

    const startIdx = (props.pageNo - 1) * props.pageSize;
    const endIdx = props.pageNo * props.pageSize;

    if(startIdx >= props.articles.length) {
        return (
            <p> No news here... 😢</p>
        );
    }

    const pageArticles = props.articles.slice(startIdx, endIdx);

    const articles = pageArticles.map((article) => (
        <NewsItem key = {article.title} title = {article.title} author= {article.author} description={article.description} url={article.url} />
    ));

    return (
        <div className="newsListWrapper">{articles} </div>
    )
}

export default newsList;