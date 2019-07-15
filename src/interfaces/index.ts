import { ReactNode } from 'react';

export interface ReduxAction {
    type: string,
    [propName: string]: any,
}

export interface ReduxSagaEffects {
    put: any,
    call: any,
    select: any,
}


export interface ReduxSagaTaker {
    type: string,
    [propsName: string]: any
}


export interface DvaModelReducer {
    (preState: object, action: ReduxAction): object
}

export interface DvaModelReducerList {
    [reducerName: string]: DvaModelReducer
}

export interface DvaModelEffectFn {
    (action: ReduxAction, sagaEffects: ReduxSagaEffects): any
}

export interface DvaModelEffectWithTaker
    extends Array<ReduxSagaTaker | DvaModelEffectFn>
{
    [index: number]: ReduxSagaTaker | DvaModelEffectFn,
}

export type DvaModelEffect = DvaModelEffectFn | DvaModelEffectWithTaker

export interface DvaModelEffectList {
    [effectName: string]: DvaModelEffect
}

export interface DvaModel<T> {
    namespace: string,
    state?: T,
    reducers?: DvaModelReducerList,
    effects?: DvaModelEffectList,
    subscriptions?: object
}


export interface Dispatcher {
    dispatch: (a: ReduxAction) => void
}

export interface Titled {
    title: ReactNode | string
}

export type ClickEvent = React.MouseEvent | MouseEvent

export interface Clickable {
    onClick: (e: ClickEvent) => void
}

export interface ClickableWithData {
    onClick: (e: ClickEvent, data: any) => void
}

