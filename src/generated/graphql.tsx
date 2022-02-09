import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "customer" */
export type Customer = {
  __typename?: 'customer';
  birth_date: Scalars['date'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  vip: Scalars['Boolean'];
};

/** aggregated selection of "customer" */
export type Customer_Aggregate = {
  __typename?: 'customer_aggregate';
  aggregate?: Maybe<Customer_Aggregate_Fields>;
  nodes: Array<Customer>;
};

/** aggregate fields of "customer" */
export type Customer_Aggregate_Fields = {
  __typename?: 'customer_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Customer_Max_Fields>;
  min?: Maybe<Customer_Min_Fields>;
};


/** aggregate fields of "customer" */
export type Customer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "customer". All fields are combined with a logical 'AND'. */
export type Customer_Bool_Exp = {
  _and?: InputMaybe<Array<Customer_Bool_Exp>>;
  _not?: InputMaybe<Customer_Bool_Exp>;
  _or?: InputMaybe<Array<Customer_Bool_Exp>>;
  birth_date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  vip?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "customer" */
export enum Customer_Constraint {
  /** unique or primary key constraint */
  CustomerPkey = 'customer_pkey'
}

/** input type for inserting data into table "customer" */
export type Customer_Insert_Input = {
  birth_date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  vip?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Customer_Max_Fields = {
  __typename?: 'customer_max_fields';
  birth_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Customer_Min_Fields = {
  __typename?: 'customer_min_fields';
  birth_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "customer" */
export type Customer_Mutation_Response = {
  __typename?: 'customer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customer>;
};

/** on conflict condition type for table "customer" */
export type Customer_On_Conflict = {
  constraint: Customer_Constraint;
  update_columns?: Array<Customer_Update_Column>;
  where?: InputMaybe<Customer_Bool_Exp>;
};

/** Ordering options when selecting data from "customer". */
export type Customer_Order_By = {
  birth_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  vip?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customer */
export type Customer_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "customer" */
export enum Customer_Select_Column {
  /** column name */
  BirthDate = 'birth_date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Vip = 'vip'
}

/** input type for updating data in table "customer" */
export type Customer_Set_Input = {
  birth_date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  vip?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "customer" */
export enum Customer_Update_Column {
  /** column name */
  BirthDate = 'birth_date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Vip = 'vip'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "customer" */
  delete_customer?: Maybe<Customer_Mutation_Response>;
  /** delete single row from the table: "customer" */
  delete_customer_by_pk?: Maybe<Customer>;
  /** delete data from the table: "order" */
  delete_order?: Maybe<Order_Mutation_Response>;
  /** delete single row from the table: "order" */
  delete_order_by_pk?: Maybe<Order>;
  /** insert data into the table: "customer" */
  insert_customer?: Maybe<Customer_Mutation_Response>;
  /** insert a single row into the table: "customer" */
  insert_customer_one?: Maybe<Customer>;
  /** insert data into the table: "order" */
  insert_order?: Maybe<Order_Mutation_Response>;
  /** insert a single row into the table: "order" */
  insert_order_one?: Maybe<Order>;
  /** update data of the table: "customer" */
  update_customer?: Maybe<Customer_Mutation_Response>;
  /** update single row of the table: "customer" */
  update_customer_by_pk?: Maybe<Customer>;
  /** update data of the table: "order" */
  update_order?: Maybe<Order_Mutation_Response>;
  /** update single row of the table: "order" */
  update_order_by_pk?: Maybe<Order>;
};


/** mutation root */
export type Mutation_RootDelete_CustomerArgs = {
  where: Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_OrderArgs = {
  where: Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_CustomerArgs = {
  objects: Array<Customer_Insert_Input>;
  on_conflict?: InputMaybe<Customer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customer_OneArgs = {
  object: Customer_Insert_Input;
  on_conflict?: InputMaybe<Customer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrderArgs = {
  objects: Array<Order_Insert_Input>;
  on_conflict?: InputMaybe<Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_OneArgs = {
  object: Order_Insert_Input;
  on_conflict?: InputMaybe<Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CustomerArgs = {
  _set?: InputMaybe<Customer_Set_Input>;
  where: Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_By_PkArgs = {
  _set?: InputMaybe<Customer_Set_Input>;
  pk_columns: Customer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrderArgs = {
  _inc?: InputMaybe<Order_Inc_Input>;
  _set?: InputMaybe<Order_Set_Input>;
  where: Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_By_PkArgs = {
  _inc?: InputMaybe<Order_Inc_Input>;
  _set?: InputMaybe<Order_Set_Input>;
  pk_columns: Order_Pk_Columns_Input;
};

/** columns and relationships of "order" */
export type Order = {
  __typename?: 'order';
  cost?: Maybe<Scalars['Int']>;
  customer_id?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  order_date?: Maybe<Scalars['date']>;
  products_amount?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "order" */
export type Order_Aggregate = {
  __typename?: 'order_aggregate';
  aggregate?: Maybe<Order_Aggregate_Fields>;
  nodes: Array<Order>;
};

/** aggregate fields of "order" */
export type Order_Aggregate_Fields = {
  __typename?: 'order_aggregate_fields';
  avg?: Maybe<Order_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Order_Max_Fields>;
  min?: Maybe<Order_Min_Fields>;
  stddev?: Maybe<Order_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Sum_Fields>;
  var_pop?: Maybe<Order_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Var_Samp_Fields>;
  variance?: Maybe<Order_Variance_Fields>;
};


/** aggregate fields of "order" */
export type Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Order_Avg_Fields = {
  __typename?: 'order_avg_fields';
  cost?: Maybe<Scalars['Float']>;
  products_amount?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "order". All fields are combined with a logical 'AND'. */
export type Order_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Bool_Exp>>;
  _not?: InputMaybe<Order_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Bool_Exp>>;
  cost?: InputMaybe<Int_Comparison_Exp>;
  customer_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order_date?: InputMaybe<Date_Comparison_Exp>;
  products_amount?: InputMaybe<Int_Comparison_Exp>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** unique or primary key constraints on table "order" */
export enum Order_Constraint {
  /** unique or primary key constraint */
  OrderPkey = 'order_pkey'
}

/** input type for incrementing numeric columns in table "order" */
export type Order_Inc_Input = {
  cost?: InputMaybe<Scalars['Int']>;
  products_amount?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "order" */
export type Order_Insert_Input = {
  cost?: InputMaybe<Scalars['Int']>;
  customer_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  order_date?: InputMaybe<Scalars['date']>;
  products_amount?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Order_Max_Fields = {
  __typename?: 'order_max_fields';
  cost?: Maybe<Scalars['Int']>;
  customer_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order_date?: Maybe<Scalars['date']>;
  products_amount?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Order_Min_Fields = {
  __typename?: 'order_min_fields';
  cost?: Maybe<Scalars['Int']>;
  customer_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order_date?: Maybe<Scalars['date']>;
  products_amount?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "order" */
export type Order_Mutation_Response = {
  __typename?: 'order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order>;
};

/** on conflict condition type for table "order" */
export type Order_On_Conflict = {
  constraint: Order_Constraint;
  update_columns?: Array<Order_Update_Column>;
  where?: InputMaybe<Order_Bool_Exp>;
};

/** Ordering options when selecting data from "order". */
export type Order_Order_By = {
  cost?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  products_amount?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order */
export type Order_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "order" */
export enum Order_Select_Column {
  /** column name */
  Cost = 'cost',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrderDate = 'order_date',
  /** column name */
  ProductsAmount = 'products_amount'
}

/** input type for updating data in table "order" */
export type Order_Set_Input = {
  cost?: InputMaybe<Scalars['Int']>;
  customer_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  order_date?: InputMaybe<Scalars['date']>;
  products_amount?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Order_Stddev_Fields = {
  __typename?: 'order_stddev_fields';
  cost?: Maybe<Scalars['Float']>;
  products_amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Order_Stddev_Pop_Fields = {
  __typename?: 'order_stddev_pop_fields';
  cost?: Maybe<Scalars['Float']>;
  products_amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Order_Stddev_Samp_Fields = {
  __typename?: 'order_stddev_samp_fields';
  cost?: Maybe<Scalars['Float']>;
  products_amount?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Order_Sum_Fields = {
  __typename?: 'order_sum_fields';
  cost?: Maybe<Scalars['Int']>;
  products_amount?: Maybe<Scalars['Int']>;
};

/** update columns of table "order" */
export enum Order_Update_Column {
  /** column name */
  Cost = 'cost',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrderDate = 'order_date',
  /** column name */
  ProductsAmount = 'products_amount'
}

/** aggregate var_pop on columns */
export type Order_Var_Pop_Fields = {
  __typename?: 'order_var_pop_fields';
  cost?: Maybe<Scalars['Float']>;
  products_amount?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Order_Var_Samp_Fields = {
  __typename?: 'order_var_samp_fields';
  cost?: Maybe<Scalars['Float']>;
  products_amount?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Order_Variance_Fields = {
  __typename?: 'order_variance_fields';
  cost?: Maybe<Scalars['Float']>;
  products_amount?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "customer" */
  customer: Array<Customer>;
  /** fetch aggregated fields from the table: "customer" */
  customer_aggregate: Customer_Aggregate;
  /** fetch data from the table: "customer" using primary key columns */
  customer_by_pk?: Maybe<Customer>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
};


export type Query_RootCustomerArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Query_RootCustomer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Query_RootCustomer_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Query_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Query_RootOrder_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "customer" */
  customer: Array<Customer>;
  /** fetch aggregated fields from the table: "customer" */
  customer_aggregate: Customer_Aggregate;
  /** fetch data from the table: "customer" using primary key columns */
  customer_by_pk?: Maybe<Customer>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
};


export type Subscription_RootCustomerArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Subscription_RootCustomer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Subscription_RootCustomer_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootOrder_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = { __typename?: 'query_root', customer: Array<{ __typename?: 'customer', id: any, birth_date: any, name: string, vip: boolean }> };

export type MyQuery1QueryVariables = Exact<{
  cusId: Scalars['uuid'];
}>;


export type MyQuery1Query = { __typename?: 'query_root', order: Array<{ __typename?: 'order', id: any, customer_id?: any | null, cost?: number | null, order_date?: any | null, products_amount?: number | null }> };


export const MyQueryDocument = gql`
    query MyQuery {
  customer(distinct_on: id) {
    id
    birth_date
    name
    vip
  }
}
    `;

/**
 * __useMyQueryQuery__
 *
 * To run a query within a React component, call `useMyQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyQueryQuery(baseOptions?: Apollo.QueryHookOptions<MyQueryQuery, MyQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, options);
      }
export function useMyQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyQueryQuery, MyQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, options);
        }
export type MyQueryQueryHookResult = ReturnType<typeof useMyQueryQuery>;
export type MyQueryLazyQueryHookResult = ReturnType<typeof useMyQueryLazyQuery>;
export type MyQueryQueryResult = Apollo.QueryResult<MyQueryQuery, MyQueryQueryVariables>;
export const MyQuery1Document = gql`
    query MyQuery1($cusId: uuid!) {
  order(order_by: {}, where: {customer_id: {_eq: $cusId}}) {
    id
    customer_id
    cost
    order_date
    products_amount
  }
}
    `;

/**
 * __useMyQuery1Query__
 *
 * To run a query within a React component, call `useMyQuery1Query` and pass it any options that fit your needs.
 * When your component renders, `useMyQuery1Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyQuery1Query({
 *   variables: {
 *      cusId: // value for 'cusId'
 *   },
 * });
 */
export function useMyQuery1Query(baseOptions: Apollo.QueryHookOptions<MyQuery1Query, MyQuery1QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyQuery1Query, MyQuery1QueryVariables>(MyQuery1Document, options);
      }
export function useMyQuery1LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyQuery1Query, MyQuery1QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyQuery1Query, MyQuery1QueryVariables>(MyQuery1Document, options);
        }
export type MyQuery1QueryHookResult = ReturnType<typeof useMyQuery1Query>;
export type MyQuery1LazyQueryHookResult = ReturnType<typeof useMyQuery1LazyQuery>;
export type MyQuery1QueryResult = Apollo.QueryResult<MyQuery1Query, MyQuery1QueryVariables>;