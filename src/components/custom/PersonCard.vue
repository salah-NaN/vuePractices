<script setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const props = defineProps(["name", "years", "id"]);
</script>
<template>
  <router-link :to="'/person/' + props.id">
    <Card class="bg-[#f2e5e5]">
      <CardHeader>
        <CardTitle>{{ props.name }}</CardTitle>
        <CardDescription class="font-[16px]">{{
          props.years + " years"
        }}</CardDescription>
      </CardHeader>
    </Card>
  </router-link>
</template>
