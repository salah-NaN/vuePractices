<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import PetCard from "@/components/custom/PetCard.vue";
import Dialog from "@/components/custom/AddPetDialog.vue";

// constants
const URL = "http://127.0.0.1:8000/api/people/";

// state
const petsAndPerson = ref({});
const route = useRoute();
const id = route.params.id;
// onMounted
onMounted(async () => {
  const { data } = await axios.get(URL + `${id}/pets`);
  petsAndPerson.value = data;

  console.log(data);
});
</script>
<template>
  <router-link class="flex items-center gap-3" to="/">
    <img class="mt-6 size-5" src="/arrow-left.svg" />
    <p class="font-[14px] mt-6">Back to people</p>
  </router-link>

  <div class="mt-6 mb-14 flex justify-between items-center">
    <h2 class="text-5xl text-[#131313]">
      {{ petsAndPerson?.person?.name }}
    </h2>
    <Dialog :id="id"></Dialog>
  </div>

  <ul class="grid grid-cols-4 gap-7">
    <li v-for="(pet, index) in petsAndPerson?.pets" :key="index">
      <PetCard
        :name="pet.name"
        :type="pet.type"
        :years="pet.age"
        :id="pet.id"
      ></PetCard>
    </li>
  </ul>
</template>
