import { AnyAction, CombinedState, Reducer, ActionCreatorWithPayload, ActionCreatorWithoutPayload } from '@reduxjs/toolkit';
import type { CombinedState as CombinedQueryState, QuerySubstateIdentifier, MutationSubstateIdentifier, Subscribers, ConfigState } from './apiState';
import type { MutationThunk, QueryThunk } from './buildThunks';
import type { AssertTagTypes, EndpointDefinitions } from '../endpointDefinitions';
import type { Patch } from 'immer';
import type { ApiContext } from '../apiTypes';
export declare function buildSlice({ reducerPath, queryThunk, mutationThunk, context: { endpointDefinitions: definitions, apiUid }, assertTagType, config, }: {
    reducerPath: string;
    queryThunk: QueryThunk;
    mutationThunk: MutationThunk;
    context: ApiContext<EndpointDefinitions>;
    assertTagType: AssertTagTypes;
    config: Omit<ConfigState<string>, 'online' | 'focused' | 'middlewareRegistered'>;
}): {
    reducer: Reducer<CombinedState<CombinedQueryState<any, string, string>>, AnyAction>;
    actions: {
        resetApiState: ActionCreatorWithoutPayload<string>;
        unsubscribeMutationResult: ActionCreatorWithPayload<MutationSubstateIdentifier, string>;
        updateSubscriptionOptions: ActionCreatorWithPayload<{
            endpointName: string;
            requestId: string;
            options: Subscribers[number];
        } & QuerySubstateIdentifier, string>;
        unsubscribeQueryResult: ActionCreatorWithPayload<{
            requestId: string;
        } & QuerySubstateIdentifier, string>;
        removeQueryResult: ActionCreatorWithPayload<QuerySubstateIdentifier, string>;
        queryResultPatched: ActionCreatorWithPayload<QuerySubstateIdentifier & {
            patches: readonly Patch[];
        }, string>;
        middlewareRegistered: ActionCreatorWithPayload<string, string>;
    };
};
export declare type SliceActions = ReturnType<typeof buildSlice>['actions'];
