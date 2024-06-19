<script setup lang="ts">
import { ref, defineProps } from "vue";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

//constants
const URL = "http://127.0.0.1:8000/api/pets";

// states
const name = ref("");
const type = ref("");
const age = ref(0);

// props
const id = defineProps(["id"]);

async function handleAddPet() {
  const body = {
    person_id: id.id * 1,
    name: name.value,
    type: type.value,
    age: age.value,
  };
  console.log(body);
  const { data } = await axios.post(URL, body);
}
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline"> Add pet </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>New pet</DialogTitle>
        <DialogDescription> Add a new pet! </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="name" class="text-right"> Name </Label>
          <Input v-model="name" id="name" class="col-span-3" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="type" type="text" class="text-right"> Type </Label>
          <Input v-model="type" id="type" type="text" class="col-span-3" />
        </div>
        <div class="flex justify-center items-center gap-4 mt-7">
          <Label for="type" type="text" class="text-right"> Age </Label>
          <NumberField class="w-1/3" v-model="age">
            <NumberFieldContent>
              <NumberFieldDecrement />
              <NumberFieldInput />
              <NumberFieldIncrement />
            </NumberFieldContent>
          </NumberField>
        </div>
      </div>
      <DialogFooter>
        <Button @click="handleAddPet"> Save changes </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
