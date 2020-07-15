import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';
import reducers from './reducer/index';

const sagaMiddware = createSagaMiddleware(); // 初始化saga中间件

const store = createStore(reducers, applyMiddleware(sagaMiddware));

sagaMiddware.run(mySaga);

export default store;