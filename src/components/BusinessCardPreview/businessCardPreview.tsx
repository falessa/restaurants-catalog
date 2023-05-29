import React, { FC, ReactElement } from 'react';
import { Box, Typography, Rating} from '@mui/material';
import { Image } from 'mui-image';
import { Business } from '../../generated/graphql';
import notFoundImage from '../../resources/images/image_not_found.png'

interface IBusinessCardPreview {
    businessData: Business
}

export const BusinessCardPreview: FC<IBusinessCardPreview> = (props): ReactElement => {
    // destructure props
    const {
        businessData
    } = props;

    const styles = {
        businessCard: {
            marginBottom: "50px",
        },
        businessCardPreviewTitle: {
            fontSize: "16px",
            fontWeight: "600",
            fontFamily: "Helvetica Neue"
        },
        businessCardPreviewSubtitle: {
            marginBottom: "10px",
            fontSize: "14px",
            fontFamily: "Helvetica Neue"
        },
        businessCardPreviewImage: {
            marginBottom: "5px",
            justifyContent: "center",
            alignItems: "center",
        }
    }

    return(
        <Box sx={styles.businessCard}>
            <Box sx={styles.businessCardPreviewImage}>
                <Image 
                    src={businessData.photos?.[0] || notFoundImage || ""}
                    height='200px'
                    width='200px'
                    alt='business-card-preview'
                    duration={0}
                />
            </Box>

            <Typography sx={styles.businessCardPreviewTitle} >
                {businessData.name}
            </Typography>

            <Typography
                sx={styles.businessCardPreviewSubtitle}
                variant="body1"
            >
                {businessData.location?.address1 + ` ` + businessData.location?.postal_code}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Rating name="business-rating" readOnly precision={0.1} value={businessData.rating} />
                <Typography
                    sx={styles.businessCardPreviewSubtitle}
                    variant="body1"
                    marginLeft={1}
                >
                    {businessData.rating} ({businessData.review_count || 0} reviews)
                </Typography>
            </Box>
        </Box>
    )
}