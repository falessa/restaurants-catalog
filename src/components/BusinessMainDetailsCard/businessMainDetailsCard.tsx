import React, { FC, ReactElement } from 'react';
import { Box, Chip, Typography, Rating} from '@mui/material';
import { Image } from 'mui-image';
import { Business } from '../../generated/graphql';
import CommentIcon from '@mui/icons-material/Comment';
import notFoundImage from '../../resources/images/image_not_found.png'

interface IBusinessMainDetailsCard {
    businessData?: Business
}

export const BusinessMainDetailsCard: FC<IBusinessMainDetailsCard> = (props): ReactElement => {
    // destructure props
    const {
        businessData
    } = props;

    const styles = {
        businessMainDetailsCardContainer: {
            display: "flex",
            width: "50%"
        },
        businessMainDetailsAtRight: {
            display: "block",
            marginLeft: "20px"
        },
        businessMainDetailsName: {
            fontWeight: 700,
            fontSize: 20,
            fontFamily: "Helvetica Neue",
            // marginBottom: "0px"
        },
        businessMainDetailsIsOpen: {
            fontWeight: 700,
            fontSize: 15,
            fontFamily: "Helvetica Neue",
            color: "green"
        },
        businessMainDetailsIsClosed: {
            fontWeight: 700,
            fontSize: 15,
            fontFamily: "Helvetica Neue",
            color: "red"
        },
        businessMainDetailsPrice: {
            fontWeight: 500,
            fontSize: 15,
            fontFamily: "Helvetica Neue",
        },
        businessMainDetailsRatingBox: {
            display: "flex",
            marginTop: "12px"
        },
        businessMainDetailsRatingNumber: {
            marginLeft: "5px"
        },
        businessMainDetailsPriceAddressBox: {
            display: "flex",
            color: "grey",
            marginTop: "2px"
        },
        businessMainDetailsAddressText: {
            marginLeft: "10px",
            marginBottom: "5px"
        },
        businessMainDetailsReviewBox: {
            display: "flex",
            marginTop: "10px"
        },
        businessMainDetailsReviewText: {
            marginLeft: "10px",
            fontSize: "15px"
        },
        businessMainDetailsReviewer: {
            fontSize: "15px",
            marginTop: "5px"
        }
    }

    return(
        <Box sx={styles.businessMainDetailsCardContainer}>
            <Box>
                <Image 
                    src={"https://s3-media4.fl.yelpcdn.com/bphoto/UEdmb9VygVE5paSau66VCg/o.jpg"}
                    height='200px'
                    width='200px'
                    alt='business-card-preview'
                    duration={0}
                />
            </Box>
            <Box sx={styles.businessMainDetailsAtRight}>
                <Typography sx={styles.businessMainDetailsName}>
                    Business name
                </Typography>

                <Box sx={styles.businessMainDetailsPriceAddressBox}>
                    <Chip size="small" label="$$"/>
                    <Typography sx={styles.businessMainDetailsAddressText}>
                        Carrer d'Aribau, 86 08036
                    </Typography>
                </Box>

                <Typography sx={styles.businessMainDetailsIsOpen}>
                    Open
                </Typography>

                <Box sx={{display: "block"}}>
                    <Box sx={styles.businessMainDetailsReviewBox}>
                        <CommentIcon color="action"/>
                        <Typography sx={styles.businessMainDetailsReviewText}>
                            This place has really great pizza! Just be prepared to come ready to eat an entire pie on your own or to share with someone. The staff is friendly and this...
                        </Typography>
                    </Box>
                    <Typography sx={styles.businessMainDetailsReviewer}>
                            Review submitted by Jessica P.
                    </Typography>
                </Box>

                <Box sx={styles.businessMainDetailsRatingBox}>
                    <Rating name="business-rating" readOnly precision={0.1} value={4} />
                    <Typography sx={styles.businessMainDetailsRatingNumber }>
                        4 (352) reviews
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}