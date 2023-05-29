<script setup>

const props = defineProps({
  disabled: {
    type: Boolean
  },
  lable: {
    type: String,
    default: 'Button'
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value) => {
      return ['primary', 'second', 'sucsses', 'info', 'warning', 'danger'].includes(value)
    }
  },
  rounded: {
    type: Boolean
  },
  outlined: {
    type: Boolean
  },
  icon: {
    type: String
  },
  size: {
    type: String,
    default: 'normal',
    validator: (value) => {
      return ['normal', 'large'].includes(value)
    }
  }
})

const emit = defineEmits(['click'])

const clickOnButton = () => {
  emit('click')
}
</script>

<template>
  <button
    :class="['btn', `btn_${color}`, { 'btn_rounded': rounded }, { 'btn_outlined': outlined }, { 'btn_icon': icon }, { 'btn_large': size === 'large' }]"
    :disabled="disabled"
    @click="clickOnButton"
  >
    <span v-if="icon">
      <font-awesome-icon :icon="`fa-regular fa-${icon}`"/>
    </span>
    <span v-else>{{ lable }}</span>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 20px;
  height: 40px;
  color: #fff;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: .2s;
  &_primary {
    background-color: var(--primary);
    border: 1px solid var(--primary);
    &:enabled:hover {
      background-color: var(--primary-hover);
    }
  }
  &_second {
    background-color: var(--second);
    border: 1px solid var(--second);
    &:enabled:hover {
      background-color: var(--second-hover);
    }
  }
  &_sucsses {
    background-color: var(--sucsses);
    border: 1px solid var(--sucsses);
    &:enabled:hover {
      background-color: var(--sucsses-hover);
    }
  }
  &_info {
    background-color: var(--info);
    border: 1px solid var(--info);
    &:enabled:hover {
      background-color: var(--info-hover);
    }
  }
  &_warning {
    background-color: var(--warning);
    border: 1px solid var(--warning);
    &:enabled:hover {
      background-color: var(--warning-hover);
    }
  }
  &_danger {
    background-color: var(--danger);
    border: 1px solid var(--danger);
    &:enabled:hover {
      background-color: var(--danger-hover);
    }
  }
  &_rounded {
    border-radius: 15px;
  }
  &:disabled {
    opacity: .6;
    cursor: default;
  }
  &_outlined {
    background-color: transparent;
    color: #000;
    &:hover {
      color: #fff;
    }
  }
  &_icon {
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  &_large {
    height: 48px;
    padding: 0 30px;
  }
}
</style>