<script setup>
import { ref } from 'vue';

const props = defineProps({
  openSidebar: {
    type: Boolean,
    required: true
  }
})
const links = ref([
  { name: 'Tipography', href: '/tipography' },
  { name: 'Button', href: '/button' }
])
</script>

<template>
  <div :class="['sidebar', { 'sidebar_isopen': openSidebar }]">
    <router-link class="sidebar__link" v-for="(item, index) in links" :to="item.href" :key="index">{{ item.name }}</router-link>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  left: 0;
  top: 62px;
  height: 100%;
  background: #fff;
  position: fixed;
  width: 250px;
  padding: 20px;
  transition: .2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-250px);
  &_isopen {
    transform: translateX(0px);
  }
  &__link {
    display: block;
    border-radius: 12px;
    padding: 10px;
    border: 2px solid #fff;
    transition: .2s;
    font-weight: bold;
    margin-bottom: 10px;
    &:hover {
      border-color: var(--primary);
    }
  }
}
</style>