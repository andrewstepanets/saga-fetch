
import { connect } from 'react-redux'
import { useEffect } from 'react'

import { apiCallRequest } from './redux/coffee/coffee.actions'

function App({ fetching, characters, error, onRequest }) {
  useEffect(() => {
    onRequest()
  }, [onRequest])

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
      {
        error && <p>Something went wrong!!!</p>
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
