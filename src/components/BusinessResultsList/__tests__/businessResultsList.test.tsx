import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { BusinessResultsList, GET_BUSINESSES } from '../businessResultsList';
import { SearchContext, ISearchContext } from '../../../context/SearchContext';

const term = 'pizza';
const city = 'rome';

const mockSearchContextValue: ISearchContext = {
    term,
    city,
    setTerm: () => {},
    setCity: () => {},
  };

const mocks = [
  {
    request: {
      query: GET_BUSINESSES,
      variables: {
        term,
        location: city,
      },
    },
    result: {
      data: {
        searchBusinesses: [
          {
            id: '1',
            name: 'Business 1',
            rating: 4.5,
            photos: ['photo1.jpg'],
            hours: {
              is_open_now: true,
            },
            location: {
              address1: '123 Street',
              postal_code: '12345',
              formatted_address: '123 Street, 12345',
              city: 'Rome',
            },
            review_count: 100,
            reviews: [
              {
                text: 'Review 1',
                url: 'https://example.com/review1',
                user: {
                  name: 'User 1',
                  profile_url: 'https://example.com/user1',
                },
              },
            ],
          },
          {
            id: '2',
            name: 'Business 2',
            rating: 3,
            photos: ['photo1.jpg'],
            hours: {
              is_open_now: true,
            },
            location: {
              address1: '456 Street',
              postal_code: '45678',
              formatted_address: '456 Street, 45678',
              city: 'Rome',
            },
            review_count: 89,
            reviews: [
              {
                text: 'Review 1',
                url: 'https://example.com/review1',
                user: {
                  name: 'User 1',
                  profile_url: 'https://example.com/user1',
                },
              },
            ],
          },
        ],
      },
    },
  },
];

test('renders the business list with correct title and business cards', async () => {    
    render(
        <MockedProvider mocks={mocks}>
        <SearchContext.Provider value={mockSearchContextValue}>
            <BusinessResultsList />
        </SearchContext.Provider>
        </MockedProvider>
    );

    // Wait for data to be loaded
    await screen.findByText('Business 1');

    // Check the title - given I'm not translating I'm checkig the text with the translation keys
    // when spying on the translation function I'll be able to valiate it has been called the amount of times required for this component
    expect(screen.getByText(`businessResultsList.title.looking "Pizza" businessResultsList.title.in Rome`)).toBeInTheDocument();

    // Check the business card
    expect(screen.getByText('Business 1')).toBeInTheDocument();
    expect(screen.getByText('123 Street, 12345')).toBeInTheDocument();
    expect(screen.getByText('4.5 (100 businessDetail.reviews)')).toBeInTheDocument();

    // Business 2
    expect(screen.getByText('Business 2')).toBeInTheDocument();
    expect(screen.getByText('456 Street, 45678')).toBeInTheDocument();
    expect(screen.getByText('3 (89 businessDetail.reviews)')).toBeInTheDocument();

    // TODO: I have to spy on the translation function, but it's not working: https://react.i18next.com/misc/testing
    // expect(tSpy).toHaveBeenCalledWith('search.resultsFor', { term, city }
});
