<template>
  <div class="home">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Salary">
        <el-input type="number " v-model="form.salary"></el-input>
      </el-form-item>
      <el-form-item label="Country">
        <el-select v-model="form.country" placeholder="please select your zone">
          <el-option v-for="country in countries" :key="country" :label="country" :value="country"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Position">
        <el-select v-model="form.position" placeholder="please select your position">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import data from '../assets/data.json'

const countries = data.reduce((acc, country) => {
  if(!acc.includes(country.country)) {
    acc.push(country.country)
  }

  return acc
}, [])

export default {
  name: 'Home',
  data() {
    return {
      countries,
      form: {
        salary: '',
        country: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
  }
  }
}
</script>
