import {
  withDirectives as _withDirectives,
  mergeProps as _mergeProps,
  vShow as _vShow,
  createVNode as _createVNode
} from 'vue';

import { genericComponent, pickWithRest, propsFactory, useRender } from 'vuetify/util/index.mjs';
import makeVTextFieldProps from 'vuetify/components/VTextField';

export const makeAppDatePickerProps = propsFactory(
  {
    bordered: Boolean
  },
  'AppDatePicker'
);

export const AppDatePicker = genericComponent()({
  name: 'AppDatePicker',

  inheritAttrs: false,
  props: makeAppDatePickerProps()
});
