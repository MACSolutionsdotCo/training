import gql from "graphql-tag";

export const studentPageInfoFragment = gql`
  fragment studentPageInfoFragment on studentsConnection {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
`;

export const minimalEdgeStudentFragment = gql`
  fragment minimalEdgeStudentFragment on studentsConnection {
    ...studentPageInfoFragment
    edges {
      cursor
      node {
        id
        name
      }
    }
  }
  ${studentPageInfoFragment}
`;

export const studentsConnectionFragment = gql`
  fragment studentsConnectionFragment on studentsConnection {
    ...studentPageInfoFragment
    edges {
      cursor
      node {
        birthday
        id
        name
        publicId
      }
    }
  }
  ${studentPageInfoFragment}
`;
