import React from 'react';
import { Header, Divider, Icon, List } from 'semantic-ui-react';
import { renderMessage } from '@/utils';
import { SiteMapFileProps } from '@/components/sitemap/containers';
import { SiteMapListView } from '@/components/sitemap/containers';
import { SiteMapView } from '@/components/sitemap/listview';


interface Page {
    key: number,
    path: string,
    title: string
}

interface PageSelector {
    page: Page | null,
    pages: SiteMapFileProps[]
}

type State = PageSelector

const initialState: State = Object.freeze({
    page: null,
    pages: [
        {
            title: 'Главная',
            path: '/',
            icon: 'home',
            subTree: []
        },
        {
            title: 'Новости',
            path: '/news',
            icon: 'file',
            subTree: []
        }
    ]
})

export class SiteMapPageView extends React.Component {
    readonly state = initialState
    render() {
        // tslint:disable-next-line: no-console
        const onClick = (e, data) => { console.log(data) }
        return (
            <div>
                <Header>{renderMessage('manage.pages.pageTitle')}</Header>
                <Divider />
                <SiteMapView onClick={onClick} files={this.state.pages}/>
            </div>
        );
    }
}

export default SiteMapPageView
