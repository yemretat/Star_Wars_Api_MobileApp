import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  FlatList,
  ImageBackground,
  View,
  ActivityIndicator,
} from "react-native";
import { RootTabScreenProps } from "../types";
import { MovieType } from "../types";
import MovieItem from "../components/MovieItem";
import SearchBar from "../components/SearchBar";
const { height } = Dimensions.get("window");

export default function TabOneScreen() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const [searchValue,setSearchValue] = useState<string>("");



  const loadDataFromApi = () => {
    setLoading(true)
    axios
      .get("https://swapi.py4e.com/api/films")
      .then((res) => {
        if (res.data.results.length > 0) {
          setMovies(res.data.results);
        }
        else{
          setMovies([])
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("The error is ", error);
      });
    // console.log("The movies are ",movies)
  };
  const loadDataFromApiUpdate = (searchValue:string) => {
    setLoading(true)
      axios
      .get(`https://swapi.py4e.com/api/films/?search=${searchValue}`)
      .then((res) => {
        if (res.data.results.length > 0) {
          setMovies(res.data.results);
        }
        else{
          setMovies([])
        }
        setLoading(false);

      })
      .catch((error) => {
        console.log("The error is ", error);
      });
  }


  //componentdidmount
  useEffect(() => {
   // console.log("didmount")
    loadDataFromApi();
  }, []);
  //componentdidupdate
  useEffect(() => {
   // console.log("didupdate")
    loadDataFromApiUpdate(searchValue)
  },[searchValue])

  return (
      <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri: "https://www.nawpic.com/media/2020/outer-space-nawpic-11.jpg",
        }}
      >
        <View style={{ marginTop: "30%" }}>
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
          {loading == false ? (
            <FlatList
              style={styles.flatList}
              data={movies}
              renderItem={({ item }) => <MovieItem movie={item} />}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : (
            <ActivityIndicator size="large" color="white" />
          )}
        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flatList: {
    height: height * 0.6,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
