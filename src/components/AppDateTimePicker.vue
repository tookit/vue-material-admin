<script setup lang="ts">
import FlatPickr from 'vue-flatpickr-component';
import { ref, computed, onMounted, nextTick, PropType, useAttrs } from 'vue';
import { useTheme } from 'vuetify';
import { useFocus } from '@vueuse/core';

// @ts-expect-error There won't be declaration file for it
import { VField, filterFieldProps, makeVFieldProps } from 'vuetify/lib/components/VField/VField';

// @ts-expect-error There won't be declaration file for it
import { VInput, makeVInputProps } from 'vuetify/lib/components/VInput/VInput';

// @ts-expect-error There won't be declaration file for it
import { filterInputAttrs } from 'vuetify/lib/util/helpers';

// import { useThemeConfig } from '@core/composable/useThemeConfig';

const props = defineProps({
  autofocus: Boolean,
  counter: [Boolean, Number, String] as PropType<true | number | string>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  counterValue: Function as PropType<(value: any) => number>,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  type: {
    type: String,
    default: 'text'
  },
  modelModifiers: Object as PropType<Record<string, boolean>>,
  ...makeVInputProps({
    density: 'compact',
    hideDetails: 'auto'
  }),
  ...makeVFieldProps({
    variant: 'outlined',
    color: 'primary'
  })
});

const emit = defineEmits<Emit>();

interface Emit {
  (e: 'click:control', val: MouseEvent): true;
  (e: 'mousedown:control', val: MouseEvent): true;
  (e: 'update:focused', val: MouseEvent): true;
  (e: 'update:modelValue', val: string): void;
  (e: 'click:clear', el: MouseEvent): void;
}

// inherit Attribute make false
defineOptions({
  inheritAttrs: false
});

const attrs = useAttrs();

const [rootAttrs, compAttrs] = filterInputAttrs(attrs);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [{ modelValue: _, ...inputProps }] = VInput.filterProps(props);
const [fieldProps] = filterFieldProps(props);

const refFlatPicker = ref();
const { focused } = useFocus(refFlatPicker);
const isCalendarOpen = ref(false);
const isInlinePicker = ref(false);
const isReadonly = ref(false);

// flat picker prop manipulation
if (compAttrs.config && compAttrs.config.inline) {
  isInlinePicker.value = compAttrs.config.inline;
  Object.assign(compAttrs, { altInputClass: 'inlinePicker' });
}

// v-field clear prop
const onClear = (el: MouseEvent) => {
  el.stopPropagation();

  nextTick(() => {
    emit('update:modelValue', '');

    emit('click:clear', el);
  });
};

// const { theme } = useThemeConfig();
const vuetifyTheme = useTheme();

const vuetifyThemesName = Object.keys(vuetifyTheme.themes.value);

// Themes class added to flat-picker component for light and dark support
const updateThemeClassInCalendar = () => {
  // ℹ️ Flatpickr don't render it's instance in mobile and device simulator
  if (!refFlatPicker.value.fp.calendarContainer) return;

  vuetifyThemesName.forEach((t) => {
    refFlatPicker.value.fp.calendarContainer.classList.remove(`v-theme--${t}`);
  });
  refFlatPicker.value.fp.calendarContainer.classList.add(`v-theme--${vuetifyTheme.global.name.value}`);
};

// watch(theme, updateThemeClassInCalendar)

onMounted(() => {
  updateThemeClassInCalendar();
});

const emitModelValue = (val: string) => {
  emit('update:modelValue', val);
};

const elementId = computed(() => {
  const _elementIdToken = fieldProps.id || fieldProps.label;

  return _elementIdToken ? `app-picker-field-${_elementIdToken}-${Math.random().toString(36).slice(2, 7)}` : undefined;
});
</script>

