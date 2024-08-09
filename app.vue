<template>
  <div>
    <button @click="createFile">Create normal File</button>
    <button @click="createHtml">Create HTML File</button>
  </div>
</template>

<script setup lang="ts">
const responseHtml = ref();
const responseFile = ref();
const createHtml = async () => {
  try {
    responseHtml.value = await $fetch('api/createHtmlFile');
    console.log('should work', responseHtml.value);
  } catch (error) {
    console.log('WTF is happening here?? ', error);
  }
};

const createFile = async () => {
  try {
    responseFile.value = await $fetch('api/createOtherFile');
    console.log('should work', responseFile.value);
  } catch (error) {
    console.log('WTF is happening here?? ', error);
  }
};
</script>
