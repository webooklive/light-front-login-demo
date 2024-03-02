/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaxDetailRestriction } from './MaxDetailRestriction';
import type { MaxParallelPersonCapacity } from './MaxParallelPersonCapacity';
import type { MaxParallelPersons } from './MaxParallelPersons';
import type { MaxStationsCapacity } from './MaxStationsCapacity';
import type { PersonsOpenEmptyEvent } from './PersonsOpenEmptyEvent';

export type Restrictions = {
  max_parallel_persons?: MaxParallelPersons;
  max_detail_restriction?: MaxDetailRestriction;
  persons_open_empty_event?: PersonsOpenEmptyEvent;
  max_parallel_person_capacity?: MaxParallelPersonCapacity;
  max_stations_restriction?: MaxStationsCapacity;
};
