import React, { useEffect, useState } from 'react';
import NewsItems from './NewsItems';

const News = () => {
    const [articles, setArticles] = useState([]);

    const getArticles = async () => {
        const url = 'https://newsapi.org/v2/everything?q=entertainment&apiKey=e3ee875e67164a55b93eb2375a07f707';
        const fetchData = await fetch(url);
        const data = await fetchData.json();
        // console.log(data)
        setArticles(data.articles);
    };

    useEffect(() => {
        getArticles();
    }, []); 

    return (
        <>
        <p className='flex justify-center items-center text-2xl font-bold my-4'>Top Headlines about Entertainment</p>
            <div className="mx-3 my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {articles.map((element, index) => (
                    <NewsItems
                        key={index}
                        title={element.title}
                        description={element.description}
                        image={element.urlToImage}
                        url={element.url}
                    />
                ))}
            </div>
        </>
    );
};

export default News;
