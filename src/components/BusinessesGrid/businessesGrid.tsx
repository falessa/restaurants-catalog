import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next'
import { Box, Typography, Grid } from '@mui/material';
import { BusinessCardPreview } from '../BusinessCardPreview/businessCardPreview';
import { LoadingSpinner } from '../LoadingSpinner/loadingSpinner';
import { gql , useQuery } from '@apollo/client';
import { Business } from '../../generated/graphql';

// TODO: check if this query can be centralized somewhere as I'm using the same one in the BusinessResultsList component
const GET_BUSINESSES = gql`
    query SearchBusinesses($term: String!, $location: String!) {
        searchBusinesses(term: $term, location: $location) {
            id
            name
            rating
            photos
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

interface IBusinessGrid {
    term: string;
    location: string;
}

interface SearchBusinessesData {
    searchBusinesses: Business[];
  }

export const BusinessGrid: FC<IBusinessGrid> = (props): ReactElement => {
    const { t } = useTranslation();

    const styles = {
        businessGridBox: {
            marginTop: "50px",
            marginLeft:  "20%",
            marginRight: "20%"
        },
        titleTypography: {
            display: "flex",
            justifyContent: "center",
            marginBottom: "80px"          
        },
        loading: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '50px'
        },
    }

    // destructure props
    const {
        term,
        location
    } = props;

    // run query
    const { data, loading, error } = useQuery<SearchBusinessesData>(
        GET_BUSINESSES, {
            variables: {
                term: term,
                location: location
            }
        }
    );

    if (loading) 
      return <LoadingSpinner style={styles.loading} />
      
    if (error) {
      return (
        <Box sx={styles.businessGridBox}>
            <Typography sx={styles.titleTypography} variant="h4" color="black" fontFamily="Helvetica Neue" fontWeight={700}>
                {`${t("error.query")}`}
            </Typography>
        </Box>
      )
    }

    return(
        <Box sx={styles.businessGridBox}>
        <Typography sx={styles.titleTypography} variant="h4" color="black" fontFamily="Helvetica Neue" fontWeight={700}>
          {t('businessesGrid.title')}
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {data?.searchBusinesses.map((business, index) => (
              <Grid item xs={4} key={index}>
                <BusinessCardPreview businessData={business} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    )
}