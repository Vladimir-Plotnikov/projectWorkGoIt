import settings from './settings.js';
const { POSTER_URL } = settings;
// const { POSTER_URL_SEARCH } = settings;

export const generatePosterPath = imageName => {
    return `${POSTER_URL}${imageName}`;
};

// export const generatePosterPathS = imageName => `${POSTER_URL_SEARCH}${imageName}`;
