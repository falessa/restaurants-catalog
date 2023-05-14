import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next'
import { Box, Typography, Grid } from '@mui/material';
import { BusinessCardPreview } from '../BusinessCardPreview/businessCardPreview';


export const BusinessGrid: FC = (): ReactElement => {
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
    return(
        <Box sx={styles.businessGridBox}>
            <Typography
                sx={styles.titleTypography}
                variant="h4" color="black" fontFamily={"Helvetica Neue"} fontWeight={700}
            >
                {t("businessesGrid.title")}
            </Typography>
            <Box sx={{ width: '100%'}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <BusinessCardPreview />
                    </Grid>
                    <Grid item xs={4}>
                        <BusinessCardPreview />
                    </Grid>
                    <Grid item xs={4}>
                        <BusinessCardPreview />
                    </Grid>
                    <Grid item xs={4}>
                        <BusinessCardPreview />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}