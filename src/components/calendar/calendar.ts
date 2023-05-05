import { PropType, AppContext } from 'vue';
import { CalendarOptions } from '@fullcalendar/core';
declare const FullCalendar: import('vue').DefineComponent<
  {
    options: PropType<CalendarOptions>;
  },
  unknown,
  {
    renderId: number;
  },
  {},
  {
    getApi: typeof getApi;
    buildOptions: typeof buildOptions;
  },
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  Record<string, any>,
  string,
  import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps,
  Readonly<
    {} & {
      options?: CalendarOptions | undefined;
    }
  >,
  {}
>;
export default FullCalendar;
declare function buildOptions(
  this: any,
  suppliedOptions: CalendarOptions | undefined,
  appContext: AppContext
): CalendarOptions;
declare function getApi(this: any): any;
