import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { withOfferLabel } from "../RestaurantCard";

it("Should render Restaurant comp with props data", () => {
    render (<RestaurantCard resData ={MOCK_DATA} />);
    const name = screen.getByText("Chinese Wok");
    expect(name).toBeInTheDocument();
});

// it("Should render Restaurant comp with Promoted label", () => {
//     render (withOfferLabel(MOCK_DATA));
//     const offer = screen.getByLabelText("offer");
//     expect(offer).toBeInTheDocument();

    
// })