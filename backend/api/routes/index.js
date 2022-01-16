'use strict'

const express = require('express');
const logic = require('../../logic/');
const {
  HTTP_STATUS_CODES: {
    BAD_REQUEST,
    OK
  },
  HTTP_STATUS_MESSAGES: {
    KO,
    OK
  }
} = require('../utils/constants');

const router = express.Router();

router.get('/videos', (req, res) => {
  logic.getVideos()
    .then(videos => {
      res.status(OK);
      res.json({
        status: OK,
        data: videos
      });
    })
    .catch(({ message }) => {
      res.status(BAD_REQUEST);
      res.json({
        status: KO,
        error: message
      });
    });
});

router.get('/videos/:id', (req, res) => {
  const { params: { id } } = req;

  return logic.getVideoById(id)
    .then(video => {
      res.status(OK);
      res.json({
        status: OK,
        data: video
      });
    })
    .catch(({ message }) => {
      res.status(BAD_REQUEST);
      res.json({
        status: KO,
        error: message
      });
    });
});

module.exports = router;