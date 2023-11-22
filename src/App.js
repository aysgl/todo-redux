import { useDispatch, useSelector } from 'react-redux';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './scss/style.scss';
import { useEffect, useState } from 'react';
import { switchAction } from './redux/action/switchAction';

function App() {
  const state = useSelector((store) => store.switchReducer);
  const dispatch = useDispatch();
  const [type, setType] = useState(switchAction.LIGHT);

  const handleClick = () => {
    const newType = state.type === switchAction.LIGHT ? switchAction.DARK : switchAction.LIGHT;
    setType(newType);
    dispatch({
      type: newType,
    });
  };

  useEffect(() => {
    document.body.style.backgroundColor = state.type === switchAction.DARK ? 'black' : 'white';
  }, [state.type]);

  return (
    <div className='container'>
      <div className="svg">
        {state.type === switchAction.DARK &&
          <div className="sun" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path fill='#ffc107' d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
            </svg>
          </div>
        }

        {state.type === switchAction.LIGHT &&
          <div className="moon" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
              <path
                d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
            </svg>
          </div>
        }
      </div>

      <div className='row my-5'>
        <div className='col-lg-5 col-md-7 col-10 mx-auto'>
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
