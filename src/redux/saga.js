import { delay } from 'redux-saga'
import { put, takeEvery, call, takeLatest } from 'redux-saga/effects'

const asyncFunc = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(123)
    }, 1000);
  });
};

// Our worker Saga: 将执行异步的 increment 任务
function* incrementAsync() {
    const data = yield call(asyncFunc);
    yield put({
      type: 'setCount',
      num: data,
  })
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action spawn 一个新的 incrementAsync 任务
export default function* watchIncrementAsync() {
  yield takeLatest('INCREMENT_ASYNC', incrementAsync);
}
