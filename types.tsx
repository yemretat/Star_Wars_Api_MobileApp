/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';



export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;

};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Home: undefined;
};

export type MovieType={
    title:string,
    episode_id:number;
    opening_crawl?:string;
    director?:string;
    producer?:string;
    release_date:string;
    species?:string[];
    starships?:string[];
    vehicles?:string[];
    characters?:string[];
    planets?:string[];
    url?:string;
    created?:string;
    edited?:string;
};

export type PeopleType={
  name:string,
  gender:string,
  speciesName:string,
}



export type HomeNavigatorParamsList={
  HomeScreen:undefined;
  MovieDetails:undefined;
}


export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
