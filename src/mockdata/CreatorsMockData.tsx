import { FilmImg, TvImg, PodcastImg, MusicImg } from '../assets/creators/index';

export type CreatorsCardDataType = {
	alt: string;
	title: string;
	img: React.ReactNode;
	description: string;
	genre?: string;
	href: string;
};

type CreatorsDataType = Record<
	string,
	{
		title: string;
		data: CreatorsCardDataType[];
		squareView?: boolean;
	}
>;

export const CreatorsData: CreatorsDataType = {
	film: {
		title: 'Film',
		data: [
			{
				alt: 'WishYouWereHere-IMG',
				title: 'Wish You Were Here',
				img: FilmImg.WishYouWereHereImg,
				description: `A woman finds romance with a man, learns he's ill, and helps him live fully. Directed by Julia Stiles.`,
				genre: 'Drama',
				href: 'https://www.youtube.com/watch?v=pr_nVsfoUm8'
			},
			{
				alt: 'Oblivion-IMG',
				title: 'Oblivion',
				img: FilmImg.OblivionImg,
				description: 'Tom Cruise stars as a drone repairman who questions his past after a rescue.',
				genre: 'Sci-Fi',
				href: 'https://www.amazon.com/Oblivion-Tom-Cruise/dp/B00DP3IESY/ref=sr_1_1?crid=3MA1ETH25A07C&dib=eyJ2IjoiMSJ9.Cshda2CJ-DipnndbDOGRYRIeccedzlv4ShYeXnzEc8VsT3A7d0r5rTaH08pldgyYGDvNNu1-FtXbreJdwSbfueKa8HLE6EcX3sxG9c5B6LX1Bc9PC1TQBUKuUcYY0qS035IXxbUyQ7rh0sLfr7-ZZUtPxC6Jv_s5guQFvjdVKrA6KMSNjuYFZE1Am3buu0JhadK3_C9H9xNJ5JB-pwCxbyANDP0nM6mdjT8nGPPsmMo.cskmCSuYiHMDFs6SGCE29SJvE7bxaXoggOwVfzBBIFQ&dib_tag=se&keywords=oblivion&qid=1737078811&s=instant-video&sprefix=oblivion%2Cinstant-video%2C154&sr=1-1'
			},
			{
				alt: 'Hercules-IMG',
				title: 'Hercules',
				img: FilmImg.HerculesImg,
				description: `Dwyane Johnson's Hercules aids Thrace's king against a ruthless warlord.`,
				genre: 'Action',
				href: 'https://www.amazon.com/Hercules-Dwayne-Johnson/dp/B00OPX5M9M'
			},
			{
				alt: 'LastDaysofAmericanCrime-IMG',
				title: 'Last Days of American Crime',
				img: FilmImg.LastDayOfAmericanCrimeImg,
				description: 'In the future, a U.S. signal will prevent crime by blocking unlawful acts - Netflix',
				genre: 'Crime Thriller',
				href: 'https://www.netflix.com/title/80198975'
			},
			{
				alt: 'DenofThieves-IMG',
				title: 'Den of Thieves',
				img: FilmImg.DenOfThievesImg,
				description: `Gerard Butler's back as Big Nick hunting Donnie in Europe as he faces the mafia.`,
				genre: 'Crime Thriller',
				href: 'https://tv.apple.com/us/movie/den-of-thieves-2-pantera/umc.cmc.1bzf87ht24ikuj5dbmjjoaqpi'
			},
			{
				alt: 'BabyGirl-IMG',
				title: 'Baby Girl',
				img: FilmImg.BabyGirlImg,
				description:
					'Nicole Kidman as powerful CEO who risks it all for a passionate affair with her young intern.',
				genre: 'Crime Thriller',
				href: 'https://tv.apple.com/us/movie/babygirl/umc.cmc.5d51mnarv52adwnk1mhas3sfp'
			},
			{
				alt: 'EmiliaPérez-IMG',
				title: 'Emilia Pérez',
				img: FilmImg.EmiliaPerezImg,
				description: 'A cartel leader seeks a new life with a lawyer’s help in this drama.',
				genre: 'Crime Thriller',
				href: 'https://www.netflix.com/title/81901696'
			},
			{
				alt: 'Ragamuffin-IMG',
				title: 'Ragamuffin',
				img: FilmImg.RagamuffinImg,
				description: 'A 12-year-old motocross racer faces her identity, deafness, and girlhood challenges.',
				genre: 'Crime Thriller',
				href: 'https://www.instagram.com/ragamuffinthefilm'
			},
			{
				alt: 'OnFire-IMG',
				title: 'On Fire',
				img: FilmImg.OnFireImg,
				description:
					'A family in a trailer home fights to survive a sudden, raging wildfire - Peter Facinelli',
				genre: 'Crime Thriller',
				href: 'https://www.amazon.com/Fire-Peter-Facinelli/dp/B0CHJK71MQ'
			}
		]
	},
	tv: {
		title: 'TV',
		data: [
			{
				alt: 'EveryoneIsDoingGreat-IMG',
				title: 'Everyone Is Doing Great',
				img: TvImg.EveryoneIsDoingGreatImg,
				description:
					'Former TV stars Seth and Jeremy struggle to reclaim their past fame - Lafferty & Colletti',
				href: 'https://www.amazon.com/gp/video/detail/amzn1.dv.gti.7d23bc05-bf4e-4427-ac47-79d0d3c0142e?autoplay=0&ref_=atv_cf_strg_wb',
				genre: 'TV'
			},
			{
				alt: 'BeastGames-IMG',
				title: 'Beast Games',
				img: TvImg.BeastGamesImg,
				description:
					'A reality-competition, where over 1,000 contestants play for a single $5 million cash prize.',
				href: 'https://watch.amazon.com/detail?gti=amzn1.dv.gti.ef87b53e-6595-4fc4-b949-3789a8a39672',
				genre: 'TV'
			},
			{
				alt: 'JimmyShin-IMG',
				title: 'Jimmy Shin',
				img: TvImg.JimmyShinImg,
				description: 'Comedy Special starring Jimmy Shin about life as a first generation Korean in America',
				href: 'https://www.amazon.com/Jimmy-Shins-Wok-Shame-Shin/dp/B07RJ2FJ5N',
				genre: 'TV'
			},
			{
				alt: 'ThePatMcAfeeShow-IMG',
				title: 'The Pat McAfee Show',
				img: TvImg.ThePatMcAffeImg,
				description:
					"Pat McAfee brings his humor and candor to the microphone to highlight the day's top stories.",
				href: 'https://www.patmcafeeshow.com/listentopat',
				genre: 'TV'
			},
			{
				alt: 'ThePenguin-IMG',
				title: 'The Penguin',
				img: TvImg.ThePenguinImg,
				description: "The Penguin fights for control of Gotham's crime world after The Batman (2022).",
				href: 'https://www.max.com/shows/penguin/5756c2bf-36f8-4890-b1f9-ef168f1d8e9c',
				genre: 'TV'
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
				description:
					"A true crime series about a firefighter's secret life as a hitman which shatters his family's world.",
				href: 'https://www.crookcountypodcast.com/',
				genre: 'Podcasts'
			},
			{
				alt: 'TheCharlieShremShow-IMG',
				title: 'The Charlie Shrem Show',
				img: PodcastImg.CharlieShremImg,
				description: "Charlie Shrem explores the lives of crypto's most influential leaders.",
				href: 'https://podcasts.apple.com/us/podcast/the-charlie-shrem-show/id1462346183',
				genre: 'Podcasts'
			},
			{
				alt: 'LongevityJunky-IMG',
				title: 'Longevity Junky',
				img: PodcastImg.LongevityJunkyImg,
				description:
					'Dr. Buck Joffrey and Nikki Leigh exploring the latest in longevity science and wellness.',
				href: 'https://open.spotify.com/show/5fy2a9TnVA1fkX0BVdncTg',
				genre: 'Podcasts'
			},
			{
				alt: 'HODLMyBeerPodcast-IMG',
				title: 'HODL My Beer Podcast',
				img: PodcastImg.HodlMyBearImg,
				description: 'A deep dive into the latest cryptocurrency tokens and trends for newbies',
				href: 'https://youtube.com/playlist?list=PL5cCc3vm8K_P9o3PwPNGiqhDm_8nsNQpD&si=q8_UFI6miiJlUV43',
				genre: 'Podcasts'
			},
			{
				alt: 'TheEightQuestions-IMG',
				title: 'The Eight Questionst',
				img: PodcastImg.TheEightQuestions,
				description: 'Sebastian Siegel explores love, purpose, and spirituality in 50 episodes.',
				href: 'https://www.youtube.com/playlist?list=PLrsuqkj6LGLWyYzTyceEsjJoVeeJMl_qJ',
				genre: 'Podcasts'
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
				description: 'Lil Baby',
				genre: 'Music',
				href: 'https://open.spotify.com/artist/5f7VJjfbwm532GiveGC0ZK?si=uaBoW58jRPakwGXdT5NlHQ'
			},
			{
				alt: 'ParadiseStateofMind-IMG',
				title: 'Paradise State of Mind',
				img: MusicImg.ParadiseStateOfMindImg,
				description: 'Foster the People',
				genre: 'Music',
				href: 'https://open.spotify.com/album/27ynHS80OjICdw3qLNMgQP?si=BatcmiqAQTeAKiREl8M4Dg'
			},
			{
				alt: 'DeBìTiRARMáSFOTos-IMG',
				title: 'DeBì TiRAR MáS FOTos',
				img: MusicImg.DebiTirarMasFotoImg,
				description: 'Bad Bunny',
				genre: 'Music',
				href: 'https://open.spotify.com/album/5K79FLRUCSysQnVESLcTdb?si=4lujrLrjSFe7p32c1MmqNQ'
			},
			{
				alt: 'TheHumanFear-IMG',
				title: 'The Human Fear',
				img: MusicImg.TheHumaFearImg,
				description: 'Franz Ferdinand',
				genre: 'Music',
				href: 'https://open.spotify.com/album/7LbR1L8thzNldHceu3tj1a?si=EKJmQ5u5Qu6h1tTX7UsPkA'
			},
			{
				alt: 'MoCityFlexologist-IMG',
				title: 'MO CITY FLEXOLOGIST',
				img: MusicImg.TravisScottImg,
				description: 'Travis Scott',
				genre: 'Music',
				href: 'https://youtu.be/2JPIFEtMJ6o?si=2T7fETBpwUOruiA7'
			},
			{
				alt: 'RastaPhil-IMG',
				title: 'Jesus Crist',
				img: MusicImg.RastaPhilImg,
				description: 'Rasta Phil',
				href: 'https://open.spotify.com/track/1vqqoDde4lDfRRzCpcGrCO?si=54fe3d07663e4769',
				genre: 'Music'
			},
			{
				alt: 'HenriMin-IMG',
				title: "What's the Move (feat. General Degree)",
				img: MusicImg.HenryFongImg,
				description: 'Henry Fong',
				href: 'https://open.spotify.com/artist/3nALc9PyUfe6CO3EY9bNhH',
				genre: 'Music'
			}
		]
	}
};
