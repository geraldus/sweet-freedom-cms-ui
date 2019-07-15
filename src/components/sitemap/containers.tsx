import React, { Children } from 'react';
import { List } from 'semantic-ui-react';
import { renderMessage } from '@/utils';
import { ClickableWithData, ClickEvent } from '@/interfaces';



export interface SiteMapFileMeta {
    title: string,
    path: string,
    icon: any | null,
    subTree: SiteMapFileProps[]
}

export type SiteMapFileProps = ClickableWithData & SiteMapFileMeta

const siteMapFileDefaultProps: SiteMapFileProps = Object.freeze({
    title: '',
    path: '',
    icon: null,
    subTree: [],
    onClick: () => { return }
})

export class SiteMapFileView extends React.Component<SiteMapFileProps> {
    static readonly defaultProps = siteMapFileDefaultProps
    render() {
        const childrenView = this.props.subTree.length > 0 ?
            (
                this.props.subTree.map((v, i) => (
                    <SiteMapFileView key={i} {...v} />
            )))
            : null
        const onClick =
            (e: ClickEvent, data: any) => this.props.onClick(e, data)
        return (
            <List.Item onClick={onClick}>
                {this.props.icon ? <List.Icon name={this.props.icon} /> : <></>}
                <List.Content>
                    <List.Header>{this.props.title}</List.Header>
                    <List.Description>{this.props.path}</List.Description>
                </List.Content>
                <List.List>
                    {childrenView}
                </List.List>
            </List.Item>
        )
    }
}

export interface SiteMapListMeta {
    files: SiteMapFileProps[]
}

export type SiteMapListProps = SiteMapListMeta & ClickableWithData

const siteMapListDefaultProps: SiteMapListProps = Object.freeze({
    files: [],
    onClick: () => { return }
})

export class SiteMapListView extends React.Component<SiteMapListProps> {
    static readonly defaultProps = siteMapListDefaultProps
    render() {
        const onListItemClick = (i) => ((e, data) => { this.props.onClick(e, this.props.files[i]) })
        const listView = this.props.files.length > 0 ?
            (this.props.files.map((v, i) => (
                <SiteMapFileView key={i} {...v} onClick={onListItemClick(i)}/>
            )))
            : null
        return (
            <List size='big' selection={true} relaxed={true}>
                <List.Item>
                    <List.Icon name='sitemap' />
                    <List.Content>
                        <List.Header>{renderMessage('manage.siteMap.root')}</List.Header>
                    </List.Content>
                    <List.List>
                        {listView}
                    </List.List>
                </List.Item>
            </List>
        )
    }
}
