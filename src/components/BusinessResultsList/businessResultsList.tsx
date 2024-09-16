import React, { FC, ReactElement, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, List, ListItem, Divider, Typography, Pagination } from '@mui/material';
import { gql , useQuery } from '@apollo/client';
import { Business } from '../../generated/graphql';
import { BusinessMainDetailsCard } from '../../components/BusinessMainDetailsCard/businessMainDetailsCard';
import { LoadingSpinner } from '../LoadingSpinner/loadingSpinner';
import { SearchContext } from '../../context/SearchContext';

export const GET_BUSINESSES = gql`
    query SearchBusinesses($term: String!, $location: String!, $offset: Int, $limit: Int) {
        searchBusinesses(term: $term, location: $location, offset: $offset, limit: $limit) {
            total
            businesses {
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
    }
`;

interface SearchBusinessesData {
    searchBusinesses: {
        businesses: Business[]
        total: number;
    };
}

export const BusinessResultsList: FC = (): ReactElement => {
    const { t } = useTranslation();
    const { term, city } = useContext(SearchContext)

    const [currentPage, setCurrentPage] = useState(1);  // Track the current page
    const itemsPerPage = 10;  // Define how many businesses per page
    const offset = (currentPage - 1) * itemsPerPage; // Calculate the offset for GraphQL query based on the current page

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
        },
        pagination: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 20
        }
    }

    // run query
    const { data, loading, error, refetch } = useQuery<SearchBusinessesData>(
        GET_BUSINESSES, {
            variables: {
                term: term,
                location: city,
                offset: offset,
                limit: itemsPerPage
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

    if (!data?.searchBusinesses || data.searchBusinesses.total === 0) {
        return (
            <Box sx={styles.businessListBox}>
                <Typography sx={styles.resultsListTitle}>
                    {`${t("businessResultsList.title.noResults")} "${capitalize(term)}" ${t("businessResultsList.title.in")} ${capitalize(city)}`}
                </Typography>
            </Box>
        );
    }

    // Pagination: calculate the total number of pages
    const totalPages = Math.ceil(data.searchBusinesses.total / itemsPerPage);

    // Pagination: handle page change
    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
        refetch({ offset: (page - 1) * itemsPerPage });  // Refetch data for the selected page
    };

    return(
        <Box sx={styles.businessListBox}>
            <Typography sx={styles.resultsListTitle}>
                {`${t("businessResultsList.title.looking")} "${capitalize(term)}" ${t("businessResultsList.title.in")} ${capitalize(city)}`}
            </Typography>

            <List>
                
                {data?.searchBusinesses?.businesses.map((business: Business) => (
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
            <Pagination 
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                shape="rounded"
                size="large"
                color="primary"
                style={styles.pagination}
            />
        </Box>
    )
}