<template>
  <div class="app-picker-field">
    <!-- v-input -->
    <VLabel
      v-if="fieldProps.label"
      class="mb-1 text-body-2 text-high-emphasis"
      :for="elementId"
      :text="fieldProps.label"
    />

    <VInput
      v-bind="{ ...inputProps, ...rootAttrs }"
      :model-value="modelValue"
      :hide-details="props.hideDetails"
      :class="[
        {
          'v-text-field--prefixed': props.prefix,
          'v-text-field--suffixed': props.suffix,
          'v-text-field--flush-details': ['plain', 'underlined'].includes(props.variant)
        },
        props.class
      ]"
      class="position-relative v-text-field"
      :style="props.style"
    >
      <template #default="{ id, isDirty, isValid, isDisabled }">
        <!-- v-field -->
        <VField
          v-bind="{ ...fieldProps, label: undefined }"
          :id="id.value"
          role="textbox"
          :active="focused || isDirty.value || isCalendarOpen"
          :focused="focused || isCalendarOpen"
          :dirty="isDirty.value || props.dirty"
          :error="isValid.value === false"
          :disabled="isDisabled.value"
          @click:clear="onClear"
        >
          <template #default="{ props: vFieldProps }">
            <div v-bind="vFieldProps">
              <!-- flat-picker  -->
              <FlatPickr
                v-if="!isInlinePicker"
                v-bind="compAttrs"
                :id="elementId"
                ref="refFlatPicker"
                :model-value="modelValue"
                :placeholder="props.placeholder"
                class="flat-picker-custom-style"
                :disabled="isReadonly"
                @on-open="isCalendarOpen = true"
                @on-close="isCalendarOpen = false"
                @update:model-value="emitModelValue"
              />

              <!-- simple input for inline prop -->
              <input
                v-if="isInlinePicker"
                :value="modelValue"
                :placeholder="props.placeholder"
                class="flat-picker-custom-style"
                type="text"
              />
            </div>
          </template>
        </VField>
      </template>
    </VInput>

    <!-- flat picker for inline props -->
    <FlatPickr
      v-if="isInlinePicker"
      v-bind="compAttrs"
      ref="refFlatPicker"
      :model-value="modelValue"
      @update:model-value="emitModelValue"
      @on-open="isCalendarOpen = true"
      @on-close="isCalendarOpen = false"
    />
  </div>
</template>

<style lang="scss">
/* stylelint-disable no-descending-specificity */
@use 'flatpickr/dist/flatpickr.css';
@use '@/scss/mixins';

.flat-picker-custom-style {
  position: absolute;
  color: inherit;
  inline-size: 100%;
  inset: 0;
  outline: none;
  padding-block: 0;
  padding-inline: var(--v-field-padding-start);
}

$heading-color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
$body-color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
$disabled-color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity));

// hide the input when your picker is inline
input[altinputclass='inlinePicker'] {
  display: none;
}

.flatpickr-calendar {
  background-color: rgb(var(--v-theme-surface));
  inline-size: 16.625rem;
  margin-block-start: 0.1875rem;

  // @include mixins.elevation(4);

  .flatpickr-rContainer {
    .flatpickr-weekdays {
      block-size: 2.125rem;
      padding-inline: 0.875rem;
    }

    .flatpickr-days {
      min-inline-size: 16.625rem;

      .dayContainer {
        justify-content: center !important;
        inline-size: 16.625rem;
        min-inline-size: 16.625rem;
        padding-block-end: 0.75rem;
        padding-block-start: 0;

        .flatpickr-day {
          block-size: 2.125rem;
          font-size: 0.9375rem;
          line-height: 2.125rem;
          margin-block-start: 0 !important;
          max-inline-size: 2.125rem;
        }
      }
    }
  }

  .flatpickr-day {
    color: $body-color;

    &.today {
      border-color: rgb(var(--v-theme-primary));

      &:hover {
        border-color: rgb(var(--v-theme-primary));
        background: transparent;
        color: $body-color;
      }
    }

    &.selected,
    &.selected:hover {
      border-color: rgb(var(--v-theme-primary));
      background: rgb(var(--v-theme-primary));
      color: rgb(var(--v-theme-on-primary));

      // @include mixins.elevation(2);
    }

    &.inRange,
    &.inRange:hover {
      border: none;
      background: rgba(var(--v-theme-primary), var(--v-activated-opacity)) !important;
      box-shadow: none !important;
      color: rgb(var(--v-theme-primary));
    }

    &.startRange {
      // @include mixins.elevation(2);
    }

    &.endRange {
      // @include mixins.elevation(2);
    }

    &.startRange,
    &.endRange,
    &.startRange:hover,
    &.endRange:hover {
      border-color: rgb(var(--v-theme-primary));
      background: rgb(var(--v-theme-primary));
      color: rgb(var(--v-theme-on-primary));
    }

    &.selected.startRange + .endRange:not(:nth-child(7n + 1)),
    &.startRange.startRange + .endRange:not(:nth-child(7n + 1)),
    &.endRange.startRange + .endRange:not(:nth-child(7n + 1)) {
      box-shadow: -10px 0 0 rgb(var(--v-theme-primary));
    }

    &.flatpickr-disabled,
    &.prevMonthDay:not(.startRange, .inRange),
    &.nextMonthDay:not(.endRange, .inRange) {
      opacity: var(--v-disabled-opacity);
    }

    &:hover {
      border-color: transparent;
      background: rgba(var(--v-theme-on-surface), 0.08);
    }
  }

  .flatpickr-weekday {
    color: $heading-color;
    font-size: 0.8125rem;
    font-weight: 500;
  }

  .flatpickr-days {
    inline-size: 16.625rem;
  }

  &::after,
  &::before {
    display: none;
  }

  .flatpickr-months {
    border-block-end: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));

    .flatpickr-prev-month,
    .flatpickr-next-month {
      fill: $body-color;

      &:hover i,
      &:hover svg {
        fill: $body-color;
      }
    }
  }

  .flatpickr-current-month span.cur-month {
    font-weight: 300;
  }

  &.open {
    // Open calendar above overlay
    z-index: 2401;
  }

  &.hasTime.open {
    .flatpickr-time {
      border-color: rgba(var(--v-border-color), var(--v-border-opacity));
      block-size: auto;
    }

    .flatpickr-hour,
    .flatpickr-minute,
    .flatpickr-am-pm {
      font-size: 0.9375rem;
    }
  }
}

