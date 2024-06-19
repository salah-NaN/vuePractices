<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import PersonCard from "@/components/custom/PersonCard.vue";

// constants
const URL = "http://127.0.0.1:8000/api/people";

// state
const people = ref([]);

//onMounted
onMounted(async () => {
  const { data } = await axios.get(URL);
  people.value = data;
});
</script>

<template>
  <h2 class="text-5xl text-[#131313] mt-12 mb-14">Users registered</h2>
  <ul class="grid grid-cols-4 gap-7">
    <li v-for="(person, index) in people" :key="index">
      <PersonCard
        :name="person.name"
        :years="person.age"
        :id="person.id"
      ></PersonCard>
    </li>
  </ul>
</template>
