const express =  require('express')
const router = express.Router()
const goalcreatecontroller = require('../controllers/goal_controller/createGoal')
const getgoalcontroller = require('../controllers/goal_controller/getGoal')
const deletecontroller = require('../controllers/goal_controller/delete')


/**
 * @swagger
 *  components:
 *      schemas:
 *          Goal:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: Unique identifier for the goal
 *                      example: 1
 *                  goal_title:
 *                      type: string
 *                      description: Title of the goal
 *                      example: "Learn JavaScript"
 *                  start_at:
 *                      type: string
 *                      format: date-time
 *                      description: The start date and time of the goal
 *                      example: "2024-01-01T10:00:00.000Z"
 *                  end_at:
 *                      type: string
 *                      format: date-time
 *                      description: The end date and time of the goal
 *                      example: "2024-12-31T18:00:00.000Z"
 *                  hashtag:
 *                      type: array
 *                      description: Array of associated hashtags for the goal
 *                      items:
 *                          $ref: '#/components/schemas/Hashtag'
 *                  goalowner:
 *                      type: object
 *                      description: Information about the user who created the goal
 *                      properties:
 *                          id:
 *                              type: integer
 *                              description: Unique identifier of the user
 *                              example: 2
 *                          name:
 *                              type: string
 *                              description: Name of the goal owner
 *                              example: "John Doe"
 *                          path:
 *                              type: string
 *                              description: Path to the user's profile or additional information
 *                              example: "/profile/johndoe"
 * 
 *          Hashtag:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The unique identifier of the hashtag
 *                      example: 1
 *                  name:
 *                      type: string
 *                      description: The name of the hashtag
 *                      example: "#coding"
 * 
 * /goal:
 *  get:
 *      summary: Get all goals with optional filtering by name and pagination
 *      description: Retrieves a list of goals with associated hashtags and goal owner information. You can filter the goals by name and paginate the results. 
 *      parameters:
 *          - in: query
 *            name: name
 *            schema:
 *              type: string
 *            description: Filter goals by title (optional)
 *          - in: query
 *            name: offset
 *            schema:
 *              type: integer
 *              default: 0
 *            description: The number of records to skip for pagination (optional)
 *          - in: query
 *            name: limit
 *            schema:
 *              type: integer
 *              default: 2
 *            description: The maximum number of goals to return (optional)
 *      responses:
 *          200:
 *              description: Successfully retrieved a list of goals
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Goal'
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

router.get('/', getgoalcontroller.getAllGoals)

/**
 * @swagger
 *  components:
 *      schemas:
 *          GoalById:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: Unique identifier for the goal
 *                      example: 1
 *                  goal_title:
 *                      type: string
 *                      description: Title of the goal
 *                      example: "Learn JavaScript"
 *                  goalowner:
 *                      type: object
 *                      description: Information about the user who created the goal
 *                      properties:
 *                          id:
 *                              type: integer
 *                              description: Unique identifier of the user
 *                              example: 2
 *                          name:
 *                              type: string
 *                              description: Name of the goal owner
 *                              example: "John Doe"
 *                          path:
 *                              type: string
 *                              description: Path to the user's profile or additional information
 *                              example: "/profile/johndoe"
 *                  domain:
 *                      type: object
 *                      description: Domain to which the goal belongs
 *                      properties:
 *                          id:
 *                              type: integer
 *                              description: Unique identifier of the domain
 *                              example: 1
 *                          name:
 *                              type: string
 *                              description: Name of the domain
 *                              example: "Software Development"
 *                  hashtag:
 *                      type: object
 *                      description: Hashtag associated with the goal
 *                      properties:
 *                          id:
 *                              type: integer
 *                              description: Unique identifier of the hashtag
 *                              example: 3
 *                          name:
 *                              type: string
 *                              description: Name of the hashtag
 *                              example: "#learning"
 *                  goalstatus:
 *                      type: object
 *                      description: Status of the goal
 *                      properties:
 *                          id:
 *                              type: integer
 *                              description: Unique identifier of the goal status
 *                              example: 1
 *                          name:
 *                              type: string
 *                              description: Name of the goal status
 *                              example: "In Progress"
 *                  goalusers:
 *                      type: array
 *                      description: List of users associated with the goal
 *                      items:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                                  description: Unique identifier of the user-goal relationship
 *                                  example: 1
 *                              user:
 *                                  type: object
 *                                  description: User information
 *                                  properties:
 *                                      id:
 *                                          type: integer
 *                                          description: Unique identifier of the user
 *                                          example: 3
 *                                      name:
 *                                          type: string
 *                                          description: Name of the user
 *                                          example: "Jane Doe"
 *                                      path:
 *                                          type: string
 *                                          description: Path to the user's profile or additional information
 *                                          example: "/profile/janedoe"
 *                  goalphases:
 *                      type: array
 *                      description: Phases associated with the goal
 *                      items:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                                  description: Unique identifier of the goal phase
 *                                  example: 1
 *                              phase:
 *                                  type: object
 *                                  description: Information about the phase and its associated users
 *                                  properties:
 *                                      id:
 *                                          type: integer
 *                                          description: Unique identifier of the phase
 *                                          example: 2
 *                                      user:
 *                                          type: object
 *                                          description: User information related to the phase
 *                                          properties:
 *                                              id:
 *                                                  type: integer
 *                                                  description: Unique identifier of the user
 *                                                  example: 4
 *                                              name:
 *                                                  type: string
 *                                                  description: Name of the user
 *                                                  example: "Mark Doe"
 *                                              path:
 *                                                  type: string
 *                                                  description: Path to the user's profile or additional information
 *                                                  example: "/profile/markdoe"
 * 
 * /goal/{id}:
 *  get:
 *      summary: Get a specific goal by ID
 *      description: Retrieves a goal by its ID, including associated information such as goal owner, domain, hashtags, goal status, users, and goal phases. 
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: uuid
 *            description: ID of the goal to retrieve
 *      responses:
 *          200:
 *              description: Successfully retrieved the goal
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/GoalById'
 *          400:
 *              description: Goal not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Goal not found"
 *          500:
 *              description: Internal Server Error - Something went wrong on the server or database
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Internal server error"
 */


