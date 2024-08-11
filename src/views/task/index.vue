<template>
  <div>
    <FooterTabbar />
    <TaskList :taskList="taskList" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import FooterTabbar from "@/components/FooterTabbar.vue";
import TaskList from "@/components/list/TaskList.vue";
const taskList = reactive([
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
