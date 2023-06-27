import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Chip, Typography, Rating} from '@mui/material';
import { Image } from 'mui-image';
import { Business } from '../../generated/graphql';
import CommentIcon from '@mui/icons-material/Comment';
import notFoundImage from '../../resources/images/image_not_found.png'

interface IBusinessMainDetailsCard {
    businessData?: Business
}

export const BusinessMainDetailsCard: FC<IBusinessMainDetailsCard> = (props): ReactElement => {
    const { t } = useTranslation();
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
                    src={businessData?.photos?.[0] || notFoundImage || ""}
                    height='220px'
                    width='220px'
                    alt='business-card-preview'
                    duration={0}
                />
            </Box>
            <Box sx={styles.businessMainDetailsAtRight}>
                <Typography sx={styles.businessMainDetailsName}>
                    {businessData?.name}
                </Typography>

                <Box sx={styles.businessMainDetailsPriceAddressBox}>
                    <Chip size="small" label="$$"/>
                    <Typography sx={styles.businessMainDetailsAddressText}>
                        {businessData?.location?.address1 + `, ` + businessData?.location?.postal_code}
                    </Typography>
                </Box>

                <Typography
                    sx={businessData?.hours?.[0]?.is_open_now ? styles.businessMainDetailsIsOpen : styles.businessMainDetailsIsClosed}
                >
                    {businessData?.hours?.[0]?.is_open_now ? t("businessDetail.open") : t("businessDetail.closed")}
                </Typography>

                <Box sx={{display: "block"}}>
                    <Box sx={styles.businessMainDetailsReviewBox}>
                        <CommentIcon color="action"/>
                        <Typography sx={styles.businessMainDetailsReviewText}>
                            {businessData?.reviews?.[0]?.text}
                        </Typography>
                    </Box>
                    <Typography sx={styles.businessMainDetailsReviewer}>
                            {t("businessDetail.reviewSubmittedBy") }
                            <Box sx={{display: "inline-block", marginLeft: "5px"}}>
                                <a href={businessData?.reviews?.[0]?.user?.profile_url||""} target="_blank">
                                    {businessData?.reviews?.[0]?.user?.name}
                                </a>
                            </Box>
                    </Typography>
                </Box>

                <Box sx={styles.businessMainDetailsRatingBox}>
                    <Rating name="business-rating" readOnly precision={0.1} value={businessData?.rating} />
                    <Typography sx={styles.businessMainDetailsRatingNumber }>
                        {businessData?.rating} ({businessData?.review_count || 0} {t("businessDetail.reviews")})
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}