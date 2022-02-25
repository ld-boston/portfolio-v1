<template>
  <Header />
  <main v-bind="$attrs">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transitionName" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <footer></footer>
</template>

<script lang="ts" setup></script>
