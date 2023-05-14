import React, { FC, ReactElement } from 'react';
import { Box, Typography} from '@mui/material';
import { Image } from 'mui-image';

export const BusinessCardPreview: FC = (): ReactElement => {
    const styles = {
        businessCardPreviewTitle: {
            // TODO
        },
        businessCardPreviewSubtitle: {
            marginBottom: "10px",
            fontSize: "14px",
        },
        businessCardPreviewImage: {
            marginBottom: "5px",
            justifyContent: "center",
            alignItems: "center",
        }
    }

    return(
        <Box>
            <Box sx={styles.businessCardPreviewImage}>
                <Image 
                    src="https://s3-media2.fl.yelpcdn.com/bphoto/gJ78UUoWz4xB03kI5lKglA/o.jpg"
                    height='200px'
                    width='200px'
                    alt='business-card-preview'
                    duration={0}
                />
            </Box>
            <Typography fontSize={16} fontFamily={"Helvetica Neue"} fontWeight={600}>
                {"Bar Eixample"}
            </Typography>
            <Typography
                sx={styles.businessCardPreviewSubtitle}
                variant="body1" fontFamily={"Helvetica Neue"}
            >
                {"C/ de Còrsega, 219"}
            </Typography>
            <Typography
                sx={styles.businessCardPreviewSubtitle}
                variant="body1" fontFamily={"Helvetica Neue"}
            >
                {"Rating 4.2/5"}
            </Typography>
        </Box>
    )
}