import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Image, ListGroup, Pagination, Spinner } from 'react-bootstrap';
import { URL, maleImg, femaleImg } from '../../api'
import './peopleStyle.scss'


const People = () => {
    const [page, setPage] = useState(1)

    const fetchPeople = async () => {
        const result = await fetch(`${URL}?page=${page}`)
        return result.json()
    }

    const {
        data,
        isLoading,
        error,
        isSuccess
    } = useQuery(['people', page], fetchPeople)



    return (
        <div className="root">
            {error && (<p>Error fetching data</p>)}

            {isLoading && <Spinner animation="border" variant="primary" className="spinner" />}

            {isSuccess && (
                <div>
                    <ListGroup >
                        {
                            data.results.map((item) => {
                                let url = item.url.split('/')[5]
                                return (
                                    <Link
                                        to={`info/${url}`} key={item.name}
                                    >
                                        <ListGroup.Item action >
                                            <Image
                                                className="image"
                                                src={item.gender === 'male' ? maleImg : femaleImg}
                                            />
                                            {item.name}
                                        </ListGroup.Item>
                                    </Link>
                                )
                            })
                        }
                    </ListGroup>
                    <Pagination className="pagination">
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                                <Pagination.Item key={item} onClick={() => setPage(item)}>
                                    {item}
                                </Pagination.Item>
                            ))
                        }
                    </Pagination>
                </div>
            )
            }
        </div >
    );
}

export default People;