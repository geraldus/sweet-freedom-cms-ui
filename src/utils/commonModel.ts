import { ReduxAction, DvaModelReducerList } from '@/interfaces/index'
import _modelExtend from 'dva-model-extend';
// * NOTE: There is no @types/dva-model-extend yet


interface CommonModel {
    reducers: DvaModelReducerList
}

const commonModel: CommonModel = {
    reducers: {
        updateState(state: object, { payload }: ReduxAction) {
            return {
                ...state,
                ...payload,
            }
        },
        error(state: object, { payload }: ReduxAction) {
            return {
                ...state,
                error: payload,
            }
        },
    },
}


const modelExtend = (model) => _modelExtend(commonModel, model);


export {
    modelExtend,
    commonModel,
}