.v-theme--dark .flatpickr-calendar {
  box-shadow: 0 3px 14px 0 rgb(15 20 34 / 38%);
}

// Time picker hover & focus bg color
.flatpickr-time input:hover,
.flatpickr-time .flatpickr-am-pm:hover,
.flatpickr-time input:focus,
.flatpickr-time .flatpickr-am-pm:focus {
  background: transparent;
}

// Time picker
.flatpickr-time {
  .flatpickr-am-pm,
  .flatpickr-time-separator,
  input {
    color: $body-color;
  }

  .numInputWrapper {
    span {
      &.arrowUp {
        &::after {
          border-block-end-color: rgb(var(--v-border-color));
        }
      }

      &.arrowDown {
        &::after {
          border-block-start-color: rgb(var(--v-border-color));
        }
      }
    }
  }
}

//  Added bg color for flatpickr input only as it has default readonly attribute
.flatpickr-input[readonly],
.flatpickr-input ~ .form-control[readonly],
.flatpickr-human-friendly[readonly] {
  background-color: inherit;
  opacity: 1 !important;
}

// week sections
.flatpickr-weekdays {
  margin-block: 12px;
}

// Month and year section
.flatpickr-current-month {
  .flatpickr-monthDropdown-months {
    appearance: none;
  }

  .flatpickr-monthDropdown-months,
  .numInputWrapper {
    padding: 2px;
    border-radius: 4px;
    color: $heading-color;
    font-size: 0.9375rem;
    font-weight: 500;
    transition: all 0.15s ease-out;

    span {
      display: none;
    }

    .flatpickr-monthDropdown-month {
      background-color: rgb(var(--v-theme-surface));
    }

    .numInput.cur-year {
      font-weight: 500;
    }
  }
}

.flatpickr-day.flatpickr-disabled,
.flatpickr-day.flatpickr-disabled:hover {
  color: $body-color;
}

.flatpickr-months {
  padding-block: 0.75rem;
  padding-inline: 1rem;

  .flatpickr-prev-month,
  .flatpickr-next-month {
    display: flex;
    align-items: center;
    border-radius: 5rem;
    background: rgba(var(--v-theme-surface-variant), var(--v-selected-opacity));
    block-size: 1.75rem;
    inline-size: 1.75rem;
    inset-block-start: 0.75rem !important;
    margin-block: 0.1875rem;
    padding-block: 0.25rem;
    padding-inline: 0.4375rem;
  }

  .flatpickr-next-month {
    inset-inline-end: 1.05rem !important;
  }

  .flatpickr-prev-month {
    /* stylelint-disable-next-line liberty/use-logical-spec */
    right: 3.8rem;
    left: unset !important;
  }

  .flatpickr-month {
    display: flex;
    align-items: center;
    block-size: 2.125rem;

    .flatpickr-current-month {
      display: flex;
      align-items: center;
      padding: 0;
      block-size: 1.75rem;
      inset-inline-start: 0;
      text-align: start;
    }
  }
}

// Update hour font-weight
.flatpickr-time input.flatpickr-hour {
  font-weight: 400;
}
</style>
