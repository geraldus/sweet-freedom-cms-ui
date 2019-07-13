import React from 'react';
import { formatMessage } from 'umi-plugin-locale';

import { Header, Divider, Icon, List } from 'semantic-ui-react';

export default function () {
    return (
        <div>
            <Header>{formatMessage({ id: 'manage.pages.pageTitle' })}</Header>
            <Divider/>
            <List size='big' selection={true} relaxed={true}>
                <List.Item>
                    <List.Icon name='sitemap' />
                    <List.Content>
                        <List.Header>Сайт</List.Header>
                    </List.Content>
                    <List.List>
                        <List.Item>
                            <List.Icon name='file' />
                            <List.Content>
                                <List.Header>Главная</List.Header>
                                <List.Description>/</List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='file' />
                            <List.Content>
                                <List.Header>Новости</List.Header>
                                <List.Description>/news</List.Description>
                            </List.Content>
                        </List.Item>
                    </List.List>
                </List.Item>
            </List>
        </div>
    );
}
