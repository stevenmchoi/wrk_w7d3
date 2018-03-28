import React from 'react';
import ReactDOM from 'react-dom';
import {
	receiveAllPokemon,
	requestAllPokemon
} from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store';

window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.requestAllPokemon = requestAllPokemon;

document.addEventListener('DOMContentLoaded', () => {
	const store = configureStore();

	window.getState = store.getState;
	window.dispatch = store.dispatch;

	const rootEl = document.getElementById('root');
	ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
