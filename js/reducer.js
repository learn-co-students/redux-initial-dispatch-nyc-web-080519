let state;  // declare the state first, instead of assigning it to equal to smth

function changeState(state = { count: 0 }, action){  // passing a default argument of state to our educer function
    switch (action.type) {

      case 'INCREASE_COUNT':
        return {count: state.count + 1}

      default:
        return state;
    }
  }

function dispatch(action){
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count
}

dispatch({ type: '@@INIT' })
// dispatch({ type: 'INCREASE_COUNT' })