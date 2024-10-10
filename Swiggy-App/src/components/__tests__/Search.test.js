import { render } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/resCardMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

//trying to mock the original fetch function from Body
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})


it("Should render a body component with search",async () =>{
    await act(async () => 
    render(
        <BrowserRouter >
            <Body />
        </BrowserRouter>
)) 
})