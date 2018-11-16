import { FETCH_PHOTOS, FETCH_PHOTOS_ERROR } from "./types";

const APP_ID =
  "de7ec0808856fd8c8244ba7d28fae76c203875a656a9639e29c4ba5e08d56b95";
const RootUrl =
  "https://api.unsplash.com/search/photos/?page=1&per_page=20&query=";

export const fetchPhotosSuccess = payload => ({
  type: FETCH_PHOTOS,
  payload
});

export const fetchPhotosFail = error => ({
  type: FETCH_PHOTOS_ERROR,
  payload: error
});

export const fetchPhotos = term => {
  const url = `${RootUrl}${term}&client_id=${APP_ID}`;
  return async dispatch => {
    try {
      let response = await fetch(url);
      let json = await response.json();
      dispatch(fetchPhotosSuccess(json.results));
    } catch (error) {
      dispatch(fetchPhotosFail(error));
    }
  };
};
