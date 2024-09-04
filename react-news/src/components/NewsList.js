import React from "react";
import NewsItem from "./NewsItem.js";
import "../App.css"

function newsList(props) {

    const pageArticles = props.articles.slice(startIdx, endIdx);

    const article = pageArticles.map((article) => (
        <NewsItem key = {article.title} title = {article.title} author= {article.author} description={article.description} url={article.url} />
    ));

    return (
        <div className="newsListWrapper">{articles} </div>
    )
}

export default newsList;