import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Jumbotron, Spinner } from 'react-bootstrap';
import { URL, maleImg, femaleImg } from '../../api';
import axios from 'axios'
import './infoStyles.scss'

const Info = () => {
    const params = useParams()
    const [info, setInfo] = useState('')

    useEffect(() => {
        axios(`${URL}/${params.id}`)
            .then((res => setInfo(res.data)))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="info_root">
            <Jumbotron style={{ backgroundColor: 'white' }} >
                {
                    info
                        ? <div className="info_box">
                            <img
                                src={info.gender === 'male' ? maleImg : femaleImg}
                                alt=""
                            />
                            <div className="info">
                                <h1>{info.name}</h1>
                                <p>Tug'ilgan yili:
                                     {<span>{info.birth_year}</span>}
                                </p>
                                <p>Bo'yi:
                                    {<span>{info.height}</span>}
                                </p>
                                <p>Vazni:
                                     {<span>{info.mass}</span>}
                                </p>
                                <p> Tanasining rangi:
                                     {<span style={{ color: info.skin_color }} >{info.skin_color}</span>}
                                </p>
                                <p> Ko'zining rangi:
                                    {<span style={{ color: info.eye_color }}>{info.eye_color}</span>}
                                </p>
                                <p>Sochining rangi:
                                    {<span style={{ color: info.hair_color }}>{info.hair_color}</span>}
                                </p>
                            </div>
                        </div>
                        : <Spinner animation="border" variant="primary" className="spinner" />
                }
            </Jumbotron>
        </div>
    );
}

export default Info;
