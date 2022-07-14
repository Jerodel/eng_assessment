import { gql, useQuery } from '@apollo/client';

const GET_CUSTOMER = gql`
query GetCustomer($id: ID!){
    customer(id: $id) {
        name,
        id,
        age,
    }
}
`
useCharacter = (id) => {
    const {data, error, loading} = useQuery(GET_CUSTOMER, {
        variables: {
            id,
        }
    });

    return {
        data,
        error,
        loading,
    }
}
