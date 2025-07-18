/**
 * @file Defines the route for getting the stars data
 * @author Samuel Batchelor
 */

import createRouter from "./base.js";

// Import the CRUD functions from the controller
import {
  createStar,
  getStars,
  getStar,
  updateStar,
  deleteStar,
} from "../../controllers/v1/star.js";

// Import the POST and PUT validation middleware
import {
  validatePostStar,
  validatePutStar,
} from "../../middleware/validation/star.js";

// Import the authorisation middleware
import authorisation from "../../middleware/auth/authorisation.js"
import { cudLimit, getLimit } from "../../middleware/limiting/limit.js";

/**
 * Controller object for the star model
 * @type {Object}
 * @property {Function} get - Getting all stars
 * @property {Function} getById - Getting a star by ID
 * @property {Function} create - Creating a star
 * @property {Function} update - Updating a star
 * @property {Function} delete - Deleting a star
 */

const starController = {
  get: getStars,
  getById: getStar,
  create: createStar,
  update: updateStar,
  delete: deleteStar,
};

/**
 * Creates an Express router for the endpoints of the Star model
 * @type {Function}
 */

const starRouter = createRouter(
  starController,
  getLimit,
  cudLimit,
  validatePostStar,
  authorisation,
  validatePutStar,
);

export default starRouter;
