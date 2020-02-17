import {asNexusMethod} from 'nexus';
import GraphQLJSON, {GraphQLJSONObject} from 'graphql-type-json';
import {GraphQLDate, GraphQLTime, GraphQLDateTime} from 'graphql-iso-date';

export const GQLJson = asNexusMethod(GraphQLJSON, 'json');
export const GQLJsonObject = asNexusMethod(GraphQLJSONObject, 'jsonObject');

export const GQLDate = asNexusMethod(GraphQLDate, 'date');
export const GQLTime = asNexusMethod(GraphQLTime, 'time');
export const GQLDateTime = asNexusMethod(GraphQLDateTime, 'datetime');
