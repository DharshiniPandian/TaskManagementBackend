const express =  require('express')
const router = express.Router()
const mastercontroller = require('../controllers/master_controller')

/**
 * @swagger
 *  components:
 *      schemas:
 *          Domain:
 *              type: object
 *              properties: 
 *                  id:
 *                      type: integer
 *                      example: 1
 *                  name:
 *                      type: string
 *                      example: "Software Development"
 * 
 *          Hashtag:
 *              type: object
 *              properties: 
 *                  id:
 *                      type: integer
 *                      example: 1
 *                  name:
 *                      type: string
 *                      example: "#Technology" 
 * 
 *          User:
 *              type: object
 *              properties: 
 *                  id:
 *                      type: integer
 *                      example: 1
 *                  name:
 *                      type: string
 *                      example: "John Doe" 
 * 
 *          HashtagCreate:
 *              type: object
 *              required:
 *                  - name
 *                  - created_by
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The unique identifier of the hashtag
 *                      example: 1
 *                  name:
 *                      type: string
 *                      description: The name of the hashtag
 *                      example: "#coding"
 *                  is_active:
 *                      type: boolean
 *                      description: Status to show whether the hashtag is active or not
 *                      example: true
 *                  created_by:
 *                      type: integer
 *                      description: Name or identifier of the user who created the hashtag
 *                      example: "1"
 */


/**
 * @swagger
 * /master/domains:
 *  get:
 *      summary: To get all domains listed in the master table
 *      description:  To get all domains listed in the master table
 *      responses:
 *          200:
 *              description: Successfully retrieved all items listed in the master domains table
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Domain'
 *          500:
 *              description: Internal Server Error - Something went wrong with the server or database
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Internal Server Error"
 */

router.get('/domains', mastercontroller.get_master_domains)

/**
 * @swagger
 * /master/hashtags:
 *  get:
 *      summary: To get all hashtags listed in the master table
 *      description:  To get all hashtags listed in the master table
 *      responses:
 *          200:
 *              description: Successfully retrieved all items listed in the master hashtags table
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Hashtag'
 *          500:
 *              description: Internal Server Error - Something went wrong with the server or database
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Internal Server Error"
 */

router.get('/hashtags', mastercontroller.get_master_hashtags)

/**
 * @swagger
 * /master/users:
 *  get:
 *      summary: To get all users listed in the master table
 *      description:  To get all users listed in the master table
 *      responses:
 *          200:
 *              description: Successfully retrieved all items listed in the master users table
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/User'
 *          500:
 *              description: Internal Server Error - Something went wrong with the server or database
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Internal Server Error"
 */

router.get('/users', mastercontroller.get_users)

/**
 * @swagger
 * /master/hashtags:
 *  post:
 *      summary: Add a new hashtag to the master hashtag table
 *      description: Creates a new entry for a hashtag in the master table.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              description: The name of the hashtag to be added
 *                              example: "#coding"
 *                          is_active:
 *                              type: boolean
 *                              description: Flag to indicate if the hashtag is active (optional, defaults to true)
 *                              example: true
 *                          created_by:
 *                              type: string
 *                              description: Name or identifier of the user creating the hashtag
 *                              example: "admin"
 *      responses:
 *          201:
 *              description: Hashtag created successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/HashtagCreate'
 *          400:
 *              description: Bad Request - Data insufficient (missing required fields)
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Data insufficient"
 *          500:
 *              description: Internal Server Error - Something went wrong with the server or database
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Internal Server Error"
 */

router.post('/hashtags', mastercontroller.create_master_hashtags)

router.get('/timeFrames', mastercontroller.get_time_frames)
router.get('/actionPriorities', mastercontroller.get_priorities)
router.get('/actionTypes', mastercontroller.get_action_types)
router.get('/reasons', mastercontroller.get_reasons)


module.exports = router