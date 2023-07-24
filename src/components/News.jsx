import React, { useEffect, useState } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
const apiKey = import.meta.env.VITE_MY_API_KEY;
const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [totalResults, setTotalResults] = useState(0)



    const getArticles = async () => {
        document.title = `${capitalize(props.category)} - FactShala`
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;
        const fetchData = await fetch(url);
        const data = await fetchData.json();
        // console.log(data)
        setArticles(data.articles);
        setTotalResults(data.totalResults)
        setLoading(false);
        console.log(articles.length)
    };
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const nextPage = () => {
        // console.log("nextpage")
        setPage(page + 1)
        getArticles();
    }
    const prevPage = () => {
        // console.log("previous page")
        setPage(page - 1)
        getArticles();
    }
    useEffect(() => {
        getArticles();
    }, []);

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        const fetchData = await fetch(url);
        const data = await fetchData.json();
        // console.log(data)
        setArticles(articles.concat(data.articles));
        setTotalResults(data.totalResults)
        setLoading(false);


    }

    return (
        <React.Fragment>
            <p className='flex justify-center items-center text-2xl font-bold my-4'>Top Headlines about {capitalize(props.category)}</p>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="mx-3 my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {<Spinner /> && articles.map((element, index) => (
                        <NewsItems
                            key={index}
                            title={element.title}
                            description={element.description}
                            image={element.urlToImage}
                            url={element.url}
                            author={element.author}
                            publishedAt={element.publishedAt}
                        />
                    ))}
                </div>
            </InfiniteScroll>

            <div className='flex justify-between mx-5 my-5'>
                <button onClick={prevPage} disabled={page === 1} className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                    Previous
                </button>
                <button onClick={nextPage} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Next
                </button>
            </div>
        </React.Fragment >
    );
};

export default News;
