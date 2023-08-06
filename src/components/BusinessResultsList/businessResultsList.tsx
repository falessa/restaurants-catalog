import React, { FC, ReactElement, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, List, ListItem, Divider, Typography } from '@mui/material';
import { gql , useQuery } from '@apollo/client';
import { Business } from '../../generated/graphql';
import { BusinessMainDetailsCard } from '../../components/BusinessMainDetailsCard/businessMainDetailsCard';
import { LoadingSpinner } from '../LoadingSpinner/loadingSpinner';
import { SearchContext } from '../../context/SearchContext';

export const GET_BUSINESSES = gql`
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
            reviews {
                text
                url
                user {
                    name
                    profile_url
                }
            }
        }
    }
`;

interface SearchBusinessesData {
    searchBusinesses: Business[];
}

export const BusinessResultsList: FC = (): ReactElement => {
    const { t } = useTranslation();
    const { term, city } = useContext(SearchContext)

    const capitalize = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    
    const styles = {
        businessListBox: {
            width: '100%',
            marginLeft: 4,
            marginTop: 4
        },
        businessListItemBox: { 
            width: '100%',
        },
        dividerBox: {
            width: '50%',
            marginTop: 2,
            marginBottom: 2
          },
        resultsListTitle: {
            fontWeight: 700,
            fontSize: 25,
            fontFamily: "Helvetica Neue",
            marginBottom: 1
        },
        loading: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50vh'
          }
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

    if (loading) {
        return <LoadingSpinner style={styles.loading}/>
    }

    if (error) {
        return (
            <Box sx={styles.businessListBox}>
                <Typography sx={styles.resultsListTitle}>
                    {`${t("error.query")}`}
                </Typography>
            </Box>
        )
    }

    if (!data?.searchBusinesses || data.searchBusinesses.length === 0) {
        return (
            <Box sx={styles.businessListBox}>
                <Typography sx={styles.resultsListTitle}>
                    {`${t("businessResultsList.title.noResults")} "${capitalize(term)}" ${t("businessResultsList.title.in")} ${capitalize(city)}`}
                </Typography>
            </Box>
        );
    }


    return(
        <Box sx={styles.businessListBox}>
            <Typography sx={styles.resultsListTitle}>
                {`${t("businessResultsList.title.looking")} "${capitalize(term)}" ${t("businessResultsList.title.in")} ${capitalize(city)}`}
            </Typography>

            <List>
                
                {data?.searchBusinesses?.map((business: Business) => (
                    <React.Fragment key={business.id}>
                        <ListItem alignItems="flex-start">
                            <Box sx={styles.businessListItemBox}>
                                <BusinessMainDetailsCard businessData={business}/>
                            </Box>
                        </ListItem>
                        <Box sx={styles.dividerBox}>
                            <Divider variant="middle" component="li" />
                        </Box>
                    </React.Fragment>
                ))}
            </List>
        </Box>
    )
}