import React, { FC, ReactElement } from 'react';
import { Box, Typography} from '@mui/material';
import { Image } from 'mui-image';
export type Maybe<T> = T | null | undefined;
export type Scalars = {
    ID: { input: string | number; output: string; }
    String: { input: string; output: string; }
    Boolean: { input: boolean; output: boolean; }
    Int: { input: number; output: number; }
    Float: { input: number; output: number; }
    GenericScalar: { input: any; output: any; }
  };

interface IBusinessCardPreview {
    name: Maybe<string>;
    rating: Maybe<number>;
    formattedAddress: Maybe<string>;
    // photos: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    photo: string;
}

export const BusinessCardPreview: FC<IBusinessCardPreview> = (props): ReactElement => {
    // destructure props
    const {
        name, 
        rating,
        formattedAddress,
        photo
    } = props;

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
                    src={photo}
                    height='200px'
                    width='200px'
                    alt='business-card-preview'
                    duration={0}
                />
            </Box>
            <Typography fontSize={16} fontFamily={"Helvetica Neue"} fontWeight={600}>
                {name}
            </Typography>
            <Typography
                sx={styles.businessCardPreviewSubtitle}
                variant="body1" fontFamily={"Helvetica Neue"}
            >
                {formattedAddress}
            </Typography>
            <Typography
                sx={styles.businessCardPreviewSubtitle}
                variant="body1" fontFamily={"Helvetica Neue"}
            >
                {rating}
            </Typography>
        </Box>
    )
}