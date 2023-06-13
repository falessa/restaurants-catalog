import React, { FC, ReactElement, useContext } from 'react';
import { Box, List, ListItem, Divider } from '@mui/material';
import { gql , useQuery } from '@apollo/client';
import { Business } from '../../generated/graphql';
import { BusinessMainDetailsCard } from '../../components/BusinessMainDetailsCard/businessMainDetailsCard';
import { SearchContext } from '../../context/SearchContext';

const GET_BUSINESSES = gql`
    query SearchBusinesses($term: String!, $location: String!) {
        searchBusinesses(term: $term, location: $location) {
            id
            name
            rating
            photos
            hours {
                is_open_now
            }
            location {
                address1
                postal_code
                formatted_address
                city
            }
            review_count
        }
    }
`;

interface SearchBusinessesData {
    searchBusinesses: Business[];
  }

interface IBusinessResultsList {
    searchBusinesses?: Business[]
}


export const BusinessResultsList: FC = (): ReactElement => {
    const { term, city } = useContext(SearchContext)


    const styles = {
        businessListBox: {
            width: '100%',
            marginLeft: 2
        },
        businessListItemBox: { 
            width: '100%',
        },
        dividerBox: {
            width: '50%',
            marginTop: 2,
            marginBottom: 2
          },
    }

    // run query
    const { data, loading, error } = useQuery<SearchBusinessesData>(
        GET_BUSINESSES, {
            variables: {
                term: term,
                location: city
            }
        }
    );

    if (loading) return <div>Loading</div>;
    if (error) return <div>error</div>;

    return(
        <List sx={styles.businessListBox}>
              
            {data?.searchBusinesses?.map((business: Business) => (
                <>
                    <ListItem alignItems="flex-start" key={business.id}>
                        <Box sx={styles.businessListItemBox}>
                            <BusinessMainDetailsCard businessData={business}/>
                        </Box>
                    </ListItem>
                    <Box sx={styles.dividerBox}>
                        <Divider variant="middle" component="li" />
                    </Box>
                </>
            ))}

        </List>
    )
}