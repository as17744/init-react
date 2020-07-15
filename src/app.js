import './app.css';
import React from 'react';
import BoilingVerdict from './components/BoilingVerdict';
import TemperatureInput from './components/TemperatureInput';
import Slot from './components/Slot';
import Welcome from './components/welcome';
import Check from './components/check';
import List from './components/list';
import Template from './components/template';
import Context from './components/Context';
import SetSateExp from './components/SetSateExp';
import RefsExample from './components/refsExample';
import Hoc from './components/hoc';
import Life from './components/Life';
import {ColorContext} from './utils/context';
import { Button, Modal } from '@dxy-mom/dxmm-ui';

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
const getPageParams = () => {
    let query = window.location.search;
    query = query.replace('?', '');
    const queryList = query.split('&');
    const obj = {};
    queryList.forEach((item) => {
        const keyToValue = item.split('=');
        obj[keyToValue[0]] = keyToValue[1];
    });
    return obj;
}
const page = getPageParams().page || 'normal';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 123,
            temperature: 0,
            scale: 'c',
            templateList: ['template1', 'template2', 'template3'],
            showModal: false,
        };
        this.$tmp = React.createRef();
        this.timerId = null;
    }
    componentDidMount() {
        // this.timerId = setInterval(() => {
        //     this.setState({
        //         count: this.state.count + 1,
        //     });
        // }, 1000);
        // console.log(this);
    }
    handleClick() {
        this.setState((state) => {
            return {
                count: state.count + 1,
            }
        });
    }
    handleChange(e) {
        this.setState({
            temperature: e.target.value,
            scale: e.scale,
        });
    }
    render () {
        const {
            showModal
        } = this.state;
        // return (
        //     <div>
        //         <Welcome name={this.state.count}></Welcome>
        //         <Welcome name="booker"></Welcome>
        //         <Welcome name="Oubre "></Welcome>
        //         <Check checked={false}></Check>
        //         <button onClick={() => {this.handleClick()}}>111</button>
        //         <List></List>
        //     </div>
        // );
        // let celsius = 0;
        // let fahrenheit = 0;
        // if (this.state.scale === 'c') {
        //     celsius = this.state.temperature;
        //     fahrenheit = tryConvert(this.state.temperature, toFahrenheit);
        // }
        // if (this.state.scale === 'f') {
        //     celsius = tryConvert(this.state.temperature, toCelsius);
        //     fahrenheit = this.state.temperature;
        // }
        // const config = {
        //     normal: (<div>
        //                 <Template list={this.state.templateList}></Template>
        //                 <TemperatureInput scale="c" temperature={celsius} handleChange={(e) => {this.handleChange(e)}}></TemperatureInput>
        //                 <TemperatureInput scale="f" temperature={fahrenheit} handleChange={(e) => {this.handleChange(e)}}></TemperatureInput>
        //                 <BoilingVerdict celsius={this.state.temperature}></BoilingVerdict>
        //                 <Slot
        //                     left={<div>left</div>} right={<div>right</div>}></Slot>
        //                 <div class="sample">
        //                     <ColorContext.Provider value="yellow">
        //                         <Context></Context>
        //                     </ColorContext.Provider>
        //                 </div>
        //             </div>),
        //     state: (<SetSateExp></SetSateExp>),
        //     refs: (<RefsExample forwardRef={this.$tmp}></RefsExample>),
        //     hoc: (<Hoc></Hoc>),
        //     life: (<Life></Life>),
        // }
        // return config[page];
        return (
            <div>
                <Button onClick={() => { this.setState({showModal: true}) }}>按钮</Button>
                <Modal
                    visible={showModal}
                    hideClose={false}
                    width="260px"
                    height="330px"
                    shadowClickClose={false}
                    onClose={() => {
                        this.setState({showModal: true})
                    }}
                >
                    <div>弹窗标题</div>
                </Modal>
            </div>
        );
    }
};
export default App;