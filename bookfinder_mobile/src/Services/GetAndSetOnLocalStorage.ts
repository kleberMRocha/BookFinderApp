import AsyncStorage from '@react-native-async-storage/async-storage';

interface BookCardProps {
  book:{
      id: string;
      volumeInfo: {
        title: string;
        authors: string[];
        publishedDate: string;
        description: string;
        publisher: string;
        imageLinks: {
          thumbnail: string;
          smallThumbnail:string;
        };
      };
      saleInfo: {
        saleability: string;
        buyLink: string;
      };
  };
}

export default class AsyncStorageService {

   async setValues(data:BookCardProps[]):Promise<void>{
        try {
          await AsyncStorage.setItem('@bookFinderWishList', JSON.stringify(data));
        } catch (error) {
          console.log(error)
        }
    }

    async getValue():Promise<BookCardProps[] | null> {

        try {
          const wishList =  await AsyncStorage.getItem('@bookFinderWishList');
          return wishList != null ? JSON.parse(wishList) : null;
        
          } catch (error) {
            console.log(error);
            return null;
        }


    }

}