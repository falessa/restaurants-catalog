import { render, screen } from "@testing-library/react";
import { BusinessMainDetailsCard } from "../businessMainDetailsCard";
import { Business } from "../../../generated/graphql";
import { renderToStringWithData } from "@apollo/client/react/ssr";

const businessData : Business = {
    id: "abc123",
    name: "Pizza Danri",
    photos: ['photo1.jpg', 'photo2.jpg'],
    location: {
        address1: "Rivadavia 62",
        postal_code: "4230"
    },
    hours: [
        {
            is_open_now: true
        }
    ],
    rating: 5,
    review_count: 126
}

test("BusinessMainDetailsCard renders", () => {
    render(<BusinessMainDetailsCard businessData={businessData}/>)

    screen.getByText(`${businessData.name}`);
    screen.getByText(`${businessData.location?.address1}, ${businessData.location?.postal_code}`);
    screen.getByText(`businessDetail.open`); // translation not mocked, that's why I'm using the key in some checks
    screen.getByText(`${businessData.rating} (${businessData.review_count} businessDetail.reviews)`);
    screen.getByText(`businessDetail.reviewSubmittedBy`);



    const photoElement = screen.getByAltText('business-card-preview');
    expect(photoElement).toBeInTheDocument();
    expect(photoElement.src).toContain('photo1.jpg');
});
