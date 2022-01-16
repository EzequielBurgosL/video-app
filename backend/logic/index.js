'use strict'

const { Question, Video } = require('../schemas');

const logic = {
  /**
   * Lists all the videos stored in the database.
   * 
   * @throws {Error} - If no videos are found.
   * @returns {Promise<[Video]>}
   */
  getVideos() {
    return Promise.resolve()
      .then(() => {
        return Video.find()
          .then(videos => {
            if (!videos) throw Error(`no videos where found`);

            return videos;
          });
      });
  },

  /**
   * Retrieves a video stored in the database.
   * 
   * @param {string} videoId
   * @throws {Error} - on invalid type of input or if no videos are found in a specific category.
   * @returns {Promise<[Video]>} 
   */
  getVideoById(videoId) {
    return Promise.resolve()
      .then(() => {
        if (typeof videoId !== 'string') throw Error('user videoId is not a string');
        if (!(videoId = videoId.trim()).length) throw Error('user videoId is empty or blank');

        return Video.findById(videoId);
      })
      .then(video => {
        if (!video) throw Error(`no video found with id ${videoId}`);

        return video;
      })
  },
};

const mockedLogic = {
  getVideos() {
    return Promise.resolve()
      .then(() => {
        const { data } = require('../fixtures/videos');

        return data;
      });
  },
  getVideoById() {
    return Promise.resolve()
      .then(() => {
        const { data } = require('../fixtures/video');

        return data;
      });
  }
};

module.exports = mockedLogic;