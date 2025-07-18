/**
 * @file The validation middleware for the Asteroid model
 * @author Samuel Batchelor
 */

import { AsteroidType, Location } from "@prisma/client";
import Joi from "joi";
import validator from "./base.js";

const postPutSchema = Joi.object({
  name: Joi.string().min(3).max(100).required().messages({
    "string.base": "Name should be a string",
    "string.empty": "Name cannot be empty",
    "string.min": "Name should have a minimum length of {#limit}",
    "string.max": "Name should have a maximum length of {#limit}",
    "any.required": "Name is required",
  }),
  age: Joi.number().min(0).max(1.6e10).required().messages({
    "number.base": "Age should be a number",
    "number.min": "Age should be greater than or equal to {#limit} years",
    "number.max": "Age should be lesser than or equal to {#limit} years",
    "any.required": "Age is required",
  }),
  mass: Joi.number().unsafe().min(1.6e10).max(3e20).required().messages({
    "number.base": "Mass should be a number",
    "number.min": "Mass should be greater than or equal to {#limit} kgs",
    "number.max": "Mass should be lesser than or equal to {#limit} kgs",
    "any.required": "Mass is required",
  }),
  diameter: Joi.number().min(0.0001).max(1000).required().messages({
    "number.base": "Diameter should be a number",
    "number.min": "Diameter should be greater than or equal to {#limit} kms",
    "number.max": "Diameter should be lesser than or equal to {#limit} kms",
    "any.required": "Diameter is required",
  }),
  density: Joi.number().min(0.1).max(4).unsafe().required().messages({
    "number.base": "Density should be a number",
    "number.min": "Density should be greater than or equal to {#limit} kg/m3",
    "number.max": "Density should be lesser than or equal to {#limit} kg/m3",
    "any.required": "Density is required",
  }),
  type: Joi.string()
    .valid(...Object.values(AsteroidType))
    .required()
    .messages({
      "string.base": "Type should be a string",
      "string.empty": "Type cannot be empty",
      "any.only": `Type must be one of the following: ${Object.values(AsteroidType)}`,
      "any.required": "Type is required",
    }),
  year: Joi.number().min(0).max(1000).required().messages({
    "number.base": "Year should be a number",
    "number.min": "Year should be greater than or equal to {#limit} years",
    "number.max": "Year should be lesser than or equal to {#limit} Years",
    "any.required": "Year is required",
  }),
  perigee: Joi.number().min(0.1).max(100000).required().messages({
    "number.base": "Perigee should be a number",
    "number.min": "Perigee should be greater than or equal to {#limit} AU",
    "number.max": "Perigee should be lesser than or equal to {#limit} AU",
    "any.required": "Perigee is required",
  }),
  apogee: Joi.number().min(0.34).max(100000).required().messages({
    "number.base": "Apogee should be a number",
    "number.min": "Apogee should be greater than or equal to {#limit} AU",
    "number.max": "Perigee should be lesser than or equal to {#limit} AU",
    "any.required": "Apogee is required",
  }),
  location: Joi.string()
    .valid(...Object.values(Location))
    .required()
    .messages({
      "string.base": "Location should be a string",
      "string.empty": "Location cannot be empty",
      "any.only": `Location must be one of the following: ${Object.values(Location)}`,
      "any.required": "Location is required",
    }),
  brightness: Joi.number().min(-32).max(32).required().messages({
    "number.base": "Brightness should be a number",
    "number.min": "Brightness should be greater than or equal to {#limit}",
    "number.max": "Brightness should be lesser than or equal to +{#limit}",
    "any.required": "Brightness is required",
  }),
  starId: Joi.string().uuid().required().messages({
    "string.base": "Star ID should be a string",
    "string.guid": "Star ID should be a valid UUID",
    "string.empty": "Star ID cannot be empty",
    "any.required": "Star ID is required",
  }),
});

const patchSchema = Joi.object({
  name: Joi.string().min(3).max(100).optional().messages({
    "string.base": "Name should be a string",
    "string.empty": "Name cannot be empty",
    "string.min": "Name should have a minimum length of {#limit}",
    "string.max": "Name should have a maximum length of {#limit}"
  }),
  age: Joi.number().min(0).max(1.6e10).optional().messages({
    "number.base": "Age should be a number",
    "number.min": "Age should be greater than or equal to {#limit} years",
    "number.max": "Age should be lesser than or equal to {#limit} years"
  }),
  mass: Joi.number().unsafe().min(1.6e10).max(3e20).optional().messages({
    "number.base": "Mass should be a number",
    "number.min": "Mass should be greater than or equal to {#limit} kgs",
    "number.max": "Mass should be lesser than or equal to {#limit} kgs"
  }),
  diameter: Joi.number().min(0.0001).max(1000).optional().messages({
    "number.base": "Diameter should be a number",
    "number.min": "Diameter should be greater than or equal to {#limit} kms",
    "number.max": "Diameter should be lesser than or equal to {#limit} kms"
  }),
  density: Joi.number().min(0.1).max(4).unsafe().optional().messages({
    "number.base": "Density should be a number",
    "number.min": "Density should be greater than or equal to {#limit} kg/m3",
    "number.max": "Density should be lesser than or equal to {#limit} kg/m3"
  }),
  type: Joi.string()
    .valid(...Object.values(AsteroidType))
    .optional()
    .messages({
      "string.base": "Type should be a string",
      "string.empty": "Type cannot be empty",
      "any.only": `Type must be one of the following: ${Object.values(AsteroidType)}`
    }),
  year: Joi.number().min(0).max(1000).optional().messages({
    "number.base": "Year should be a number",
    "number.min": "Year should be greater than or equal to {#limit} years",
    "number.max": "Year should be lesser than or equal to {#limit} Years"
  }),
  perigee: Joi.number().min(0.1).max(100000).optional().messages({
    "number.base": "Perigee should be a number",
    "number.min": "Perigee should be greater than or equal to {#limit} AU",
    "number.max": "Perigee should be lesser than or equal to {#limit} AU"
  }),
  apogee: Joi.number().min(0.34).max(100000).optional().messages({
    "number.base": "Apogee should be a number",
    "number.min": "Apogee should be greater than or equal to {#limit} AU",
    "number.max": "Perigee should be lesser than or equal to {#limit} AU"
  }),
  location: Joi.string()
    .valid(...Object.values(Location))
    .optional()
    .messages({
      "string.base": "Location should be a string",
      "string.empty": "Location cannot be empty",
      "any.only": `Location must be one of the following: ${Object.values(Location)}`
    }),
  brightness: Joi.number().min(-32).max(32).optional().messages({
    "number.base": "Brightness should be a number",
    "number.min": "Brightness should be greater than or equal to {#limit}",
    "number.max": "Brightness should be lesser than or equal to +{#limit}"
  }),
  starId: Joi.string().uuid().optional().messages({
    "string.base": "Star ID should be a string",
    "string.guid": "Star ID should be a valid UUID",
    "string.empty": "Star ID cannot be empty"
  }),
}).min(1);

const validatePostAsteroid = validator(postPutSchema);
const validatePutAsteroid = validator(postPutSchema);
const validatePatchAsteroid = validator(patchSchema);

export { validatePostAsteroid, validatePutAsteroid, validatePatchAsteroid };
