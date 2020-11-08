import { ObjectType, Field, Int } from 'type-graphql';

import Data from './Data.type';

@ObjectType()
class DataArray {
  @Field(() => Int)
  page!: number;

  @Field(() => Int)
  perPage!: number;
  
  @Field(() => Int)
  total!: number;
  
  @Field(() => Int)
  totalPages!: number;
  
  @Field(() => [Data])
  data!: Data[];
}

export default DataArray;