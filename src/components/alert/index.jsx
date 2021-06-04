import React from 'react';
import { Card } from 'react-bootstrap';

import './styles.css';

const Alert = () => (
    <div className="text-center">
        <Card>
            <Card.Body>Nenhum Pokémon corresponde à sua pesquisa!</Card.Body>
        </Card>
    </div>
);

export default Alert;