router.get('/:id', getgoalcontroller.getGoalById)

/**
 * @swagger
 *  components:
 *      schemas:
 *          DeleteGoal:
 *              type: object
 *              properties:
 *                  message:
 *                      type: string
 *                      description: Success message indicating the goal has been deleted
 *                      example: "Goal with ID 1 was successfully soft deleted."
 *                  error:
 *                      type: string
 *                      description: Error message if there was an error during the deletion
 *                      example: "An error occurred while attempting to delete the goal."
 * 
 * /goal/deletegoal/{id}:
 *  put:
 *      summary: Soft delete a specific goal by ID
 *      description: Performs a soft delete of a goal by setting the `deleted_at` timestamp. 
 *                   This marks the goal as deleted without removing it from the database. 
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: uuid
 *            description: ID of the goal to be soft deleted
 *      responses:
 *          200:
 *              description: Successfully soft deleted the goal
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/DeleteGoal'
 *          400:
 *              description: Goal not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Goal with ID 1 not found."
 *          500:
 *              description: Internal Server Error - Something went wrong on the server or database
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/DeleteGoalResponse'
 */

router.put('/deletegoal/:id', deletecontroller.deleteGoal)

/**
 * @swagger
 *  components:
 *      schemas:
 *          CreateGoal:
 *              type: object
 *              properties:
 *                  domain_id:
 *                      type: uuid
 *                      description: The ID of the domain associated with the goal
 *                      example: 1
 *                  goal_title:
 *                      type: string
 *                      description: The title of the goal
 *                      example: "Improve Team Performance"
 *                  goal_description:
 *                      type: string
 *                      description: A detailed description of the goal
 *                      example: "This goal aims to enhance team collaboration and productivity."
 *                  hashtag_id:
 *                      type: integer
 *                      description: The ID of the associated hashtag
 *                      example: 2
 *                  start_at:
 *                      type: string
 *                      format: date-time
 *                      description: The start date and time for the goal
 *                      example: "2024-10-01T10:00:00Z"
 *                  end_at:
 *                      type: string
 *                      format: date-time
 *                      description: The end date and time for the goal
 *                      example: "2024-12-01T10:00:00Z"
 *                  status_id:
 *                      type: integer
 *                      description: The ID of the goal status
 *                      example: 1
 *                  goal_created_by:
 *                      type: integer
 *                      description: The ID of the user who created the goal
 *                      example: 1
 *                  created_by:
 *                      type: integer
 *                      description: The ID of the user creating the goal
 *                      example: 1
 *                  is_active:
 *                      type: boolean
 *                      description: Indicates whether the goal is active
 *                      example: true
 *          
 *          GoalUser:
 *              type: object
 *              properties:
 *                  user_id:
 *                      type: integer
 *                      description: The ID of the user associated with the goal
 *                      example: 1
 *                  is_owner:
 *                      type: boolean
 *                      description: Indicates if the user is the owner of the goal
 *                      example: true
 *                  is_assignee:
 *                      type: boolean
 *                      description: Indicates if the user is assigned to the goal
 *                      example: false
 *                  created_by:
 *                      type: integer
 *                      description: The ID of the user who created the goal user entry
 *                      example: 1
 *                  is_active:
 *                      type: boolean
 *                      description: Indicates whether the user-goal association is active
 *                      example: true
 *
 *          GoalPhase:
 *              type: object
 *              properties:
 *                  phase_title:
 *                      type: string
 *                      description: The title of the goal phase
 *                      example: "Phase 1: Research"
 *                  start_at:
 *                      type: string
 *                      format: date-time
 *                      description: The start date and time for the phase
 *                      example: "2024-10-01T10:00:00Z"
 *                  end_at:
 *                      type: string
 *                      format: date-time
 *                      description: The end date and time for the phase
 *                      example: "2024-10-31T10:00:00Z"
 *                  is_active:
 *                      type: boolean
 *                      description: Indicates whether the phase is active
 *                      example: true
 *                  created_by:
 *                      type: integer
 *                      description: The ID of the user who created the phase
 *                      example: 1
 *
 *          PhaseUser:
 *              type: object
 *              properties:
 *                  user_id:
 *                      type: integer
 *                      description: The ID of the user associated with the phase
 *                      example: 1
 *                  is_active:
 *                      type: boolean
 *                      description: Indicates whether the user-phase association is active
 *                      example: true
 *                  created_by:
 *                      type: integer
 *                      description: The ID of the user who created the phase user entry
 *                      example: 1
 *                  is_owner:
 *                      type: boolean
 *                      description: Indicates if the user is the owner of the phase
 *                      example: true
 *                  is_assignee:
 *                      type: boolean
 *                      description: Indicates if the user is assigned to the phase
 *                      example: false
 *
 * /goal/create:
 *   post:
 *     summary: Create a new goal with associated users and phases
 *     description: Creates a new goal and its associated users and phases in a single transaction.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               goal:
 *                 $ref: '#/components/schemas/CreateGoal'
 *               goal_users:
 *                 type: object
 *                 properties:
 *                   users:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/GoalUser'
 *               goal_phases:
 *                 type: object
 *                 properties:
 *                   phases:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/GoalPhase'
 *     responses:
 *       201:
 *         description: Goal created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Goal created successfully"
 *       500:
 *         description: Internal Server Error - Something went wrong during the creation process
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error"
 *                 error:
 *                   type: string
 *                   example: "Database error message here"
 */

