import {asNexusMethod} from '@nexus/schema';
import {GraphQLDate, GraphQLTime, GraphQLDateTime} from 'graphql-iso-date';
import {JSONResolver, JSONObjectResolver} from 'graphql-scalars';

export const GQLJson = asNexusMethod(JSONResolver, 'json');
export const GQLJsonObject = asNexusMethod(JSONObjectResolver, 'jsonObject');

export const GQLDate = asNexusMethod(GraphQLDate, 'date');
export const GQLTime = asNexusMethod(GraphQLTime, 'time');
export const GQLDateTime = asNexusMethod(GraphQLDateTime, 'datetime');
