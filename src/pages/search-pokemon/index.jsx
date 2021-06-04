import React from 'react';
import {
    Form, Row, Button, InputGroup
} from 'react-bootstrap/';

import DetailPokemon from '../../components/detail-pokemon';
import getPokemonById from '../../services/pokemon-service';
import Alert from '../../components/alert';

import { BsSearch } from "react-icons/bs";

import './style.css';

class SearchPokemon extends React.Component {

    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            isValidSearch: false,
            spritesPokemon: {},
            namePokemon: '',
            id: '',
        };
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    btnGetPokemonById = async (event) => {
        event.preventDefault();

        this._isMounted = true;
        const { id } = this.state;
        this.setIsValidSearch(true);

        if (!!id) {
            await getPokemonById(id).then((result) => {
                if (this._isMounted === true) {
                    if (!!result && !!result.data) {

                        const { name, sprites } = result.data;
                        this.setNamePokemon(name);
                        this.setSpritesPokemon(sprites);
                    } else {
                        this.setNamePokemon('');
                        this.setSpritesPokemon({});
                    }
                }
            }).catch(() => {
                if (this._isMounted === true) {
                    this.setNamePokemon(null);
                    this.setSpritesPokemon({});
                    this.setIsValidSearch(true);
                }
            });
        } else {
            if (this._isMounted === true) {
                this.setNamePokemon(null);
                this.setSpritesPokemon({});
                this.setIsValidSearch(true);
            }
        }

    };

    changeSetValueId = (event) => {
        this.setState({ id: event.target.value });
    };

    setNamePokemon = (namePokemon) => {
        this.setState({ namePokemon });
    };

    setSpritesPokemon = (spritesPokemon) => {
        this.setState({ spritesPokemon });
    };

    setIsValidSearch = (isConsulted) => {
        this.setState({ isValidSearch: isConsulted });
    };

    render() {

        const {
            id,
            namePokemon,
            spritesPokemon,
            isValidSearch
        } = this.state;

        return (
            <article>
                <header className="text-center">
                    <h1>Caça Pokémon</h1>
                </header>

                <section className="section-form">
                    <Form>
                        <Row>

                            <Form.Label
                                htmlFor="label input pokémon">
                                Quer encontrar seu Pokémon favorito? Digita o número dele aqui abaixo.
                                        </Form.Label>
                            <InputGroup className="mb-3">

                                <Form.Control
                                    data-testid="form-input"
                                    className="input_search"
                                    name="input_search"
                                    type="number"
                                    placeholder="Digite apenas números"
                                    value={id}
                                    onChange={this.changeSetValueId}
                                />

                                <InputGroup.Append>
                                    <Button
                                        variant="danger"
                                        type="submit"
                                        onClick={this.btnGetPokemonById}
                                    >
                                        <BsSearch />
                                    </Button>
                                </InputGroup.Append>

                            </InputGroup>

                            {
                                ((!!id && (id <= 0 || id > 898)) || (!id && isValidSearch)) ? (
                                    <p className="p-alert">
                                        Você precisa digitar um número entre 1 e 898.
                                    </p>
                                ) : (<></>)
                            }

                        </Row>
                    </Form>

                </section >
                {
                    isValidSearch || (!!id && isValidSearch) ? (
                        (!!namePokemon ? (
                            <DetailPokemon
                                name={namePokemon}
                                sprites={spritesPokemon}
                            />
                        ) : (
                            <Alert />
                        ))
                    ) : (
                        <></>
                    )
                }

            </article>
        );
    }

}

export default SearchPokemon;