router.post('/create', goalcreatecontroller.create_goal)

/**
 * @swagger
 * /goal/deletephase/{id}:
 *   put:
 *     summary: Soft delete a goal phase
 *     description: Soft deletes a goal phase by setting its "deleted_at" field to the current date and time. The goal phase remains in the database but is marked as deleted.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: uuid
 *         required: true
 *         description: The ID of the goal phase to be soft deleted
 *         example: 1
 *     responses:
 *       200:
 *         description: Goal phase successfully soft deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Goal phase with ID 1 was successfully soft deleted."
 *       400:
 *         description: Goal phase not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Goal phase with ID 1 not found."
 *       500:
 *         description: Internal Server Error - An error occurred while attempting to delete the goal phase
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while attempting to delete the goal phase."
 *                 error:
 *                   type: string
 *                   example: "Database error message here"
 */

router.put('/deletephase/:id', deletecontroller.deleteGoalPhase)

/**
 * @swagger
 * /goal/deletephaseuser/{phase_id}/{user_id}:
 *   put:
 *     summary: Soft delete a user from a specific goal phase
 *     description: Soft deletes a user associated with a specific phase by setting the "deleted_at" field for that user in the phase.
 *     parameters:
 *       - in: path
 *         name: phase_id
 *         schema:
 *           type: uuid
 *         required: true
 *         description: The ID of the goal phase
 *         example: 1
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the user to be soft deleted from the goal phase
 *         example: 2
 *     responses:
 *       200:
 *         description: User successfully soft deleted from the goal phase
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User with ID 2 was successfully soft deleted from phase 1."
 *       400:
 *         description: User or goal phase not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User with ID 2 in phase 1 not found."
 *       500:
 *         description: Internal Server Error - An error occurred while attempting to delete the phase user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while attempting to delete the phase user."
 *                 error:
 *                   type: string
 *                   example: "Database error message here"
 */

router.put('/deletephaseuser/:phase_id/:user_id', deletecontroller.deleteGoalPhaseUser)

/**
 * @swagger
 * /goal/deletegoaluser/{goal_id}/{user_id}:
 *   put:
 *     summary: Soft delete a user from a specific goal
 *     description: Soft deletes a user associated with a specific goal by setting the "deleted_at" field for that user in the goal.
 *     parameters:
 *       - in: path
 *         name: goal_id
 *         schema:
 *           type: uuid
 *         required: true
 *         description: The ID of the goal
 *         example: 1
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the user to be soft deleted from the goal
 *         example: 2
 *     responses:
 *       200:
 *         description: User successfully soft deleted from the goal
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User with ID 2 was successfully soft deleted from goal 1."
 *       400:
 *         description: User or goal not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User with ID 2 in goal 1 not found."
 *       500:
 *         description: Internal Server Error - An error occurred while attempting to delete the goal user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while attempting to delete the goal user."
 *                 error:
 *                   type: string
 *                   example: "Database error message here"
 */

router.put('/deletegoaluser/:goal_id/:user_id', deletecontroller.deleteGoalUser)


module.exports = router