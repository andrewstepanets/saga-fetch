
import { connect } from 'react-redux'
import { useEffect } from 'react'

import { apiCallRequest } from './redux/coffee/coffee.actions'

function App({ fetching, characters, error, onRequest }) {
  useEffect(() => {
    onRequest()
  }, [onRequest])
  // console.log(characters);
  return (
    <div>
      <h1>Coffee</h1>
      {
        fetching ? (
          <p>Loading...</p>
        ) : (
          characters.map(character => (
            <li key={character.id}>{character.title}</li>
          ))
        )
      }

    </div>
  );
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    characters: state.characters,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => ({
  onRequest: () => dispatch(apiCallRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
