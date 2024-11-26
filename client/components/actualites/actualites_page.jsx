import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
 const ActualitesPage = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage =3; // You can adjust this number

    useEffect(() => {
        axios.get('https://ehp-hasnaoui.com/api/act/tous/')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    // Function to get the first 100 characters of the HTML content
    const truncateHtml = (html, maxLength) => {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.innerText.slice(0, maxLength);
    };

    // Pagination logic
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;
    const currentPageData = data.slice(offset, offset + itemsPerPage);

    // Handle page change
    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    return (
        <>
            <section className="blog section" id="blog">
                <div className="container">
                    <div className="row">
                        {currentPageData.map((item, index) => (
                            <div className="col-lg-4 col-md-6 col-12" key={index}>
                                <div className="single-news wow fadeIn" data-wow-delay="0.25s">
                                    <div className="news-head">
                                        <img src={`https://ehp-hasnaoui.com/images_act/${item.image}`} alt="#" />
                                    </div>
                                    <div className="news-body">
                                        <div className="news-content">
                                            <div className="date">{item.date}</div>
                                            <h2><a>{item.titre}</a></h2>
                                            <p
                                                className="text"
                                                style={{ color: '#9499A2' }}
                                                dangerouslySetInnerHTML={{
                                                    __html: truncateHtml(item.description, 170) + '...'
                                                }}
                                            />
                                            <a href={`/actdetail?id=${item.id}`} className="buttonn">
                                                <p>Lire la suite</p>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
<br/>
                    {/* Styled Pagination Component */}
                    <div className="flex d-flex flex-row justify-center my-8" >
                        <ReactPaginate style={{color:'black'}}
                            previousLabel={
                                <span className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50">
                                    
                                    Précédente
                                </span>
                            }
                            nextLabel={
                                <span className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50">
                                    Suivant
                                   
                                </span>
                            }
                            breakLabel={'...'}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                             pageClassName={'px-3 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 hover:bg-gray-50'}
                             activeClassName="active"
                                                         previousClassName={''}
                            nextClassName={''}
                            containerClassName="pagination"
                            disabledClassName={'opacity-50 cursor-not-allowed'}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ActualitesPage;