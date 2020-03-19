import React from 'react';
import mountGenerator from './innerhoc/mountGenerator';
import Jonathon from './innerhoc/jonathon';
import Kujo from './innerhoc/kujo';

const MountedJonathon = mountGenerator(Jonathon);
const MountedKujo = mountGenerator(Kujo);
class Hoc extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
                    <MountedJonathon shout="Hamou Drive!!"></MountedJonathon>
                    <MountedKujo shout="Oula!Oula!Oula!"></MountedKujo>
                </div>);
    }
}
export default Hoc;
