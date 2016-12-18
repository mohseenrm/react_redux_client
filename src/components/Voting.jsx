import React from 'react';
import Winner from './Winner';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Vote from './Vote';

const Voting = React.createClass({
    mixins: [PureRenderMixin],
    render: function () {
        return <div>
            {this.props.winner
                ? <Winner ref="winner" winner={this.props.winner}/>
                : <Vote {...this.props}/>}
        </div>;
    }
});

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        winner: state.get('winner')
    };
}

connect(mapStateToProps)(Voting);

export default Voting;