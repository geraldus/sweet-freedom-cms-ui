import React from 'react';
import { Segment, Sidebar, Menu, Header, Icon } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";

const BasicLayout: React.FC = props => {
    return (
        <div>
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='uncover'
                    visible={true}
                    vertical={true}
                    width='thin'
                >
                    <Menu.Item>Ресурсы</Menu.Item>
                    <Menu.Item>Test 3</Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                    <Segment basic={true}>
                        <h1>Yay! Welcome to umi!</h1>
                        {props.children}
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </div>
    );
};

export default BasicLayout;
