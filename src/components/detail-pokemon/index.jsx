import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import CardImg from '../card-img';
import Alert from '../alert';

import './styles.css';

const DetailPokemon = ({ name, sprites }) => {

    const [namePokemon, setNamePokemon] = useState('');
    const [spritesPokemon, setSpritesPokemon] = useState({});

    useEffect(() => {
        setNamePokemon(name);
        setSpritesPokemon(sprites);
    }, [name, sprites]);

    return name ? (
        <section className="text-center section-card">

            <Row>
                <h5>Você encontrou o Pokémon:</h5>
                <h2 className="title_pokemon">
                    {namePokemon.toUpperCase()}
                </h2>
            </Row>
            
            <Row className="row-card-img">
                <Col>
                    <CardImg
                        name={namePokemon}
                        url={spritesPokemon.back_default}
                    />
                </Col>
                <Col>
                    <CardImg
                        name={namePokemon}
                        url={spritesPokemon.back_shiny}
                    />
                </Col>
                <Col>
                    <CardImg
                        name={namePokemon}
                        url={spritesPokemon.front_default}
                    />
                </Col>
                <Col>
                    <CardImg
                        name={namePokemon}
                        url={spritesPokemon.front_shiny}
                    />
                </Col>
            </Row>

        </section >
    ) : (
        <>
            <Alert />
        </>
    );
};

export default DetailPokemon;
