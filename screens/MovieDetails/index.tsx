import React, { useEffect, useState, useRef } from "react";
import { View, Text, ImageBackground, Dimensions ,ActivityIndicator} from "react-native";
import { Rocket, Yoda } from "../../assets/images/svgimages";
import styles from "./styles";
import { MovieType, PeopleType } from "../../types";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import CharacterItem from "../../components/CharacterItem"
const { width } = Dimensions.get("window");

function MovieDetails() {
  const route = useRoute();
  const [movie, setMovie] = useState<MovieType | undefined>(undefined);
  const [loading, setLoading] = useState<Boolean>(true);
  const [topFive,setTopFive] = useState<PeopleType[]>([])
  const fetchData = async (characters:string[]) => {

    setLoading(true)
    const values = await Promise.all(
      characters.slice(0, 5).map(async (url, index) => {
        const res = await axios.get(url);
        // console.log("The response is 1 ",res.data.name," ",res.data.gender)
        var speciesName = "";
        await Promise.all(
          res.data.species.map(async (url:string) => {
            const res = await axios.get(url);
            // console.log("The species name is 2",res.data.name)
            speciesName += res.data.name;
          })
        );
        return {
          name: res.data.name,
          gender: res.data.gender,
          speciesName: speciesName,
        };
      })
    );
    setTopFive(values)  
    setLoading(false)
  };

  useEffect(() => {
    //       console.log("The Charachters are ",route.params?.movie.characters)
    const characters = route.params?.movie.characters;
    fetchData(characters);
    setMovie(route.params?.movie);
  }, [route.params?.movie.episode_id]);
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={{
        uri: "https://www.nawpic.com/media/2020/outer-space-nawpic-11.jpg",
      }}
    >
      <View style={styles.container}>
        <Yoda width={width * 0.33} height={width * 0.33} color="white" />
        <View style={styles.movieInfo}>
          <View style={styles.upperContainer}>
            <View>
              <Text style={styles.title}>{movie?.title}</Text>
              <Text style={styles.movieYear}>
                Release Date : {movie?.release_date}
              </Text>
              <Text style={styles.movieYear}>
                Episode Number : {movie?.episode_id}
              </Text>
            </View>
            <Rocket
              width={width * 0.14}
              height={width * 0.14}
              color="#0A2341"
            />
          </View>
          {loading == false?(
            topFive.map((item,index) => {
              return(
                <View key={index}>
                <CharacterItem item={item} />
                </View>
              )

            })
          ):
          (  
             <ActivityIndicator size="large" color="white" /> 
             )

          }
  
        </View>
      </View>
    </ImageBackground>
  );
}

export default MovieDetails;
