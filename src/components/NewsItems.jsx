import React from 'react'

const NewsItems = (props) => {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                    className="w-full"
                    src={!props.image ? "https://cdn.vox-cdn.com/thumbor/ODx_QBV2qCE_dfhHtwtaZ8W6J8I=/0x0:7144x4743/1200x628/filters:focal(3572x2372:3573x2373)/cdn.vox-cdn.com/uploads/chorus_asset/file/24763884/1235926940.jpg" : props.image}
                    alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.title}</div>
                    <p className="text-gray-700 text-base">
                        {props.description.slice(0,95)}.....
                    </p>
                </div>
                <div className='px-6'>

                    <p className='font-semibold text-base'>Author: {!props.author ? "Unknown" : props.author}</p>
                    <p className='font-semibold text-base'>Published At: {new Date(props.publishedAt).toGMTString()}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <a href={props.url} target='_blank'>
                            Read More
                        </a>
                    </button>
                    <br />
                    {/* {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #travel
                    </span> */}
                </div>
            </div>

        </>
    )
}

export default NewsItems
