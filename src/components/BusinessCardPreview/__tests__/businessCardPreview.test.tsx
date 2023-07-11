import { render, screen } from "@testing-library/react";
import { BusinessCardPreview } from "../businessCardPreview";
import { Business } from "../../../generated/graphql";

const businessData : Business = {
    id: "abc123",
    name: "Pizza Danri",
    photos: ['photo1.jpg', 'photo2.jpg'],
    location: {
        address1: "Rivadavia 62",
        postal_code: "4230"
    },
    rating: 5,
    review_count: 126
}

test("BusinessCardPreview renders", () => {
    render(<BusinessCardPreview businessData={businessData} />)

    screen.getByText(`${businessData.name}`);
    screen.getByText(`${businessData.location?.address1} ${businessData.location?.postal_code}`);
    screen.getByText(`${businessData.rating} (${businessData.review_count} reviews)`);

    const photoElement = screen.getByAltText('business-card-preview');
    expect(photoElement).toBeInTheDocument();
    expect(photoElement.src).toContain('photo1.jpg');
});
