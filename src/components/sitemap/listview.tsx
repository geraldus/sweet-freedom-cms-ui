import React from 'react';
import { connect } from 'dva';
import { SiteMapListView, SiteMapListProps } from './containers';


type State = SiteMapListProps

const initialState: State = Object.freeze({
    files: [],
    onClick: () => { return }
})

type Props = SiteMapListProps

const defaultProps: Props = Object.freeze({
    files: [],
    onClick: () => { return }
})

export class SiteMapView extends React.Component<Props, State> {
    readonly state = initialState
    static readonly defaultProps = defaultProps
    render() {
        return (
            <SiteMapListView onClick={this.props.onClick} files={this.props.files} />
        )
    }
}

const mapStateToProps = (nextState: State, prevProps: Props) => {
    return {
        files: nextState.files
    }
}

export default connect(mapStateToProps)(SiteMapView)
