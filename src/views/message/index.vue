<template>
  <div>
    <FooterTabbar />
    <MessageList :messageList="messageList" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import FooterTabbar from "@/components/FooterTabbar.vue";
import MessageList from "@/components/list/MessageList.vue";
const messageList = reactive([
  {
    id: 1,
    title: "任务1",
    content: "任务1的内容",
  },
  {
    id: 2,
    title: "任务2",
    content: "任务2的内容",
  },
  {
    id: 3,
    title: "任务3",
    content: "任务3的内容",
  },
]);
</script>

<style scoped></style>
