/**
 * @file Defines the route for managing meteorite data
 * @author Samuel Batchelor
 */

import createRouter from "./base.js";

// Import the CRUD functions from the controller
import {
  createMeteorite,
  getMeteorites,
  getMeteorite,
  updateMeteorite,
  deleteMeteorite,
  headMeteorite,
  headMeteorites
} from "../../controllers/v1.2/meteorite.js";

// Import the POST and PUT validation middleware
import {
  validatePostMeteorite,
  validatePutMeteorite,
  validatePatchMeteorite
} from "../../middleware/validation/meteorite.js";

// Import the authorisation middleware
import authorisation from "../../middleware/auth/authorisation.js"

// Import the rate limiting middleware
import { 
  getLimit,                                                                            
  headLimit,                                                              
  cudLimit,
  optionsLimit
} from "../../middleware/limiting/limit.js";

/**
 * Controller object for the meteorite model
 * @type {Object}
 * @property {Function} get - Getting all meteorites
 * @property {Function} getById - Getting a meteorite by ID
 * @property {Function} create - Creating a meteorite
 * @property {Function} update - Updating a meteorite
 * @property {Function} delete - Deleting a meteorite
 */

const meteoriteController = {
  get: getMeteorites,
  getById: getMeteorite,
  create: createMeteorite,
  update: updateMeteorite,
  delete: deleteMeteorite,
  head: headMeteorites,
  headById: headMeteorite
};

/**
 * Creates an Express router for the endpoints of the Meteorite model
 * @type {Function}
 */

const meteoriteRouter = createRouter(
  meteoriteController,
  getLimit,
  headLimit,
  cudLimit,
  optionsLimit,
  validatePostMeteorite,
  authorisation,
  validatePutMeteorite,
  validatePatchMeteorite
);

export default meteoriteRouter;
