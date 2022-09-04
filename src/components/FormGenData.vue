<template lang="html">
 <layout>
 <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" class="form-gen">
   <h2>Generate teacher</h2>
    <vs-input
      placeholder="start from id"
      v-model="id"/>
      <vs-input
      placeholder="total record to be generated"
      v-model="total"/>
      <vs-button color="primary" type="border" v-on:click="generate" icon="save">Generate</vs-button>
  </vs-row>
</layout>
</template>

<script>
import gql from "graphql-tag";
import faker from "faker";
import Layout from "./Layout.vue";

const GENERATE_DATA = gql`
  mutation insertTeacher($objects: [teachers_insert_input!]!) {
    insertTeacher(objects: $objects) {
      affected_rows
      returning {
        id
        name
        publicId
        birthday
      }
    }
  }
`;
export default {
  name: "FormGenData",
  components: {
    Layout
  },
  data() {
    return {
      id: 1,
      total: 10
    };
  },
  methods: {
    generate() {
      console.log(this.id);
      console.log(this.total);
      /* eslint-disable radix */
      let id = parseInt(this.id);
      let total = parseInt(this.total);
      if (isNaN(id) || isNaN(total)) {
        alert("All inputs are required and must be a number");
        return;
      }
      console.log(this.$apollo);
      let objects = Array.from({ length: total }, (v, i) => ({
        id: id + i,
        name: faker.name.firstName() + " " + faker.name.lastName(),
        birthday: faker.date.past()
      }));
      this.$apollo.mutate({
        mutation: GENERATE_DATA,
        variables: {
          objects
        },
        update: (cache, { data: { insertTeacher } }) => {
          // Read the data from our cache for this query.
          // eslint-disable-next-line
          console.log(insertTeacher);
        }
      });
    }
  }
};
</script>

<style lang="css" scoped>
.form-gen .vs-input {
  margin: 10px;
}
</style>