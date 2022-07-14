import { useQuery, gql } from '@apollo/client';

const GET_CUSTOMERS = gql`
query{
    customers{
        consumers{
            id
            name
            
        }
    }
}
`

export const useCustomers = () => {
    const {error, data, loading } = useQuery(GET_CUSTOMERS);

    return {
        error,
        data,
        loading,
    };
    
   
}