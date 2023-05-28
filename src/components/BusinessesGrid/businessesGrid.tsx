import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next'
import { Box, Typography, Grid } from '@mui/material';
import { BusinessCardPreview } from '../BusinessCardPreview/businessCardPreview';
import { gql , useQuery } from '@apollo/client';
import { Business } from '../../generated/graphql';

const GET_BUSINESSES = gql`
    query SearchBusinesses($term: String!, $location: String!) {
        searchBusinesses(term: $term, location: $location) {
            name
            rating
            photos
            location {
                formatted_address
            }
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
            marginBottom: "80px",
            // backgroundColor: "green"                
        }
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

    if (loading) return <div>Loading</div>;
    if (error) return <div>error</div>;

    return(
        <Box sx={styles.businessGridBox}>
        <Typography sx={styles.titleTypography} variant="h4" color="black" fontFamily="Helvetica Neue" fontWeight={700}>
          {t('businessesGrid.title')}
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {data?.searchBusinesses.map((business, index) => (
              <Grid item xs={4} key={index}>
                <BusinessCardPreview
                  name={business.name}
                  rating={business.rating}
                  formattedAddress={business.location?.formatted_address}
                  photo={business.photos?.[0] || ''}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    )
}