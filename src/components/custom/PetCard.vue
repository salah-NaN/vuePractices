<script setup>
import axios from "axios";
import { defineProps } from "vue";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

//constants
const URL = "http://127.0.0.1:8000/api/pets/";

// state
const props = defineProps(["name", "years", "type", "id"]);

// funcs
const handleDeletePet = async () => {
  console.log(props.id);
  const { data } = await axios.delete(URL + props.id);
  console.log(data);
};
</script>
<template>
  <Card class="bg-[#e2ba94]">
    <CardHeader>
      <CardTitle>{{ props.name }}</CardTitle>
      <p class="text-[15px] font-medium">{{ props.type }}</p>
      <CardDescription class="font-[16px]">{{
        props.years + " years"
      }}</CardDescription>
    </CardHeader>
    <CardFooter>
      <div @click="handleDeletePet" class="cursor-pointer text-red-800">
        <p class="underline underline-offset-1">Delete</p>
      </div>
    </CardFooter>
  </Card>
</template>
