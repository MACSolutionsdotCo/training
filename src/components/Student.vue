<template lang="html">
  <div>
    <vs-table stripe :data="students.edges">
      <template v-slot:header>
        <h3>
          Student
        </h3>
      </template>
    <template v-slot:thead>
  <vs-th>Name</vs-th>
  <vs-th>Birthday</vs-th>
  <vs-th>Nro</vs-th>
  <vs-progress v-if="$apollo.queries.students.loading" indeterminate color="primary">primary</vs-progress>
</template>

      <template v-slot:default="{data}">
  <vs-tr :key="item.node.id" v-for="item in data">
    <vs-td :data="item.node.name">{{item.node.name}}</vs-td>

    <vs-td :data="item.node.birthday">{{item.node.birthday || '-'}}</vs-td>

    <vs-td :data="item.node.publicId">{{item.node.publicId}}</vs-td>
  </vs-tr>
</template>
    </vs-table>
    <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">  
    <vs-button ref="loadableButton" type="border" v-if="students.pageInfo.hasNextPage" :disabled="$apollo.queries.students.loading" v-on:click="loadMore">Load more</vs-button>
    </vs-row>
  </div>
    
</template>

<script>
import gql from "graphql-tag";
import { studentsConnectionFragment } from "../fragments";
import Layout from "./Layout.vue";
let STUDENTS_CONNECTION = gql`
  query Students($first: Int = 10, $after: String) {
    students: students_connection(first: $first, after: $after) {
      ...studentsConnectionFragment
    }
  }
  ${studentsConnectionFragment}
`;
export default {
  components: { Layout },
  apollo: {
    students: {
      query: STUDENTS_CONNECTION,
      variables() {
        // Use vue reactive properties here
        return {
          first: this.first,
          after: this.after
        };
      }
    }
  },
  data: () => ({
    students: {
      edges: [],
      pageInfo: {}
    },
    first: 10,
    after: null,
    backgroundLoading: "primary",
    colorLoading: "#fff"
  }),
  methods: {
    loadMore() {
      let {
        $apollo,
        first,
        $vs,
        backgroundLoading,
        colorLoading,
        $refs
      } = this;
      let {
        vm: {
          students: { pageInfo }
        }
      } = $apollo;
      console.log($apollo);
      console.log($vs);
      // $vs.loading({
      //   background: backgroundLoading,
      //   color: colorLoading,
      //   container: $refs.loadableButton,
      //   scale: 0.45
      // });
      $apollo.queries.students.fetchMore({
        variables: {
          first,
          after: pageInfo.endCursor
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          console.log("previousResult", previousResult);
          console.log("fetchMoreResult", fetchMoreResult);
          const newStudents = fetchMoreResult.students.edges;
          const pageInfo = fetchMoreResult.students.pageInfo;

          // $vs.loading.close($refs.loadableButton);

          return {
            students: {
              __typename: previousResult.students.__typename,
              // Merging the tag list
              edges: [...previousResult.students.edges, ...newStudents],
              pageInfo
            }
          };
        }
      });
    }
  }
};
</script>