import React from 'react';
import { Segment, Sidebar, Menu, Header, Icon, Container } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";

const BasicLayout: React.FC = props => {
    return (
        <div>
            <Menu fixed='top'>
                <Menu.Item name='browse'>
                    Browse
                            </Menu.Item>

                <Menu.Item name='submit'>
                    Submit
                            </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item name='signup'>
                        Sign Up
                                </Menu.Item>
                    <Menu.Item>
                        Help
                                </Menu.Item>
                </Menu.Menu>
            </Menu>
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='uncover'
                    icon='labeled'
                    visible={true}
                    vertical={true}
                    width='thin'
                >
                    <Menu.Item href='/'>
                        <Icon name='home' />
                        Главная
                    </Menu.Item>
                    <Menu.Item href='/manage/pages'>
                        <Icon name='sitemap' />
                        Ресурсы
                    </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                    <Segment basic={true}>
                        <Container>
                            {props.children}
                        </Container>
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </div>
    );
};

export default BasicLayout;
