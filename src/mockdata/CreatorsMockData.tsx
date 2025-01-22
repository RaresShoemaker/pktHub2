import {FilmImg, TvImg, PodcastImg, MusicImg} from '../assets/creators/index'

type CreatorsCardDataType = {
  alt: string;
  title: string;
  img: React.ReactNode;
  description: string;
  genre?: string;
}

type CreatorsDataType = Record<string, {
  title: string;
  data: CreatorsCardDataType[];
  squareView?: boolean;
}>;

export const CreatorsData: CreatorsDataType = {
  film: {
    title: 'Film',
    data: [
      {
        alt: 'WishYouWereHere-IMG',
        title: 'Wish You Were Here',
        img: FilmImg.WishYouWereHereImg,
        description: 'Directed by Julia Stiles',
        genre: 'Drama'
      },
      {
        alt: 'Oblivion-IMG',
        title: 'Oblivion',
        img: FilmImg.OblivionImg,
        description: 'Tom Cruise & Morgan Freeman',
        genre: 'Sci-Fi'
      },
      {
        alt: 'Hercules-IMG',
        title: 'Hercules',
        img: FilmImg.HerculesImg,
        description: 'Dwayne "The Rock" Johnson delivers an unforgettable performance.',
        genre: 'Action'
      },
      {
        alt: 'LastDaysofAmericanCrime-IMG',
        title: 'Last Days of American Crime',
        img: FilmImg.HerculesImg,
        description: 'Netflix',
        genre: 'Crime Thriller'
      },
      {
        alt: 'DenofThieves-IMG',
        title: 'Den of Thieves',
        img: FilmImg.HerculesImg,
        description: 'Gerard Butler',
        genre: 'Crime Thriller'
      },
      {
        alt: 'BabyGirl-IMG',
        title: 'Baby Girl',
        img: FilmImg.HerculesImg,
        description: 'Nicole Kidman, Harris Dickinson',
        genre: 'Crime Thriller'
      },
      {
        alt: 'EmiliaPérez-IMG',
        title: 'Emilia Pérez',
        img: FilmImg.HerculesImg,
        description: 'Zoe Saldana, Karla Sofía Gascón',
        genre: 'Crime Thriller'
      },
      {
        alt: 'Ragamuffin-IMG',
        title: 'Ragamuffin',
        img: FilmImg.HerculesImg,
        description: 'Sundance Short Film',
        genre: 'Crime Thriller'
      },
      {
        alt: 'OnFire-IMG',
        title: 'On Fire',
        img: FilmImg.HerculesImg,
        description: 'Peter Facinelli',
        genre: 'Crime Thriller'
      },
    ],
  },
  tv: {
    title: 'TV',
    data: [
      {
        alt: 'EveryoneIsDoingGreat-IMG',
        title: 'Everyone Is Doing Great',
        img: TvImg.EveryoneIsDoingGreatImg,
        description: 'A Drama Series',
      },
      {
        alt: 'BeastGames-IMG',
        title: 'Beast Games',
        img: TvImg.BeastGamesImg,
        description: 'A Competition TV Series by "Mr Beast"',
      },
      {
        alt: 'JimmyShin-IMG',
        title: 'Jimmy Shin',
        img: TvImg.JimmyShinImg,
        description: 'Wok this way...',
      },
      {
        alt: 'ThePatMcAfeeShow-IMG',
        title: 'The Pat McAfee Show',
        img: TvImg.JimmyShinImg,
        description: 'Live weekdays 12-3PM EST',
      },
      {
        alt: 'ThePenguin-IMG',
        title: 'The Penguin',
        img: TvImg.JimmyShinImg,
        description: 'Drama TV Series',
      }
    ]
  },
  podcast: {
    title: 'Podcasts',
    data: [
      {
        alt: 'CrookCounty-IMG',
        title: 'Crook County',
        img: PodcastImg.CrookCountyImg,
        description: 'A True-Crime Podcast',
      },
      {
        alt: 'TheCharlieShremShow-IMG',
        title: 'The Charlie Shrem Show',
        img: PodcastImg.CharlieShremImg,
        description: 'Explore Cryptocurrency'
      },
      {
        alt: 'LongevityJunky-IMG',
        title: 'Longevity Junky',
        img: PodcastImg.LongevityJunkyImg,
        description: 'Wellness Podcast'
      },
      {
        alt: 'HODLMyBeerPodcast-IMG',
        title: 'HODL My Beer Podcast',
        img: PodcastImg.LongevityJunkyImg,
        description: 'Crypto Podcast'
      },
      {
        alt: 'TheEightQuestions-IMG',
        title: 'The Eight Questionst',
        img: PodcastImg.LongevityJunkyImg,
        description: 'Consciousness Podcast Series'
      }
    ]
  },
  music: {
    title: 'Music',
    data: [
      {
        alt: 'WHAM-IMG',
        title: 'WHAM (Extended Version)',
        img: MusicImg.WhamImg,
        description: 'Lil Baby'
      },
      {
        alt: 'ParadiseStateofMind-IMG',
        title: 'Paradise State of Mind',
        img: MusicImg.ParadiseStateOfMindImg,
        description: 'Foster the People'
      },
      {
        alt: 'DeBìTiRARMáSFOTos-IMG',
        title: 'DeBì TiRAR MáS FOTos',
        img: MusicImg.ParadiseStateOfMindImg,
        description: 'Bad Bunny'
      },
      {
        alt: 'TheHumanFear-IMG',
        title: 'The Human Fear',
        img: MusicImg.ParadiseStateOfMindImg,
        description: 'Franz Ferdinand'
      },
      {
        alt: 'MoCityFlexologist-IMG',
        title: 'MO CITY FLEXOLOGIST',
        img: MusicImg.ParadiseStateOfMindImg,
        description: 'Travis Scott'
      },
    ]
  }
}