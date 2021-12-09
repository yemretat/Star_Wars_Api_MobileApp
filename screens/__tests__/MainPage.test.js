import React from "react" ;
import {act, fireEvent, render, waitFor} from "@testing-library/react-native"
import TabOneScreen from "../TabOneScreen";
import SearchBar from "../../components/SearchBar"
it("Should be rendering",async() => {
    const {getByPlaceholderText} = render(<TabOneScreen/>) 
    getByPlaceholderText("Search Movie ...")
})

it("Should be rendering3",async() => {
    const {getByTestId} = render(<SearchBar/>) 
    getByTestId("Search.Bar")
})




