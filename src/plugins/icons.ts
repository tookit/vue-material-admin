import { Icon } from '@iconify/vue'
import type { IconAliases, IconProps, IconSet } from 'vuetify'

const aliases: IconAliases = {
  collapse: 'tabler-chevron-up',
  complete: 'tabler-check',
  cancel: 'tabler-x',
  close: 'tabler-x',
  delete: 'tabler-x',
  clear: 'tabler-x',
  success: 'tabler-circle-check',
  info: 'tabler-info-circle',
  warning: 'tabler-alert-circle',
  error: 'tabler-x',
  prev: 'tabler-chevron-left',
  next: 'tabler-chevron-right',
  checkboxOn: 'custom-checked-checkbox',
  checkboxOff: 'custom-unchecked-checkbox',
  checkboxIndeterminate: 'custom-indeterminate-checkbox',
  delimiter: 'tabler-circle',
  sort: 'tabler-arrow-up',
  expand: 'tabler-chevron-down',
  menu: 'tabler-menu-2',
  subgroup: 'tabler-caret-down',
  dropdown: 'tabler-chevron-down',
  radioOn: 'custom-checked-radio',
  radioOff: 'custom-unchecked-radio',
  edit: 'tabler-pencil',
  ratingEmpty: 'custom-star-empty',
  ratingFull: 'custom-star-fill',
  ratingHalf: 'custom-star-half',
  loading: 'tabler-refresh',
  first: 'tabler-player-skip-back',
  last: 'tabler-player-skip-forward',
  unfold: 'tabler-arrows-move-vertical',
  file: 'tabler-paperclip',
  plus: 'tabler-plus',
  minus: 'tabler-minus',
}

export const iconify: IconSet = {
  component: (props: IconProps) => h(Icon, props),
}

export const icons = {
  defaultSet: 'iconify',
  aliases,
  sets: {
    iconify,
  },
}
