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
 * 
 *          TimeFrames:
 *              type: object
 *              properties: 
 *                  id:
 *                      type: integer
 *                      example: 1
 *                  name:
 *                      type: string
 *                      example: "M"
 *                  time_duration:
 *                      type: integer
 *                      example: 10 
 * 
 *          ActionPriorities:
 *              type: object
 *              properties: 
 *                  id:
 *                      type: integer
 *                      example: 1
 *                  name:
 *                      type: string
 *                      example: "High"
 * 
 *          OveralActionStatus:
 *              type: object
 *              properties: 
 *                  id:
 *                      type: integer
 *                      example: 1
 *                  name:
 *                      type: string
 *                      example: "Closed"
 * 
 *          ActionTypes:
 *              type: object
 *              properties: 
 *                  id:
 *                      type: integer
 *                      example: 1
 *                  name:
 *                      type: string
 *                      example: "Feature"
 * 
 *          Resons:
 *              type: object
 *              properties: 
 *                  id:
 *                      type: integer
 *                      example: 1
 *                  reason_type_id:
 *                      type: integer
 *                      example: 1
 *                  name:
 *                      type: string
 *                      example: "Everything happened as per plan"
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

/**
 * @swagger
 * /master/timeFrames:
 *  get:
 *      summary: To get all timeFrames listed in the master table
 *      description:  To get all timeFrames listed in the master table
 *      responses:
 *          200:
 *              description: Successfully retrieved all TimeFrames listed in the master table
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/TimeFrames'
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

router.get('/timeFrames', mastercontroller.get_time_frames)

/**
 * @swagger
 * /master/actionPriorities:
 *  get:
 *      summary: To get all action priorities listed in the master table
 *      description:  To get all action priorities listed in the master table
 *      responses:
 *          200:
 *              description: Successfully retrieved all priorities listed in the master table
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/ActionPriorities'
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

router.get('/actionPriorities', mastercontroller.get_priorities)

/**
 * @swagger
 * /master/overalActionStatus:
 *  get:
 *      summary: To get all overalActionStatus listed in the master table
 *      description:  To get all overalActionStatus listed in the master table
 *      responses:
 *          200:
 *              description: Successfully retrieved all overalActionStatus listed in the master table
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/OveralActionStatus'
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

router.get('/overalActionStatus', mastercontroller.get_overal_action_status)

/**
 * @swagger
 * /master/actionTypes:
 *  get:
 *      summary: To get all actionTypes listed in the master table
 *      description:  To get all actionTypes listed in the master table
 *      responses:
 *          200:
 *              description: Successfully retrieved all actionTypes listed in the master table
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/ActionTypes'
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

router.get('/actionTypes', mastercontroller.get_action_types)

/**
 * @swagger
 * /master/reasons:
 *  get:
 *      summary: Retrieve all reasons listed in the master table
 *      description: Get all reasons based on the provided reason type.
 *      parameters:
 *          - in: query
 *            name: reason_type
 *            schema:
 *              type: integer
 *            description: ID of the reason type to filter the reasons.
 *            example: 1
 *      responses:
 *          200:
 *              description: Successfully retrieved all reasons listed in the master table
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  id:
 *                                      type: integer
 *                                      description: The unique identifier of the reason
 *                                      example: 1
 *                                  name:
 *                                      type: string
 *                                      description: The name of the reason
 *                                      example: "Coding Issue"
 *          400:
 *              description: Bad request - reason_type is required
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "reason_type is required"
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

router.get('/reasons', mastercontroller.get_reasons)

/**
 * @swagger
 * /master/actionStatus:
 *  get:
 *      summary: Retrieve all action statuses listed in the master table
 *      description: Get all action statuses based on the provided feature type.
 *      parameters:
 *          - in: query
 *            name: feature_type
 *            schema:
 *              type: integer
 *            description: ID of the feature type to filter the action statuses.
 *            required: true
 *            example: 1
 *      responses:
 *          200:
 *              description: Successfully retrieved all action statuses listed in the master table
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  id:
 *                                      type: integer
 *                                      description: The unique identifier of the action status
 *                                      example: 1
 *                                  name:
 *                                      type: string
 *                                      description: The name of the action status
 *                                      example: "In Progress"
 *          400:
 *              description: Bad request - feature_type is required
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "feature_type is required"
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

router.get('/actionStatus', mastercontroller.get_action_status)




module.exports = router