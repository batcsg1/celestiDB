/**
 * @swagger
 * components:
 *   schemas:
 *     Meteorite:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         name:
 *           type: string
 *           example: "Hoba"
 *         age:
 *           type: number
 *           format: float
 *           example: 2000000000
 *         mass:
 *           type: number
 *           format: float
 *           example: 60
 *         diameter:
 *           type: number
 *           format: float
 *           example: 2.7
 *         location:
 *           type: string
 *           example: "Namibia"
 *         planetId:
 *           type: string
 *           format: uuid
 *           example: "abcde12345-xyz6789"
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /api/v1.2/meteorites:
 *   post:
 *     summary: Create a new meteorite
 *     tags:
 *       - Meteorite
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Meteorite'
 *     responses:
 *       '201':
 *         description: Meteorite successfully created
 *       '400':
 *         description: Meteorite with the same name already exists
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1.2/meteorites:
 *   get:
 *     summary: Get all meteorites
 *     tags:
 *       - Meteorite
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filter meteorites by name
 *       - in: query
 *         name: age
 *         schema:
 *           type: number
 *           format: float
 *         description: Filter meteorites by age
 *       - in: query
 *         name: mass
 *         schema:
 *           type: number
 *           format: float
 *         description: Filter meteorites by mass
 *       - in: query
 *         name: foundYear
 *         schema:
 *           type: number
 *         description: Filter meteorites by discovery
 *       - in: query
 *         name: diameter
 *         schema:
 *           type: number
 *           format: float
 *         description: Filter meteorites by diameter
 *       - in: query
 *         name: location
 *         schema:
 *           type: string
 *         description: Filter meteorites by location
 *       - in: query
 *         name: planetId
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Filter meteorites by planetId
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [id, name, age, mass, diameter, foundYear, location, starId ]
 *         description: Field to sort the meteorites by (default is 'id')
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Order to sort the meteorites by (default is 'asc')
 *       - in: query
 *         name: page
 *         schema:
 *           type: number
 *         description: Page number (default is 1)
 *       - in: query
 *         name: amount
 *         schema:
 *           type: number
 *         description: Amount of meteorites per page (default is 25)
 *     responses:
 *       '200':
 *         description: Success
 *       '404':
 *         description: No meteorites found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1.2/meteorites/{id}:
 *   get:
 *     summary: Get a meteorite by id
 *     tags:
 *       - Meteorite
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       '200':
 *         description: Success
 *       '404':
 *         description: No meteorite found with the provided id
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1.2/meteorites/{id}:
 *   put:
 *     summary: Update a meteorite by id
 *     tags:
 *       - Meteorite
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Meteorite'
 *     responses:
 *       '200':
 *         description: Meteorite successfully updated
 *       '404':
 *         description: No meteorite found with the provided id
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1.2/meteorites/{id}:
 *   patch:
 *     summary: Partially update a meteorite by id
 *     tags:
 *       - Meteorite
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Meteorite'
 *     responses:
 *       '200':
 *         description: Meteorite successfully updated
 *       '404':
 *         description: No meteorite found with the provided id
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1.2/meteorites/{id}:
 *   delete:
 *     summary: Delete a meteorite by id
 *     tags:
 *       - Meteorite
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       '200':
 *         description: Meteorite successfully deleted
 *       '404':
 *         description: No meteorite found with the provided id
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1.2/meteorites:
 *   options:
 *     summary: Get allowed HTTP methods for meteorites route
 *     tags:
 *       - Meteorite
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '204':
 *         description: No Content - Indicates allowed HTTP methods for the resource
 *         headers:
 *           Allow:
 *             description: Allowed HTTP methods
 *             schema:
 *               type: string
 *               example: GET,POST,OPTIONS
 *           Access-Control-Allow-Origin:
 *             description: Allowed origins for CORS
 *             schema:
 *               type: string
 *               example: '*'
 *           Access-Control-Allow-Methods:
 *             description: Allowed HTTP methods
 *             schema:
 *               type: string
 *               example: GET,POST,OPTIONS
 *           Access-Control-Allow-Headers:
 *             description: Allowed headers for CORS
 *             schema:
 *               type: string
 *               example: Content-Type, Authorization
 */

/**
 * @swagger
 * /api/v1.2/meteorites:
 *   head:
 *     summary: Verify if any meteorites exist
 *     tags:
 *       - Meteorite
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '204':
 *         description: Meteorites exist
 *       '404':
 *         description: No meteorites found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1.2/meteorites/{id}:
 *   head:
 *     summary: Verify meteorite existence by ID
 *     tags:
 *       - Meteorite
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       '204':
 *         description: Meteorite exists
 *       '404':
 *         description: Meteorite not found
 *       '500':
 *         description: Internal server error
 */

