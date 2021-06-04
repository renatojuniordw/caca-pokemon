import React from 'react';
import { Card, Figure } from 'react-bootstrap';

export default function CardImg({ url, name }) {
    return (name && url) ? (
        <Card body className="text-center">
            <Figure>
                <Figure.Image
                    width={500}
                    height={500}
                    alt={name}
                    src={url}
                />
                <Figure.Caption>
                    {name}
                </Figure.Caption>
            </Figure>
        </Card>
    ) : (<></>);
}
