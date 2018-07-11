<template>
  <div class="apollo-example">
    <ApolloQuery :query="require('../graphql/AllSalaries.gql')">
      <template slot-scope="{ result: { loading, error, data }, isLoading }">
        <div v-if="loading || isLoading" class="loading apollo">Loading...</div>
        <div v-else-if="error" class="error apollo">An error occured</div>
        <div v-else-if="data" class="result apollo">
          <el-table :data="data.salaries" :default-sort="{prop: 'salary', order: 'descending'}">
            <el-table-column sortable prop="salary" label="Salary">
            </el-table-column>
            <el-table-column prop="position" label="Position">
            </el-table-column>
            <el-table-column prop="country" label="Country">
            </el-table-column>
            <el-table-column prop="city" label="City">
            </el-table-column>
          </el-table>
        </div>
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<style scoped>
.form,
.input,
.apollo,
.message {
  padding: 12px;
}

.input {
  font-family: inherit;
  font-size: inherit;
  border: solid 2px #ccc;
  border-radius: 3px;
}

.error {
  color: red;
}
</style>
